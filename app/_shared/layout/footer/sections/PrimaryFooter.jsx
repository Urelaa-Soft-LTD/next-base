import ContactInfo from "../../../components/ContactInfo";
import CompanyLinks from "../components/CompanyLinks";
import HelpLinks from "../components/HelpLinks";
import LogoDescription from "../components/LogoDescription";
import ServiceLinks from "../components/ServiceLinks";

export default function PrimaryFooter({ primaryFooterData }) {
	const {
		siteDescription,
		contactInformation,
		companyLinkItems,
		servicesLinkItems,
		helpLinkItems,
	} = primaryFooterData || {};

	return (
		<section
			aria-label="primary footer"
			className="relative z-10 bg-primary-dark"
		>
			<div className="container px-4 sm:px-6 py-20 space-y-20">
				<div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,_1fr)] lg:grid-cols-[300px_minmax(0,_1fr)] xl:grid-cols-[290px_minmax(0,_1fr)_minmax(0,_300px)] 2xl:grid-cols-[340px_minmax(0,_1fr)_minmax(0,_320px)] gap-20 md:gap-12 xl:gap-16 2xl:gap-24">
					<div className="space-y-14">
						{/* logo, description, contact info */}
						<LogoDescription
							data={{
								siteDescription,
							}}
						/>

						{/* contact info */}
						<div className="hidden md:max-xl:block">
							<ContactInfo
								contactInformation={contactInformation}
							/>
						</div>
					</div>

					<div className="grid grid-cols-[repeat(auto-fill,_minmax(188px,_1fr))] lg:grid-cols-3 xl:flex xl:items-start xl:justify-between gap-x-6 gap-y-12 2xl:gap-x-9">
						{/* company links */}
						<div>
							<CompanyLinks companyLinkItems={companyLinkItems} />
						</div>
						{/* service links */}
						<div>
							<ServiceLinks
								servicesLinkItems={servicesLinkItems}
							/>
						</div>
						{/* help links */}
						<div>
							<HelpLinks helpLinkItems={helpLinkItems} />
						</div>
					</div>

					{/* contact info */}
					<div className="block md:max-xl:hidden">
						<ContactInfo contactInformation={contactInformation} />
					</div>
				</div>
			</div>
		</section>
	);
}
