"use client";
import dotIcon from "@/public/process-dot.webp";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BulletPoints({ points }) {
	const listContainerMotion = {
		hidden: {
			transition: {
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
		show: {
			transition: {
				delayChildren: 0.4,
				staggerChildren: 0.1,
				staggerDirection: 1,
			},
		},
	};

	// motion configs
	const listMotion = {
		hidden: {
			opacity: 0,
			filter: "blur(5px)",
		},
		show: {
			opacity: 1,
			filter: "blur(0px)",
		},
	};

	return (
		<motion.ul
			role="list"
			variants={listContainerMotion}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="space-y-6"
		>
			{points.map((point, index) => (
				<motion.li
					key={index}
					variants={listMotion}
					className="flex items-start gap-3"
				>
					<Image
						src={dotIcon}
						alt="bullet point"
						className="flex-none size-6 object-contain"
						quality={100}
					/>
					<span className="text-base xs:text-lg md:text-xl text-neutral-bright-100">
						{point}
					</span>
				</motion.li>
			))}
		</motion.ul>
	);
}
