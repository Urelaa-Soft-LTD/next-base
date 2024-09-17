"use client";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Technologies({ ourTechnologiesData }) {
	// motion configs
	const cardsContainerMotion = {
		hidden: {
			transition: {
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
		show: {
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.1,
				staggerDirection: 1,
			},
		},
	};

	// motion configs
	const cardMotion = {
		hidden: {
			y: 10,
			opacity: 0,
			filter: "blur(5px)",
		},
		show: {
			y: 0,
			opacity: 1,
			filter: "blur(0px)",
		},
	};

	return (
		<motion.div
			variants={cardsContainerMotion}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="flex items-center justify-center gap-14 flex-wrap"
		>
			{ourTechnologiesData?.map((element, index) => {
				const { thumbnailImage, title, schema } = element || {};
				return (
					<motion.div
						variants={cardMotion}
						key={index}
						className="relative overflow-hidden h-14 md:h-16 lg:h-[88px] aspect-square"
					>
						{schema && (
							<script
								type="application/ld+json"
								dangerouslySetInnerHTML={{ __html: schema }}
							/>
						)}
						<Image
							src={
								typeof thumbnailImage === "object"
									? thumbnailImage.image
									: `${IMAGE_URL}/${thumbnailImage}`
							}
							alt={`${title} logo`}
							fill
							sizes="100%"
							quality={100}
							className="object-contain"
						/>
					</motion.div>
				);
			})}
		</motion.div>
	);
}
