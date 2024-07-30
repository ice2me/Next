import Link from "next/link";

export default function TheHeader() {
	return (
		<header className='header'>
			<Link href='/'>Home</Link >
			<Link href='/about'>About</Link >
			<Link href='/blog'>Blog</Link >
		</header >
	)
}