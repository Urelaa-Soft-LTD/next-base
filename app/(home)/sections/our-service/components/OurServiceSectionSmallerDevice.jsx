"use client";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import { minusSVGIcon, plusSVGIcon } from "@/app/_shared/utils/svgIcons";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function OurServiceSectionSmallerDevice({ ourServicesData }) {
	const [openedOurServiceIndex, setOpenedOurServiceIndex] = useState(0);

	const toggleOurService = (index) => {
		setOpenedOurServiceIndex((prevIndex) =>
			prevIndex === index ? null : index
		);
	};

	// motion configs
	const menuMotion = {
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
	const OurServiceContainerMotion = {
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
	const singleOurServiceMotion = {
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

	return (
		<motion.ul
			variants={OurServiceContainerMotion}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="space-y-4 xs:space-y-5 sm:space-y-6"
		>
			{ourServicesData?.map((element, index) => {
				const { image, title, description, schema } = element || {};
				const isOurServiceOpened = openedOurServiceIndex === index;
				return (
					<motion.li
						key={index}
						variants={singleOurServiceMotion}
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
								toggleOurService(index);
								e.stopPropagation();
							}}
							className="p-6 flex items-start justify-between gap-3 2xs:gap-4 xs:gap-5 sm:gap-6 cursor-pointer"
						>
							<h3
								className={`text-lg xs:text-xl text-neutral-bright-100 hover:text-secondary capitalize font-medium transition-colors duration-300 ${
									isOurServiceOpened && "text-secondary"
								}`}
							>
								{title}
							</h3>

							{/* toggle button */}
							<MotionConfig
								transition={{
									type: "tween",
									ease: [0.25, 0.1, 0.25, 1.0],
									duration: 0.7,
								}}
							>
								<motion.button
									initial={false}
									animate={
										isOurServiceOpened ? "opened" : "closed"
									}
									onClick={(e) => {
										toggleOurService(index);
										e.stopPropagation();
									}}
									className={`relative p-3.5 rounded transition-colors duration-300 ${
										isOurServiceOpened
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
											aria-label="Toggle our service content"
											aria-expanded={isOurServiceOpened}
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
											aria-label="Toggle our service content"
											aria-expanded={isOurServiceOpened}
										>
											{minusSVGIcon(20, 20)}
										</motion.span>
									</span>
								</motion.button>
							</MotionConfig>
						</div>

						<AnimatePresence>
							{isOurServiceOpened && (
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
									<div className="px-6 pb-6 space-y-6">
										{/* image */}
										<div className="relative overflow-hidden aspect-[1.54/1] rounded-xl">
											<Image
												src={
													typeof image === "object"
														? image.image
														: `${IMAGE_URL}/${image}`
												}
												alt={`${title} image`}
												fill
												sizes="100%"
												quality={100}
												className="object-cover"
											/>
										</div>

										{/* description */}
										<p
											className={`capitalize text-sm xs:text-base font-normal whitespace-break-spaces text-neutral-bright-200`}
										>
											{description}
										</p>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.li>
				);
			})}
		</motion.ul>
	);
}
