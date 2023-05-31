import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";

function getGoogleCredentials() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (!clientId || clientId?.length === 0) {
        throw new Error('Missing Google_CLIENT_ID')
    }
    if (!clientSecret || clientSecret?.length === 0) {
        throw new Error('Missing Google_CLIENT_Secret')
    }

    return { clientId, clientSecret }
};

function getGithubCredentials() {
    const clientId = process.env.GITHUB_ID
    const clientSecret = process.env.GITHUB_SECRET

    if (!clientId || clientId?.length === 0) {
        throw new Error('Missing Github_ID')
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
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret
        }),
        GithubProvider({
            clientId: getGithubCredentials().clientId,
            clientSecret: getGithubCredentials().clientSecret
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            const dbUser = (await db.get(`user:${token.id}`)) as User | null;

            if (!dbUser) {
                token.id = user!.id;
                return token;
            }

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
