import SecondaryFooterBorder from "../components/SecondaryFooterBorder";
import SecondaryFooterContent from "../components/SecondaryFooterContent";

export default function SecondaryFooter({ secondaryFooterData }) {
	return (
		<section aria-label="secondary-footer" className="bg-primary-dark">
			<SecondaryFooterBorder />
			<SecondaryFooterContent secondaryFooterData={secondaryFooterData} />
		</section>
	);
}
