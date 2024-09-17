"use client";
import { motion } from "framer-motion";

export default function Description({ description, extraClassNames }) {
	return (
		<motion.p
			initial={{ opacity: 0, filter: "blur(5px)" }}
			whileInView={{ opacity: 1, filter: "blur(0px)" }}
			viewport={{ once: true }}
			transition={{
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1.0],
				delay: 0.4,
			}}
			className={`capitalize font-normal whitespace-break-spaces ${extraClassNames}`}
		>
			{description}
		</motion.p>
	);
}
