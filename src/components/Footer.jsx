import React, { Component } from 'react';
import { SiGithub, SiDiscord, SiGmail } from 'react-icons/si';
import { HashLink } from 'react-router-hash-link';
class Footer extends Component {
	state = {};
	render() {
		return (
			<section className='items-center justify-center flex h-auto w-full rounded-t-lg border-t-2 border-gray-200 p-8 lg:p-6 mt-16'>
				<footer className='mx-auto flex w-full flex-col gap-x-10 md:max-w-[90%] md:flex-row md:justify-between'>
					<div className='md:items-center md:justify-center flex flex-col gap-x-10 md:flex-row'>
						<a className='text-4xl font-bold text-neutral-800 md:text-3xl'>2023 Lior</a>
						<div className='mt-6 mb-4 flex flex-col gap-x-10 gap-y-4 text-xl font-medium text-neutral-800'>
							<h1 className='text-3xl font-semibold md:hidden'>Pages</h1>
							<div className='flex flex-col gap-x-5 md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row'>
								<HashLink smooth to="/#about">About</HashLink>
								<HashLink smooth to="/#contact">Contact</HashLink>
								<HashLink smooth to="/#work">Work</HashLink>
							</div>
						</div>
					</div>
					<div className='md:items-center md:justify-center flex flex-col'>
						<h1 className='my-3 text-2xl font-semibold text-neutral-800'>Contact Me</h1>
						<div className='flex flex-row gap-x-7'>
							<a href='https://github.com/underscorelior' target='_blank' rel='noopener noreferrer'>
								<SiGithub color='#181717' size={32} />
							</a>
							<a href='https://discordapp.com/users/454356237614841870' target='_blank' rel='noopener noreferrer'>
								<SiDiscord color='#5865F2' size={32} />
							</a>
							<a href='mailto:lior@underscore.wtf' target='_blank' rel='noopener noreferrer'>
								<SiGmail color='#EA4335' size={32} />
							</a>
						</div>
					</div>
				</footer>
			</section>
		);
	}
}

export default Footer;