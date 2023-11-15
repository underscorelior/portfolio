import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	const MotionHash = motion.a;

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
				<MotionHash
					href="/#"
					className="text-[2.125rem] font-semibold text-neutral-900"
					onClick={() => (isOpen ? toggleNav() : null)}>
					Lior
				</MotionHash>
				<motion.div
					variants={iconVariants}
					animate={isOpen ? 'opened' : 'closed'}
					onClick={() => toggleNav()}
					className="z-50 mr-[5%] flex cursor-pointer items-center justify-center rounded-full">
					<FiPlus className="text-4xl font-black text-neutral-800" />
				</motion.div>
			</header>

			<motion.nav
				className="fixed top-0 z-40 flex h-full w-full flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter md:hidden"
				initial={false}
				variants={menuVariants}
				animate={isOpen ? 'opened' : 'closed'}>
				<motion.ul className="fixed top-[30vh] flex list-none flex-col items-center justify-center gap-y-6 text-2xl font-semibold text-neutral-900">
					<MotionHash
						onClick={() => toggleNav()}
						variants={linkVariants}
						href="/#about">
						About
					</MotionHash>
					<MotionHash
						onClick={() => toggleNav()}
						variants={linkVariants}
						href="/#contact">
						Contact
					</MotionHash>
					<MotionHash
						className="rounded-lg bg-neutral-800 p-4 text-white"
						variants={linkVariants}
						href="/#work"
						onClick={() => toggleNav()}>
						View Work
					</MotionHash>
				</motion.ul>
			</motion.nav>
		</>
	);
}

export default MobileNav;
