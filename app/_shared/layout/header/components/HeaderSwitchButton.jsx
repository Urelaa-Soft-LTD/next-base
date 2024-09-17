import { crossSVGIcon, hamburgerSVGIcon } from "@/app/_shared/utils/svgIcons";
import { motion, MotionConfig } from "framer-motion";

export default function HeaderSwitchButton({ data }) {
	const { setIsNavigationSidebarOpened, isNavigationSidebarOpened } =
		data || {};

	return (
		<MotionConfig
			transition={{
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1.0],
				duration: 0.7,
			}}
		>
			<motion.button
				aria-label="icon for opening navigation"
				onClick={() =>
					setIsNavigationSidebarOpened(!isNavigationSidebarOpened)
				}
				initial={false}
				animate={isNavigationSidebarOpened ? "opened" : "closed"}
				className="block lg:hidden ml-auto"
			>
				<motion.span
					variants={{
						opened: {
							y: 45,
							opacity: 0,
							filter: "blur(5px)",
						},
						closed: {
							y: 15,
							opacity: 1,
							filter: "blur(0px)",
						},
					}}
					className="flex items-center justify-center text-neutral-bright-100"
				>
					{hamburgerSVGIcon(30, 30)}
				</motion.span>

				<motion.span
					variants={{
						opened: {
							y: -15,
							opacity: 1,
							filter: "blur(0px)",
						},
						closed: {
							y: -45,
							opacity: 0,
							filter: "blur(5px)",
						},
					}}
					className="flex items-center justify-center text-neutral-bright-100"
				>
					{crossSVGIcon(30, 30)}
				</motion.span>
			</motion.button>
		</MotionConfig>
	);
}
