"use client";
import ProfileImage from "@/app/_shared/components/ProfileImage";
import Rating from "@/app/_shared/components/ui/Rating";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import { colors } from "@/app/_shared/utils/theme";
import testimonialBgImage from "@/public/testimonial-bg-image.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import "swiper/css";
import { Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialSlider({ ourTestimonialData }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef(null);

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
				spaceBetween={30}
				// loop={true}
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
				modules={[Autoplay, Keyboard]}
			>
				{ourTestimonialData.map((element, index) => {
					const {
						clientName,
						clientDesignation,
						clientProfilePicture,
						ratting,
						comment,
						images,
						projectLink,
						projectDomainLink,
						schema,
					} = element || {};
					return (
						<SwiperSlide key={index} className="!h-auto">
							{schema && (
								<script
									type="application/ld+json"
									dangerouslySetInnerHTML={{ __html: schema }}
								/>
							)}
							<div className="h-full relative overflow-hidden aspect-auto rounded-3xl border-2 border-neutral-bright-100/50">
								<div className="absolute left-0 -bottom-[300px] w-full h-[600px] bg-half-ellipse-custom-gradient opacity-40"></div>
								<Image
									src={testimonialBgImage}
									alt="testimonial bg image"
									fill
									sizes="100%"
									quality={100}
									className="object-cover"
								/>

								{/* middle content */}
								<div className="h-full relative p-6">
									<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 3xl:gap-16">
										<div className="space-y-8 md:space-y-14">
											{/* user name, photo, position, rating */}
											<div className="space-y-4">
												{/* image, name, position */}
												<div className="flex items-center gap-3">
													<div className="relative overflow-hidden h-[75px] aspect-square rounded-full bg-primary-dark flex justify-center items-center">
														<ProfileImage
															name={clientName}
															profileImage={
																clientProfilePicture
															}
														/>
													</div>
													{/* name, position */}
													<div className="space-y-1">
														<h3 className="text-xl lg:text-2xl text-neutral-bright-100 capitalize font-semibold">
															{clientName}
														</h3>
														<span className="block capitalize font-medium text-base text-neutral-bright-200">
															{clientDesignation}
														</span>
													</div>
												</div>

												{/* rating */}
												<Rating
													ratingValue={ratting}
													size="24px"
													starBaseColor={
														colors.primary.dark
													}
													starHighlightColor={
														colors.secondary
													}
												/>
											</div>

											{/* user comment */}
											<p
												className={`capitalize xl:text-base 2xl:text-lg font-normal whitespace-break-spaces text-neutral-bright-200`}
											>
												{comment}
											</p>
										</div>

										<Link
											href={
												projectLink ??
												projectDomainLink ??
												"#"
											}
											target="_blank"
											className="hidden md:block relative overflow-hidden h-[420px]"
										>
											<Image
												src={`${IMAGE_URL}/${images[0]}`}
												alt="project image"
												fill
												sizes="100%"
												quality={100}
												className="object-contain"
											/>
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>

			{/* Custom pagination outside Swiper */}
			<div className="custom-pagination">
				{ourTestimonialData.map((_, index) => (
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
