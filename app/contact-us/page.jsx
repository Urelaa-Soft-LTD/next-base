import dynamic from "next/dynamic";
import { IMAGE_URL } from "../_shared/lib/constants";
import { getCompaniesData } from "../_shared/service/companies";
import { getFAQData } from "../_shared/service/faqs";
import {
	getSiteConfigData,
	getStaticPagesData,
} from "../_shared/service/static-service";
import { getTestimonialData } from "../_shared/service/testimonial";
const ContactDetailsForm = dynamic(() =>
	import("../_shared/sections/contact-details-form/ContactDetailsForm")
);
const FAQ = dynamic(() => import("../_shared/sections/faq/FAQ"));
const Testimonial = dynamic(() =>
	import("../_shared/sections/testimonial/Testimonial")
);
const TrustedCompanies = dynamic(() =>
	import("../_shared/sections/trusted-companies/TrustedCompanies")
);

export async function generateMetadata() {
	const queryString = "contact-us";
	const contactStaticPageData = await getStaticPagesData(queryString);
	const { metaTitle, metaDescription, ogImage } = contactStaticPageData || {};

	return {
		title: metaTitle,
		description: metaDescription,
		openGraph: {
			images: `${IMAGE_URL}/${ogImage}`,
		},
	};
}

export default async function Contact() {
	const queryString = "contact-us";
	const contactStaticPageDataPromise = getStaticPagesData(queryString);
	const siteConfigDataPromise = getSiteConfigData();
	const companiesDataPromise = getCompaniesData();
	const faqDataPromise = getFAQData();
	const testimonialsDataPromise = getTestimonialData();

	const [
		contactStaticPageData,
		siteConfigData,
		companiesData,
		faqData,
		testimonialsData,
	] = await Promise.all([
		contactStaticPageDataPromise,
		siteConfigDataPromise,
		companiesDataPromise,
		faqDataPromise,
		testimonialsDataPromise,
	]);

	const {
		slug = "contact-us",
		pageName,
		others: contactDetailsOthers,
		schema,
	} = contactStaticPageData || {};

	const { phoneNo, email, address } = siteConfigData?.content[0] || {};
	const { content: trustedCompanies, totalElements } = companiesData || {};
	const { content: ourFAQData } = faqData || {};
	const { content: ourTestimonialData } = testimonialsData || {};

	// contact information
	const contactInformation = [
		{
			title: "Email Us",
			type: "email",
			info: email ? email : "Email not specified",
		},
		{
			title: "Call Us",
			type: "phone",
			info: phoneNo ? phoneNo : "Phone No. not specified",
		},
		{
			title: "Address",
			type: "address",
			info: address ? address : "Address not specified",
		},
	];

	return (
		<section>
			{schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: schema }}
				/>
			)}
			<ContactDetailsForm
				data={{
					pageName,
					contactInformation,
					contactDetailsOthers,
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
				}}
			/>
			<FAQ
				data={{
					pageName,
					ourFAQData,
				}}
			/>
		</section>
	);
}
