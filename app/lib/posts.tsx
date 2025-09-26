import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function getPost() {
  const post = await redis.get("post");
}
