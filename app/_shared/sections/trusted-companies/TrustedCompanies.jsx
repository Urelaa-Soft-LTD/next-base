import Title from "../../components/texts/Title";
import CompaniesLogoMarquee from "./components/CompaniesLogoMarquee";

export default function TrustedCompanies({ data }) {
	const { pageName, trustedCompanies, totalElements } = data || {};

	const title = `Trusted by ${totalElements} Companies`;

	return (
		<div
			aria-label={`${pageName} page trusted companies section`}
			className="relative bg-primary-dark opacity-85 z-10"
		>
			<div className="container px-4 sm:px-6 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
				<div className="space-y-14">
					{/* title */}
					<Title
						title={title}
						extraClassNames="text-center text-base text-neutral-bright-100 font-normal"
					/>

					<CompaniesLogoMarquee trustedCompanies={trustedCompanies} />
				</div>
			</div>
		</div>
	);
}
