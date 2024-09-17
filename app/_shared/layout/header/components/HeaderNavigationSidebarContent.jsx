"use client";
import IconButton from "@/app/_shared/components/buttons/IconButton";
import SocialNavList from "@/app/_shared/components/SocialNavList";
import { crossSVGIcon } from "@/app/_shared/utils/svgIcons";
import { AnimatePresence, motion } from "framer-motion";
import HeaderLogo from "./HeaderLogo";
import HeaderNavigationSidebarLinks from "./HeaderNavigationSidebarLinks";

export default function HeaderNavigationSidebarContent({ data }) {
	const {
		headerNavigationItems,
		socialMediaList,
		setIsNavigationSidebarOpened,
		isNavigationSidebarOpened,
	} = data || {};

	const navigationSidebarMotion = {
		hidden: {
			x: "-100%",
			opacity: 0,
			visibility: "hidden",
		},
		show: {
			x: 0,
			opacity: 1,
			visibility: "visible",
			transition: {
				type: "tween",
				ease: "easeInOut",
				delay: 0.2,
				duration: 0.3,
			},
		},
		exit: {
			x: "-100%",
			opacity: 0,
			visibility: "hidden",
			transition: {
				type: "tween",
				ease: "easeInOut",
				duration: 0.3,
				// delay: 0.8,
			},
		},
	};

	return (
		<>
			{/* main content */}
			<AnimatePresence mode="wait">
				{isNavigationSidebarOpened && (
					<motion.div
						variants={navigationSidebarMotion}
						initial="hidden"
						animate="show"
						exit="exit"
						className="fixed top-0 left-0 w-full sm:w-96 z-50 h-screen bg-primary-dark/80 backdrop-blur-md"
					>
						<div className="p-6 h-full flex flex-col justify-between gap-12">
							{/* logo and close button */}
							<div className="sticky top-0 z-10 bg-transparent flex items-center justify-between gap-4">
								{/* website logo */}
								<HeaderLogo />

								{/* close button */}
								<IconButton
									className="text-neutral-bright-100 hover:text-secondary hover:rotate-[180deg] active:scale-90 transition-all duration-300"
									onClick={() =>
										setIsNavigationSidebarOpened(
											!isNavigationSidebarOpened
										)
									}
								>
									{crossSVGIcon(30, 30)}
								</IconButton>
							</div>

							{/* links */}
							<div className="flex-1 hidden-and-working-scrollbar">
								<HeaderNavigationSidebarLinks data={data} />
							</div>

							{/* social links */}
							<div>
								{/* border */}
								<motion.div
									initial={{
										opacity: 1,
										scaleX: 0,
									}}
									whileInView={{
										opacity: 0.3,
										scaleX: 1,
										transition: {
											type: "tween",
											ease: [0, 0.9, 0.95, 1],
											duration: 0.7,
										},
									}}
									exit={{
										opacity: 0,
										scaleX: 0,
										transition: {
											type: "tween",
											ease: [0, 0.9, 0.95, 1],
											duration: 0.7,
										},
									}}
									viewport={{ once: true }}
									className="border-t border-neutral-bright-100 origin-left"
								></motion.div>

								{/* links */}
								<nav
									aria-label="header navigation content social navigation list"
									className="py-6"
								>
									<SocialNavList
										socialMediaList={socialMediaList}
									/>
								</nav>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* backdrop */}
			<AnimatePresence>
				{isNavigationSidebarOpened && (
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{
							scaleX: 1,
							transition: {
								duration: 0.3,
								type: "tween",
								ease: "easeInOut",
							},
						}}
						exit={{
							scaleX: 0,
							transition: {
								delay: 0.2,
								duration: 0.3,
								type: "tween",
								ease: "easeInOut",
							},
						}}
						className="block lg:hidden fixed inset-0 bg-primary-dark/20 backdrop-blur-sm z-40 origin-left"
						onClick={() =>
							setIsNavigationSidebarOpened(
								!isNavigationSidebarOpened
							)
						}
					></motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
