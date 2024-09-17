import { GET_FAQ_URL } from "../lib/constants";

export async function getFAQData() {
	const res = await fetch(`${GET_FAQ_URL}?size=100`, { cache: "no-store" });
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
