"use client";
import Description from "@/app/_shared/components/texts/Description";
import { headerLogoSVG } from "@/app/_shared/utils/svgIcons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LogoDescription({ data }) {
	const { siteDescription } = data || {};

	return (
		<div className="space-y-4" viewport={{ once: true }}>
			{/* website logo */}
			<motion.div
				initial={{
					y: -15,
					opacity: 0,
					filter: "blur(5px)",
				}}
				whileInView={{
					y: 0,
					opacity: 1,
					filter: "blur(0px)",
				}}
				transition={{
					type: "tween",
					ease: [0.25, 0.1, 0.25, 1.0],
					delay: 0.2,
				}}
			>
				<Link href="/" aria-label="footer logo">
					{headerLogoSVG("size-full max-w-[234px] max-h-[59px]")}
				</Link>
			</motion.div>

			{/* description */}
			<Description
				description={siteDescription}
				extraClassNames="text-base text-neutral-bright-200"
			/>
		</div>
	);
}
