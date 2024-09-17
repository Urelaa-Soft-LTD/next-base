import { headerLogoSVG } from "@/app/_shared/utils/svgIcons";
import Link from "next/link";

export default function HeaderLogo() {
	return (
		<div>
			<Link href="/" aria-label="header logo">
				{headerLogoSVG(
					"size-full max-w-[145px] max-h-[28px] md:max-w-[196] md:max-h-[38px] lg:max-w-[248px] lg:max-h-12"
				)}
			</Link>
		</div>
	);
}
