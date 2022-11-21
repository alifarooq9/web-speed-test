"use client";

import { useState } from "react";

export default function Home() {
	const [timeToFetchLambda, setTimeToFetchLambda] = useState<number>(0);
	const [fetchingLambda, setFetchLambda] = useState<boolean>(false);
	const getLambda = async () => {
		setFetchLambda(true);
		const startTime = new Date();
		await fetch("/api/getLambda").then((res) => res.json());
		const endTime = new Date();
		setTimeToFetchLambda(endTime.getTime() - startTime.getTime());
		setFetchLambda(false);
	};

	return (
		<div>
			<main>
				<div>
					<h6>Time to fetch in lambda</h6>
					<button disabled={fetchingLambda} onClick={getLambda}>
						{fetchingLambda ? "fetching..." : "Request Data"}
					</button>
					<p>Time took to fetch {timeToFetchLambda.toString()}</p>
				</div>
			</main>
		</div>
	);
}
