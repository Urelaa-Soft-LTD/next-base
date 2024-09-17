"use client";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardContentAfterHover from "./CardContentAfterHover";

export default function TeamMembersCardSlider({ ourTeamMembersData }) {
	const [isScreenSizeSmall, setIsScreenSizeSmall] = useState(false);

	useEffect(() => {
		function handleResize() {
			const width = window.innerWidth;
			if (width < 1024) {
				setIsScreenSizeSmall(true);
			} else {
				setIsScreenSizeSmall(false);
			}
		}

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isScreenSizeSmall]);

	return (
		<motion.div
			initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
			whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
			viewport={{ once: true }}
			transition={{
				type: "tween",
				ease: "easeInOut",
				duration: 0.5,
				delay: 0.4,
			}}
			className=""
		>
			<Swiper
				loop={true}
				slidesPerView={"auto"}
				centeredSlides={true}
				spaceBetween={24}
				grabCursor={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				keyboard={{
					enabled: true,
				}}
				navigation={isScreenSizeSmall === true ? false : true}
				modules={[Autoplay, Keyboard, Navigation]}
			>
				{[...ourTeamMembersData].map((memberInfo, index) => {
					const { name, image, schema } = memberInfo || {};
					return (
						<SwiperSlide key={index} className="!w-[300px]">
							{schema && (
								<script
									type="application/ld+json"
									dangerouslySetInnerHTML={{ __html: schema }}
								/>
							)}
							<div className="relative overflow-hidden h-[398px] rounded-3xl group">
								<CardContentAfterHover
									memberInfo={memberInfo}
								/>

								<Image
									src={
										typeof image === "object"
											? image.image
											: `${IMAGE_URL}/${image}`
									}
									alt={`${name} image`}
									fill
									sizes="100%"
									quality={100}
									className="object-cover object-top"
								/>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</motion.div>
	);
}
