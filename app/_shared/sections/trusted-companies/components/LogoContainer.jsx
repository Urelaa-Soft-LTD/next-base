"use client";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoContainer({ data }) {
	const { trustedCompanies, directionFrom, directionTo } = data || {};

	return (
		<motion.div
			initial={{ x: directionFrom }}
			animate={{ x: directionTo }}
			transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
			className="flex shrink-0"
		>
			{trustedCompanies.map((element, index) => {
				const { title, image } = element || {};
				return (
					<div
						key={index}
						className="relative overflow-hidden h-14 w-40 mr-12 lg:mr-20"
					>
						<Image
							src={
								typeof image === "object"
									? image.image
									: `${IMAGE_URL}/${image}`
							}
							alt={`${title} logo`}
							fill
							sizes="100%"
							quality={100}
							className="object-contain"
						/>
					</div>
				);
			})}
		</motion.div>
	);
}
