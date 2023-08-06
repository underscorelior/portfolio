import React, { Component } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { SiPython, SiReact, SiTailwindcss } from 'react-icons/si';
import elitlabs from '../assets/elitlabs.png';
import l0n3ly from '../assets/l0n3ly.png';
import polsu from '../assets/polsu.png';

class ProjectCards extends Component {
	render() {
		const { title, desc, tech, role, url, obj, centered } = this.props;

		return (
			<div
				className={
					'rounded-xl drop-shadow-xl w-full mx-auto' +
					(centered
						? ' md:col-span-2 md:max-w-[calc(50%-1.25rem)]'
						: '')
				}
			>
				<a
					href={url}
					target='_blank'
					rel='noreferrer'
					className='relative flex justify-center items-center overflow-hidden drop-shadow-2xl rounded-t-xl rounded-b-xl lg:w-full lg:h-auto card-zoom aspect-video'
				>
					<img
						src={obj}
						alt={title}
						className='absolute w-full h-full transition-all duration-[350ms] ease-in-out transform drop-shadow-sm card-zoom-img -z-10'
					/>
					<div className='bg-black opacity-25 absolute w-full h-full' />
					<div className='absolute max-w-[87.5%] flex flex-col  bg-neutral-900/60 p-4 rounded-2xl items-center justify-center shadow-2xl card-zoom-text transition-all duration-[350ms]'>
						<h1 className='font-bold text-2xl text-white'>
							{title}
						</h1>
						<div className='flex flex-col'>
							<p className='text-neutral-50 text-xl'>{desc}</p>
							<p className='text-neutral-50/90 text-lg font-medium'>
								Technologies:{' '}
								<span className='text-xl'>{tech}</span>
							</p>
							<p>{role}</p>
						</div>
					</div>
					<BsArrowUpRightSquare className='absolute text-5xl transition-all duration-500 ease-in-out transform scale-100 text-neutral-50 opacity-80 card-zoom-icon right-0 bottom-0 m-4' />
				</a>
			</div>
		);
	}
}

class Projects extends Component {
	render() {
		return (
			<section
				className='md:grid md:grid-cols-2 flex flex-col md:gap-x-10 items-center justify-center w-full gap-y-10 max-w-[85%] mx-auto pt-[5.6rem]'
				id='work'
			>
				<ProjectCards
					title='ElitLabs'
					desc='An online tutoring class for introduction to Python.'
					tech={
						<>
							<SiTailwindcss className='inline-block mr-1 text-[#06B6D4]' />
							<span className='font-bold'>{' | '}</span>
							<SiReact className='inline-block ml-1 text-[#61DAFB]' />
						</>
					}
					url='https://elitlabs.com'
					obj={elitlabs}
					centered={false}
				/>
				<ProjectCards
					title='l0n3ly.com'
					desc='A portfolio commisioned by loadingl0n3ly.'
					tech={
						<>
							<SiTailwindcss className='inline-block mr-1 text-[#06B6D4]' />
							<span className='font-bold'>{' | '}</span>
							<SiReact className='inline-block ml-1 text-[#61DAFB]' />
						</>
					}
					url='https://l0n3ly.com'
					obj={l0n3ly}
					centered={false}
				/>
				<ProjectCards
					title='Polsu'
					desc='A multi-purpose discord bot with hypixel stats.'
					tech={
						<>
							<SiTailwindcss className='inline-block mr-1 text-[#06B6D4]' />
							<span className='font-bold'>{' | '}</span>
							<SiReact className='inline-block ml-1 text-[#61DAFB]' />
							<span className='font-bold'>{' | '}</span>
							<SiPython className='inline-block ml-1 text-[#3776AB]' />
						</>
					}
					url='https://polsu.xyz'
					obj={polsu}
					centered={true}
				/>
			</section>
		);
	}
}

export default Projects;
