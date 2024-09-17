import { GET_COMPANIES_URL } from "../lib/constants";

export async function getCompaniesData() {
	const res = await fetch(`${GET_COMPANIES_URL}?size=100`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
