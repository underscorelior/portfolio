import React, { Component } from 'react';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import {
	SiNextdotjs,
	SiPlanetscale,
	SiPython,
	SiReact,
	SiTailwindcss,
} from 'react-icons/si';
import elitlabs from '../assets/elitlabs.webp';
import l0n3ly from '../assets/l0n3ly.webp';
import polsu from '../assets/polsu.webp';
import quiz from '../assets/quiz.webp';

class ProjectCards extends Component {
	render() {
		const { title, desc, tech, role, url, obj, centered, white } = this.props;

		return (
			<div
				className={
					'mx-auto flex h-auto w-[90%] items-center justify-center overflow-hidden rounded-xl drop-shadow-xl md:w-2/3 lg:w-[90%] 2xl:w-full' +
					(centered ? ' md:col-span-2 md:max-w-[calc(50%-1.25rem)]' : '')
				}>
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					className="card-zoom relative flex aspect-video w-full items-center justify-center rounded-b-xl rounded-t-xl drop-shadow-2xl lg:h-auto lg:w-full">
					<img
						src={obj}
						alt={title}
						className="card-zoom-img absolute -z-10 h-full w-full transform drop-shadow-sm transition-all duration-[350ms] ease-in-out"
						style={{ pointerEvents: 'none' }}
					/>
					<div className="absolute bg-black opacity-25 md:w-2/3" />
					<div className="card-zoom-text absolute flex w-[90%] flex-col items-center justify-center rounded-xl bg-neutral-900/60 p-4 shadow-2xl transition-all duration-[350ms] md:w-2/3 md:rounded-2xl">
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
					<BsArrowUpRightSquare
						className={`card-zoom-icon absolute bottom-0 right-0 m-2 scale-100 transform text-4xl  opacity-80 drop-shadow-lg transition-all duration-500 ease-in-out md:m-4 md:text-5xl ${
							!white ? 'text-neutral-50' : 'text-neutral-800'
						}`}
					/>
				</a>
			</div>
		);
	}
}

class Projects extends Component {
	render() {
		return (
			<section
				className="mx-auto flex h-full flex-col items-center justify-center gap-y-10 pt-[4.75rem] lg:grid lg:w-[85%] lg:grid-cols-2 lg:gap-x-10 lg:pt-[8.75rem]"
				id="work">
				<ProjectCards
					title="ElitLabs"
					desc="An on-demand course platform for learning to code."
					tech={
						<>
							<SiNextdotjs className="inline-block text-clip rounded-[200%] bg-white text-[#000000]" />
							<span className="font-bold">{' | '}</span>
							<SiReact className="inline-block text-[#61DAFB]" />
							<span className="font-bold">{' | '}</span>
							<SiPlanetscale className="inline-block text-[#000000]" />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className="inline-block text-[#06B6D4]" />
						</>
					}
					url="https://elitlabs.com"
					obj={elitlabs}
					white
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
					url="https://l0n3ly-portfolio.vercel.app/"
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
					title="Geography Quiz"
					desc="A simple quiz game for learning country flags and capitals."
					tech={
						<>
							<SiNextdotjs className="inline-block rounded-[200%] bg-white text-[#000000]" />
							<span className="font-bold">{' | '}</span>
							<SiTailwindcss className="inline-block text-[#06B6D4]" />
						</>
					}
					url="https://quiz.underscore.wtf/flags/world"
					obj={quiz}
				/>
			</section>
		);
	}
}

export default Projects;
