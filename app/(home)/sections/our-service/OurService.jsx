import OurServiceSectionSmallerDevice from "./components/OurServiceSectionSmallerDevice";
import OurServiceTabWiseSlider from "./components/OurServiceTabWiseSlider";
import TitleButton from "./components/TitleButton";

export default function OurService({ data }) {
	const { pageName, ourServicesData, ourServiceSectionTitle } = data || {};

	const buttonText = "See all";

	return (
		<section
			aria-label={`${pageName} page our service section`}
			className="relative z-10 bg-primary-dark"
		>
			<div className="absolute inset-0 bg-half-ellipse-custom-gradient opacity-30"></div>
			<div className="container px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24">
				<div className="space-y-8 md:space-y-0">
					{/* title, description, button */}
					<TitleButton
						title={ourServiceSectionTitle}
						buttonText={buttonText}
					/>

					<div className="hidden md:block">
						<OurServiceTabWiseSlider
							ourServicesData={ourServicesData}
						/>
					</div>

					<div className="block md:hidden">
						<OurServiceSectionSmallerDevice
							ourServicesData={ourServicesData}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
