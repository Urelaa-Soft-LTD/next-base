"use client";
import { ShareAltOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { motion } from "framer-motion";
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TelegramIcon,
	TelegramShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from "next-share";
import { useEffect, useState } from "react";

const ShareButton = ({
	shareUrl,
	title,
	popover = false,
	iconSize = 32,
	buttonClassName,
}) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Detect if the device is mobile
		const userAgent =
			typeof window.navigator === "undefined" ? "" : navigator.userAgent;
		const isMobileDevice =
			/android|iphone|ipad|ipod|opera mini|blackberry|webos|iemobile/i.test(
				userAgent
			);
		setIsMobile(isMobileDevice);
	}, []);

	// Function to trigger native share dialog on mobile
	const handleMobileShare = async (event) => {
		event.stopPropagation();
		if (navigator.share) {
			try {
				await navigator.share({
					title: title,
					text: "I found this amazing blog post, check it out!",
					url: shareUrl, // Replace with your actual URL
				});
			} catch (error) {
				// console.error('Error sharing:', error);
			}
		} else {
			alert("Web Share API is not supported in this browser.");
		}
	};

	// Content of the popup (icons with share buttons)
	const content = (
		<div className="flex gap-3">
			<FacebookShareButton url={shareUrl} title={title}>
				<FacebookIcon size={iconSize} round />
			</FacebookShareButton>

			<TwitterShareButton url={shareUrl} title={title}>
				<TwitterIcon size={iconSize} round />
			</TwitterShareButton>

			<LinkedinShareButton url={shareUrl} title={title}>
				<LinkedinIcon size={iconSize} round />
			</LinkedinShareButton>

			<TelegramShareButton url={shareUrl} title={title}>
				<TelegramIcon size={iconSize} round />
			</TelegramShareButton>

			<WhatsappShareButton url={shareUrl} title={title}>
				<WhatsappIcon size={iconSize} round />
			</WhatsappShareButton>
		</div>
	);

	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(5px)" }}
			whileInView={{ opacity: 1, filter: "blur(0px)" }}
			viewport={{ once: true }}
			transition={{
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1.0],
				delay: 0.2,
			}}
		>
			{isMobile ? (
				// Mobile: Trigger Web Share API
				<button
					className={
						buttonClassName ??
						"flex gap-2 items-center bg-primary-bright-600 text-white px-4 py-2 rounded-3xl"
					}
					onClick={handleMobileShare}
				>
					<ShareAltOutlined />
					Share
				</button>
			) : popover ? (
				<Popover
					content={content}
					trigger="hover"
					// placement="bottom"
				>
					{/* Share Button */}
					<button
						className={
							buttonClassName ??
							"px-2 py-2 rounded-3xl transition text-primary-bright-600"
						}
					>
						<ShareAltOutlined />
						Share
					</button>
				</Popover>
			) : (
				content
			)}
		</motion.div>
	);
};

export default ShareButton;
