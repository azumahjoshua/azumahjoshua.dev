import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import azumah from "../public/jazlogo.png";
const Navbar = () => {
	let iconStyles = { color: "white", fontSize: "1.5em" };
	const [isOpen, setIsOpen] = useState(false);
	const links = [
		{
			id: 2,
			href: "about",
			link: "about",
		},
		{
			id: 3,
			href: "projects",
			link: "project",
		},
		{
			id: 4,
			href: "blog",
			link: "blog",
		},
		{
			id: 5,
			href: "contact",
			link: "contact",
		},
	];
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className=''>
			<nav>
				<div className='flex flex-row justify-between  w-full'>
					<Link href='/'>
						<Image src={azumah} alt='azumah' priority height={70} width={100} />
					</Link>
					<button className='z-20 mr-7 lg:hidden' onClick={handleClick}>
						{isOpen ? <MdClose size={30} /> : <FaBars size={30} />}
					</button>
					<ul className='hidden lg:flex lg:flex-row lg:justify-evenly lg:mr-10 lg:mt-5'>
						{links.map(({ id, href, link }) => {
							return (
								<li
									key={id}
									className='text-center  px-10 capitalize text-3xl font-medium font-sans'
								>
									<Link href={href}>{link}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				{isOpen && (
					<div className=' fixed top-0  w-full h-full bg-black  text-white text-3xl  opacity-75 flex flex-col lg:hidden md:hidden'>
						<ul className='my-auto space-y-10'>
							{links.map(({ id, href, link }) => {
								return (
									<li key={id} className='my-5 text-center capitalize'>
										<Link
											onClick={() => {
												setIsOpen(!isOpen);
											}}
											href={href}
										>
											{link}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
