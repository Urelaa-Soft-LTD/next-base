import Link from "next/link";
import TextButton from "./_shared/components/buttons/TextButton";

export default function NotFoundUI() {
	return (
		<section
			aria-label="not found page"
			className="h-screen bg-primary-dark flex items-center justify-center relative z-50"
		>
			<div className="flex flex-col items-center gap-10">
				<h2 className="text-center text-7xl text-neutral-bright-100">
					Not Found! Error 404
				</h2>
				<div className="text-center space-y-4">
					<p className="text-lg italic text-neutral-bright-200">
						Could not find requested resource
					</p>
					<TextButton className="hover:underline hover:underline-offset-8 text-secondary text-2xl transition">
						<Link href="/">Return Home</Link>
					</TextButton>
				</div>
			</div>
		</section>
	);
}
