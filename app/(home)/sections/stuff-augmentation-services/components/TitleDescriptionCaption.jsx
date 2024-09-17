import Caption from "@/app/_shared/components/texts/Caption";
import Description from "@/app/_shared/components/texts/Description";
import Title from "@/app/_shared/components/texts/Title";

export default function TitleDescriptionCaption({
	caption,
	title,
	description,
}) {
	return (
		<div className="space-y-4 text-center">
			{/* caption */}
			<Caption
				caption={caption}
				extraClassNames="text-xs sm:text-sm lg:text-base text-neutral-bright-100"
			/>

			{/* title */}
			<Title
				title={title}
				extraClassNames="text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-bright-100"
			/>

			{/* Description */}
			<Description
				description={description}
				extraClassNames="lg:w-10/12 lg:mx-auto text-base sm:text-lg lg:text-xl text-neutral-bright-200"
			/>
		</div>
	);
}
