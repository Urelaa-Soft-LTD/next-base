"use client";
import TextButton from "@/app/_shared/components/buttons/TextButton";
import ProfileImage from "@/app/_shared/components/ProfileImage";
import { convertDate } from "@/app/_shared/utils/commonUtils";
import { MessageOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import CommentBox from "./CommentBox";

export default function CommentList({
	blogCommentList,
	loadComments,
	showReplyBox,
	setShowReplyBox,
	replyOf,
	depth = 0
}) {
	// motion configs
	const listContainerMotion = {
		hidden: {
			transition: {
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
		show: {
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.1,
				staggerDirection: 1,
			},
		},
	};

	// motion configs
	const listMotion = {
		hidden: {
			y: 10,
			opacity: 0,
			filter: "blur(5px)",
		},
		show: {
			y: 0,
			opacity: 1,
			filter: "blur(0px)",
		},
	};

	const getMessage = (message) => {
		console.log(replyOf);

		let _message = message.replace(`@${replyOf?.name}`, "");
		return replyOf ? (
			<span>
				<strong>@{replyOf?.name}</strong> {_message}
			</span>
		) : (
			_message
		);
	};

	return (
		<motion.div
			key={blogCommentList.length}
			variants={listContainerMotion}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
		>
			{blogCommentList?.map((comment, index) => {
				const { name, email, message, createdAt, _id, blog } =
					comment || {};
				return (
					<motion.div
						key={index}
						variants={listMotion}
						className={`mt-2 ${depth === 1 && "ml-10"} mt-10`}
					>
						<div className="flex items-center gap-2">
							<div className="flex-none relative overflow-hidden h-8 md:h-10 aspect-square rounded-full bg-primary-dark/70 flex justify-center items-center">
								<ProfileImage name={name} page="blog details" />
							</div>

							<div>
								<h3 className="text-base md:text-lg text-neutral-dark-900 capitalize">
									{name}
								</h3>
								<span className="block text-neutral-dark-500 text-xs">
									{convertDate(createdAt)}
								</span>
							</div>
						</div>

						<div className="mt-2 space-y-3 w-full">
							<p className="text-sm whitespace-break-spaces text-neutral-dark-500">
								{getMessage(message)}
							</p>

							<div className="flex items-center gap-6">
								<TextButton
									onClick={() => {
										setShowReplyBox(_id);
									}}
									className="flex items-center gap-1 text-xs text-primary-bright-600 transition-all duration-300"
								>
									<MessageOutlined />
									<span>Reply</span>
								</TextButton>
							</div>

							{showReplyBox === _id && (
								<div className="max-w-xl">
									<CommentBox
										replyId={_id}
										blogId={blog}
										loadComments={loadComments}
										replyOf={{
											_id,
											name,
										}}
										setShowReplyBox={setShowReplyBox}
									/>
								</div>
							)}
						</div>

						<div className="mt-10">
							{comment.replies && comment.replies.length > 0 && (
								<CommentList
									blogCommentList={comment.replies}
									loadComments={() => {
										setShowReplyBox("");
										loadComments();
									}}
									showReplyBox={showReplyBox}
									setShowReplyBox={setShowReplyBox}
									replyOf={comment}
									depth={depth + 1}
								/>
							)}
						</div>
					</motion.div>
				);
			})}
		</motion.div>
	);
}
