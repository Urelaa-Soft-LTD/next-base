import workBgImage from "@/public/recent-work-bg-image.webp";
import Image from "next/image";
import Link from "next/link";
import { IMAGE_URL } from "../../lib/constants";
import { convertDate } from "../../utils/commonUtils";
import ShareButton from "../buttons/ShareButton";

export default function BlogCard({ blogInfo, index }) {
	const { thumbnailImage, title, description, slug, createdAt } =
		blogInfo || {};

	return (
		<Link
			href={`/blogs/${slug}`}
			className="block h-full relative overflow-hidden aspect-auto rounded-xl border-2 border-neutral-bright-100/50 group"
		>
			<div className="absolute -right-48 -bottom-[300px] w-full h-[600px] bg-half-ellipse-custom-gradient opacity-20"></div>
			<Image
				src={workBgImage}
				alt="bg image"
				fill
				sizes="100%"
				quality={100}
				className="object-cover"
			/>

			<div className="h-full">
				<div className="relative overflow-hidden aspect-video">
					<Image
						src={
							typeof thumbnailImage === "object"
								? thumbnailImage.image
								: `${IMAGE_URL}/${thumbnailImage}`
						}
						alt={`${title} image`}
						fill
						sizes="100%"
						quality={100}
						className="object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>

				<div className="p-4 h-64 xs:p-6 flex flex-col justify-between gap-6">
					<div className="space-y-4">
						<h3 className="capitalize text-base xs:text-lg md:text-xl lg:text-xl font-semibold text-neutral-bright-100 line-clamp-2">
							{title}
						</h3>

						<p className="font-light md:font-normal text-xs xs:text-sm whitespace-break-spaces text-neutral-bright-200 line-clamp-4">
							{description}
						</p>
					</div>
					<div className="relative flex justify-between items-center">
						<p className="text-primary-bright-100">
							{convertDate(createdAt)}
						</p>
						<ShareButton
							buttonClassName="flex gap-2 text-secondary items-center"
							popover={true}
							shareUrl={`https://urelaa.com/blogs/${slug}`}
							title={title}
							iconSize={32}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
}
