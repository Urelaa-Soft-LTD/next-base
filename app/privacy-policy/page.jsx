import RichTextDescription from "../_shared/components/texts/RichtextDescription";
import { IMAGE_URL } from "../_shared/lib/constants";
import { getStaticPagesData } from "../_shared/service/static-service";

export async function generateMetadata() {
	const queryString = "privacy-policy";
	const privacyPolicyStaticPageData = await getStaticPagesData(queryString);

	const { metaTitle, metaDescription, ogImage } =
		privacyPolicyStaticPageData || {};

	return {
		title: metaTitle,
		description: metaDescription,
		openGraph: {
			images: `${IMAGE_URL}/${ogImage}`,
		},
	};
}

export default async function PrivacyPolicyPage() {
	const queryString = "privacy-policy";
	const privacyPolicyStaticPageData = await getStaticPagesData(queryString);

	const { content, pageName, schema } = privacyPolicyStaticPageData || {};

	return (
		<section
			aria-label={`${pageName} page privacy policy section`}
			className="bg-primary-bright-50"
		>
			{schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: schema }}
				/>
			)}
			<div className="container px-4 sm:px-6 pb-10 pt-24 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-[72px] lg:pt-32 xl:pb-20 2xl:pb-[88px] 3xl:pb-24">
				<RichTextDescription description={content} />
			</div>
		</section>
	);
}
