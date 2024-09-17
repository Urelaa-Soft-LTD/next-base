import ShareButton from "@/app/_shared/components/buttons/ShareButton";
import RichTextDescription from "@/app/_shared/components/texts/RichtextDescription";
import CommentSection from "../comment-section/CommentSection";
import PopularBlogs from "../popular-blogs/PopularBlogs";

export default function BlogDetailsSecond({ data }) {
	const {
		slug,
		title,
		content,
		blogsStaticPageOthers,
		ourBlogsData,
		blogCommentList,
	} = data || {};

	return (
		<section
			aria-label={`${title} page details content second section`}
			className="bg-primary-bright-50"
		>
			<div className="container px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[40px] xl:py-20 2xl:py-[40px] 3xl:py-24">
				<div className="flex flex-col xl:flex-row items-start gap-y-14">
					<div className="basis-9/12 space-y-10">
						<RichTextDescription description={content} />
						<div>
							<p className="py-4 font-semibold">
								Share this post now !
							</p>
							<ShareButton
								shareUrl={`https://urelaa.com/blogs/${slug}`}
								title={title}
							/>
						</div>
						<CommentSection
							data={{ pageName: title, slug, blogCommentList }}
						/>
					</div>
					<div className="hidden xl:block border-l border-neutral-dark-500/20 h-screen ml-10 mr-5 sticky top-28"></div>
					<div className="basis-3/12 sticky top-28">
						<PopularBlogs
							data={{
								pageName: "blog-details",
								blogsStaticPageOthers,
								ourBlogsData,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
