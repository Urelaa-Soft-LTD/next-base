import {
	GET_BLOGS_URL,
	GET_COMMENTS_URL,
	GET_INDIVIDUAL_BLOG_URL,
	POST_COMMENT_URL,
} from "../lib/constants";

export async function getBlogsData(size = 100) {
	const res = await fetch(`${GET_BLOGS_URL}?size=${size}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export async function getIndividualBlogData(slug) {
	const url = `${GET_INDIVIDUAL_BLOG_URL}?slug=${slug}`;
	const res = await fetch(url, { cache: "no-store" });
	if (!res.ok) {
		return undefined;
	}
	return res.json();
}

export async function getIndividualBlogCommentData(slug) {
	const url = `${GET_COMMENTS_URL}/${slug}/comments`;
	const res = await fetch(url, { cache: "no-store" });
	if (!res.ok) {
		return undefined;
	}
	return res.json();
}

export default async function postCommentMessageData(data) {
	const res = await fetch(POST_COMMENT_URL, {
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
