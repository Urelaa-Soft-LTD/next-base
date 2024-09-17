import Image from "next/image";
import Link from "next/link";
import { IMAGE_URL } from "../../lib/constants";

export default function SmallerCard({ itemInfo, dataTitle }) {
	const { image, title, description, slug } = itemInfo || {};

	const linkGeneration = (typeOfCard) => {
		if (typeOfCard === "product-details-page-products") {
			return `/products/${slug}`;
		}
		if (typeOfCard === "project-details-page-projects") {
			return `/projects/${slug}`;
		}
	};

	return (
		<Link
			href={linkGeneration(dataTitle)}
			className="grid grid-cols-6 items-center gap-3 sm:max-xl:gap-6 rounded-lg group hover:bg-primary-bright-100 transition-colors duration-300"
		>
			<div className="col-span-2 relative overflow-hidden h-full rounded-tl-lg rounded-bl-lg">
				<Image
					src={
						typeof image === "object"
							? image.image
							: `${IMAGE_URL}/${image}`
					}
					alt={`${title} image`}
					fill
					sizes="100%"
					quality={100}
					className="object-contain"
				/>
			</div>

			<div className="col-span-4 space-y-2 p-2">
				{/* title */}
				<h3
					className={`capitalize text-base font-semibold text-neutral-dark-900 line-clamp-2 group-hover:text-primary-bright-600 transition-colors duration-300`}
				>
					{title}
				</h3>

				{/* description */}
				<p className="text-sm text-neutral-dark-500 line-clamp-3">
					{description}
				</p>
			</div>
		</Link>
	);
}
