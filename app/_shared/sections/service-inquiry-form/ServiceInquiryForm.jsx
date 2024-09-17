"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ServiceForm from "../../components/ServiceForm";
import StaffAugmentationServicesCardsContainer from "../../components/StaffAugmentationServicesCardsContainer";
import { getJSONData } from "../../utils/commonUtils";
import TitleDescription from "./components/TitleDescription";

export default function ServiceInquiryForm({ data, homepage = true }) {
	const {
		pageName,
		ourServicesData,
		serviceTitle,
		serviceInquiryOthers,
		serviceInquirySchema,
	} = data || {};
	const {
		serviceInquirySectionTitle,
		serviceInquirySectionDescription,
		serviceInquiryPoints,
	} = serviceInquiryOthers || {};

	const query = useSearchParams();

	const [service, setService] = useState(
		query.get("serviceName") || serviceTitle || "Select Service"
	);

	const serviceObject = ourServicesData?.find(
		(item) => item?.title === service
	);

	const serviceDescription = serviceObject?.content;

	return (
		<section
			aria-label={`${pageName} page service require form section`}
			className="relative bg-primary-dark"
		>
			{serviceInquirySchema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: serviceInquirySchema,
					}}
				/>
			)}
			<div className="absolute inset-0 bg-half-ellipse-custom-gradient opacity-30"></div>
			<div
				className={
					homepage === true
						? "container px-4 sm:px-6 pb-10 pt-24 xs:pb-12 sm:pb-14 md:pb-16 lg:pt-32 lg:pb-[72px] xl:pb-20 2xl:pb-[88px] 3xl:pb-24"
						: "container px-4 sm:px-6 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-[72px] xl:py-20 2xl:py-[88px] 3xl:py-24"
				}
			>
				<div className="grid grid-cols-1 lg:grid-cols-5 items-start lg:gap-14 gap-20">
					<div className="lg:col-span-3">
						<div key={service} className="hidden md:block">
							{service === "Staff Augmentations" ? (
								<StaffAugmentationServicesCardsContainer
									ourServicesData={ourServicesData}
									pageName="service-inquiry"
								/>
							) : (
								<TitleDescription
									data={{
										sectionTitle:
											serviceInquirySectionTitle,
										description:
											serviceInquirySectionDescription,
										points: getJSONData(
											serviceInquiryPoints,
											"array"
										),
									}}
								/>
							)}
						</div>
						<div className="md:hidden">
							<TitleDescription
								data={{
									sectionTitle: serviceInquirySectionTitle,
									description:
										serviceInquirySectionDescription,
									points: getJSONData(
										serviceInquiryPoints,
										"array"
									),
								}}
							/>
						</div>
					</div>

					<div className="lg:col-span-2 lg:sticky lg:top-32 order-first lg:order-last">
						<ServiceForm
							data={{ ourServicesData, service, setService }}
							page={pageName}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
