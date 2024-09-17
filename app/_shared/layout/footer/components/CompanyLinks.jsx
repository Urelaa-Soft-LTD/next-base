"use client";
import Title from "@/app/_shared/components/texts/Title";
import CustomLink from "@/app/_shared/components/ui/CustomLink";
import { motion } from "framer-motion";

export default function CompanyLinks({ companyLinkItems }) {
	// motion configs
	const menuLinkContainerMotion = {
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
	const linkMotion = {
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
		<div className="space-y-8">
			{/* title */}
			<Title
				title="Company"
				extraClassNames="text-base text-neutral-bright-100"
			/>

			{/* nav links */}
			<nav aria-label="footer content company navigation list">
				<motion.ul
					variants={menuLinkContainerMotion}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="space-y-4 text-neutral-bright-200"
				>
					{companyLinkItems.map((element, index) => {
						const { navName, path } = element;
						return (
							<motion.li
								key={index}
								aria-label={`${navName} link`}
								variants={linkMotion}
							>
								<CustomLink
									path={path}
									extraClasses="hover:text-secondary transition-colors"
								>
									{navName}
								</CustomLink>
							</motion.li>
						);
					})}
				</motion.ul>
			</nav>
		</div>
	);
}
