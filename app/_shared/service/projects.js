import { GET_INDIVIDUAL_PROJECT_URL, GET_PROJECTS_URL } from "../lib/constants";

export async function getProjectsData(size = 100) {
	const res = await fetch(`${GET_PROJECTS_URL}?size=${size}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export async function getIndividualProjectData(slug) {
	const url = `${GET_INDIVIDUAL_PROJECT_URL}?slug=${slug}`;
	const res = await fetch(url, { cache: "no-store" });
	if (!res.ok) {
		return undefined;
	}
	return res.json();
}
