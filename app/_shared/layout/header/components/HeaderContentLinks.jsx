import ContainedButton from "@/app/_shared/components/buttons/ContainedButton";
import CustomLink from "@/app/_shared/components/ui/CustomLink";

export default function HeaderContentLinks({ headerNavigationItems }) {
	return (
		<nav
			aria-label="header content navigation list"
			className="hidden lg:block ml-auto"
		>
			<ul className="flex items-center gap-4 xl:gap-6 2xl:gap-8 text-neutral-bright-100">
				{headerNavigationItems?.map((element, index) => {
					const { navName, path, subNavItems } = element || {};

					return (
						<li
							key={index}
							aria-label={`${navName} link`}
							className="group relative text-sm xl:text-base"
						>
							{subNavItems.length > 0 ? (
								<>
									<div className="py-[30px] xl:py-7 group-hover:text-secondary transition-colors cursor-pointer flex items-center gap-2">
										<span className="block">{navName}</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
											stroke="currentColor"
											className="size-4 group-hover:rotate-180 transition-transform"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m19.5 8.25-7.5 7.5-7.5-7.5"
											/>
										</svg>
									</div>
									{/* sub menu after hover */}
									<ul className="bg-primary-dark/80 backdrop-blur-md absolute left-0 z-50 w-52 xl:w-60 overflow-hidden opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out">
										{subNavItems.map((element, index) => {
											const {
												nestedNavName,
												nestedPath,
											} = element || {};
											return (
												<li
													key={index}
													aria-label={nestedNavName}
													className="text-nowrap text-neutral-bright-100 hover:text-secondary"
												>
													<CustomLink
														path={`${path}${nestedPath}`}
														extraClasses="block py-3 px-4 hover:pl-6 transition-all"
													>
														{nestedNavName}
													</CustomLink>
												</li>
											);
										})}
									</ul>
								</>
							) : (
								<CustomLink
									path={path}
									extraClasses="block py-[30px] xl:py-7 group-hover:text-secondary transition-colors"
								>
									{navName}
								</CustomLink>
							)}
						</li>
					);
				})}

				<li>
					<ContainedButton
						path="/service-inquiry"
						buttonText="Work with us"
						buttonContainerExtraClassNames="bg-primary-bright-600 text-neutral-bright-100 hover:bg-secondary hover:text-primary-dark"
						buttonTextExtraClassNames="text-sm xl:text-base text-nowrap px-4 xl:px-6 py-2 xl:py-2.5"
					/>
				</li>
			</ul>
		</nav>
	);
}
