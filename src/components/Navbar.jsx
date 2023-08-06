import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Navbar extends Component {
	render() {
		return (
			<nav className='sticky top-0 z-10 bg-neutral-100 backdrop-filter backdrop-blur-lg bg-opacity-10 w-full py-3 border-b-[1.5px] border-neutral-300/50 hidden md:flex justify-between'>
				<div className='min-w-[90%] px-4 mx-auto flex items-center justify-between h-16'>
					<span className='text-4xl text-neutral-900/90 font-semibold'>
						Lior
					</span>
					<div className='flex space-x-8 text-neutral-900 text-xl items-center justify-center'>
						<a href='#'>About</a>
						<a href='#'>Contact</a>
						<HashLink
							to='#work'
							smooth
							className='bg-neutral-900 text-neutral-100 p-4 rounded-2xl'
						>
							View Work
						</HashLink>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
