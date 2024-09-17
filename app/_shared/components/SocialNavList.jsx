"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialNavList({ socialMediaList, footer = false }) {
	// motion configs
	const menuLinkContainerMotion = {
		hidden: {
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
		show: {
			transition: {
				delayChildren: 0.4,
				staggerChildren: 0.05,
				staggerDirection: 1,
			},
		},
	};

	// motion configs
	const menuLinkMotion = {
		hidden: {
			opacity: 0,
			filter: "blur(5px)",
		},
		show: {
			opacity: 1,
			filter: "blur(0px)",
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.ul
			variants={menuLinkContainerMotion}
			initial="hidden"
			whileInView="show"
			exit="hidden"
			viewport={{ once: true }}
			className={`flex items-center flex-wrap gap-6 ${
				footer === true ? "justify-center" : "justify-normal"
			}`}
		>
			{socialMediaList.map((element, index) => {
				const { thumbnailImage, link, title } = element || {};

				return (
					link &&
					link.trim() !== "" && (
						<motion.li
							key={index}
							aria-label={`${title} link`}
							variants={menuLinkMotion}
							className="h-5 aspect-square"
						>
							<a
								href={link}
								target="_blank"
								className="hover:opacity-40 transition-opacity"
							>
								<Image
									src={thumbnailImage}
									alt={`${title} link logo`}
									className="size-full object-cover invert"
								/>
							</a>
						</motion.li>
					)
				);
			})}
		</motion.ul>
	);
}
