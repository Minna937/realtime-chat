"use client";

import { FC, useState } from 'react';

interface FriendRequestsProps {
  
};

const FriendRequests: FC<FriendRequestsProps> = ({}) => {
    const [friendRequests,setFriendRequests] = useState<IncomingFriendRequests[]>(
        incomingFriendRequests
    );
  return <div>FriendRequests</div>
};

export default FriendRequests;