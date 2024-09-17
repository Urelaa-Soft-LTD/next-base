import dynamic from "next/dynamic";
import { GET_HOME_PAGE_DATA } from "../_shared/lib/constants";
import { serverSideApi } from "../_shared/service/api";
import { getMetaData, getSchema } from "../_shared/utils/seoHandler";
const Blogs = dynamic(() => import("../_shared/sections/blogs/Blogs"));
const Hero = dynamic(() => import("../_shared/sections/hero/Hero"));
const TrustedCompanies = dynamic(() =>
	import("../_shared/sections/trusted-companies/TrustedCompanies")
);
const Testimonial = dynamic(() =>
	import("../_shared/sections/testimonial/Testimonial")
);
const CallToAction = dynamic(() =>
	import("../_shared/sections/call-to-action/CallToAction")
);
const FAQ = dynamic(() => import("../_shared/sections/faq/FAQ"));

export async function generateMetadata() {
	return getMetaData("home");
}

export default async function RootPage() {
	const homepageData = await serverSideApi(GET_HOME_PAGE_DATA);

	const {
		homeStaticPageData,
		companiesData,
		faqData,
		bannerData,
		testimonialsData,
		blogsData,
	} = homepageData || {};

	const {
		slug = "home",
		pageName,
		schema: homepageSchema,
		others: {
			faqSectionSchema,
			faqSectionTitle,
			ourBlogsSectionTitle,
			ourBlogsSectionCaption,
			callToActionSectionTitle,
			callToActionSectionCaption,
			ourTestimonialSectionTitle,
		},
	} = homeStaticPageData?.content || {};

	const { content: trustedCompanies, totalElements } = companiesData || {};
	const { content: ourFAQData } = faqData || {};
	const ourBannerData = bannerData.content[0] || {};
	const { content: ourTestimonialData } = testimonialsData || {};
	const { content: ourBlogsData } = blogsData || {};

	return (
		<section>
			{getSchema(homepageSchema)}
			<Hero
				data={{
					pageName,
					ourBannerData,
				}}
			/>
			<TrustedCompanies
				data={{
					pageName,
					trustedCompanies,
					totalElements,
				}}
			/>

			<Testimonial
				data={{
					pageName,
					ourTestimonialData,
					testimonialOthers: {
						ourTestimonialSectionTitle,
					},
				}}
				firstSection={false}
			/>
			<Blogs
				data={{
					pageName,
					ourBlogsData,
					others: {
						blogsPageSectionTitle: ourBlogsSectionTitle,
						blogsPageSectionCaption: ourBlogsSectionCaption,
					},
				}}
				firstSection={false}
			/>
			<FAQ
				data={{
					pageName,
					ourFAQData,
					faqOthers: {
						faqSectionTitle,
					},
					faqSectionSchema,
				}}
				firstSection={false}
			/>
			<CallToAction
				data={{
					pageName,
					callToActionSectionTitle,
					callToActionSectionCaption,
				}}
			/>
		</section>
	);
}
