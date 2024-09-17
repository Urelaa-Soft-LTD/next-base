"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({
	path,
	children,
	extraClasses,
	onClose = () => {},
}) {
	const pathname = usePathname();
	let active = false;

	// Normalizing pathname and path by replacing "%20" with a space
	// const normalizedPathname = pathname.replace(/%20/g, " ");
	// const normalizedPath = path.replace(/%20/g, " ");

	// Check for exact match
	if (path === "/") {
		active = pathname === path;
	} else {
		active = pathname === path || pathname.startsWith(path + "/");
	}

	return (
		<Link
			href={path}
			className={`block ${active ? "text-secondary font-medium" : ""} ${extraClasses}`}
			onClick={onClose}
		>
			{children}
		</Link>
	);
}
