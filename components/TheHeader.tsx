import {Navigation} from "@/components/Navigation"

const navItems = [
	{label: 'Home', href: '/'},
	{label: 'About', href: '/about'},
	{label: 'Blog', href: '/blog'}
]

const TheHeader = () => {
	return (
		<header className='header'>
			<Navigation navLinks={navItems} />
		</header >
	)
}
export {TheHeader}