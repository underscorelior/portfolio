import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
	const [isOpen, setIsOpen] = useState(false);

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
			<header className='mobile-navbar'>
				<h1 className='mobile-navbar-name'>Lior</h1>
				<motion.div
					variants={iconVariants}
					animate={isOpen ? 'opened' : 'closed'}
					onClick={() => toggleNav()}
					className='mobile-nav-btn'
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
				className='mobile-navbar-menu VHcenter flex flex-col'
				initial={false}
				variants={menuVariants}
				animate={isOpen ? 'opened' : 'closed'}
			>
				<motion.ul className='fixed top-[30vh] flex flex-col VHcenter gap-y-6'>
					<motion.li
						className='nav-item'
						variants={linkVariants}
					>
						About
					</motion.li>
					<motion.li
						className='nav-item'
						variants={linkVariants}
					>
						Contact
					</motion.li>
					<motion.li
						className='nav-item bg-neutral-800 text-white p-4 rounded-lg'
						variants={linkVariants}
					>
						View Work
					</motion.li>
				</motion.ul>
			</motion.nav>
		</>
	);
}

export default App;
