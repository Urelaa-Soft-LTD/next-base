"use client";
import { motion } from "framer-motion";

export default function Title({ title, extraClassNames, delay = 0.3 }) {
	return (
		<motion.h2
			initial={{ opacity: 0, filter: "blur(5px)" }}
			whileInView={{ opacity: 1, filter: "blur(0px)" }}
			viewport={{ once: true }}
			transition={{
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1.0],
				delay,
			}}
			className={`capitalize font-semibold ${extraClassNames}`}
		>
			{title}
		</motion.h2>
	);
}
