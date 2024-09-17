"use client";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import TitleDescription from "./components/TitleDescription";

export default function BlogDetailsFirst({ data }) {
	const { thumbnailImage, title, updatedAt, slug } = data || {};

	return (
		<section
			aria-label={`${title} page details first section`}
			className="relative bg-primary-dark"
		>
			<div className="absolute inset-0 bg-half-ellipse-custom-gradient opacity-30 z-0"></div>
			<div className="container px-4 sm:px-6 pb-10 pt-24 xs:pb-12 sm:pb-14 md:pb-16 lg:pb-[72px] lg:pt-32 xl:pb-20 2xl:pb-[88px] 3xl:pb-24">
				<div className="max-w-6xl mx-auto space-y-10 md:space-y-16">
					<TitleDescription title={title} updatedAt={updatedAt} slug={slug}/>
					<motion.div
						initial={{ y: -20, opacity: 0, filter: "blur(5px)" }}
						whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
						viewport={{ once: true }}
						transition={{
							type: "tween",
							ease: [0.25, 0.1, 0.25, 1.0],
							delay: 0.2,
						}}
						className="relative overflow-hidden aspect-video rounded-xl"
					>
						<Image
							src={
								typeof thumbnailImage === "object"
									? thumbnailImage.image
									: `${IMAGE_URL}/${thumbnailImage}`
							}
							alt={`${title} image`}
							fill
							sizes="100%"
							quality={100}
							className="object-cover"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
