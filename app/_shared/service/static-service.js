import { GET_HOME_PAGE_DATA, GET_SITE_CONFIG_URL, GET_STATIC_PAGES_URL } from "../lib/constants";

export async function getSiteConfigData() {
	const res = await fetch(GET_SITE_CONFIG_URL, { cache: "no-store" });
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export async function getStaticPagesData(queryString = "") {
	const fullURL = `${GET_STATIC_PAGES_URL}?slug=${queryString}`;
	const res = await fetch(fullURL, { cache: "no-store" });
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export async function getHomepageData() {
	const fullURL = GET_HOME_PAGE_DATA;
	const res = await fetch(fullURL, { cache: "no-store" });
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
