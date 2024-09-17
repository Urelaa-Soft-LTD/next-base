import { MotionConfig } from "framer-motion";

export const MyMotionConfig = ({ duration = 0.3, children }) => {
	return (
		<MotionConfig
			transition={{
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1.0],
				duration,
			}}
		>
			{children}
		</MotionConfig>
	);
};

export const menuMotion = {
	hidden: {
		height: 0,
		opacity: 0,
		filter: "blur(5px)",
	},
	show: {
		height: "auto",
		opacity: 1,
		filter: "blur(0px)",
	},
};

// motion configs
export const containerMotion = {
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
export const singleMotion = {
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
};
