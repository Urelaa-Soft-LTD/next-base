import dynamic from "next/dynamic";
import { IMAGE_URL } from "../_shared/lib/constants";
import { getStaticPagesData } from "../_shared/service/static-service";
const RichTextDescription = dynamic(() =>
	import("../_shared/components/texts/RichtextDescription")
);
const AboutUsContent = dynamic(() => import("./sections/AboutUsContent"));

export async function generateMetadata() {
	const queryString = "about-us";
	const aboutUsStaticPageData = await getStaticPagesData(queryString);

	const { metaTitle, metaDescription, ogImage } = aboutUsStaticPageData || {};

	return {
		title: metaTitle,
		description: metaDescription,
		openGraph: {
			images: `${IMAGE_URL}/${ogImage}`,
		},
	};
}

export default async function AboutUsPage() {
	const queryString = "about-us";
	const aboutUsStaticPageData = await getStaticPagesData(queryString);

	const { title, description, caption, image, pageName, content, schema } =
		aboutUsStaticPageData || {};

	return (
		<section>
			{schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: schema }}
				/>
			)}
			<AboutUsContent
				data={{ title, description, caption, image, pageName }}
			/>
			<section
				aria-label={`${pageName} page dynamic content section`}
				className="bg-primary-bright-50"
			>
				<div className="container px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[40px] xl:py-20 2xl:py-[40px] 3xl:py-24">
					<RichTextDescription description={content} />
				</div>
			</section>
		</section>
	);
}
