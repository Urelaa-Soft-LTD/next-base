import PrimaryFooter from "./sections/PrimaryFooter";
import SecondaryFooter from "./sections/SecondaryFooter";

export default async function FooterWrapper({ footerConfig }) {
	const {
		siteName,
		siteDescription,
		socialMediaList,
		contactInformation,
		companyLinkItems,
		servicesLinkItems,
		helpLinkItems,
        footerSchema
	} = footerConfig || {};

	return (
		<footer>
			{footerSchema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: footerSchema }}
				/>
			)}
			<PrimaryFooter
				primaryFooterData={{
					siteDescription,
					contactInformation,
					companyLinkItems,
					servicesLinkItems,
					helpLinkItems,
				}}
			/>
			<SecondaryFooter
				secondaryFooterData={{ siteName, socialMediaList }}
			/>
		</footer>
	);
}
