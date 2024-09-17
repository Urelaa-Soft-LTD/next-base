import facebookLogo from "@/public/facebook-logo.png";
import instagramLogo from "@/public/instagram-logo.png";
import linkedinLogo from "@/public/linkedin-logo.png";
import whatsappLogo from "@/public/whatsapp-logo.png";
import xLogo from "@/public/x-logo.png";
import youtubeLogo from "@/public/youtube-logo.png";
import { ConfigProvider } from "antd";
import { Figtree } from "next/font/google";
import FooterWrapper from "./_shared/layout/footer/FooterWrapper";
import HeaderWrapper from "./_shared/layout/header/HeaderWrapper";
import { GET_SERVICES_URL, GET_SITE_CONFIG_URL, GET_STATIC_PAGES_URL, IMAGE_URL } from "./_shared/lib/constants";
import { getServicesData } from "./_shared/service/services";
import {
	getSiteConfigData,
	getStaticPagesData,
} from "./_shared/service/static-service";
import { hexToRgba } from "./_shared/utils/commonUtils";
import {
	emailSVGIcon,
	mapSVGIcon,
	phoneSVGIcon,
} from "./_shared/utils/svgIcons";
import { colors } from "./_shared/utils/theme";
import "./globals.css";
import { serverSideApi } from "./_shared/service/api";
import { getMetaData } from "./_shared/utils/seoHandler";

// fonts
const figtree = Figtree({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-figtree",
});

// metadata
export async function generateMetadata() {
    return {
		...getMetaData("home"),
		verification: {
			google: "iQB2d6DuTZPDDs5Fq6RSXX9tp7GaBvNc35uE_Bt96ac",
		},
	};
}

