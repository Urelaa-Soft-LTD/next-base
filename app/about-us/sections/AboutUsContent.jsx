import ImageComponent from "../components/ImageComponent";
import TitleDescription from "../components/TitleDescription";

export default function AboutUsContent({ data }) {
	const { title, description, caption, image, pageName } = data || {};

	return (
		<section
			aria-label={`${pageName} page about us first section`}
			className="relative bg-primary-dark"
		>
			<div className="absolute inset-0 bg-half-ellipse-custom-gradient opacity-30"></div>
			<div className="container px-4 sm:px-6 pb-10 pt-24 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-[72px] lg:pt-32 xl:pb-20 2xl:pb-[88px] 3xl:pb-24">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 3xl:gap-24">
					<TitleDescription title={title} description={description} />

					<ImageComponent data={{ title, image }} />
				</div>
			</div>
		</section>
	);
}
