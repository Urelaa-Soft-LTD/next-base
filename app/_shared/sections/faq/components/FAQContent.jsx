"use client";
import { MyMotionConfig } from "@/app/_shared/utils/MotionConfig";
import { minusSVGIcon, plusSVGIcon } from "@/app/_shared/utils/svgIcons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function FAQContent({ ourFAQData }) {
	const [openedFAQIndex, setOpenedFAQIndex] = useState(0);

	const toggleFAQ = (index) => {
		setOpenedFAQIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<motion.ul
			variants={FAQContainerMotion}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-10 2xl:space-y-12"
		>
			{ourFAQData?.map((element, index) => {
				const { question, answer, schema } = element || {};
				const isFAQOpened = openedFAQIndex === index;
				return (
					<motion.li
						key={index}
						variants={singleFAQMotion}
						className="rounded-lg border border-neutral-bright-100/30 bg-glass-shine-fill-8"
					>
						{schema && (
							<script
								type="application/ld+json"
								dangerouslySetInnerHTML={{ __html: schema }}
							/>
						)}
						<div
							onClick={(e) => {
								toggleFAQ(index);
								e.stopPropagation();
							}}
							className="p-6 flex items-start justify-between gap-3 2xs:gap-4 xs:gap-5 sm:gap-6 md:gap-4 lg:gap-5 xl:gap-6 cursor-pointer"
						>
							<h3
								className={`text-lg sm:text-xl lg:text-2xl text-neutral-bright-100 hover:text-secondary capitalize font-medium transition-colors duration-300 ${
									isFAQOpened && "text-secondary"
								}`}
							>
								{question}
							</h3>
							<MyMotionConfig duration={0.7}>
								<motion.button
									initial={false}
									animate={isFAQOpened ? "opened" : "closed"}
									onClick={(e) => {
										toggleFAQ(index);
										e.stopPropagation();
									}}
									className={`relative p-3.5 rounded transition-colors duration-300 ${
										isFAQOpened
											? "bg-neutral-bright-100/10 text-secondary"
											: "bg-neutral-bright-100/10 text-neutral-bright-200"
									}`}
								>
									<span className="absolute top-0 left-0">
										<motion.span
											role="button"
											variants={{
												opened: {
													y: 28,
													opacity: 0,
													filter: "blur(5px)",
												},
												closed: {
													y: 0,
													opacity: 1,
													filter: "blur(0px)",
												},
											}}
											className="p-1 flex justify-center items-center"
											aria-label="Toggle FAQ answer"
											aria-expanded={isFAQOpened}
										>
											{plusSVGIcon(20, 20)}
										</motion.span>

										<motion.span
											role="button"
											variants={{
												opened: {
													y: -28,
													opacity: 1,
													filter: "blur(0px)",
												},
												closed: {
													y: -56,
													opacity: 0,
													filter: "blur(5px)",
												},
											}}
											className="p-1 flex justify-center items-center"
											aria-label="Toggle FAQ answer"
											aria-expanded={isFAQOpened}
										>
											{minusSVGIcon(20, 20)}
										</motion.span>
									</span>
								</motion.button>
							</MyMotionConfig>
						</div>

						<AnimatePresence>
							{isFAQOpened && (
								<motion.div
									key={index}
									variants={menuMotion}
									initial="hidden"
									animate="show"
									exit="hidden"
									transition={{
										type: "tween",
										ease: [0.25, 0.1, 0.25, 1.0],
									}}
								>
									<p
										className={`px-6 pb-6 capitalize text-sm lg:text-base font-normal whitespace-break-spaces text-neutral-bright-200`}
									>
										{answer}
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.li>
				);
			})}
		</motion.ul>
	);
}
