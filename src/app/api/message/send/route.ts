import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
    try {
        const { text, chatId }: { text: string, chatId: string } = await req.json();
        const session = await getServerSession(authOptions);

        if (!session) {
            return new Response("Unauthorized", { status: 401 });
        };

        const [userId1, userId2] = chatId.split("--");

        if (session.user.id !== userId1 && session.user.id !== userId2) {
            return new Response("Unauthorized", { status: 401 });
        };

        const friendId = session.user.id === userId1 ? userId2 : userId1;
        const friendList = await fetchRedis("smembers", `user:${session.user.id}:friends`) as string[];
        const isFriend = friendList.includes(friendId);

        if (!isFriend) {
            return new Response("Unauthorized", { status: 401 });
        };

        const rawsender = await fetchRedis("get", `user:${session.user.id}`) as string;
        const sender = JSON.parse(rawsender) as User;
        
    } catch (error) {

    }
}