export default async function RootLayout({ children }) {
	const siteConfigData = await serverSideApi(GET_SITE_CONFIG_URL);
	const servicesData = await serverSideApi(GET_SERVICES_URL);

	const {
		siteTitle,
		descriptions,
		email,
		phoneNo,
		address,
		facebook: facebookLink,
		instagram: instagramLink,
		x: xLink,
		youtube: youtubeLink,
		linkedin: linkedinLink,
		whatsapp: whatsappLink,
		others: { footerSchema, headerSchema },
	} = siteConfigData.content[0] || {};

	const { content: ourServicesData } = servicesData || {};

	// contact information
	const contactInformation = [
		{
			icon: emailSVGIcon(24, 24),
			title: "Email Us",
			type: "email",
			info: email ? email : "Email not specified",
		},
		{
			icon: phoneSVGIcon(24, 24),
			title: "Call Us",
			type: "phone",
			info: phoneNo ? phoneNo : "Phone No. not specified",
		},
		{
			icon: mapSVGIcon(24, 24),
			title: "Address",
			type: "address",
			info: address ? address : "Address not specified",
		},
	];

	// social media logos and links
	const socialMediaList = [
		{
			thumbnailImage: facebookLogo,
			link: facebookLink,
			title: "Facebook",
		},
		{
			thumbnailImage: whatsappLogo,
			link: whatsappLink,
			title: "Whatsapp",
		},
		{
			thumbnailImage: instagramLogo,
			link: instagramLink,
			title: "Instagram",
		},
		{
			thumbnailImage: xLogo,
			link: xLink,
			title: "X",
		},
		{
			thumbnailImage: linkedinLogo,
			link: linkedinLink,
			title: "Linkedin",
		},
		{
			thumbnailImage: youtubeLogo,
			link: youtubeLink,
			title: "Youtube",
		},
	];

	// header navigation list
	const headerNavigationItems = [
		{
			navName: "Home",
			path: "/",
			subNavItems: [],
		},
		{
			navName: "Services",
			path: "/services",
			subNavItems: [],
		},
		{
			navName: "Products",
			path: "/products",
			subNavItems: [],
		},
		{
			navName: "Projects",
			path: "/projects",
			subNavItems: [],
		},
		// {
		// 	navName: "About Us",
		// 	path: "/about-us",
		// 	subNavItems: [],
		// },
		{
			navName: "Jobs",
			path: "/jobs",
			subNavItems: [],
		},
		{
			navName: "Our Process",
			path: "/our-process",
			subNavItems: [],
		},
		{
			navName: "Blogs",
			path: "/blogs",
			subNavItems: [],
		},
		{
			navName: "Contact Us",
			path: "/contact-us",
			subNavItems: [],
		},
	];

	// footer navigation list (quick links)
	const companyLinkItems = [
		{
			navName: "About Us",
			path: "/about-us",
			subNavItems: [],
		},
		{
			navName: "Our Products",
			path: "/products",
			subNavItems: [],
		},
		{
			navName: "Our Team",
			path: "/#team",
			subNavItems: [],
		},
		{
			navName: "Recent Works",
			path: "/projects",
			subNavItems: [],
		},
		{
			navName: "Our Process",
			path: "/our-process",
			subNavItems: [],
		},
		{
			navName: "Blogs",
			path: "/blogs",
			subNavItems: [],
		},
		{
			navName: "Testimonial",
			path: "/testimonial",
			subNavItems: [],
		},
	];

	// footer navigation list (services)
	const servicesLinkItems = ourServicesData?.map((service) => ({
		navName: service?.title,
		path: `/services/${service?.slug}`,
		subNavItems: [],
	}));

	// footer navigation list (help)
	const helpLinkItems = [
		{
			navName: "FAQ",
			path: "/faq",
			subNavItems: [],
		},
		{
			navName: "Contact us",
			path: "/contact-us",
			subNavItems: [],
		},
		{
			navName: "Privacy Policy",
			path: "/privacy-policy",
			subNavItems: [],
		},
		{
			navName: "Service Inquiry",
			path: "/service-inquiry",
			subNavItems: [],
		},
	];

	return (
		<html lang="en" className={`scroll-smooth ${figtree.variable}`}>
			<body className="font-figtree bg-primary-dark">
				<ConfigProvider
					theme={{
						token: {
							fontSize: 16,
							fontFamily: { figtree },
							colorBgContainer: colors.primary.dark,
							colorBgElevated: colors.primary.dark,
							colorPrimary: colors.secondary,
							colorText: colors.neutral.bright[100],
							colorLink: colors.neutral.bright[200],
							colorLinkActive: colors.secondary,
							colorLinkHover: colors.secondary,
							colorError: colors.error,
							colorWarning: colors.warning,
							colorTextPlaceholder: hexToRgba(
								colors.neutral.bright[200],
								0.7
							),
							colorBorder: colors.neutral.bright[200],
							borderRadius: 8,
							controlHeight: 48,
						},
						components: {
							Select: {
								optionSelectedColor: colors.primary.dark,
								optionSelectedBg: colors.secondary,
								optionActiveBg: hexToRgba(
									colors.neutral.bright[100],
									0.2
								),
							},
							Button: {
								defaultBg: colors.secondary,
								defaultActiveBg: colors.secondary,
								defaultHoverBg: colors.primary.bright[600],
								defaultColor: colors.primary.dark,
								defaultActiveColor: colors.primary.dark,
								defaultHoverColor: colors.neutral.bright[100],
								paddingBlock: 20,
								paddingInline: 40,
							},
							Modal: {
								contentBg: hexToRgba(colors.primary.dark, 0.7),
								headerBg: "transparent",
							},
						},
					}}
					wave={{ disabled: true }}
				>
					<HeaderWrapper
						headerConfig={{
							headerNavigationItems,
							socialMediaList,
						}}
						headerSchema={headerSchema}
					/>
					<main className="min-h-screen">{children}</main>
					<FooterWrapper
						footerConfig={{
							siteName: siteTitle
								? siteTitle
								: "Urelaa Soft Ltd.",
							siteDescription: descriptions
								? descriptions
								: "Connecting businesses with innovative SAAS solutions to drive success and growth worldwide.",
							socialMediaList,
							contactInformation,
							companyLinkItems,
							servicesLinkItems,
							helpLinkItems,
							footerSchema,
						}}
					/>
				</ConfigProvider>
			</body>
		</html>
	);
}
