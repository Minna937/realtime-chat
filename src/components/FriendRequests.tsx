"use client";

import { Check, UserPlus, X } from "lucide-react";
import { FC, useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from "next/navigation";
import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

interface FriendRequestsProps {
    incomingFriendRequests: IncomingFriendRequest[]
    sessionId: string
};

const FriendRequests: FC<FriendRequestsProps> = ({
    incomingFriendRequests,
    sessionId
}) => {
    const router = useRouter();

    const [friendRequests, setFriendRequests] = useState<IncomingFriendRequest[]>(
        incomingFriendRequests
    );

    useEffect(() => {
        pusherClient.subscribe(
            toPusherKey(`user:${sessionId}:incoming_friend_requests`)
        );

        const friendRequestHandler = () => { };
        pusherClient.bind("incoming_friend_requests", friendRequestHandler);

        console.log("new friend request")
        return () => {
            pusherClient.unsubscribe(
                toPusherKey(`user:${sessionId}:incoming_friend_requests`)
            );
            pusherClient.unbind("incoming_friend_requests", friendRequestHandler);
         }
    }, []);

    const acceptFriend = async (senderId: string) => {
        await axios.post('/api/friends/accept', { id: senderId });
        setFriendRequests((prev) => prev.filter((req) => req.senderId !== senderId));
        router.refresh();
    };


    const denyFriend = async (senderId: string) => {
        await axios.post('/api/friends/deny', { id: senderId });
        setFriendRequests((prev) => prev.filter((req) => req.senderId !== senderId));
        router.refresh();
    };

    return (
        <>
            {friendRequests.length === 0 ? (
                <p className="text-sm text-zinc-500">
                    Nothing to show here...
                </p>
            ) : (
                friendRequests.map((request) => (
                    <div
                        key={request.senderId}
                        className="flex gap-4 items-center">

                        <UserPlus className="text-black" />
                        <p className="font-medium text-lg -ml-2">
                            {request.senderEmail}
                        </p>
                        <button
                            onClick={() => acceptFriend(request.senderId)}
                            aria-label="accept friend"
                            className="
                    w-8 
                    h-8 
                    ml-4
                    bg-indigo-600
                    hover:bg-indigo-700
                    grid
                    place-items-center
                    rounded-full
                    transition
                    hover:shadow-md
                    ">
                            <Check className="font-semibold text-white w-3/4 h-3/4" />
                        </button>

                        <button
                            onClick={() => denyFriend(request.senderId)}
                            aria-label="deny friend"
                            className="
                    w-8 
                    h-8 
                    bg-red-600
                    hover:bg-red-700
                    grid
                    place-items-center
                    rounded-full
                    transition
                    hover:shadow-md
                    ">
                            <X className="font-semibold text-white w-3/4 h-3/4" />
                        </button>

                    </div>
                ))
            )}
        </>
    )
};

export default FriendRequests;