import ContainedButton from "@/app/_shared/components/buttons/ContainedButton";
import Title from "@/app/_shared/components/texts/Title";
import SaasProductSlider from "./components/SaasProductSlider";

export default function OurSaasProduct({ data }) {
	const { pageName, ourSaasProductsData, ourProductsSectionTitle } =
		data || {};

	return (
		<section
			aria-label={`${pageName} page our products section`}
			className="bg-primary-dark scroll-mt-10"
			id="products"
		>
			<div className="container px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24">
				<div className="space-y-14">
					{/* title */}
					<Title
						title={ourProductsSectionTitle}
						extraClassNames="text-center text-3xl lg:text-4xl xl:text-[42px] xl:leading-[44px] 2xl:text-5xl text-neutral-bright-100"
					/>

					<SaasProductSlider
						ourSaasProductsData={ourSaasProductsData}
					/>

					<div className="w-fit mx-auto">
						<ContainedButton
							path="/products"
							buttonText="See All"
							buttonContainerExtraClassNames="bg-secondary text-primary-dark hover:bg-primary-bright-600 hover:text-neutral-bright-100"
							buttonTextExtraClassNames="text-sm lg:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
