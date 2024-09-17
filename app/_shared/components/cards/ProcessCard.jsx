import processCardBgImage from "@/public/process-card-bg.webp";
import processCardDot from "@/public/process-dot.webp";
import Image from "next/image";

export default function ProcessCard({ processInfo, index, last }) {
	const { title, description, serial } = processInfo || {};
	const isEven = index % 2 !== 0;

	return (
		<div className={`relative ${isEven ? "p-0 md:pt-32" : ""}`}>
			{/* invisible Box with border */}
			{!last && (
				<div
					className={`absolute z-0 max-md:w-0 md:w-3/4 h-60 ${
						isEven
							? "rounded-tl-[30px] -bottom-44 max-md:left-1/2 max-md:-translate-x-1/2 md:-left-3/4"
							: "rounded-tr-[30px] max-md:-bottom-44 md:top-16 max-md:right-1/2 max-md:translate-x-1/2 md:-right-3/4"
					}`}
					style={
						isEven
							? {
									background:
										"linear-gradient(#110B1F, #110B1F) padding-box, linear-gradient(to right, #FFFFFF, transparent) border-box",
									borderTop: "4px solid transparent",
									borderLeft: "4px solid transparent",
							  }
							: {
									background:
										"linear-gradient(#110B1F, #110B1F) padding-box, linear-gradient(to left, #FFFFFF, transparent) border-box",
									borderTop: "4px solid transparent",
									borderRight: "4px solid transparent",
							  }
					}
				></div>
			)}

			{/* main card */}
			<div className="relative z-10 aspect-[1.46/1] overflow-hidden rounded-[24px] xs:rounded-[30px] border-2 border-neutral-bright-100/50">
				{/* whole content */}
				<div
					className={`relative h-full p-2 md:p-8 bg-primary-dark ${
						isEven
							? "text-center md:text-left"
							: "text-center md:text-right"
					}`}
				>
					{/* gradient */}
					<div className="absolute -right-24 -bottom-[250px] w-full h-[500px] bg-half-ellipse-custom-gradient opacity-40"></div>
					{/* bg image */}
					<Image
						src={processCardBgImage}
						alt="bg image"
						quality={100}
						fill
						sizes="100%"
						className="object-cover"
					/>

					{/* actual content */}
					<div className="relative h-full flex flex-col gap-4 md:gap-2 lg:gap-4 max-md:justify-center max-md:items-center p-3">
						<h3
							className={`capitalize text-xl 3xs:text-2xl md:text-xl font-semibold text-neutral-bright-100`}
						>
							{title}
						</h3>
						<div
							dangerouslySetInnerHTML={{
								__html: description,
							}}
							className={`md:flex-1 md:hidden-and-working-scrollbar font-light md:font-normal text-xs xs:text-sm whitespace-break-spaces text-neutral-bright-200`}
						/>
					</div>
				</div>
			</div>

			{/* dot */}
			{!last && (
				<div
					className={`absolute z-20 ${
						isEven
							? "max-md:left-1/2 max-md:-translate-x-1/2 max-md:-bottom-3 -left-[16px] bottom-12"
							: "max-md:right-1/2 max-md:translate-x-1/2 max-md:-bottom-3 -right-[16px] md:top-12"
					}`}
				>
					<div className="relative overflow-hidden h-6 md:h-8 aspect-square">
						<Image
							src={processCardDot}
							alt="dot image"
							fill
							sizes="100%"
							quality={100}
							className="object-contain"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
