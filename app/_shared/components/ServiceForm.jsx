"use client";
import useShowModal from "@/app/_shared/hooks/useShowModal";
import postCustomerQueryData from "@/app/_shared/service/customer-query";
import { colors } from "@/app/_shared/utils/theme";
import toastMessage from "@/app/_shared/utils/toastMessage";
import serviceFormBg from "@/public/service-form-bg-image.webp";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServiceForm({ data, page }) {
	const { ourServicesData, service, setService } = data || {};
	const { showModal, ModalContent } = useShowModal();

	const router = useRouter();
	const query = useSearchParams();
	const selectedStaffType = query.get("type");

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
			const result = await postCustomerQueryData(formData);
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

	const servicesData = ourServicesData.map((item) => ({
		label: item.title,
		value: item.title,
	}));

	useEffect(() => {
		if (selectedStaffType) {
			form.setFieldValue("description", `I want to ${selectedStaffType}`);
		}
	}, [selectedStaffType]);

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
				name="serviceInquiryForm"
				onFinish={onFinish}
				initialValues={{
					serviceName: service,
				}}
				scrollToFirstError
				className="relative overflow-hidden bg-primary-dark border-2 border-neutral-bright-100/50 rounded-xl lg:rounded-2xl"
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
				<div className="h-full relative space-y-6 p-5 sm:p-6 md:p-8 lg:p-6 xl:p-8">
					{/* field selection */}
					<Form.Item
						name="serviceName"
						rules={[
							{
								required: true,
								message: "Please type the service name!",
							},
						]}
						className="mb-0"
					>
						<Select
							aria-label="select service"
							listHeight={ourServicesData?.length * 48}
							placeholder="Select Service"
							options={servicesData}
							onChange={(value) => {
								setService(value);
								if (page === "Service Inquiry") {
									router.push(`?serviceName=${value}`);
								}
							}}
							onDropdownVisibleChange={() =>
								setIsSelectOpened(!isSelectOpened)
							}
							suffixIcon={
								isSelectOpened === true ? (
									<UpOutlined
										style={{
											color: colors.secondary,
										}}
									/>
								) : (
									<DownOutlined
										style={{
											color: colors.secondary,
										}}
									/>
								)
							}
						/>
					</Form.Item>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
						{/* company name */}
						<Form.Item
							name="companyName"
							rules={[
								{
									required: true,
									message: "Please type the company name!",
								},
							]}
							className="mb-0"
						>
							<Input placeholder="Enter Company Name" />
						</Form.Item>

						{/* company email */}
						<Form.Item
							name="email"
							rules={[
								{
									type: "email",
									message: "The input is not valid E-mail!",
								},
								{
									required: true,
									message:
										"Please type the company E-mail id",
								},
							]}
							className="mb-0"
						>
							<Input placeholder="Enter Company Email" />
						</Form.Item>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
						{/* customer name */}
						<Form.Item
							name="customerName"
							rules={[
								{
									required: true,
									message: "Please type your name!",
								},
							]}
							className="mb-0"
						>
							<Input placeholder="Enter Your Name" />
						</Form.Item>

						{/* customer phone number */}
						<Form.Item name="phone" className="mb-0">
							<Input placeholder="Enter Phone Number" />
						</Form.Item>
					</div>

					{/* details */}
					<Form.Item
						name="description"
						rules={[
							{
								required: true,
								message: "Please type the details",
							},
						]}
						className="mb-0"
					>
						<Input.TextArea
							rows={5}
							placeholder="Write The Details"
						/>
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
							Send inquiry
						</MotionButton>
					</Form.Item>
				</div>
			</Form>
		</motion.div>
	);
}
