import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function StaffAugmentationServiceCard({
	staffAugmentationServiceInfo,
}) {
	const { title, description } = staffAugmentationServiceInfo || {};

	const query = useSearchParams();

	const selectedStaffType = query.get("type");

	return (
		<Link
			href={`/service-inquiry?serviceName=Staff Augmentations&type=${title}`}
			className={`block h-full w-full rounded-lg border-2 border-neutral-bright-100/50 group transition-colors duration-300 ${
				selectedStaffType === title
					? "bg-primary-bright-600"
					: "bg-glass-shine-fill-8-active"
			}`}
		>
			{/* bg-neutral-dark-500/30 backdrop-blur-xl */}
			{/* bg-glass-shine-fill-8 */}
			{/* content */}
			<div className="h-full p-4 sm:p-6 md:p-8 space-y-4 group-hover:scale-105 transition-transform duration-500">
				<h3 className="capitalize text-xl font-semibold text-neutral-bright-100">
					{title}
				</h3>
				<p className="font-light md:font-normal text-xs xs:text-sm whitespace-break-spaces text-neutral-bright-200">
					{description}
				</p>
			</div>
		</Link>
	);
}
