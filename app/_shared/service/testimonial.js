import { GET_TESTIMONIALS_URL } from "../lib/constants";

export async function getTestimonialData() {
	const res = await fetch(`${GET_TESTIMONIALS_URL}?size=100`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
