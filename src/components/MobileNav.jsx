import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const MotionLink = motion(Link);
	const MotionHash = motion(HashLink);

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
			<header className="sticky top-0 z-50 flex w-full min-w-full flex-row items-center justify-between border-b-2 border-neutral-300/20 bg-white bg-opacity-10 px-[5%] py-[0.375rem] backdrop-blur-lg backdrop-filter md:hidden">
				<h1 className="text-[2.125rem] font-medium text-neutral-900">Lior</h1>
				<motion.div
					variants={iconVariants}
					animate={isOpen ? 'opened' : 'closed'}
					onClick={() => toggleNav()}
					className="z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						className="stroke-neutral-600 stroke-1"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
							fill="#525252"
						/>
					</svg>
				</motion.div>
			</header>

			<motion.nav
				className="fixed top-0 z-40 flex h-full w-full flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter md:hidden"
				initial={false}
				variants={menuVariants}
				animate={isOpen ? 'opened' : 'closed'}>
				<motion.ul className="fixed top-[30vh] flex list-none flex-col items-center justify-center gap-y-6 text-2xl font-semibold text-neutral-900">
					<MotionLink variants={linkVariants}>About</MotionLink>
					<MotionLink variants={linkVariants}>Contact</MotionLink>
					<MotionHash
						className="rounded-lg bg-neutral-800 p-4 text-white"
						variants={linkVariants}
						to="#work"
						onClick={() => toggleNav()}
						smooth>
						View Work
					</MotionHash>
				</motion.ul>
			</motion.nav>
		</>
	);
}

export default App;
