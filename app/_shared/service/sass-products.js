import {
	GET_SAAS_PRODUCTS_URL,
	GET_INDIVIDUAL_PRODUCT_URL,
} from "../lib/constants";

export async function getSaasProductsData() {
	const res = await fetch(`${GET_SAAS_PRODUCTS_URL}?size=100`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export async function getIndividualProductData(slug) {
	const url = `${GET_INDIVIDUAL_PRODUCT_URL}?slug=${slug}`;
	const res = await fetch(url, { cache: "no-store" });
	if (!res.ok) {
		return undefined;
	}
	return res.json();
}
