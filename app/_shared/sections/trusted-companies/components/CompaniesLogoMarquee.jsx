import LogoContainer from "./LogoContainer";

export default function CompaniesLogoMarquee({ trustedCompanies }) {
	const directionFrom = 0;
	const directionTo = "-100%";

	return (
		<div className="flex marquee-logos-container-mask-gradient overflow-x-hidden">
			<LogoContainer
				data={{ trustedCompanies, directionFrom, directionTo }}
			/>
			<LogoContainer
				data={{ trustedCompanies, directionFrom, directionTo }}
			/>
		</div>
	);
}
