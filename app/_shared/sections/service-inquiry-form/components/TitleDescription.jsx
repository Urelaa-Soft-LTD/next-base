"use client";
import BulletPoints from "@/app/_shared/components/BulletPoints";
import Title from "@/app/_shared/components/texts/Title";

export default function TitleDescription({ data }) {
	const { sectionTitle, description, points } = data || {};

	return (
		<div className="space-y-10">
			{/* title */}
			<Title
				title={sectionTitle}
				extraClassNames="text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-bright-100"
			/>

			{/* Description */}
			<BulletPoints points={points} />
		</div>
	);
}
