"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ContainedButton from "../buttons/ContainedButton";

export default function JobPostCard({ jobPostInfo }) {
	const {
		_id: slug,
		title,
		description,
		jobType,
		jobLocation,
		active,
	} = jobPostInfo || {};

	const router = useRouter();
	const [isButtonHovered, setIsButtonHovered] = useState(false);

	// Dynamic title based on hover
	const cardTitle = !isButtonHovered ? "Click here to view details" : "";

	return (
		<div
			title={cardTitle}
			onClick={() => router.push(`/jobs?job-title=${slug}`)}
			className={`block h-full relative overflow-hidden rounded-3xl bg-neutral-bright-100 hover:bg-primary-bright-600 transition-colors duration-300 group/wholeCard ${
				!active ? "pointer-events-none" : "cursor-pointer"
			}`}
			aria-label="job information card link"
			aria-disabled={!active}
		>
			<div className="h-full p-6 flex flex-col gap-6">
				<div className="flex-1 space-y-2.5">
					<div className="flex flex-col xs:flex-row sm:flex-col md:flex-row lg:flex-col xl:flex-row items-start justify-between gap-x-4 gap-y-3">
						<h3 className="capitalize text-2xl lg:text-[26px] 2xl:text-[32px] lg:leading-9 2xl:leading-10 font-semibold text-neutral-dark-900 group-hover/wholeCard:text-neutral-bright-100 transition-colors duration-300">
							{title}
						</h3>

						<span className="block order-first xs:order-last sm:order-first md:order-last lg:order-first xl:order-last bg-primary-bright-100 text-neutral-dark-500 group-hover/wholeCard:text-neutral-dark-900 transition-all duration-300 capitalize text-xs font-medium text-nowrap px-4 py-1.5 rounded-full">
							{jobType}
						</span>
					</div>

					<p className="capitalize xl:text-base 2xl:text-lg font-normal whitespace-break-spaces text-neutral-dark-500 group-hover/wholeCard:text-neutral-bright-200 transition-colors duration-300 xl:w-3/4">
						{description}
					</p>
				</div>

				<div className="group/cardButton w-fit">
					<ContainedButton
						onMouseEnter={() => setIsButtonHovered(true)}
						onMouseLeave={() => setIsButtonHovered(false)}
						onClick={(e) => e.stopPropagation()}
						path={`mailto:hr@urelaa.com?subject=Application for ${title} Position`}
						buttonText="Apply here"
						buttonContainerExtraClassNames="w-full bg-primary-bright-600 group-hover/wholeCard:bg-neutral-bright-100 text-neutral-bright-100 group-hover/wholeCard:text-primary-dark group-hover/cardButton:!bg-secondary"
						buttonTextExtraClassNames="text-sm lg:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
					/>
				</div>
			</div>

			{!active && (
				<span
					title="This job is not available right now"
					className="block absolute inset-0 bg-neutral-bright-100/50"
				></span>
			)}
		</div>
	);
}
