import Title from "@/app/_shared/components/texts/Title";
import TestimonialSlider from "./components/TestimonialSlider";

export default function Testimonial({ data, firstSection = true }) {
	const { pageName, ourTestimonialData, testimonialOthers } = data || {};
	const { ourTestimonialSectionTitle } = testimonialOthers || {};

	const title = "Testimonial";

	return (
		<section
			aria-label={`${pageName} page testimonial section`}
			className="bg-primary-dark"
		>
			<div
				className={`container ${
					firstSection === true
						? "px-4 sm:px-6 pb-10 pt-24 xs:pb-12 sm:pb-14 md:pb-16 md:pt-32 lg:pb-[72px] xl:pb-20 2xl:pb-[88px] 3xl:pb-24"
						: "px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24"
				}`}
			>
				<div className="space-y-14">
					{/* title */}
					<Title
						title={ourTestimonialSectionTitle || title}
						extraClassNames="text-center text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-bright-100"
					/>

					<TestimonialSlider
						ourTestimonialData={ourTestimonialData}
					/>
				</div>
			</div>
		</section>
	);
}
