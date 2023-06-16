import Button from "@/components/ui/Button";
import { getFriendsByUserId } from "@/helpers/get-friends-by-user-id";
import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { chatHrefConstructor } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const page = async ({ }) => {
  const session = await getServerSession(authOptions);
  if (!session) notFound();

  const friends = await getFriendsByUserId(session.user.id);

  const friendsWithLastMessage = await Promise.all(
    friends.map(async (friend) => {
      const [lastMessage] = await fetchRedis("zrange",
        `chat:${chatHrefConstructor(session.user.id, friend.id)}:messages`, 
        -1, 
        -1
        ) as Message[];
    })
  );

  return <pre>Dashboard</pre>
    ;
}

export default page;