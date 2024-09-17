"use client";
import ContainedButton from "@/app/_shared/components/buttons/ContainedButton";
import { motion } from "framer-motion";

export default function DoubleButtons({
	firstButtonText,
	secondButtonText,
	firstButtonPath,
	secondButtonPath,
	callToActionSection = false,
	effect = true,
}) {
	if (!effect) {
		return (
			<div
				className={`flex items-center gap-6 flex-wrap ${
					callToActionSection === true
						? "justify-center"
						: "justify-normal"
				}`}
			>
				<ContainedButton
					path={firstButtonPath}
					buttonText={firstButtonText}
					buttonContainerExtraClassNames="bg-button-gradient text-primary-dark rounded-2xl border border-neutral-bright-100/50 hover:-translate-y-2"
					buttonTextExtraClassNames="text-base sm:text-xl lg:text-2xl text-nowrap px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4"
				/>

				<ContainedButton
					path={secondButtonPath}
					buttonText={secondButtonText}
					buttonContainerExtraClassNames="bg-glass-shine-fill-8 text-neutral-bright-100 rounded-2xl border border-neutral-bright-100/50 hover:-translate-y-2"
					buttonTextExtraClassNames="text-base sm:text-xl lg:text-2xl text-nowrap px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4"
				/>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
			whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
			viewport={{ once: true }}
			transition={{
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1.0],
				delay: 0.4,
			}}
			className={`flex items-center gap-6 flex-wrap ${
				callToActionSection === true
					? "justify-center"
					: "justify-normal"
			}`}
		>
			<ContainedButton
				path={firstButtonPath}
				buttonText={firstButtonText}
				buttonContainerExtraClassNames="bg-button-gradient text-primary-dark rounded-2xl border border-neutral-bright-100/50 hover:-translate-y-2"
				buttonTextExtraClassNames="text-base sm:text-xl lg:text-2xl text-nowrap px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4"
			/>

			<ContainedButton
				path={secondButtonPath}
				buttonText={secondButtonText}
				buttonContainerExtraClassNames="bg-glass-shine-fill-8 text-neutral-bright-100 rounded-2xl border border-neutral-bright-100/50 hover:-translate-y-2"
				buttonTextExtraClassNames="text-base sm:text-xl lg:text-2xl text-nowrap px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4"
			/>
		</motion.div>
	);
}
