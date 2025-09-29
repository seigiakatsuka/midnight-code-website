import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function getPost() {
  const post = await redis.get("post");
  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </>
  );
}
