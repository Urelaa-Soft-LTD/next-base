import { POST_CONTACT_URL } from "../lib/constants";

export default async function postContactMessageData(data) {
	const res = await fetch(POST_CONTACT_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	if (!res.ok) {
		throw new Error("Failed to post data");
	}
	return res.json();
}
