import ContactForm from "../../components/ContactForm";
import { getJSONData } from "../../utils/commonUtils";
import TitleDescription from "./components/TitleDescription";

export default function ContactDetailsForm({ data, firstSection = true }) {
	const { pageName, contactInformation, contactDetailsOthers } = data || {};

	const { sectionTitle, sectionPoints } = contactDetailsOthers || {};

	const points = getJSONData(sectionPoints, "array");

	return (
		<section
			aria-label={`${pageName} page contact details and form section`}
			className="relative bg-primary-dark"
		>
			<div className="absolute inset-0 bg-half-ellipse-custom-gradient opacity-30"></div>
			<div
				className={`container ${
					firstSection === true
						? "px-4 sm:px-6 pb-10 pt-24 xs:pb-12 sm:pb-14 md:pb-16 md:pt-32 lg:pb-[72px] xl:pb-20 2xl:pb-[88px] 3xl:pb-24"
						: "px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24"
				}`}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start md:gap-14 gap-20">
					<div className="lg:col-span-3">
						<TitleDescription
							data={{ sectionTitle, points, contactInformation }}
						/>
					</div>

					<div className="lg:col-span-2 lg:sticky lg:top-32">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}
