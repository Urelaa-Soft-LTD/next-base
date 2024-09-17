import Link from "next/link";
import ContainedButton from "../buttons/ContainedButton";
import TextButton from "../buttons/TextButton";

export default function ErrorPage({ reset, error }) {
	return (
		<div className="space-y-16">
			<div className="text-center space-y-4">
				<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-neutral-bright-100">
					Something went wrong!
				</h2>
				<p className="text-lg lg:text-xl xl:text-2xl italic text-error">
					{error.message}
				</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<ContainedButton
					onClick={() => reset()}
					buttonText="Try again"
					buttonContainerExtraClassNames="bg-primary-bright-600 text-neutral-bright-100 hover:bg-secondary hover:text-primary-dark"
					buttonTextExtraClassNames="text-sm xl:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
				/>
				<p className="text-neutral-bright-200">OR</p>
				<TextButton className="hover:underline hover:underline-offset-8 text-secondary text-2xl transition">
					<Link href="/">Go to Home page</Link>
				</TextButton>
			</div>
		</div>
	);
}
