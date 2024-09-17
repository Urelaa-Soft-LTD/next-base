"use client";
import { useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import HeaderContent from "../components/HeaderContent";
import HeaderNavigationSidebarContainer from "../components/HeaderNavigationSidebarContainer";
import HeaderNavigationSidebarContent from "../components/HeaderNavigationSidebarContent";

const subMenuHoverMotion = {
	rest: {
		y: -10,
		opacity: 0,
		visibility: "hidden",
	},
	hover: {
		y: 0,
		opacity: 1,
		visibility: "visible",
		transition: {
			type: "tween",
			ease: "easeInOut",
		},
	},
};

export default function PrimaryHeader({ primaryHeaderData }) {
	const { headerConfig } = primaryHeaderData || {};
	const { headerNavigationItems, socialMediaList } = headerConfig || {};

	const [isNavigationSidebarOpened, setIsNavigationSidebarOpened] =
		useState(false);

	return (
		<section>
			{/* header */}
			<HeaderContainer>
				<HeaderContent
					data={{
						headerNavigationItems,
						isNavigationSidebarOpened,
						setIsNavigationSidebarOpened,
					}}
				/>
			</HeaderContainer>

			{/* navigation sidebar */}
			<HeaderNavigationSidebarContainer>
				<HeaderNavigationSidebarContent
					data={{
						headerNavigationItems,
						socialMediaList,
						isNavigationSidebarOpened,
						setIsNavigationSidebarOpened,
					}}
				/>
			</HeaderNavigationSidebarContainer>
		</section>
	);
}
