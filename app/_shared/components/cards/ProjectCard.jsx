import workBgImage from "@/public/recent-work-bg-image.webp";
import Image from "next/image";
import { IMAGE_URL } from "../../lib/constants";
import ContainedButton from "../buttons/ContainedButton";

export default function ProjectCard({ projectInfo, index, dataTitle }) {
	const { image, title, description, slug } = projectInfo || {};

	return (
		<div
			className={`space-y-4 md:space-y-8 ${
				dataTitle !== "recent-projects" && index % 2 !== 0
					? "md:pt-14"
					: ""
			}`}
		>
			<div className="relative overflow-hidden aspect-[1.22/1] rounded-2xl sm:rounded-3xl border-2 border-neutral-bright-100/50 p-6 sm:p-8 md:p-6 lg:p-10 group">
				<div className="absolute -right-32 -bottom-[500px] w-full h-[1000px] bg-half-ellipse-custom-gradient opacity-50"></div>
				<Image
					src={workBgImage}
					alt="bg image"
					fill
					sizes="100%"
					quality={100}
					className="object-cover opacity-80"
				/>

				<div className="relative overflow-hidden aspect-[1.26/1] rounded-xl group-hover:scale-105 transition-transform duration-300">
					<Image
						src={
							typeof image === "object"
								? image.image
								: `${IMAGE_URL}/${image}`
						}
						alt={`${title} image`}
						fill
						sizes="100%"
						quality={100}
						className="object-contain"
					/>
				</div>

				<div className="hidden md:block absolute inset-0 bg-primary-dark/50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"></div>

				<div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
					<ContainedButton
						path={`/projects/${slug}`}
						buttonText="View Project"
						buttonContainerExtraClassNames="bg-secondary text-primary-dark hover:bg-primary-bright-600 hover:text-neutral-bright-100"
						buttonTextExtraClassNames="text-sm lg:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
					/>
				</div>
			</div>

			<div className="space-y-4 px-1 md:px-2">
				<h3
					className={`capitalize text-xl xs:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-bright-100`}
				>
					{title}
				</h3>

				<p
					className={`font-light md:font-normal text-sm md:text-base xl:text-lg whitespace-break-spaces text-neutral-bright-200 line-clamp-3`}
				>
					{description}
				</p>

				<div className="block md:hidden">
					<ContainedButton
						path={`/projects/${slug}`}
						buttonText="View Project"
						buttonContainerExtraClassNames="bg-primary-bright-600 text-neutral-bright-100 hover:bg-secondary hover:text-primary-dark"
						buttonTextExtraClassNames="text-sm lg:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
					/>
				</div>
			</div>
		</div>
	);
}
