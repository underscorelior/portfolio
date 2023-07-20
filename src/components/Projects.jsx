import React, { Component } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { SiReact, SiTailwindcss } from 'react-icons/si';
// Hover effect with zoom in and some icon
function ProjectCards({ title, desc, tech, role, url, twbgname }) {
	return (
		<div className='rounded-xl bg-neutral-50 pb-2 drop-shadow-xl max-w-96 w-96'>
			<div className='flex flex-col justify-center w-96 drop-shadow-xl rounded-xl h-full gap-y-3 max-w-96 object-contain'>
				<a
					href={url}
					target='_blank'
					rel='noreferrer'
					className='relative flex items-center justify-center overflow-hidden drop-shadow-sm rounded-t-xl rounded-b-xl w-96 h-[13.5rem] card-zoom'
				>
					<div
						className={
							'absolute w-full h-full transition-all duration-500 ease-in-out transform drop-shadow-sm bg-no-repeat bg-cover bg-center card-zoom-img bg-' +
							twbgname
						}
					/>
					<div className='bg-black opacity-25 absolute w-full h-full' />
					<BsArrowUpRightCircle className='absolute text-7xl font-black transition-all duration-500 ease-in-out transform scale-100 text-neutral-50 opacity-80 card-zoom-icon' />
				</a>
				<div className='max-w-[90%] flex flex-col mx-auto'>
					<h1 className='font-bold text-2xl'>{title}</h1>
					<div className='flex flex-col'>
						<p className='text-neutral-800 text-xl'>{desc}</p>
						<p className='text-neutral-800/90 text-lg font-medium'>
							Technologies:{' '}
							<span className='text-xl'>{tech}</span>
						</p>
						<p>{role}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

class Projects extends Component {
	render() {
		return (
			<section className='flex flex-col items-center flex-center w-full gap-y-10 my-10'>
				<h1 className='text-4xl font-semibold'>Projects</h1>
				<div className='mx-auto grid grid-cols-2 gap-x-24'>
					<ProjectCards
						title='ElitLabs'
						desc='An online tutoring class for introduction to Python.'
						tech={
							<>
								<SiTailwindcss className='inline-block mr-1 text-[#06B6D4]' />
								<span className='font-bold text-neutral-900'>
									{' | '}
								</span>
								<SiReact className='inline-block ml-1 text-[#61DAFB]' />
							</>
						}
						url='https://elitlabs.com'
						twbgname='elitlabs'
					/>
					<ProjectCards
						title='l0n3ly.com'
						desc='A portfolio commisioned by loadingl0n3ly.'
						tech={
							<>
								<SiTailwindcss className='inline-block mr-1 text-[#06B6D4]' />
								<span className='font-bold text-neutral-900'>
									{' | '}
								</span>
								<SiReact className='inline-block ml-1 text-[#61DAFB]' />
							</>
						}
						url='https://l0n3ly.com'
						twbgname='l0n3ly'
					/>
				</div>
			</section>
		);
	}
}

export default Projects;
