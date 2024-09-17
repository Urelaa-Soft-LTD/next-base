import { GET_INDIVIDUAL_SERVICES_URL, GET_JOBS_URL } from "../lib/constants";

export async function getJobsData() {
	const res = await fetch(`${GET_JOBS_URL}?size=100`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export async function getIndividualServiceData(slug) {
	const url = `${GET_INDIVIDUAL_SERVICES_URL}?slug=${slug}`;
	const res = await fetch(url, { cache: "no-store" });
	if (!res.ok) {
		return undefined;
	}
	return res.json();
}
