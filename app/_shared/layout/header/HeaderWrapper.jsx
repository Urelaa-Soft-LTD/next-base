import PrimaryHeader from "./sections/PrimaryHeader";

export default async function HeaderWrapper({ headerConfig, headerSchema }) {
	return (
		<header>
			{headerSchema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: headerSchema }}
				/>
			)}
			<PrimaryHeader primaryHeaderData={{ headerConfig }} />
		</header>
	);
}
