import ContainedButton from "@/app/_shared/components/buttons/ContainedButton";
import DoubleButtons from "@/app/_shared/components/DoubleButtons";

export default function TitleDescriptionCaptionButtons({
	title,
	caption,
	isHomePage,
}) {
	return (
		<div className="space-y-14">
			<div className="space-y-6 max-lg:text-center">
				{/* title */}
				<h1 className="capitalize font-semibold text-3xl xl:text-4xl 2xl:text-5xl 2xl:!leading-[56px] 3xl:text-[56px] 3xl:!leading-[70px] text-neutral-bright-100 lg:!uppercase">
					{title}
				</h1>

				{/* caption */}
				<span className="block text-lg lg:text-xl xl:text-2xl text-neutral-bright-200 font-normal">
					{caption}
				</span>
			</div>

			<div className="max-lg:w-fit max-lg:mx-auto">
				{isHomePage === true ? (
					<DoubleButtons
						firstButtonText="Get Started"
						firstButtonPath="/service-inquiry"
						secondButtonText="Contact Us"
						secondButtonPath="/contact-us"
						effect={false}
					/>
				) : (
					<ContainedButton
						path="#jobs"
						buttonText="Search a Job"
						buttonContainerExtraClassNames="bg-secondary text-primary-dark hover:bg-primary-bright-600 hover:text-neutral-bright-100"
						buttonTextExtraClassNames="text-sm lg:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
					/>
				)}
			</div>
		</div>
	);
}
