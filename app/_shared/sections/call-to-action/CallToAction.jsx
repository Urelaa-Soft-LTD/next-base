import Caption from "@/app/_shared/components/texts/Caption";
import Title from "@/app/_shared/components/texts/Title";
import heroVectorImage from "@/public/hero-vector-bg.webp";
import Image from "next/image";
import DoubleButtons from "../../components/DoubleButtons";

export default function CallToAction({ data }) {
	const { pageName, callToActionSectionTitle, callToActionSectionCaption } =
		data || {};

	const title = "Schedule a meeting";
	const caption = "Get your best solution from us";

	return (
		<section
			aria-label={`${pageName} page call to action section`}
			className="relative bg-primary-dark"
		>
			{/* gradient bg */}
			<div className="absolute left-0 -bottom-[450px] w-full h-[800px] bg-half-ellipse-custom-gradient opacity-30"></div>

			{/* custom vector bg image */}
			<div className="absolute inset-0">
				<Image
					src={heroVectorImage}
					alt="hero vector image"
					fill
					sizes="100%"
					quality={100}
					className="object-contain object-bottom"
				/>
			</div>

			<div className="container px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24">
				<div className="space-y-14">
					<div className="space-y-4 text-center">
						{/* title */}
						<Title
							title={callToActionSectionTitle || title}
							extraClassNames="text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-bright-100"
						/>

						{/* caption */}
						<Caption
							caption={callToActionSectionCaption || caption}
							extraClassNames="text-base lg:text-lg xl:text-xl text-neutral-bright-100 font-normal"
						/>
					</div>

					<DoubleButtons
						firstButtonPath="/service-inquiry"
						secondButtonPath="/contact-us"
						firstButtonText="Request Quote"
						secondButtonText="Schedule Intro"
						callToActionSection={true}
					/>
				</div>
			</div>
		</section>
	);
}
