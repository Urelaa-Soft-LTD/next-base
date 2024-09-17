import Image from "next/image";
import Link from "next/link";
import { IMAGE_URL } from "../../lib/constants";
import { convertDate } from "../../utils/commonUtils";

export default function PopularBlogCard({ blogInfo }) {
	const { thumbnailImage, title, createdAt, slug } = blogInfo || {};

	return (
		<Link
			href={`/blogs/${slug}`}
			className="grid grid-cols-6 items-center gap-3 sm:max-xl:gap-6 rounded-lg group hover:bg-primary-bright-100 transition-colors duration-300"
		>
			<div className="col-span-2 relative overflow-hidden h-full rounded-tl-lg rounded-bl-lg">
				{/* aspect-[1.26/1] */}
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
					className="object-cover"
				/>
			</div>

			<div className="col-span-4 space-y-2 p-2">
				<h3
					className={`capitalize sm:max-md:text-xl text-base font-semibold text-neutral-dark-900 line-clamp-2 group-hover:text-primary-bright-600 transition-colors duration-300`}
				>
					{title}
				</h3>

				{/* created at date */}
				<span className="block sm:max-md:text-base text-sm text-neutral-dark-500">
					{convertDate(createdAt)}
				</span>
			</div>
		</Link>
	);
}
