"use client";
import ContainedButton from "@/app/_shared/components/buttons/ContainedButton";
import Description from "@/app/_shared/components/texts/Description";
import Title from "@/app/_shared/components/texts/Title";
import { motion } from "framer-motion";

export default function TitleDescriptionButton({
	title,
	description,
	buttonText,
}) {
	return (
		<div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-y-5 gap-x-10">
			<div className="space-y-4">
				{/* title */}
				<Title
					title={title}
					extraClassNames="text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-dark-900"
				/>

				{/* description */}
				<Description
					description={description}
					extraClassNames="text-base sm:text-lg lg:text-xl text-neutral-dark-500"
				/>
			</div>

			<motion.div
				initial={{ y: -20, opacity: 0, filter: "blur(5px)" }}
				whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{
					type: "tween",
					ease: "easeInOut",
					delay: 0.4,
				}}
			>
				<ContainedButton
					path="/jobs"
					rel="canonical"
					buttonText={buttonText}
					buttonContainerExtraClassNames="bg-primary-bright-600 text-neutral-bright-100 hover:bg-secondary hover:text-primary-dark"
					buttonTextExtraClassNames="text-sm lg:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
				/>
			</motion.div>
		</div>
	);
}
