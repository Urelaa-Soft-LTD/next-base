import Title from "@/app/_shared/components/texts/Title";
import Technologies from "./components/Technologies";

export default function OurTechnologies({ data }) {
	const { pageName, ourTechnologiesData, ourTechnologiesSectionTitle } =
		data || {};

	return (
		<section
			aria-label={`${pageName} page our technologies section`}
			className="bg-primary-dark"
		>
			<div className="container px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24">
				<div className="space-y-14">
					{/* title */}
					<Title
						title={ourTechnologiesSectionTitle}
						extraClassNames="text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-bright-100 text-center"
					/>

					{/* technologies */}
					<Technologies ourTechnologiesData={ourTechnologiesData} />
				</div>
			</div>
		</section>
	);
}
