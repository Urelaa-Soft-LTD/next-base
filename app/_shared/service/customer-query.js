import { POST_CUSTOMER_FEEDBACK_URL } from "../lib/constants";

export default async function postCustomerQueryData(data) {
	const res = await fetch(POST_CUSTOMER_FEEDBACK_URL, {
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
