import CardsGridContainer from "@/app/_shared/components/cards/CardsGridContainer";
import Title from "@/app/_shared/components/texts/Title";

export default function PopularBlogs({ data }) {
	const { pageName, blogsStaticPageOthers, ourBlogsData } = data || {};

	const { blogDetailsPagePopularBlogsSectionTitle } =
		blogsStaticPageOthers || {};

	return (
		<aside aria-label={`${pageName} popular blogs section`}>
			<div className="space-y-4 sm:max-xl:space-y-8 xl:space-y-6">
				{/* title */}
				<Title
					title={blogDetailsPagePopularBlogsSectionTitle}
					extraClassNames="text-2xl sm:max-xl:text-3xl text-neutral-dark-900"
				/>

				{/* popular blog cards */}
				<CardsGridContainer
					data={{
						dataTitle: "popular-blogs",
						information: ourBlogsData.filter(
							(blog) => blog.popular
						),
					}}
				/>
			</div>
		</aside>
	);
}
