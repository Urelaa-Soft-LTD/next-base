import { IMAGE_URL } from "@/app/_shared/lib/constants";
import {
	getBlogsData,
	getIndividualBlogCommentData,
	getIndividualBlogData,
} from "@/app/_shared/service/blog";
import {
	getSiteConfigData,
	getStaticPagesData,
} from "@/app/_shared/service/static-service";
import dynamic from "next/dynamic";
const ContactDetailsForm = dynamic(() =>
	import("@/app/_shared/sections/contact-details-form/ContactDetailsForm")
);
const BlogDetailsFirst = dynamic(() =>
	import("./sections/details-first/BlogDetailsFirst")
);
const BlogDetailsSecond = dynamic(() =>
	import("./sections/details-second/BlogDetailsSecond")
);

export async function generateMetadata({ params }) {
	const { slug } = params;
	const individualBlogData = await getIndividualBlogData(slug);
	const { metaTitle, metaDescription, ogImage, thumbnailImage } =
		individualBlogData || {};

	return {
		title: metaTitle,
		description: metaDescription,
		openGraph: {
			images: `${IMAGE_URL}/${ogImage ?? thumbnailImage}`,
		},
	};
}

export default async function BlogDetailsPage({ params }) {
	const { slug } = params;
	const individualBlogDataPromise = getIndividualBlogData(slug);

	const blogsQueryString = "blogs";
	const blogsStaticPageDataPromise = getStaticPagesData(blogsQueryString);

	const contactUsQueryString = "contact-us";
	const contactStaticPageDataPromise =
		getStaticPagesData(contactUsQueryString);

	const siteConfigDataPromise = getSiteConfigData();
	const blogsDataPromise = getBlogsData();
	const blogCommentListPromise = getIndividualBlogCommentData(slug);

	const [
		siteConfigData,
		blogsStaticPageData,
		contactStaticPageData,
		individualBlogData,
		blogCommentList,
		blogsData,
	] = await Promise.all([
		siteConfigDataPromise,
		blogsStaticPageDataPromise,
		contactStaticPageDataPromise,
		individualBlogDataPromise,
		blogCommentListPromise,
		blogsDataPromise,
	]);

	const { thumbnailImage, title, updatedAt, content, tags, schema } =
		individualBlogData || {};
	const { others: blogsStaticPageOthers } = blogsStaticPageData || {};
	const { content: ourBlogsData } = blogsData || {};
	const { phoneNo, email, address } = siteConfigData?.content[0] || {};
	const { others: contactDetailsOthers } = contactStaticPageData || {};

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
			<BlogDetailsFirst data={{ thumbnailImage, title, updatedAt, slug }} />
			<BlogDetailsSecond
				data={{
					slug,
					title,
					content,
					blogsStaticPageOthers,
					ourBlogsData,
					blogCommentList,
				}}
			/>
			<ContactDetailsForm
				data={{
					pageName: title,
					contactInformation,
					contactDetailsOthers,
				}}
				firstSection={false}
			/>
		</section>
	);
}
