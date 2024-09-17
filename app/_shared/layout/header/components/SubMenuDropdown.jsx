"use client";
import CustomLink from "@/app/_shared/components/ui/CustomLink";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";

export default function SubMenuDropdown({
	navItem,
	path,
	subNavItems,
	onClose,
}) {
	const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);

	const menuMotion = {
		hidden: {
			height: 0,
		},
		show: {
			height: "auto",
		},
		exit: {
			height: 0,
			transition: {
				delay: subNavItems.length * 0.1,
			},
		},
	};

	const menuLinkContainerMotion = {
		hidden: {
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
		show: {
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.05,
				staggerDirection: 1,
			},
		},
	};

	const menuLinkMotion = {
		hidden: {
			opacity: 0,
			filter: "blur(3px)",
		},
		show: {
			opacity: 1,
			filter: "blur(0px)",
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<>
			<MotionConfig
				transition={{
					type: "tween",
					ease: "easeInOut",
					duration: 0.3,
				}}
			>
				<motion.button
					initial={false}
					animate={isSubMenuOpened ? "opened" : "closed"}
					onClick={() => setIsSubMenuOpened(!isSubMenuOpened)}
					className="flex items-center gap-4 hover:text-secondary transition-colors"
				>
					{navItem}
					<motion.svg
						variants={{
							opened: {
								rotate: 180,
							},
							closed: {
								rotate: 0,
							},
						}}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2.5}
						stroke="currentColor"
						className="size-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m19.5 8.25-7.5 7.5-7.5-7.5"
						/>
					</motion.svg>
				</motion.button>
			</MotionConfig>

			<AnimatePresence>
				{isSubMenuOpened && (
					<motion.div
						variants={menuMotion}
						initial="hidden"
						animate="show"
						exit="exit"
					>
						<motion.ul
							variants={menuLinkContainerMotion}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="space-y-4 pt-4"
						>
							{subNavItems.map((element, index) => {
								const { nestedNavName, nestedPath } =
									element || {};
								return (
									<motion.li
										key={index}
										variants={menuLinkMotion}
										aria-label={nestedNavName}
									>
										<CustomLink
											path={`${path}${nestedPath}`}
											extraClasses="block px-6 hover:text-secondary transition-colors"
											onClose={onClose}
										>
											{nestedNavName}
										</CustomLink>
									</motion.li>
								);
							})}
						</motion.ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
