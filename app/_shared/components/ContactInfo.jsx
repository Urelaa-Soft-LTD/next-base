"use client";
import Title from "@/app/_shared/components/texts/Title";
import { linkGenerator } from "@/app/_shared/utils/commonUtils";
import { motion } from "framer-motion";

export default function ContactInfo({ contactInformation, footer = true }) {
	// motion configs
	const infoContainerMotion = {
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
	const singleInfoMotion = {
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
		<div className="space-y-5">
			{/* title */}
			<Title
				title={footer === true ? "Contact us" : "Inquires"}
				extraClassNames="text-base text-neutral-bright-100"
			/>

			{/* contact us info list */}
			<nav aria-label="footer content contact information list">
				<motion.ul
					variants={infoContainerMotion}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="space-y-2"
				>
					{contactInformation.map((element, index) => {
						const { type, info } = element;
						return (
							<motion.li
								key={index}
								variants={singleInfoMotion}
								className="text-sm w-fit"
							>
								{linkGenerator(type, info)}
							</motion.li>
						);
					})}
				</motion.ul>
			</nav>
		</div>
	);
}
