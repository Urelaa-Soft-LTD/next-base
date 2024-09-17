import ContainedButton from "@/app/_shared/components/buttons/ContainedButton";
import CustomLink from "@/app/_shared/components/ui/CustomLink";
import { motion } from "framer-motion";
import SubMenuDropdown from "./SubMenuDropdown";

export default function HeaderNavigationSidebarLinks({ data }) {
	const {
		isNavigationSidebarOpened,
		setIsNavigationSidebarOpened,
		headerNavigationItems,
	} = data || {};

	// motion config
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

	// motion config
	const menuLinkMotion = {
		hidden: {
			opacity: 0,
			filter: "blur(7px)",
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
		<nav aria-label="header navigation list in smaller devices">
			<motion.ul
				variants={menuLinkContainerMotion}
				initial="hidden"
				whileInView="show"
				exit="hidden"
				className="text-base sm:text-lg space-y-4 text-neutral-bright-100"
			>
				{headerNavigationItems.map((element, index) => {
					const { navName, path, subNavItems } = element || {};

					return (
						<motion.li
							variants={menuLinkMotion}
							key={index}
							aria-label={`${navName} link`}
						>
							{subNavItems.length > 0 ? (
								<SubMenuDropdown
									navItem={navName}
									path={path}
									subNavItems={subNavItems}
									onClose={() =>
										setIsNavigationSidebarOpened(
											!isNavigationSidebarOpened
										)
									}
								/>
							) : (
								<CustomLink
									path={path}
									extraClasses="block hover:text-secondary transition-colors"
									onClose={() =>
										setIsNavigationSidebarOpened(
											!isNavigationSidebarOpened
										)
									}
								>
									{navName}
								</CustomLink>
							)}
						</motion.li>
					);
				})}

				<motion.li variants={menuLinkMotion}>
					<ContainedButton
						onClick={() =>
							setIsNavigationSidebarOpened(
								!isNavigationSidebarOpened
							)
						}
						path="/service-inquiry"
						buttonText="Work with us"
						buttonContainerExtraClassNames="bg-primary-bright-600 text-neutral-bright-100 hover:bg-secondary hover:text-primary-dark"
						buttonTextExtraClassNames="text-base sm:text-lg text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
					/>
				</motion.li>
			</motion.ul>
		</nav>
	);
}
