"use client";
import ContainedButton from "@/app/_shared/components/buttons/ContainedButton";
import Title from "@/app/_shared/components/texts/Title";
import { motion } from "framer-motion";

export default function TitleButton({ title, buttonText }) {
	return (
		<div className="flex items-center justify-between gap-y-5 gap-x-10 ml-3 mr-3 md:ml-0 md:mr-0">
			{/* title */}
			<Title
				title={title}
				extraClassNames="text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-bright-100"
			/>

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
					path="/services"
					buttonText={buttonText}
					buttonContainerExtraClassNames="bg-secondary text-primary-dark hover:bg-primary-bright-600 hover:text-neutral-bright-100"
					buttonTextExtraClassNames="text-sm lg:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
				/>
			</motion.div>
		</div>
	);
}
