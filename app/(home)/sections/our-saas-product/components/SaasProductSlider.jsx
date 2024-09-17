"use client";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import saasProductBgImage from "@/public/saas-product-bg-image.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SaasProductSlider({ ourSaasProductsData }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isScreenSizeSmall, setIsScreenSizeSmall] = useState(false);

	const swiperRef = useRef(null);

	useEffect(() => {
		function handleResize() {
			const width = window.innerWidth;
			if (width < 768) {
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

	const handlePaginationClick = (index) => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideToLoop(index); // Using slideToLoop instead of slideTo
		}
	};

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
		>
			<Swiper
				ref={swiperRef}
				onSlideChange={(swiper) => {
					setActiveIndex(swiper.realIndex);
				}}
				slidesPerView={1}
				spaceBetween={16}
				centeredSlides={true}
				loop={true}
				speed={1000}
				grabCursor={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				keyboard={{
					enabled: true,
				}}
				navigation={isScreenSizeSmall ? false : true}
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					1280: {
						slidesPerView: 3,
						spaceBetween: 32,
					},
				}}
				modules={[Autoplay, Navigation, Keyboard]}
			>
				{ourSaasProductsData.map((element, index) => {
					const { title, description, image, slug, schema } =
						element || {};
					return (
						<SwiperSlide key={index} className="!h-auto">
							{schema && (
								<script
									type="application/ld+json"
									dangerouslySetInnerHTML={{ __html: schema }}
								/>
							)}
							<Link
								href={`/products/${slug}`}
								className="block h-full relative overflow-hidden aspect-auto rounded-3xl border-2 border-neutral-bright-100/50"
							>
								<div className="absolute left-0 -bottom-[300px] w-full h-[600px] bg-half-ellipse-custom-gradient opacity-40"></div>
								<Image
									src={saasProductBgImage}
									alt="saas product bg image"
									fill
									sizes="100%"
									quality={100}
									className="object-cover opacity-80"
								/>

								{/* middle content */}
								<div className="h-full relative p-6 md:p-8 lg:p-10">
									<div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
										<div className="space-y-4">
											<h3
												className={`capitalize text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-bright-100`}
											>
												{title}
											</h3>

											<p
												className={`font-light md:font-normal text-sm md:text-base whitespace-break-spaces text-neutral-bright-200`}
											>
												{description}
											</p>
										</div>

										<div className="relative overflow-hidden h-64 lg:h-80 aspect-[0.86/1] order-first">
											<Image
												src={
													typeof image === "object"
														? image.image
														: `${IMAGE_URL}/${image}`
												}
												alt={`${title} image`}
												fill
												sizes="100%"
												className="object-contain"
											/>
										</div>
									</div>
								</div>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>

			{/* Custom pagination outside Swiper */}
			<div className="custom-pagination">
				{ourSaasProductsData.map((_, index) => (
					<span
						key={index}
						className={`pagination-bullet ${
							index === activeIndex ? "active" : ""
						}`}
						onClick={() => handlePaginationClick(index)}
					/>
				))}
			</div>
		</motion.div>
	);
}
