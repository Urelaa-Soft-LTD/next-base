import Title from "@/app/_shared/components/texts/Title";
import ChoosingReasonsSlider from "./components/ChoosingReasonsSlider";

export default function WhyChooseUs({ data }) {
	const { pageName, ourChoosingReasonsData, whyChooseUsSectionTitle } =
		data || {};

	return (
		<section
			aria-label={`${pageName} page why choose us section`}
			className="bg-neutral-bright-100"
		>
			<div className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24">
				<div className="space-y-14">
					{/* title */}
					<Title
						title={whyChooseUsSectionTitle}
						extraClassNames="text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-dark-900 text-center"
					/>

					{/* choosing reasons slider */}
					<ChoosingReasonsSlider
						ourChoosingReasonsData={ourChoosingReasonsData}
					/>
				</div>
			</div>
		</section>
	);
}
