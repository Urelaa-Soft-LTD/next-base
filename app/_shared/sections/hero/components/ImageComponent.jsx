import { IMAGE_URL } from "@/app/_shared/lib/constants";
import Image from "next/image";

export default function ImageComponent({ image }) {
	return (
		<div className="relative overflow-hidden aspect-[1.29/1]">
			<Image
				src={
					typeof image === "object"
						? image.image
						: `${IMAGE_URL}/${image}`
				}
				alt="hero image"
				fill
				sizes="100%"
				quality={100}
                priority={true}
				className="object-contain object-right"
			/>
		</div>
	);
}
