import { ImageResponse } from "next/og";
import { IMAGE_URL } from "./_shared/lib/constants";
import { getSiteConfigData } from "./_shared/service/static-service";

// Image metadata
export const size = {
	width: 32,
	height: 32,
};

export const contentType = "image/png";

// Image generation
export default async function Icon() {
	const siteConfigData = await getSiteConfigData();
	const { favicon } = siteConfigData.content[0] || {};

	return new ImageResponse(
		(
			<img
				src={`${IMAGE_URL}/${favicon}`}
				alt="U"
				width="100%"
				height="100%"
			/>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported icons size metadata
			// config to also set the ImageResponse's width and height.
			...size,
		}
	);
}
