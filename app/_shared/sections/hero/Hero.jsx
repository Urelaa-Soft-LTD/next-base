import heroVectorImage from "@/public/hero-vector-bg.webp";
import ImageComponent from "./components/ImageComponent";
import TitleDescriptionCaptionButtons from "./components/TitleDescriptionCaptionButtons";

export default function Hero({ data, homePage = true }) {
	const { pageName, ourBannerData } = data || {};

	const { title, caption, image } = ourBannerData || {};

	return (
		<section
			aria-label={`${pageName} page hero section`}
			className="relative bg-primary-dark w-full lg:pt-[47%]"
		>
			{/* gradient bg */}
			<div className="absolute left-0 -bottom-[550px] w-full h-[1200px] bg-half-ellipse-custom-gradient opacity-30"></div>

			{/* custom vector bg image */}
			{homePage === true && (
				// <Image
				// 	src={heroVectorImage}
				// 	alt="hero vector image"
				// 	className="absolute bottom-0 h-full object-cover lg:object-contain object-bottom"
				// />
				<div
					style={{
						position: "absolute",
						inset: "0px",
						backgroundImage: `url(${heroVectorImage.src})`,
						backgroundPosition: "bottom",
						backgroundRepeat: "no-repeat",
					}}
					className="bg-cover lg:bg-contain"
				></div>
			)}

			{/* main content */}
			<div className="max-lg:pt-32 max-lg:relative lg:absolute lg:top-28 lg:left-0 lg:right-0 lg:bottom-0 lg:flex lg:items-center">
				<div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20">
					<div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-12 xl:gap-16 2xl:gap-24">
						{/* title, caption, description, buttons */}
						<div className="w-full lg:w-1/2">
							<TitleDescriptionCaptionButtons
								title={title}
								caption={caption}
								isHomePage={homePage}
							/>
						</div>

						{/* image */}
						<div className="hidden lg:block w-[43%] absolute right-0 top-1/2 -translate-y-1/2">
							<ImageComponent image={image} />
						</div>
						{/* <div className="block lg:hidden w-full">
							<ImageComponent image={image} />
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
