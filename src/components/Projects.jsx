import React, { Component } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { SiPython, SiReact, SiTailwindcss } from 'react-icons/si';
// Hover effect with zoom in and some icon
class ProjectCards extends Component {
	render() {
		const { title, desc, tech, role, url, twbgname } = this.props;
		const bgdivstyles =
			'absolute w-full h-full transition-all duration-500 ease-in-out transform drop-shadow-sm bg-no-repeat bg-cover bg-center card-zoom-img bg-' +
			twbgname;

		return (
			<div className='rounded-xl bg-neutral-100 pb-4 drop-shadow-xl max-w-96 w-96'>
				<div className='flex flex-col justify-center w-96 drop-shadow-xl rounded-xl h-full gap-y-3 max-w-96 object-contain'>
					<a
						href={url}
						target='_blank'
						rel='noreferrer'
						className='relative flex overflow-hidden drop-shadow-sm rounded-t-xl rounded-b-xl w-96 h-[13.5rem] card-zoom'
					>
						<div className={bgdivstyles} />
						<div className='bg-black opacity-25 absolute w-full h-full' />
						<BsArrowUpRightSquare className='absolute text-5xl transition-all duration-500 ease-in-out transform scale-100 text-neutral-50 opacity-80 card-zoom-icon right-0 bottom-0 m-4' />
					</a>
					<div className='max-w-[87.5%] flex flex-col mx-auto'>
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
}

class Projects extends Component {
	render() {
		return (
			<section
				className='flex flex-col items-center flex-center w-full gap-y-10 my-24'
				id='work'
			>
				<h1 className='text-6xl font-semibold pt-32'>Projects</h1>
				<div className='mx-auto grid grid-cols-3 gap-x-24 gap-y-24'>
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
					<ProjectCards
						title='Polsu'
						desc='A multi-purpose discord bot with hypixel stats.'
						tech={
							<>
								<SiTailwindcss className='inline-block mr-1 text-[#06B6D4]' />
								<span className='font-bold text-neutral-900'>
									{' | '}
								</span>
								<SiReact className='inline-block ml-1 text-[#61DAFB]' />
								<span className='font-bold text-neutral-900'>
									{' | '}
								</span>
								<SiPython className='inline-block ml-1 text-[#3776AB]' />
							</>
						}
						url='https://polsu.xyz'
						twbgname='polsu'
					/>
				</div>
			</section>
		);
	}
}

export default Projects;
