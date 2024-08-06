'use client'
import Link from "next/link"
import {shallow} from "zustand/shallow"
import {useEffect} from "react"
import {usePosts} from "@/store"
import useSWR from "swr"
import {getAllPosts} from "@/services/getPosts"

const Posts = () => {
	const {data: posts, isLoading} = useSWR('posts', getAllPosts)
	// const [posts, loading, getAllPosts] = usePosts(state => [
	// 	state.posts, state.loading, state.getAllPosts
	// ], shallow)
	//
	// useEffect(() => {
	// 	getAllPosts()
	// }, [getAllPosts])
	return (
		<>
		{
			isLoading ?
				<h2 >Loading...</h2 >
				:
				<ul >
			{posts.map((item: any, index: number) =>
				<li key={item.id}>
					<span >{index + 1}.</span >
					<Link
						href={`/blog/${item.id}`}
						target={'_blank'}
					>{item.title}</Link >
				</li >
			)}
		</ul >
		}
		</>
	)
}

export {Posts}