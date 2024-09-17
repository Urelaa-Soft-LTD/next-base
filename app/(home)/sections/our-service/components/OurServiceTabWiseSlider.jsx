"use client";
import { IMAGE_URL } from "@/app/_shared/lib/constants";
import ourServiceBgImage from "@/public/our-service-bg-image.webp";
import { Button, Tabs } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function OurServiceTabWiseSlider({ ourServicesData }) {
	const [activeId, setActiveId] = useState();

	const items = ourServicesData.map((e) => ({
		key: e._id,
		label: e.title,
		children: (
			<motion.div
				key={activeId}
				initial={{ opacity: 0.5, filter: "blur(5px)" }}
				animate={{ opacity: 1, filter: "blur(0px)" }}
				transition={{
					type: "tween",
					ease: "easeInOut",
					duration: 0.8,
				}}
				className="relative overflow-hidden aspect-auto rounded-3xl border-2 border-neutral-bright-100/50 bg-primary-dark"
			>
				{e.schema && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: e.schema }}
					/>
				)}
				<div className="absolute left-0 -bottom-[300px] w-full h-[600px] bg-half-ellipse-custom-gradient opacity-40"></div>
				<Image
					src={ourServiceBgImage}
					alt="saas product bg image"
					fill
					sizes="100%"
					quality={100}
					priority={true}
					className="object-cover opacity-70"
				/>
				<div className="h-full relative p-10 lg:px-28 lg:py-20">
					<div className="flex flex-col md:flex-row items-center gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 3xl:gap-20">
						<div className="basis-1/2 space-y-8">
							<div className="space-y-4">
								<h3
									className={`capitalize text-3xl lg:text-4xl font-semibold text-neutral-bright-100`}
								>
									{e.title}
								</h3>

								<p
									className={`text-base 2xl:text-lg font-light md:font-normal whitespace-break-spaces text-neutral-bright-200`}
								>
									{e.description}
								</p>
							</div>

							<Button
								href={`/service-inquiry?serviceName=${e.title}`}
								className="border-none text-base font-semibold capitalize active:scale-[0.97] transition-all duration-300"
							>
								Get a Schedule
							</Button>
						</div>

						<div className="basis-1/2 relative overflow-hidden aspect-[1.54/1] rounded-xl">
							<Image
								src={
									typeof e.image === "object"
										? e.image.image
										: `${IMAGE_URL}/${e.image}`
								}
								alt={`${e.title} image`}
								fill
								sizes="100%"
								quality={100}
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</motion.div>
		),
	}));

	return (
		<Tabs
			tabPosition="top"
			defaultActiveKey="1"
			items={items}
			onChange={(activekey) => setActiveId(activekey)}
		/>
	);
}
