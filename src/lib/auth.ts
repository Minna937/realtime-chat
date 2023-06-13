import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";
import { fetchRedis } from "@/helpers/redis";

function getGoogleCredentials() {
    const googleClientId = process.env.GOOGLE_CLIENT_ID
    const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (!googleClientId || googleClientId?.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_ID')
    }
    if (!googleClientSecret || googleClientSecret?.length === 0) {
        throw new Error('Missing GOOGLE_CLIENT_SECREC')
    }

    return { googleClientId, googleClientSecret }
};

function getGithubCredentials() {
    const clientId = process.env.GITHUB_ID
    const clientSecret = process.env.GITHUB_SECRET

    if (!clientId || clientId?.length === 0) {
        throw new Error('Missing GITHUB_ID')
    }
    if (!clientSecret || clientSecret?.length === 0) {
        throw new Error('Missing GITHUB_Secret')
    }

    return { clientId, clientSecret }
};


export const authOptions: NextAuthOptions = {
    adapter: UpstashRedisAdapter(db),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().googleClientId,
            clientSecret: getGoogleCredentials().googleClientSecret
        }),
        GithubProvider({
            clientId: getGithubCredentials().clientId,
            clientSecret: getGithubCredentials().clientSecret
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            const dbUserResult = (await fetchRedis("get", `user:${token.id}`)) as string | null;

            if (!dbUserResult) {
                token.id = user!.id;
                return token;
            }

            const dbUser = JSON.parse(dbUserResult) as User;
            
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
            } //return a JWT value storing the sesson token for the user
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }
            return session
        },
        redirect() {
            return '/dashboard'
        }
    }
}
