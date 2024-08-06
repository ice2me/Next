'use client'

import React, {FormEventHandler, useState} from 'react'
// import {usePosts} from "../store"
import useSWR from "swr";
import {getPostsBySearch} from "@/services/getPosts";

function PostSearch() {
	const {mutate} = useSWR('posts')
	const [search, setSearch] = useState<string>('')
	// const getPostsBySearch = usePosts(state => state.getPostsBySearch)

	const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
		e.preventDefault()
		const posts = await getPostsBySearch(search)
		mutate(posts)
	}
	return (
		<form
			className='search'
			onSubmit={handleSubmit}
		>
			<input
				type={search}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder='Search'
				className='search-input'
			/>
			<button
				type='submit'
				className='search-button'
			>
				Search
			</button >
		</form >
	)
}

export {PostSearch}