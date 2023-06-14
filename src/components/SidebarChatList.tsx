import { FC } from 'react';

interface SidearChatListProps {
  friends: User[]
};

const SidearChatList: FC<SidearChatListProps> = ({ friends }) => {
  return <ul role="list"
    className="
    max-h-[25rem]
    overflow-y-auto
    -mx-2
    space-y-1
    ">
    {/* {friends.sort().map((friend)=>{

    })} */}
  </ul>
};

export default SidearChatList;