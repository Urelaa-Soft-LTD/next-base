import Link from "next/link";

export default function ContainedButton({ ...rest }) {
	const {
		path,
		buttonText,
		buttonContainerExtraClassNames,
		buttonTextExtraClassNames,
		rel,
		...buttonRestProps
	} = {
		...rest,
	};

	return (
		<button
			{...buttonRestProps}
			className={`rounded-lg active:scale-[0.97] transition-all duration-300 ${buttonContainerExtraClassNames}`}
		>
			{path ? (
				path?.startsWith("mailto:") || path?.startsWith("tel:") ? (
					<a
						target="_blank"
						href={path}
						className={`block capitalize font-semibold ${buttonTextExtraClassNames}`}
					>
						{buttonText}
					</a>
				) :
				rel ? (
					<Link
						href={path}
						rel={rel}
						className={`block capitalize font-semibold ${buttonTextExtraClassNames}`}
					>
						{buttonText}
					</Link>
				) : (
					<Link
						href={path}
						className={`block capitalize font-semibold ${buttonTextExtraClassNames}`}
					>
						{buttonText}
					</Link>
				)
			) : (
				<span
					className={`block capitalize font-semibold ${buttonTextExtraClassNames}`}
				>
					{buttonText}
				</span>
			)}
		</button>
	);
}
