import { GET_PROCESSES_URL } from "../lib/constants";

export async function getProcessesData() {
	const res = await fetch(`${GET_PROCESSES_URL}?size=100`, { cache: "no-store" });
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
