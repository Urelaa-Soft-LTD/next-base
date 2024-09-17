"use client";
import useShowModal from "@/app/_shared/hooks/useShowModal";
import postCommentMessageData from "@/app/_shared/service/blog";
import { hexToRgba } from "@/app/_shared/utils/commonUtils";
import { colors } from "@/app/_shared/utils/theme";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CommentBox({
	blogId,
	loadComments,
	replyOf,
	setShowReplyBox,
}) {
	const { showModal, ModalContent } = useShowModal();
	const [form] = Form.useForm();

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState("");

	const inputRef = useRef(null);

	async function onFinish(values) {
		if (values?.remember === true) {
			localStorage.setItem("name", values?.name);
			localStorage.setItem("email", values?.email);
		}

		if (values?.remember === false) {
			localStorage.removeItem("name");
			localStorage.removeItem("email");
		}

		const rememberMe = values.remember;

		delete values.remember;

		const formData = {
			blog: blogId,
			replyOf: replyOf?._id,
			...values,
		};

		setIsLoading(true);
		setIsError(false);
		setError("");

		try {
			const result = await postCommentMessageData(formData);
			if (result) {
				showModal(
					"Your comment posted successfully!",
					"Thank you for your comment. Get in touch with Urelaa Soft Ltd."
				);
				loadComments && loadComments();
				if (rememberMe) {
					form.setFieldValue("message", "");
				} else {
					form.resetFields();
				}
				setShowReplyBox && setShowReplyBox(null);
			}
		} catch (error) {
			setIsError(true);
			setError(error?.message);
			toastMessage(
				"error",
				"Error",
				"An error occurred! Please try again."
			);
		} finally {
			setIsLoading(false);
		}
	}

	const MotionButton = motion(Button);

	// motion configs
	const motionVariant = {
		hidden: {
			opacity: 0,
			y: 20,
			filter: "blur(5px)",
		},
		show: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
		},
		transition: {
			type: "tween",
			ease: [0.25, 0.1, 0.25, 1.0],
		},
	};

	useEffect(() => {
		if (replyOf && inputRef.current) {
			inputRef.current.focus({
				cursor: "end",
			});
		}
	}, [inputRef.current]);

	useEffect(() => {
		const storedName = localStorage.getItem("name");
		const storedEmail = localStorage.getItem("email");

		if (storedName) {
			form.setFieldValue("name", storedName);
		}
		if (storedEmail) {
			form.setFieldValue("email", storedEmail);
		}
	}, []);

	return (
		<motion.div
			variants={motionVariant}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			transition={{
				delay: 0.2,
			}}
		>
			{ModalContent}
			<Form
				layout="vertical"
				form={form}
				name="blogCommentForm"
				onFinish={onFinish}
				initialValues={{
					remember: true,
					message: replyOf?.name ? `@${replyOf?.name} ` : "",
				}}
				scrollToFirstError
				className="space-y-6"
			>
				<ConfigProvider
					theme={{
						token: {
							colorBgContainer: colors.primary.bright[50],
							colorPrimary: colors.primary.bright[600],
							colorText: colors.neutral.dark[900],
							colorTextPlaceholder: hexToRgba(
								colors.neutral.dark[900],
								0.7
							),
							colorBorder: hexToRgba(
								colors.neutral.dark[900],
								0.7
							),
							borderRadius: 6,
						},
						components: {
							Button: {
								defaultBg: colors.primary.bright[600],
								defaultActiveBg: colors.primary.bright[600],
								defaultHoverBg: colors.secondary,
								defaultColor: colors.neutral.bright[100],
								defaultActiveColor: colors.neutral.bright[100],
								defaultHoverColor: colors.primary.dark,
							},
						},
					}}
				>
					<Form.Item
						name="message"
						rules={[
							{
								required: true,
								message: "Please type the comment!",
							},
						]}
						className="mb-0"
					>
						<Input.TextArea
							ref={inputRef}
							rows={4}
							placeholder="Enter your comment here"
						/>
					</Form.Item>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{/* name */}
						<Form.Item
							name="name"
							rules={[
								{
									required: true,
									message: "Please type your name!",
								},
							]}
							className="mb-0"
						>
							<Input placeholder="Your Name" />
						</Form.Item>

						{/* email */}
						<Form.Item
							name="email"
							rules={[
								{
									type: "email",
									message: "The input is not valid E-mail!",
								},
								{
									required: true,
									message: "Please type your E-mail id",
								},
							]}
							className="mb-0"
						>
							<Input placeholder="Your Email address" />
						</Form.Item>
					</div>

					<Form.Item
						name="remember"
						valuePropName="checked"
						className="m-0"
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item className="mb-0">
						<MotionButton
							loading={isLoading}
							htmlType="submit"
							initial="hidden"
							whileHover="show"
							exit="hidden"
							className="w-full border-none text-base font-semibold capitalize active:scale-[0.97] transition-all duration-300"
						>
							{replyOf ? "Post reply" : "Post comment"}
						</MotionButton>
					</Form.Item>
				</ConfigProvider>
			</Form>
		</motion.div>
	);
}
