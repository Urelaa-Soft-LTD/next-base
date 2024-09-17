import { GET_TEAM_MEMBER_URL } from "../lib/constants";

export async function getTeamMembersData() {
	const res = await fetch(`${GET_TEAM_MEMBER_URL}?size=100`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
