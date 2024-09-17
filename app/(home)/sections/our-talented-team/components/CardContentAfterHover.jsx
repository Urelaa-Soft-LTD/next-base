"use client";
import linkedinLogoIcon from "@/public/linkedin-logo.png";
import Image from "next/image";

export default function CardContentAfterHover({ memberInfo }) {
	const { name, postTitle, url } = memberInfo || {};

	const links = [
		{
			linkName: "linkedin",
			path: url,
			icon: linkedinLogoIcon,
		},
	];

	return (
		<div className="absolute inset-0 z-10 lg:bg-primary-dark/30 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
			<div className="absolute bottom-0 w-full p-5 border-2 border-neutral-bright-100 rounded-3xl bg-primary-bright-600 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300">
				<div className="flex items-center justify-between gap-3 flex-wrap">
					{/* name, postTitle */}
					<div className="space-y-1">
						<h3 className="text-lg lg:text-xl text-neutral-bright-100 capitalize font-semibold">
							{name}
						</h3>
						<span className="block capitalize font-medium text-sm text-neutral-bright-200">
							{postTitle}
						</span>
					</div>

					{/* links */}
					<ul className="flex items-center flex-wrap gap-1">
						{links.map((element, idx) => {
							const { linkName, path, icon } = element || {};

							return (
								<li
									key={idx}
									aria-label={`${linkName} link`}
									className="size-8 bg-neutral-bright-100 rounded-full flex justify-center items-center hover:bg-neutral-bright-200 transition-colors duration-300"
								>
									<a
										href={path}
										target="_blank"
										className="block p-2"
									>
										<Image
											src={icon}
											alt={`${linkName} link logo icon`}
											className="size-full object-cover social-logo-icon-color"
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
