'use client'
export default function ErrorWrapper({error}: {error: Error}) {
	return <div>ERROR PAGE {error.message}</div>
}