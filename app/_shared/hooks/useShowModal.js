"use client";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useState } from "react";
import { hexToRgba } from "../utils/commonUtils";
import { colors } from "../utils/theme";

export default function useShowModal(params) {
	const { width = 500, modalFooter = true } = params ?? {};

	const [modalOpen, setModalOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const showModal = (_title, _content) => {
		setTitle(_title);
		setContent(_content);
		setTimeout(() => {
			setModalOpen(true);
		}, 300);
	};

	return {
		showModal,
		ModalContent: (
			<Modal
				title={title}
				centered
				open={modalOpen}
				onCancel={() => setModalOpen(false)}
				closeIcon={
					<CloseOutlined
						style={{
							color: colors.secondary,
						}}
					/>
				}
				footer={
					modalFooter ? (
						<Button
							onClick={() => setModalOpen(false)}
							className="mt-6 border-none text-base font-semibold active:scale-[0.97] transition-all duration-300"
						>
							Ok
						</Button>
					) : null
				}
				style={{
					backdropFilter: "blur(12px)",
					borderWidth: "1px",
					borderColor: hexToRgba(colors.neutral.bright[100], 0.5),
					borderRadius: "12px",
					overflow: "hidden",
				}}
				styles={{
					mask: {
						backgroundColor: hexToRgba(colors.primary.dark, 0.7),
					},
				}}
				width={width}
			>
				{content}
			</Modal>
		),
	};
}
