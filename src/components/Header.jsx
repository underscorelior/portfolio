import React, { Component } from 'react';
import header from '../assets/header.json';
import { HashLink } from 'react-router-hash-link';
import { SiDiscord, SiGithub, SiGmail } from 'react-icons/si';
class Header extends Component {
	render() {
		return (
			<header className='relative w-full flex justify-center my-24 lg:my-36'>
				<div className='relative max-w-lg blur-xl lg:blur-3xl'>
					<div className='absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full filter blur-xl lg:blur-3xl animate-blob top-10 -left-10 lg:-left-20 bg-fuchsia-400 mix-blend-multiply'></div>
					<div className='absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full filter blur-xl lg:blur-3xl animate-blob top-0 left-32 lg:left-64 bg-teal-300 mix-blend-multiply animation-delay-2000'></div>
					<div className='absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full filter blur-xl lg:blur-3xl animate-blob top-16 lg:top-32 left-10 lg:left-20 bg-lime-300 animation-delay-4000'></div>
				</div>
				<section className='relative h-full rounded-lg flex justify-center w-full lg:w-[81%] flex-col max-w-[80%] sm:max-w-[70%] lg:max-w-[75%]'>
					<h1 className='text-[2.75rem] leading-[3.25rem] md:leading-[2.75rem] lg:text-7xl lg:w-[81%] text-neutral-900 font-semibold lg:font-medium'>
						{header.subtitle}
					</h1>
					<div className='mt-4'>
						<span className='text-2xl lg:text-5xl font-normal text-neutral-700'>
							{header.description}
						</span>
					</div>
					<div className='flex flex-row w-full gap-x-6 mt-8'>
						<HashLink
							to='#work'
							smooth
							className='bg-neutral-800 duration-300 hover:bg-neutral-900 text-neutral-100 p-4 px-8 rounded-2xl max-w-[50%] lg:max-w-[20%] font-semibold text-2xl text-center flex items-center justify-center border-2'
						>
							View Work
						</HashLink>
						<a
							href='https://github.com/underscorelior'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='github'
							className='rounded-2xl bg-[#313030] hover:bg-[#181717] p-5 w-auto text-4xl text-white border-2 duration-300'
						>
							<SiGithub />
						</a>
						<a
							href='mailto://lior@underscore.wtf'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='twitch'
							className='rounded-2xl bg-[#EA4335] hover:bg-[#d93729] duration-300 p-5 w-auto text-4xl text-white border-2'
						>
							<SiGmail />
						</a>
						<a
							href='https://discordapp.com/users/454356237614841870'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='discord'
							className='rounded-2xl bg-[#5865F2] hover:bg-[#4445e7] p-5 w-auto text-4xl text-white border-2 duration-300'
						>
							<SiDiscord />
						</a>
					</div>
				</section>
			</header>
		);
	}
}

export default Header;
