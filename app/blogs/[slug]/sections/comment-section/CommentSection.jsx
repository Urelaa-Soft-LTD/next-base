"use client";
import Title from "@/app/_shared/components/texts/Title";
import { getIndividualBlogCommentData } from "@/app/_shared/service/blog";
import { useState } from "react";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

export default function CommentSection({ data }) {
	const { pageName, slug, blogCommentList } = data || {};

	const commentBoxSectionTitle = "Put your valuable comments here";
	const commentSectionSectionTitle = "Comments";

	const [commentList, setCommentList] = useState(blogCommentList);
	const [showReplyBox, setShowReplyBox] = useState("");

	const loadComments = async () => {
		const result = await getIndividualBlogCommentData(slug);
		setCommentList(result);
	};

	return (
		<section
			aria-label={`${pageName} page blog post comment list and comment section`}
			className="space-y-14"
		>
			{commentList && commentList.length > 0 && (
				<div className="space-y-6">
					{/* title */}
					<Title
						title={commentSectionSectionTitle}
						extraClassNames="text-2xl text-neutral-dark-900 normal-case"
					/>

					{/* comment list */}
					<CommentList
						blogCommentList={commentList}
						loadComments={loadComments}
						showReplyBox={showReplyBox}
						setShowReplyBox={setShowReplyBox}
					/>
				</div>
			)}
			<div className="space-y-6">
				{/* title */}
				<Title
					title={commentBoxSectionTitle}
					extraClassNames="text-2xl text-neutral-dark-900 normal-case"
				/>

				{/* comment box */}
				<div className="max-w-2xl">
					<CommentBox
						blogId={slug}
						loadComments={loadComments}
						setShowReplyBox={setShowReplyBox}
					/>
				</div>
			</div>
		</section>
	);
}
