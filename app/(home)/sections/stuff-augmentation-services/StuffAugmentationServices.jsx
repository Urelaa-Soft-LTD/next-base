import ContainedButton from "@/app/_shared/components/buttons/ContainedButton";
import StaffAugmentationServicesCardsContainer from "../../../_shared/components/StaffAugmentationServicesCardsContainer";
import TitleDescriptionCaption from "./components/TitleDescriptionCaption";

export default function StuffAugmentationServices({ data }) {
	const {
		pageName,
		ourServicesData,
		staffAugmentationSectionTitle,
		staffAugmentationSectionDescription,
		staffAugmentationSectionCaption,
	} = data || {};

	return (
		<section
			aria-label={`${pageName} page stuff augmentation service section`}
			className="bg-primary-dark"
		>
			<div className="container px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24">
				<div className="space-y-14">
					<TitleDescriptionCaption
						caption={staffAugmentationSectionCaption}
						title={staffAugmentationSectionTitle}
						description={staffAugmentationSectionDescription}
					/>

					{/* staff augmentation services cards */}
					<StaffAugmentationServicesCardsContainer
						ourServicesData={ourServicesData}
					/>

					{/* <SVGImage /> */}

					<div className="w-fit mx-auto">
						<ContainedButton
							path="/services/staff-augmentation"
							buttonText="Staff Augmentation Services Details"
							buttonContainerExtraClassNames="bg-secondary text-primary-dark hover:bg-primary-bright-600 hover:text-neutral-bright-100"
							buttonTextExtraClassNames="text-sm lg:text-base px-4 xl:px-6 py-2 xl:py-2.5"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
