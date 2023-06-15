import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
    addId:process.env.PUSHER.APP_ID!,
    key:
})