import CardsGridContainer from "@/app/_shared/components/cards/CardsGridContainer";
import ContainedButton from "../../components/buttons/ContainedButton";
import TitleAndCaption from "./components/TitleAndCaption";

export default function Blogs({ data, firstSection = true }) {
	const { pageName, ourBlogsData, others } = data || {};
	const { blogsPageSectionTitle, blogsPageSectionCaption } = others || {};

	return (
		<section
			aria-label={`${pageName} page blogs section`}
			className="bg-primary-dark"
		>
			<div
				className={`container ${
					firstSection === true
						? "px-4 sm:px-6 pb-10 pt-24 xs:pb-12 sm:pb-14 md:pb-16 md:pt-32 lg:pb-[72px] xl:pb-20 2xl:pb-[88px] 3xl:pb-24"
						: "px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24"
				}`}
			>
				<div className="space-y-14">
					<TitleAndCaption
						data={{
							blogsPageSectionTitle,
							blogsPageSectionCaption,
						}}
					/>

					<CardsGridContainer
						data={{
							dataTitle: "blogs",
							information: ourBlogsData,
						}}
					/>
					{firstSection === true ? null : (
						<div className="w-fit mx-auto">
							<ContainedButton
								path="/blogs"
								buttonText="See All"
								buttonContainerExtraClassNames="bg-secondary text-primary-dark hover:bg-primary-bright-600 hover:text-neutral-bright-100"
								buttonTextExtraClassNames="text-sm lg:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
