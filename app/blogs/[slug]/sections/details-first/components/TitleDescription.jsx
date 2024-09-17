import ShareButton from "@/app/_shared/components/buttons/ShareButton";
import Caption from "@/app/_shared/components/texts/Caption";
import Title from "@/app/_shared/components/texts/Title";
import { convertDate } from "@/app/_shared/utils/commonUtils";

export default function TitleDescription({ title, updatedAt, slug }) {
	return (
		<div className="space-y-6 text-center">
			{/* title */}
			<Title
				title={title}
				extraClassNames="!font-normal text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl !leading-tight text-neutral-bright-100"
				delay={0}
			/>

			{/* last update date */}
			<Caption
				caption={<span>Last Update: {convertDate(updatedAt)}</span>}
				extraClassNames="text-base lg:text-lg !font-light text-neutral-bright-200"
			></Caption>
			<div className="relative w-full flex justify-center z-30">
				<ShareButton
					buttonClassName="flex gap-2 text-primary-dark items-center bg-secondary rounded-3xl px-4 py-2"
					shareUrl={`https://urelaa.com/blogs/${slug}`}
					title={title}
					iconSize={26}
				/>
			</div>
		</div>
	);
}
