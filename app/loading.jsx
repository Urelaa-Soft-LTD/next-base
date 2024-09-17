import Loader from "./_shared/components/ui/Loader";

export default function LoadingUI() {
	return (
		<div className="h-screen flex justify-center items-center bg-primary-dark absolute inset-0 z-50">
			<Loader />
		</div>
	);
}
