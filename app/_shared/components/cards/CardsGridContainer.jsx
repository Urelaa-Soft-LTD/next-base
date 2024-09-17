"use client";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import JobPostCard from "./JobPostCard";
import PopularBlogCard from "./PopularBlogCard";
import ProcessCard from "./ProcessCard";
import ProductCard from "./ProductCard";
import ProjectCard from "./ProjectCard";
import ServiceCard from "./ServiceCard";
import SmallerCard from "./SmallerCard";
import StaffAugmentationServiceCard from "./StaffAugmentationServiceCard";

export default function CardsGridContainer({ data }) {
	let { dataTitle, information, visibleItems, pageName } = data || {};

	// motion configs
	const cardsContainerMotion = {
		hidden: {
			transition: {
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
		show: {
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.1,
				staggerDirection: 1,
			},
		},
	};

	// motion configs
	const cardMotion = {
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

	function cardRender(dataTitle, info, index) {
		if (dataTitle === "job-post-card") {
			return <JobPostCard jobPostInfo={info} />;
		}
		if (dataTitle === "staff-augmentation-service-card") {
			return (
				<StaffAugmentationServiceCard
					staffAugmentationServiceInfo={info}
				/>
			);
		}
		if (dataTitle === "projects") {
			return (
				<ProjectCard
					projectInfo={info}
					index={index}
					dataTitle={dataTitle}
				/>
			);
		}
		if (dataTitle === "blogs") {
			return <BlogCard blogInfo={info} index={index} />;
		}
		if (dataTitle === "popular-blogs") {
			return <PopularBlogCard blogInfo={info} />;
		}
		if (
			dataTitle === "project-details-page-projects" ||
			dataTitle === "product-details-page-products"
		) {
			return <SmallerCard itemInfo={info} dataTitle={dataTitle} />;
		}
		if (dataTitle === "recent-projects") {
			return <ProjectCard projectInfo={info} dataTitle={dataTitle} />;
		}
		if (dataTitle === "services") {
			return <ServiceCard serviceInfo={info} index={index} />;
		}
		if (dataTitle === "products") {
			return <ProductCard productInfo={info} index={index} />;
		}
		if (dataTitle === "process-card") {
			return (
				<ProcessCard
					processInfo={info}
					index={index}
					last={information.length === index + 1}
				/>
			);
		}
	}

	function cardGridShow() {
		if (dataTitle === "projects") {
			return "md:grid-cols-2 gap-16 md:gap-12 lg:gap-16 xl:gap-24";
		}
		if (dataTitle === "blogs") {
			return "md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 lg:gap-14";
		}
		if (dataTitle === "staff-augmentation-service-card") {
			if (pageName === "service-inquiry") {
				return "md:grid-cols-2 gap-8 justify-items-center";
			}
			return "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center";
		}
		if (dataTitle === "popular-blogs") {
			return "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-6";
		}
		if (
			dataTitle === "project-details-page-projects" ||
			dataTitle === "product-details-page-products"
		) {
			return "md:grid-cols-2 lg:grid-cols-3 gap-6";
		}
		if (dataTitle === "process-card") {
			return "md:grid-cols-2 max-md:gap-y-24 md:gap-x-14 lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24 3xl:gap-x-28";
		}
		if (dataTitle === "recent-projects") {
			return "md:grid-cols-2 gap-x-7 gap-y-14";
		}
		if (dataTitle === "services" || dataTitle === "products") {
			return "gap-12 xs:gap-16 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32 2xl:gap-36 3xl:gap-40";
		}
		return "sm:grid-cols-2 lg:grid-cols-3 gap-6";
	}

	return (
		<motion.div
			key={visibleItems}
			variants={cardsContainerMotion}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className={`grid grid-cols-1 ${cardGridShow()}`}
		>
			{information?.map((info, index) => (
				<motion.div variants={cardMotion} key={index}>
					{info?.schema && (
						<script
							type="application/ld+json"
							dangerouslySetInnerHTML={{
								__html: info.schema,
							}}
						/>
					)}
					{cardRender(dataTitle, info, index)}
				</motion.div>
			))}
		</motion.div>
	);
}
