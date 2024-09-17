import loadingImage from "@/public/urelaa-loader-logo.webp";
import Image from "next/image";
export default function Loader() {
	return (
		<Image
			src={loadingImage}
			alt="LOADING"
			className="object-contain size-10 sm:size-24"
		/>
	);
}
