"use client";
import useShowModal from "@/app/_shared/hooks/useShowModal";
import postContactMessageData from "@/app/_shared/service/contact";
import toastMessage from "@/app/_shared/utils/toastMessage";
import serviceFormBg from "@/public/service-form-bg-image.webp";
import { Button, Form, Input } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm({ page }) {
	const { showModal, ModalContent } = useShowModal();

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState("");

	const [isSelectOpened, setIsSelectOpened] = useState(false);

	const [form] = Form.useForm();

	async function onFinish(values) {
		const formData = {
			...values,
		};

		setIsLoading(true);
		setIsError(false);
		setError("");

		try {
			const result = await postContactMessageData(formData);
			if (result) {
				showModal(
					"Your form submitted successfully!",
					"We will contact with you soon. Thank you for reaching us."
				);
				form.resetFields();
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
				name="contactForm"
				onFinish={onFinish}
				initialValues={{}}
				scrollToFirstError
				className="relative bg-primary-dark overflow-hidden border-2 border-neutral-bright-100/50 rounded-xl lg:rounded-2xl"
			>
				<Image
					src={serviceFormBg}
					alt="saas product bg image"
					fill
					sizes="100%"
					quality={100}
					className="object-cover"
				/>

				{/* form content */}
				<div className="h-full relative space-y-6 p-5 sm:p-6 lg:6 xl:p-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{/* name */}
						<Form.Item
							name="fullName"
							rules={[
								{
									required: true,
									message: "Please type Your full name!",
								},
							]}
							className="mb-0"
						>
							<Input placeholder="Full Name" />
						</Form.Item>
						{/* phone number */}
						<Form.Item name="phoneNo" className="mb-0">
							<Input placeholder="Phone Number" />
						</Form.Item>
					</div>

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
								message: "Please type Your E-mail id",
							},
						]}
						className="mb-0"
					>
						<Input placeholder="Enter your Email address" />
					</Form.Item>

					{/* address */}
					<Form.Item name="address" className="mb-0">
						<Input placeholder="Enter Your Address" />
					</Form.Item>

					{/* message */}
					<Form.Item
						name="message"
						rules={[
							{
								required: true,
								message: "Please type the message!",
							},
						]}
						className="mb-0"
					>
						<Input.TextArea rows={4} placeholder="Message" />
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
							Submit Now
						</MotionButton>
					</Form.Item>
				</div>
			</Form>
		</motion.div>
	);
}
