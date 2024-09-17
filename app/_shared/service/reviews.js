import { GET_ALL_REVIEWS_URL } from "../lib/constants";

export async function getAllReviews({ page = "", size = "" }) {
	const fullURL = `${GET_ALL_REVIEWS_URL}?page=${page}&size=${size}`;

	const res = await fetch(fullURL, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
