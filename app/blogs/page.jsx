import dynamic from "next/dynamic";
import { IMAGE_URL } from "../_shared/lib/constants";
import { getBlogsData } from "../_shared/service/blog";
import { getStaticPagesData } from "../_shared/service/static-service";
const Blogs = dynamic(() => import("../_shared/sections/blogs/Blogs"));
const CallToAction = dynamic(() =>
	import("../_shared/sections/call-to-action/CallToAction")
);

export async function generateMetadata() {
	const queryString = "blogs";
	const blogsStaticPageData = await getStaticPagesData(queryString);
	const { metaTitle, metaDescription, ogImage } = blogsStaticPageData || {};

	return {
		title: metaTitle,
		description: metaDescription,
		openGraph: {
			images: `${IMAGE_URL}/${ogImage}`,
		},
	};
}

export default async function BlogsPage() {
	const queryString = "blogs";
	const blogsStaticPageDataPromise = getStaticPagesData(queryString);
	const blogsDataPromise = getBlogsData();

	const [blogsStaticPageData, blogsData] = await Promise.all([
		blogsStaticPageDataPromise,
		blogsDataPromise,
	]);

	const {
		slug = "blogs",
		pageName,
		others,
		schema,
	} = blogsStaticPageData || {};

	const { content: ourBlogsData } = blogsData || {};

	return (
		<section>
			{schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: schema }}
				/>
			)}
			<Blogs
				data={{
					pageName,
					ourBlogsData,
					others,
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
