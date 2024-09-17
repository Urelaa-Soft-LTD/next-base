export default function HeaderContainer({ children }) {
	return (
		<div
			aria-label="header for larger device container"
			className="fixed top-0 left-0 w-full z-40 bg-primary-dark/80 backdrop-blur-md border-b border-neutral-bright-100/10"
		>
			{children}
		</div>
	);
}
