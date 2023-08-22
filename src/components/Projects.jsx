import React, { Component } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import {
	SiNextdotjs,
	SiPlanetscale,
	SiPython,
	SiReact,
	SiTailwindcss,
} from 'react-icons/si';
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
					'mx-auto w-full md:w-[88%] 2xl:w-full rounded-xl drop-shadow-xl' +
					(centered ? ' md:col-span-2 md:max-w-[calc(50%-1.25rem)]' : '')
				}>
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					className="card-zoom relative flex aspect-video items-center justify-center overflow-hidden rounded-b-xl rounded-t-xl drop-shadow-2xl lg:h-auto lg:w-full">
					<img
						src={obj}
						alt={title}
						className="card-zoom-img absolute -z-10 h-full w-full transform drop-shadow-sm transition-all duration-[350ms] ease-in-out"
					/>
					<div className="absolute h-full w-full bg-black opacity-25" />
					<div className="card-zoom-text absolute flex lg:h-full h-auto lg:max-h-[87.5%] md:max-w-[87.5%] flex-col items-center justify-center rounded-xl bg-neutral-900/60 p-4 shadow-2xl transition-all duration-[350ms] md:rounded-2xl">
						<h1 className="text-xl md:text-4xl font-bold text-white">
							{title}
						</h1>
						<div className="flex h-full w-full flex-col justify-center">
							<p className="text-md xl:text-2xl text-neutral-50 md:text-xl">{desc}</p>
							<p className="text-lg xl:text-xl font-medium text-neutral-50/90">
								Technologies: <span className="text-md md:text-lg xl:text-xl">{tech}</span>
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
				className="mx-auto mt-[4.75rem] flex w-full max-w-[85%] flex-col items-center justify-center gap-y-10 2xl:pt-[5.75rem] 2xl:grid 2xl:grid-cols-2 2xl:gap-x-10"
				id="work">
				<ProjectCards
					title="ElitLabs"
					desc="An online tutoring class for introduction to Python."
					tech={
						<>
							<SiReact className="inline-block text-[#61DAFB]" />
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
							<SiNextdotjs className="inline-block text-[#000000] bg-white rounded-[200%]" />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className="inline-block text-[#06B6D4]" />
							{/* <span className="font-bold">{' | '}</span> */}
							{/* < className='inline-block text-red-500' /> */} {/* Find an auth one */}
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
