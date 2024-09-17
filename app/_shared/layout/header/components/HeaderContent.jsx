import HeaderContentLinks from "./HeaderContentLinks";
import HeaderLogo from "./HeaderLogo";
import HeaderSwitchButton from "./HeaderSwitchButton";

export default function HeaderContent({ data }) {
	const {
		headerNavigationItems,
		isNavigationSidebarOpened,
		setIsNavigationSidebarOpened,
	} = data || {};

	return (
		<div className="container px-4 sm:px-6">
			<div className="flex items-center gap-10">
				{/* website logo */}
				<HeaderLogo />

				{/* nav page items */}
				<HeaderContentLinks
					headerNavigationItems={headerNavigationItems}
				/>

				{/* switch button for opening navigation sidebar */}
				<HeaderSwitchButton
					data={{
						setIsNavigationSidebarOpened,
						isNavigationSidebarOpened,
					}}
				/>
			</div>
		</div>
	);
}
