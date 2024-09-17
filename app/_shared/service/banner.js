import { GET_ALL_BANNERS } from "../lib/constants";

export async function getAllBanners() {
	const res = await fetch(GET_ALL_BANNERS, { cache: "no-store" });
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
