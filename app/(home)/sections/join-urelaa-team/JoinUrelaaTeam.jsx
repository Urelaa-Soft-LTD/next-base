import CardsGridContainer from "@/app/_shared/components/cards/CardsGridContainer";
import TitleDescriptionButton from "@/app/_shared/components/TitleDescriptionButton";

export default function JoinUrelaaTeam({ data }) {
	const {
		pageName,
		ourJobsData,
		ourJobsSectionTitle,
		ourJobsSectionDescription,
	} = data || {};

	const buttonText = "See all";

	return (
		<section
			aria-label={`${pageName} page join the urelaa team section`}
			className="bg-primary-bright-50 scroll-mt-10"
			id="job"
		>
			<div className="container px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24">
				<div className="space-y-14">
					{/* title, description, button */}
					<TitleDescriptionButton
						description={ourJobsSectionDescription}
						title={ourJobsSectionTitle}
						buttonText={buttonText}
					/>

					{/* job post cards */}
					<CardsGridContainer
						data={{
							dataTitle: "job-post-card",
							information: ourJobsData,
						}}
					/>
				</div>
			</div>
		</section>
	);
}
