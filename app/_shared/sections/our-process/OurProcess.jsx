import ContainedButton from "@/app/_shared/components/buttons/ContainedButton";
import CardsGridContainer from "@/app/_shared/components/cards/CardsGridContainer";
import Title from "@/app/_shared/components/texts/Title";

export default function OurProcess({ data, firstSection = true }) {
	const { pageName, ourProcessesData, ourProcessOthers } = data || {};
	const { ourProcessSectionTitle } = ourProcessOthers || {};

	return (
		<section
			aria-label={`${pageName} page our process section`}
			className="bg-primary-dark"
		>
			<div
				className={`container ${
					firstSection === true
						? "px-4 sm:px-6 pb-10 pt-24 xs:pb-12 sm:pb-14 md:pb-16 md:pt-32 lg:pb-[72px] xl:pb-20 2xl:pb-[88px] 3xl:pb-24"
						: "px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24"
				}`}
			>
				<div className="max-w-96 md:max-w-[800px] mx-auto space-y-14 md:space-y-20">
					{/* title */}
					<Title
						title={ourProcessSectionTitle}
						extraClassNames="text-3xl md:text-[42px] md:leading-[44px] 2xl:text-5xl text-neutral-bright-100 text-center"
					/>

					<div
						className={`${
							firstSection === true
								? ""
								: "relative h-[1600px] md:h-[1200px] overflow-hidden"
						}`}
					>
						{/* process cards */}
						<CardsGridContainer
							data={{
								dataTitle: "process-card",
								information: ourProcessesData,
							}}
						/>

						{/* fade out gradient */}
						{firstSection === true ? null : (
							<div className="absolute left-0 -bottom-2 w-full h-[400px] bg-gradient-to-b from-transparent to-primary-dark pointer-events-none"></div>
						)}
					</div>

					{firstSection === true ? null : (
						<div className="w-fit mx-auto">
							<ContainedButton
								path="/our-process"
								buttonText="For More"
								buttonContainerExtraClassNames="bg-secondary text-primary-dark hover:bg-primary-bright-600 hover:text-neutral-bright-100"
								buttonTextExtraClassNames="text-sm lg:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
