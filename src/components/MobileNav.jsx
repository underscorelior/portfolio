import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const MotionLink = motion(Link);

	function toggleNav() {
		setIsOpen(!isOpen);
		if (!isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}
	const iconVariants = {
		opened: {
			rotate: 135,
		},
		closed: {
			rotate: 0,
		},
	};

	const menuVariants = {
		opened: {
			top: 0,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.15,
			},
		},
		closed: {
			top: '-100vh',
		},
	};

	const linkVariants = {
		opened: {
			opacity: 1,
			y: 50,
		},
		closed: {
			opacity: 0,
			y: 0,
		},
	};

	return (
		<>
			<header className='sticky top-0 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 w-full rounded-lg flex flex-row items-center justify-between md:hidden z-50 px-[5%] py-[0.375rem] min-w-full border-b border-neutral-300/20'>
				<h1 className='text-[2.125rem] font-medium text-neutral-900'>
					Lior
				</h1>
				<motion.div
					variants={iconVariants}
					animate={isOpen ? 'opened' : 'closed'}
					onClick={() => toggleNav()}
					className='w-12 h-12 rounded-full cursor-pointer z-50 items-center flex justify-center'
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						className='stroke-neutral-600 stroke-1'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z'
							fill='#525252'
						/>
					</svg>
				</motion.div>
			</header>

			<motion.nav
				className='w-full h-full fixed top-0 z-40 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 md:hidden items-center justify-center flex flex-col'
				initial={false}
				variants={menuVariants}
				animate={isOpen ? 'opened' : 'closed'}
			>
				<motion.ul className='fixed top-[30vh] text-2xl text-neutral-900 list-none font-semibold flex flex-col items-center justify-center gap-y-6'>
					<MotionLink variants={linkVariants}>About</MotionLink>
					<MotionLink variants={linkVariants}>Contact</MotionLink>
					<MotionLink
						className='bg-neutral-800 text-white p-4 rounded-lg'
						variants={linkVariants}
					>
						View Work
					</MotionLink>
				</motion.ul>
			</motion.nav>
		</>
	);
}

export default App;
