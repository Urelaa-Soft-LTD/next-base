"use client";
import BulletPoints from "@/app/_shared/components/BulletPoints";
import ContactInfo from "@/app/_shared/components/ContactInfo";
import Title from "@/app/_shared/components/texts/Title";

export default function TitleDescription({ data }) {
	const { sectionTitle, points, contactInformation } = data || {};

	// motion configs
	const listContainerMotion = {
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
	const listMotion = {
		hidden: {
			opacity: 0,
			filter: "blur(5px)",
		},
		show: {
			opacity: 1,
			filter: "blur(0px)",
		},
	};

	return (
		<div className="space-y-10 md:space-y-24">
			<div className="space-y-10">
				{/* title */}
				<Title
					title={sectionTitle}
					extraClassNames="text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-bright-100"
				/>

				{/* Description */}
				<BulletPoints points={points} />
			</div>

			<ContactInfo
				contactInformation={contactInformation}
				footer={false}
			/>
		</div>
	);
}
