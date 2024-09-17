import { IMAGE_URL } from "@/app/_shared/lib/constants";
import { getStaticPagesData } from "@/app/_shared/service/static-service";
import RootPage from "../page";

export async function generateMetadata() {
	const queryString = "home";
	const homeStaticPageData = await getStaticPagesData(queryString);
	const { metaTitle, metaDescription, ogImage } = homeStaticPageData || {};

	return {
		title: metaTitle,
		description: metaDescription,
		openGraph: {
			images: `${IMAGE_URL}/${ogImage}`,
		},
	};
}

export default function HomePage() {
	return <RootPage />;
}
