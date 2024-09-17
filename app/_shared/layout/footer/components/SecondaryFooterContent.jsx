"use client";
import SocialNavList from "@/app/_shared/components/SocialNavList";
import { motion } from "framer-motion";

export default function SecondaryFooterContent({ secondaryFooterData }) {
	const { siteName, socialMediaList } = secondaryFooterData || {};

	// motion configs
	const motionVariant = {
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
		transition: {
			type: "tween",
			ease: [0.25, 0.1, 0.25, 1.0],
		},
	};

	return (
		<div className="container px-4 sm:px-6 py-10">
			<div className="space-y-5">
				<motion.div
					variants={motionVariant}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					transition={{
						delay: 0.4,
					}}
					className="flex flex-wrap items-center justify-center md:justify-between gap-10"
				>
					{/* first part */}
					<p className="text-center text-neutral-bright-200">
						© {new Date().getFullYear()}{" "}
						<span className="uppercase">{siteName}</span> All Rights
						Reserved.
					</p>

					{/* second part */}
					<nav aria-label="secondary footer content social navigation list">
						<SocialNavList
							socialMediaList={socialMediaList}
							footer={true}
						/>
					</nav>
				</motion.div>
			</div>
		</div>
	);
}
