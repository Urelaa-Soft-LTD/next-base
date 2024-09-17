"use client";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import { Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ChoosingReasonsSlider({ ourChoosingReasonsData }) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<motion.div
			initial={{ y: -20, opacity: 0, filter: "blur(5px)" }}
			whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
			viewport={{ once: true }}
			transition={{
				type: "tween",
				ease: "easeInOut",
				delay: 0.4,
			}}
		>
			<Swiper
				loop={true}
				speed={700}
				onSlideChange={(swiper) => {
					setActiveIndex(swiper.realIndex);
				}}
				slidesPerView={"auto"}
				centeredSlides={true}
				spaceBetween={24}
				grabCursor={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				keyboard={{
					enabled: true,
				}}
				modules={[Autoplay, Keyboard]}
			>
				{[
					...ourChoosingReasonsData,
					...ourChoosingReasonsData,
					...ourChoosingReasonsData,
				]?.map((element, index) => {
					const { image, title, description, schema } = element || {};

					return (
						<SwiperSlide
							key={index}
							className={`!h-auto !w-[280px] sm:!w-[304px] xl:!w-[362px] 2xl:!w-[456px] p-6 rounded-3xl ${
								activeIndex === index
									? "bg-primary-bright-600"
									: "bg-primary-bright-50"
							}`}
						>
							{schema && (
								<script
									type="application/ld+json"
									dangerouslySetInnerHTML={{ __html: schema }}
								/>
							)}
							<div className="space-y-8 lg:space-y-10 2xl:space-y-14">
								<div className="relative overflow-hidden h-14 aspect-square">
									<Image
										src={
											typeof image === "object"
												? image.image
												: `${IMAGE_URL}/${image}`
										}
										alt={`reason image ${index + 1}`}
										fill
										sizes="100%"
										quality={100}
										className={`object-contain ${
											activeIndex === index && "invert"
										}`}
									/>
								</div>
								<div className="space-y-2.5">
									<h3
										className={`capitalize text-2xl lg:text-[26px] 2xl:text-[32px] lg:leading-9 2xl:leading-10 font-semibold  ${
											activeIndex === index
												? "text-neutral-bright-100"
												: "text-neutral-dark-900"
										}`}
									>
										{title}
									</h3>

									<p
										className={`capitalize xl:text-base 2xl:text-lg font-normal whitespace-break-spaces  ${
											activeIndex === index
												? "text-neutral-bright-200"
												: "text-neutral-dark-500"
										}`}
									>
										{description}
									</p>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</motion.div>
	);
}
