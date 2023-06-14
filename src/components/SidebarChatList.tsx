"use client";

import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from 'react';

interface SidearChatListProps {
  friends: User[]
};

const SidearChatList: FC<SidearChatListProps> = ({ friends }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [unseenMessages, setUnseenMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (pathname?.includes('chat')) {
      setUnseenMessages((prev) => {
        return prev.filter((msg) => !pathname.includes(msg.senderId))
      })
    }
  }, [pathname])

  return <ul role="list"
    className="
    max-h-[25rem]
    overflow-y-auto
    -mx-2
    space-y-1
    ">
    {friends.sort().map((friend) => {
      return <div></div>
    })}
  </ul>
};

export default SidearChatList;