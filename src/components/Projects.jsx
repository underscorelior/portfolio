import React, { Component } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { SiNextdotjs, SiPython, SiReact, SiTailwindcss } from 'react-icons/si';
import elitlabs from '../assets/elitlabs.png';
import l0n3ly from '../assets/l0n3ly.png';
import polsu from '../assets/polsu.png';
import quiz from '../assets/quiz.png';

class ProjectCards extends Component {
	render() {
		const { title, desc, tech, role, url, obj, centered } = this.props;

		return (
			<div
				className={
					'mx-auto w-full overflow-hidden rounded-xl drop-shadow-xl md:w-[88%] 2xl:w-full' +
					(centered ? ' md:col-span-2 md:max-w-[calc(50%-1.25rem)]' : '')
				}>
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					className="card-zoom relative flex aspect-video items-center justify-center rounded-b-xl rounded-t-xl drop-shadow-2xl lg:h-auto lg:w-full">
					<img
						src={obj}
						alt={title}
						className="card-zoom-img absolute -z-10 h-full w-full transform drop-shadow-sm transition-all duration-[350ms] ease-in-out"
						style={{ pointerEvents: 'none' }}
					/>
					<div className="absolute bg-black opacity-25" />
					<div className="card-zoom-text absolute flex flex-col items-center justify-center rounded-xl bg-neutral-900/60 p-4 shadow-2xl transition-all duration-[350ms] md:rounded-2xl">
						<h1 className="text-xl font-bold text-white md:text-4xl">
							{title}
						</h1>
						<div className="flex  flex-col justify-center">
							<p className="text-md text-neutral-50 md:text-xl xl:text-2xl">
								{desc}
							</p>
							<p className="text-lg font-medium text-neutral-50/90 xl:text-xl">
								Technologies:{' '}
								<span className="text-md md:text-lg xl:text-xl">{tech}</span>
							</p>
							<p>{role}</p>
						</div>
					</div>
					<BsArrowUpRightSquare className="card-zoom-icon absolute bottom-0 right-0 m-2 scale-100 transform text-4xl text-neutral-50 opacity-80 transition-all duration-500 ease-in-out md:m-4 md:text-5xl" />
				</a>
			</div>
		);
	}
}

class Projects extends Component {
	render() {
		return (
			<section
				className="mx-auto flex w-full max-w-[85%] flex-col items-center justify-center gap-y-10 pt-[4.75rem] xl:grid xl:grid-cols-2 xl:gap-x-10 xl:pt-[5.75rem]"
				id="work">
				<ProjectCards
					title="ElitLabs"
					desc="An online tutoring class for introduction to Python."
					tech={
						<>
							<SiNextdotjs className="inline-block rounded-[200%] bg-white text-[#000000] text-clip" />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className="inline-block text-[#06B6D4]" />
						</>
					}
					url="https://elitlabs.com"
					obj={elitlabs}
				/>
				<ProjectCards
					title="l0n3ly.com"
					desc="A portfolio commisioned by loadingl0n3ly."
					tech={
						<>
							<SiReact className="inline-block text-[#61DAFB]" />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className="inline-block text-[#06B6D4]" />
						</>
					}
					url="https://l0n3ly.com"
					obj={l0n3ly}
				/>
				<ProjectCards
					title="Polsu"
					desc="A multi-purpose discord bot with hypixel stats."
					tech={
						<>
							<SiReact className="inline-block text-[#61DAFB]" />
							<span className="font-bold">{' | '}</span>
							<SiPython className="inline-block text-[#3776AB]" />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className="inline-block text-[#06B6D4]" />
						</>
					}
					url="https://polsu.xyz"
					obj={polsu}
				/>
				<ProjectCards
					title="Quiz"
					desc="A simple quiz game for learning country flags and capitals."
					tech={
						<>
							<SiNextdotjs className="inline-block rounded-[200%] bg-white text-[#000000]" />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className="inline-block text-[#06B6D4]" />
							{/* <span className="font-bold">{' | '}</span> */}
							{/* < className='inline-block text-red-500' /> */}{' '}
							{/* Find an auth one */}
							{/* <span className="font-bold">{' | '}</span> */}
							{/* <SiPlanetscale className="inline-block text-red-500" /> */}
						</>
					}
					url="https://quiz.underscore.wtf/"
					obj={quiz}
				/>
			</section>
		);
	}
}

export default Projects;
