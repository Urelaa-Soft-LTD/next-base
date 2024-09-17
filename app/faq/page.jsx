import dynamic from "next/dynamic";
import { IMAGE_URL } from "../_shared/lib/constants";
import { getFAQData } from "../_shared/service/faqs";
import { getStaticPagesData } from "../_shared/service/static-service";
const CallToAction = dynamic(() =>
	import("../_shared/sections/call-to-action/CallToAction")
);
const FAQ = dynamic(() => import("../_shared/sections/faq/FAQ"));

export async function generateMetadata() {
	const queryString = "faq";
	const faqStaticPageData = await getStaticPagesData(queryString);

	const { metaTitle, metaDescription, ogImage } = faqStaticPageData || {};

	return {
		title: metaTitle,
		description: metaDescription,
		openGraph: {
			images: `${IMAGE_URL}/${ogImage}`,
		},
	};
}
export default async function FAQPage() {
	const queryString = "faq";
	const faqStaticPageDataPromise = getStaticPagesData(queryString);
	const faqDataPromise = getFAQData();

	const [faqStaticPageData, faqData] = await Promise.all([
		faqStaticPageDataPromise,
		faqDataPromise,
	]);

	const { pageName, others: faqOthers, schema } = faqStaticPageData || {};
	const { content: ourFAQData } = faqData || {};

	return (
		<section>
			{schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: schema }}
				/>
			)}
			<FAQ
				data={{
					pageName,
					ourFAQData,
					faqOthers,
				}}
			/>
			<CallToAction
				data={{
					pageName,
				}}
			/>
		</section>
	);
}
