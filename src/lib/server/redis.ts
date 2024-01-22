import { building } from "$app/environment";
import { createClient } from "redis";
import { env } from "$env/dynamic/private";

const redis = createClient({
	url: env.REDIS_URL
});

redis.on("error", (err) => {
	console.error(err);
});

// if vite build, dont use redis
if(!building) {
	await redis.connect();
}

export default redis;