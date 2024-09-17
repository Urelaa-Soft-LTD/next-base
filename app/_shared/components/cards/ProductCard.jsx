import workBgImage from "@/public/recent-work-bg-image.webp";
import Image from "next/image";
import { IMAGE_URL } from "../../lib/constants";
import ContainedButton from "../buttons/ContainedButton";

export default function ProductCard({ productInfo, index }) {
	const { image, title, description, slug } = productInfo || {};

	return (
		<div
			className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 3xl:gap-24 ${
				index % 2 !== 0 ? "md:flex-row-reverse" : ""
			}`}
		>
			<div className="md:basis-1/2 relative overflow-hidden aspect-auto rounded-2xl sm:rounded-3xl border-2 border-neutral-bright-100/50 p-6 sm:p-8 md:p-6 lg:p-10 group">
				<div className="absolute -right-32 -bottom-[500px] w-full h-[1000px] bg-half-ellipse-custom-gradient opacity-50"></div>
				<Image
					src={workBgImage}
					alt="bg image"
					fill
					sizes="100%"
					quality={100}
					className="object-cover opacity-70"
				/>

				<Image
					src={
						typeof image === "object"
							? image.image
							: `${IMAGE_URL}/${image}`
					}
					alt={`${title} image`}
					width={1091}
					height={709}
					sizes="auto"
					quality={100}
					className="relative object-contain aspect-[1.54/1] rounded-xl group-hover:scale-105 transition-transform duration-300"
				/>
			</div>

			<div className="md:basis-1/2 space-y-6 lg:space-y-20 px-1 sm:px-2 md:px-0">
				<div className="space-y-6">
					<h3
						className={`capitalize text-xl xs:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-bright-100`}
					>
						{title}
					</h3>

					<p
						className={`font-light md:font-normal text-sm md:text-base xl:text-lg whitespace-break-spaces text-neutral-bright-200`}
					>
						{description}
					</p>
				</div>

				<ContainedButton
					path={`/products/${slug}`}
					buttonText="Check Full Details"
					buttonContainerExtraClassNames="bg-secondary text-primary-dark hover:bg-primary-bright-600 hover:text-neutral-bright-100"
					buttonTextExtraClassNames="text-sm lg:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
				/>
			</div>
		</div>
	);
}
