import Caption from "@/app/_shared/components/texts/Caption";
import Title from "@/app/_shared/components/texts/Title";

export default function TitleAndCaption({ data }) {
	const { blogsPageSectionTitle, blogsPageSectionCaption } = data || {};

	return (
		<div className="space-y-4">
			{/* caption */}
			<Caption
				caption={blogsPageSectionCaption}
				extraClassNames="text-center text-xs sm:text-sm lg:text-base text-neutral-bright-100"
			/>

			{/* title */}
			<Title
				title={blogsPageSectionTitle}
				extraClassNames="text-center text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-bright-100"
			/>
		</div>
	);
}
