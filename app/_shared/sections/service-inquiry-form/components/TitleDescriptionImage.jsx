"use client";
import Description from "@/app/_shared/components/texts/Description";
import Title from "@/app/_shared/components/texts/Title";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function TitleDescriptionImage({ data }) {
	const { title, description, ourServicesData, service } = data || {};

	const serviceObject = ourServicesData?.find(
		(item) => item?.title === service
	);

	const thumbnailImage = serviceObject
		? serviceObject.image
		: ourServicesData?.[0]?.image;

	return (
		<div className="space-y-14 max-md:w-fit max-md:mx-auto">
			<div className="space-y-4">
				{/* title */}
				<Title
					title={title}
					extraClassNames="max-md:text-center text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-bright-100"
				/>

				{/* Description */}
				<Description
					description={description}
					extraClassNames="text-base sm:text-lg lg:text-xl text-neutral-bright-200"
				/>
			</div>

			<AnimatePresence mode="wait">
				{thumbnailImage && (
					<motion.div
						key={serviceObject?._id}
						initial={{ opacity: 0, filter: "blur(5px)" }}
						whileInView={{ opacity: 1, filter: "blur(0px)" }}
						exit={{ opacity: 0, filter: "blur(5px)" }}
						viewport={{ once: true }}
						transition={{
							type: "tween",
							ease: [0.25, 0.1, 0.25, 1.0],
							delay: 0.2,
						}}
						className="relative overflow-hidden max-h-[582px] aspect-[1.54/1] rounded-xl"
					>
						<Image
							src={
								typeof thumbnailImage === "object"
									? thumbnailImage.image
									: `${IMAGE_URL}/${thumbnailImage}`
							}
							alt="product image"
							fill
							sizes="100%"
							quality={100}
							className="object-cover"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
