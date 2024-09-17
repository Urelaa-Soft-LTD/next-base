import { GET_WHY_CHOOSE_US_URL } from "../lib/constants";

export async function getChoosingReasonsData() {
	const res = await fetch(GET_WHY_CHOOSE_US_URL, { cache: "no-store" });
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
