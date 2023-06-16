import { Redis } from '@upstash/redis'

export const db = new Redis({
    url: <string> process.env.UPSTASH_REDIS_REST_URL,
    token: <string> process.env.UPSTASH_REDIS_REST_TOKEN
})