import CardsGridContainer from "@/app/_shared/components/cards/CardsGridContainer";
import { getJSONData } from "../utils/commonUtils";

export default function StaffAugmentationServicesCardsContainer({
	ourServicesData,
	pageName,
}) {
	const staffAugmentationService = ourServicesData.find(
		(e) => e.slug === "staff-augmentation"
	);

	return (
		<CardsGridContainer
			data={{
				dataTitle: "staff-augmentation-service-card",
				information:
					staffAugmentationService.others &&
					staffAugmentationService.others.staffList &&
					getJSONData(
						staffAugmentationService.others.staffList,
						"array"
					),
				pageName,
			}}
		/>
	);
}
