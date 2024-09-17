import TitleDescriptionButton from "@/app/_shared/components/TitleDescriptionButton";
import TeamMembersCardSlider from "./components/TeamMembersCardSlider";

export default function OurTalentedTeam({ data }) {
	const {
		pageName,
		ourTeamMembersData,
		ourTeamSectionTitle,
		ourTeamSectionDescription,
	} = data || {};

	const buttonText = "Join our team";

	return (
		<section
			aria-label={`${pageName} page our talented team section`}
			className="bg-neutral-bright-100 scroll-mt-10"
			id="team"
		>
			<div className="container px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24">
				<div className="space-y-14">
					{/* title, description, button */}
					<TitleDescriptionButton
						description={ourTeamSectionDescription}
						title={ourTeamSectionTitle}
						buttonText={buttonText}
					/>

					{/* team members slider */}
					<TeamMembersCardSlider
						ourTeamMembersData={ourTeamMembersData}
					/>
				</div>
			</div>
		</section>
	);
}
