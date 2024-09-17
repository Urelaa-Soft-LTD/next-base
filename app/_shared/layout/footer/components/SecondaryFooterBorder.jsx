"use client";
import { motion } from "framer-motion";

export default function SecondaryFooterBorder() {
	return (
		<div className="container px-4 sm:px-6">
			<motion.div
				initial={{ opacity: 0, scaleX: 0 }}
				whileInView={{ opacity: 1, scaleX: 1 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{
					type: "tween",
					ease: [0.25, 0.1, 0.25, 1.0],
					delay: 0.2,
					duration: 1,
				}}
				className="border-t border-neutral-bright-100/10"
			></motion.div>
		</div>
	);
}
