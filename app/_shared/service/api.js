export async function serverSideApi(url, params) {
	const { method = "GET", body, cache = "no-store" } = params ?? {};
	const res = await fetch(
		url,
		{
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: body && JSON.stringify(body),
		},
		{ cache }
	);
	if (!res.ok) {
		throw new Error("Operation failed !");
	}
	return res.json();
}
