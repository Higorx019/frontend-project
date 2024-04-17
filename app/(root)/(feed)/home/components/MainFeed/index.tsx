import PostCard from "@/components/Posts/PostCard/PostCard";
import React, { Suspense, useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import type { PostProps } from "@/types";
import MiniLoader from "@/components/Config/MiniLoader";

export default function MainFeed() {
	const [posts, setPosts] = useState<PostProps[]>([]);

	const handleGetAllPosts = async () => {
		const requisiton = await fetch(
			"https://backend-repository.onrender.com/posts/",
			{
				method: "GET",
				// next: {
				// 	revalidate: 1 * 60,
				// 	tags: ['get-all-posts']
				// }
			},
		);
		const response = await requisiton.json();
		if (response.length) setPosts(response);
	};

	useEffect(() => {
		handleGetAllPosts()
	})
	
	return (
		<div className="w-full flex flex-col gap-4">
			<CreatePost handleGetAllPost={handleGetAllPosts} />
			<Suspense fallback={<MiniLoader />}>
				<section className="flex flex-col w-full gap-4">
					{posts.map((post: PostProps, index: number) => (
						<PostCard postContent={post} key={`${post.creatorId}-${index}`} />
					))}
				</section>
			</Suspense>
		</div>
	);
}
