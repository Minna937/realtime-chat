"use client";

import { chatHrefConstructor, toPusherKey } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from 'react';
import Image from "next/image";
import { pusherClient } from "@/lib/pusher";
import { toast } from "react-hot-toast";
import UnseenChatToast from "./UnseenChatToast";

interface SidearChatListProps {
  friends: User[]
  sessionId: string
};

interface ExtendedMessage extends Message {
  senderImg: string
  senderName: string
}

const SidearChatList: FC<SidearChatListProps> = ({ friends, sessionId }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [unseenMessages, setUnseenMessages] = useState<Message[]>([]);

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`user:${sessionId}:chats`));
    pusherClient.subscribe(toPusherKey(`user:${sessionId}:friends`));

    const newFriendHandler = () => {
      router.refresh();
    };

    const chatHandler = (message: ExtendedMessage) => {
      const shouldNotify = pathname !==
        `/dashboard/chat/${chatHrefConstructor(sessionId, message.senderId)}`;

      if (!shouldNotify) return;

      //shoud be notified
      toast.custom((t) =>(
        //custom component
        <UnseenChatToast />
      ))
    };


    pusherClient.bind("new_message", chatHandler);
    pusherClient.bind("new_friend", newFriendHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`user:${sessionId}:chats`));
      pusherClient.unsubscribe(toPusherKey(`user:${sessionId}:friends`));
    };
  });


  useEffect(() => {
    if (pathname?.includes('chat')) {
      setUnseenMessages((prev) => {
        return prev.filter((msg) => !pathname.includes(msg.senderId))
      })
    }
  }, [pathname]);

  return (
    <ul role="list"
      className="
    max-h-[25rem]
    overflow-y-auto
    -mx-2
    space-y-1
    ">
      {friends.sort().map((friend) => {
        const unseenMessagesCount = unseenMessages.filter((unseenMessage) => {
          return unseenMessage.senderId === friend.id
        }).length;

        return <li key={friend.id}>

          <a href={`/dashboard/chat/${chatHrefConstructor(
            sessionId,
            friend.id
          )}`}
            className="
          text-gray-700
          hover:text-indigo-600
          hover:bg-gray-50
          group
          flex
          items-center
          gap-x-3
          rounded-md
          p-2
          text-sm
          leading-6
          font-semibold">
            <div className="relative h-7 w-7 bg-gray-50">
              <Image
                fill
                referrerPolicy="no-referrer"
                className="rounded-full"
                src={friend.image || ""}
                alt="Your profile picture"
              />
            </div>
            {friend.name}
            {unseenMessagesCount > 0 ? (
              <div className="
              bg-indigo-600
              font-medium
              text-xs
              text-white
              w-4
              h-4
              rounded-full
              flex
              justify-center
              items-center
              ">
                {unseenMessagesCount}
              </div>
            ) : null}
          </a>
        </li>
      })}
    </ul>)
};

export default SidearChatList;