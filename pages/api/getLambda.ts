// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../utils/redis";

type Data = {
	id?: string;
	greetings?: string;
	timeToFetch?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const greetings = await redis.hvals("greeting");
	console.log(greetings);

	res.status(200).json({
		id: greetings[0].id,
		greetings: greetings[0].greetings + " " + "from lambda",
	});
}
