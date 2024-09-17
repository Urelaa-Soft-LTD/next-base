"use client";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageComponent({ data }) {
	const { title, image } = data || {};

	return (
		<motion.div
			initial={{ y: -20, opacity: 0, filter: "blur(5px)" }}
			whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
			viewport={{ once: true }}
			transition={{
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1.0],
				delay: 0.2,
			}}
			className="relative overflow-hidden aspect-[3/2] rounded-xl"
		>
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
				className="object-cover"
			/>
		</motion.div>
	);
}
