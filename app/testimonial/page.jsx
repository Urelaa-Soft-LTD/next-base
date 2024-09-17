import dynamic from "next/dynamic";
import { IMAGE_URL } from "../_shared/lib/constants";
import { getStaticPagesData } from "../_shared/service/static-service";
import { getTestimonialData } from "../_shared/service/testimonial";
const Testimonial = dynamic(() =>
	import("../_shared/sections/testimonial/Testimonial")
);

export async function generateMetadata() {
	const queryString = "testimonial";
	const testimonialStaticPageData = await getStaticPagesData(queryString);

	const { metaTitle, metaDescription, ogImage } =
		testimonialStaticPageData || {};

	return {
		title: metaTitle,
		description: metaDescription,
		openGraph: {
			images: `${IMAGE_URL}/${ogImage}`,
		},
	};
}

export default async function TestimonialsPage() {
	const queryString = "testimonial";
	const testimonialStaticPageDataPromise = getStaticPagesData(queryString);
	const testimonialsDataPromise = getTestimonialData();

	const [testimonialStaticPageData, testimonialsData] = await Promise.all([
		testimonialStaticPageDataPromise,
		testimonialsDataPromise,
	]);

	const {
		pageName,
		others: testimonialOthers,
		schema,
	} = testimonialStaticPageData || {};

	const { content: ourTestimonialData } = testimonialsData || {};

	return (
		<section>
			{schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: schema }}
				/>
			)}
			<Testimonial
				data={{
					pageName,
					ourTestimonialData,
					testimonialOthers,
				}}
			/>
		</section>
	);
}
