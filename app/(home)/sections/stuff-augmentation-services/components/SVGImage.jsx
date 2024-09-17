"use client";
import { stuffAugmentationServicesSVGIcon } from "@/app/_shared/utils/svgIcons";
import { motion } from "framer-motion";

export default function SVGImage() {
	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(5px)" }}
			whileInView={{ opacity: 1, filter: "blur(0px)" }}
			viewport={{ once: true }}
			transition={{
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1.0],
				delay: 0.3,
			}}
			className="max-w-[384px] max-h-[354px] mx-auto"
		>
			{stuffAugmentationServicesSVGIcon("size-full")}
		</motion.div>
	);
}
