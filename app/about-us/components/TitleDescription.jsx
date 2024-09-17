import Description from "@/app/_shared/components/texts/Description";
import Title from "@/app/_shared/components/texts/Title";

export default function TitleDescription({ title, description }) {
	return (
		<div className="space-y-8">
			{/* title */}
			<Title
				title={title}
				extraClassNames="text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-bright-100"
			/>

			{/* Description */}
			<Description
				description={description}
				extraClassNames="text-base sm:text-lg lg:text-xl text-neutral-bright-200"
			/>
		</div>
	);
}
