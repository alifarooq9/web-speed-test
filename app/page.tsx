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

	const [timeToFetchEdge, setTimeToFetchEdge] = useState<number>(0);
	const [fetchingEdge, setFetchEdge] = useState<boolean>(false);
	const getEdge = async () => {
		setFetchEdge(true);
		const startTime = new Date();
		await fetch("/api/getEdge").then((res) => res.json());
		const endTime = new Date();
		setTimeToFetchEdge(endTime.getTime() - startTime.getTime());
		setFetchEdge(false);
	};

	return (
		<div>
			<main className="w-screen flex flex-col items-center py-20 space-y-10">
				<div className="flex flex-col items-center space-y-3">
					<h6 className="font-semibold text-2xl">
						Time to fetch in lambda
					</h6>
					<button
						disabled={fetchingLambda}
						onClick={getLambda}
						className="bg-zinc-900 text-zinc-50 px-6 py-2 rounded-xl hover:scale-95 transition-transform duration-200 ease-in-out"
					>
						{fetchingLambda ? "fetching..." : "Request Data"}
					</button>
					<p className="text-lg font-medium">
						Time took to fetch: {timeToFetchLambda.toString()}ms
					</p>
				</div>

				<div className="flex flex-col items-center space-y-3">
					<h6 className="font-semibold text-2xl">
						Time to fetch in edge
					</h6>
					<button
						disabled={fetchingEdge}
						onClick={getEdge}
						className="bg-zinc-900 text-zinc-50 px-6 py-2 rounded-xl hover:scale-95 transition-transform duration-200 ease-in-out"
					>
						{fetchingEdge ? "fetching..." : "Request Data"}
					</button>
					<p className="text-lg font-medium">
						Time took to fetch: {timeToFetchEdge.toString()}ms
					</p>
				</div>
			</main>
		</div>
	);
}
