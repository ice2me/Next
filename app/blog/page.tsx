import { PostSearch } from "@/components/PostSearch"
import { Metadata } from "next"
import {Posts} from "@/components/Posts"

export const metadata: Metadata = {
	title: "Blog | Next App",
}

export default function Blog() {
	return (
		<div className='blog'>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </div>
	)
}