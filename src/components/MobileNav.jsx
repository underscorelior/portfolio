import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FiPlus } from 'react-icons/fi';

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
			<header className="sticky top-0 z-50 flex w-full min-w-full flex-row items-center justify-between border-b-2 border-neutral-300/20 bg-white bg-opacity-10 px-[5%] py-[0.5rem] backdrop-blur-lg backdrop-filter md:hidden">
				<h1 className="text-[2.125rem] font-semibold text-neutral-900">Lior</h1>
				<motion.div
					variants={iconVariants}
					animate={isOpen ? 'opened' : 'closed'}
					onClick={() => toggleNav()}
					className="z-50 flex cursor-pointer items-center justify-center rounded-full mr-[5%]">
					<FiPlus className="text-4xl font-black text-neutral-800" />
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
						to="/#work"
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
