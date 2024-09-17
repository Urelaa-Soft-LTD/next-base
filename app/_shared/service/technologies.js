import { GET_TECHNOLOGIES_URL } from "../lib/constants";

export async function getTechnologiesData() {
	const res = await fetch(`${GET_TECHNOLOGIES_URL}?size=100`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
