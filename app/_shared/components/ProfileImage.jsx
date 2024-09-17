import Image from "next/image";
import { IMAGE_URL } from "../lib/constants";

export default function ProfileImage({ name, profileImage, page }) {
	const nameArray = name.split(" ");

	let firstName = "";
	let lastName = "";

	if (nameArray.length > 0) {
		firstName = nameArray[0];
	}

	if (nameArray.length > 1) {
		lastName = nameArray[1];
	}

	const profileImageName = `${firstName.charAt(0)}${lastName.charAt(0)}`;
	if (profileImage) {
		return (
			<Image
				src={`${IMAGE_URL}/${profileImage}`}
				alt={`${name} image`}
				fill
				sizes="100%"
				quality={100}
				className="object-cover"
			/>
		);
	}
	return (
		<span
			aria-labelledby="first letter of first two words of a name if user image is not available"
			className={`block text-neutral-bright-100 ${
				page === "blog details" ? "text-xs md:text-base" : "text-3xl"
			}`}
		>
			{profileImageName}
		</span>
	);
}
