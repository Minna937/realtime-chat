import { chatHrefConstructor, cn } from "@/lib/utils";
import { FC } from 'react';
import { Toast,toast } from "react-hot-toast";

interface UnseenChatToastProps {
    t: Toast
    sessionId: string
    senderId: string
};

const UnseenChatToast: FC<UnseenChatToastProps> = ({
    t,
    sessionId,
    senderId
}) => {
    return <div className={cn(
        "max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5",
        {
            "animate-enter": t.visible,
            "animate-leave": !t.visible
        })}>
        <a onClick={() => toast.dismiss(t.id)}
            href={`/dashboard/chat/${chatHrefConstructor(sessionId, senderId)}`}>

        </a>
        UnseenChatToast</div >
};

export default UnseenChatToast;