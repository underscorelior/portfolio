// TODO: Fix weird sizing of borderdle

import { BsArrowUpRightSquare } from 'react-icons/bs';
import {
	SiNextdotjs,
	SiPython,
	SiReact,
	SiSpotify,
	SiTailwindcss,
} from 'react-icons/si';
import elitlabs from '../assets/projects/elitlabs.webp';
import homepage from '../assets/projects/homepage.webp';
import l0n3ly from '../assets/projects/l0n3ly.webp';
import polsu from '../assets/projects/polsu.webp';
import quiz from '../assets/projects/quiz.webp';
import borderdle from '../assets/projects/borderdle.webp';

function ProjectCards({title, desc, tech, techNames, role, url, obj, centered = false, white = false}) {
		// const { title, desc, tech, techNames, role, url, obj, centered, white } =
		// 	this.props;

		return (
			<div
				className={
					'mx-auto flex h-auto w-[90%] items-center justify-center overflow-hidden rounded-xl drop-shadow-xl md:w-2/3 lg:w-[90%] 2xl:w-full 4xl:w-[75%]' +
					(centered
						? ' md:col-span-2 md:max-w-[calc(50%-1.25rem)] 4xl:max-w-[calc(37.5%-1.25rem)]'
						: '')
				}>
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					className="card-zoom relative flex aspect-video w-full items-center justify-center rounded-b-xl rounded-t-xl drop-shadow-2xl lg:h-auto lg:w-full">
					<img
						src={obj}
						alt={title}
						className="card-zoom-img overflow-none absolute -z-10 h-auto w-full transform drop-shadow-sm transition-all duration-[350ms] ease-in-out"
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
							<div className="flex flex-row items-center gap-x-2 text-lg font-medium text-neutral-50/90 xl:text-xl">
								Technologies:{' '}
								<span className="text-md flex flex-row gap-x-2 md:text-lg xl:text-xl">
									{tech.map((techicon, index) => (
										<span key={index} className="flex flex-row gap-x-2">
											<div className="has-tooltip flex items-center justify-center">
												<span className="tooltip -mt-16 rounded border border-neutral-900 bg-neutral-100 p-1 font-mono text-sm font-semibold text-neutral-900 opacity-95 shadow-lg drop-shadow">
													{techNames[index]}
													<div className="tooltip-arrow absolute left-1/2 top-full -ml-1 -mt-1 h-2 w-2 rotate-45 border-b border-r border-neutral-900 bg-neutral-100" />
												</span>
												{techicon}
											</div>
											{index < tech.length - 1 && (
												<span className="font-bold">{' | '}</span>
											)}
										</span>
									))}
								</span>
							</div>
							<p>{role}</p>
						</div>
					</div>
					<BsArrowUpRightSquare
						className={`card-zoom-icon absolute bottom-0 right-0 m-2 scale-100 transform text-4xl opacity-80 drop-shadow-lg transition-all duration-500 ease-in-out md:m-4 md:text-5xl ${
							!white ? 'text-neutral-50' : 'text-neutral-800'
						}`}
					/>
				</a>
			</div>
		);
	}


export default function Projects() {
		return (
			<section
				className="mx-auto flex h-full flex-col items-center justify-center gap-y-10 pt-[4.75rem] lg:grid lg:w-[85%] lg:grid-cols-2 lg:gap-x-10 lg:pt-[8.75rem]"
				id="work">
				<ProjectCards
					title="ElitLabs"
					desc="An on-demand course platform for learning to code."
					tech={[
						<SiNextdotjs className="inline-block text-clip rounded-[200%] bg-white text-[#000000]" />,
						<SiReact className="inline-block text-[#61DAFB]" />,
						<SiTailwindcss className="inline-block text-[#06B6D4]" />,
					]}
					techNames={['Next.js', 'React', 'TailwindCSS']}
					url="https://elitlabs.com"
					obj={elitlabs}
					white
				/>
				<ProjectCards
					title="Homepage"
					desc="My browser new tab page. Has spotify stats, weather/time, and a countdown to specific dates."
					tech={[
						<SiReact className="inline-block text-[#61DAFB]" />,
						<SiTailwindcss className="inline-block text-[#06B6D4]" />,
						<SiSpotify className="inline-block text-[#1DB954]" />,
					]}
					techNames={['React', 'TailwindCSS', 'Spotify API']}
					url="https://home.underscore.wtf"
					obj={homepage}
				/>
				<ProjectCards
					title="l0n3ly.com"
					desc="A portfolio commissioned by loadingl0n3ly."
					tech={[
						<SiReact className="inline-block text-[#61DAFB]" />,
						<SiTailwindcss className="inline-block text-[#06B6D4]" />,
					]}
					techNames={['React', 'TailwindCSS']}
					url="https://l0n3ly-portfolio.vercel.app/"
					obj={l0n3ly}
				/>
				<ProjectCards
					title="Polsu"
					desc="A multi-purpose discord bot with hypixel stats."
					tech={[
						<SiPython className="inline-block text-[#3776AB]" />,
						<SiReact className="inline-block text-[#61DAFB]" />,
						<SiTailwindcss className="inline-block text-[#06B6D4]" />,
					]}
					techNames={['Python', 'React', 'TailwindCSS']}
					url="https://polsu.xyz"
					obj={polsu}
				/>
				<ProjectCards
					title="Geography Quiz"
					desc="A simple quiz game for learning country flags and capitals."
					tech={[
						<SiNextdotjs className="inline-block rounded-[200%] bg-white text-[#000000]" />,
						<SiTailwindcss className="inline-block text-[#06B6D4]" />,
					]}
					techNames={['Next.js', 'TailwindCSS']}
					url="https://quiz.underscore.wtf/flags/world"
					obj={quiz}
				/>
				<ProjectCards
					title="Borderdle"
					desc={
						<>
							Wordle type game, except a country's border is revealed with each
							guess. Project was made with{' '}
							<a
								className="font-semibold text-slate-200 underline"
								href="https://lukeskyrock.com">
								Luke Wang
							</a>
							.
						</>
					}
					tech={[
						<SiReact className="inline-block text-[#61DAFB]" />,
						<SiTailwindcss className="inline-block text-[#06B6D4]" />,
						<SiPython className="inline-block text-[#3776AB]" />,
					]}
					techNames={['React', 'TailwindCSS', 'Python']}
					url="https://borderdle.lukeskyrock.com"
					obj={borderdle}
				/>
			</section>
		);
	}

