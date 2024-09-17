import { GET_STATIC_PAGES_URL, IMAGE_URL } from "../lib/constants";
import { serverSideApi } from "../service/api";

export const getMetaData = async (page) => {
	const staticPageData = await serverSideApi(
		`${GET_STATIC_PAGES_URL}?slug=${page}`
	);
	const { metaTitle, metaDescription, ogImage } = staticPageData || {};

	return {
		title: metaTitle,
		description: metaDescription,
		openGraph: {
			images: `${IMAGE_URL}/${ogImage}`,
		},
	};
};

export const getSchema = (schema) => {
	return (
		schema && (
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: schema }}
			/>
		)
	);
};
