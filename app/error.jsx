"use client";
import ErrorPage from "./_shared/components/ui/ErrorPage";

export default function ErrorUI({ error, reset }) {
	return (
		<section
			aria-label="error page"
			className="h-screen bg-primary-dark flex items-center justify-center relative z-50"
		>
			<ErrorPage reset={reset} error={error} />
		</section>
	);
}
