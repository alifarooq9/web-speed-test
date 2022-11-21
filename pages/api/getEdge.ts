import type { NextRequest } from "next/server";
import redis from "../../utils/redis";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
	const greetings = await redis.hvals("greeting");
	console.log(greetings);

	return new Response(
		JSON.stringify({
			// id: JSON.parse(greetings[0]).id,
			// greetings: JSON.parse(greetings[0]).greetings + " " + "from edge",
			id: "hello",
		}),
		{
			status: 200,
			headers: {
				"content-type": "application/json",
			},
		}
	);
}
