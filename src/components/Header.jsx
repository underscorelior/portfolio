import React, { Component } from 'react';
import header from '../assets/header.json';
import { HashLink } from 'react-router-hash-link';
import { SiDiscord, SiGithub, SiGmail } from 'react-icons/si';
class Header extends Component {
	render() {
		return (
			<header className="relative mx-auto mt-12 flex w-full justify-center md:my-24 lg:my-36">
				<div className="relative max-w-lg blur-xl lg:blur-3xl">
					<div className="absolute -left-10 top-10 h-40 w-40 animate-blob rounded-full bg-fuchsia-400 mix-blend-multiply blur-xl filter sm:h-60 sm:w-60 lg:-left-20 lg:h-80 lg:w-80 lg:blur-3xl"></div>
					<div className="animation-delay-2000 absolute left-32 top-0 h-40 w-40 animate-blob rounded-full bg-teal-300 mix-blend-multiply blur-xl filter sm:h-60 sm:w-60 lg:left-64 lg:h-80 lg:w-80 lg:blur-3xl"></div>
					<div className="animation-delay-4000 absolute left-10 top-16 h-40 w-40 animate-blob rounded-full bg-lime-300 blur-xl filter sm:h-60 sm:w-60 lg:left-20 lg:top-32 lg:h-80 lg:w-80 lg:blur-3xl"></div>
				</div>
				<section className="relative flex h-full w-full max-w-[85%] flex-col justify-center rounded-lg sm:max-w-[70%] lg:w-[81%] lg:max-w-[75%]">
					<h1 className="text-center text-[2.5rem] font-semibold leading-[3.25rem] text-neutral-900 md:text-left md:leading-[2.75rem] lg:w-[81%] lg:text-7xl lg:font-medium">
						{header.subtitle}
					</h1>
					<div className="mt-4 flex w-full items-center">
						<span className="w-full text-center text-3xl font-normal text-neutral-700 md:text-left lg:text-5xl">
							{header.description}
						</span>
					</div>
					<div className="mt-8 flex w-full flex-col items-center gap-x-6 gap-y-4 md:flex-row">
						<HashLink
							to="/#work"
							smooth
							className="flex w-full items-center justify-center rounded-2xl border-2 bg-neutral-800 p-7 px-8 text-center text-2xl font-semibold text-neutral-100 duration-300 hover:bg-neutral-900 md:max-w-[50%] md:p-6 lg:max-w-[20%]">
							View Work
						</HashLink>
						<section className="flex w-full flex-row gap-x-4 md:gap-x-6 justify-between">
							<a
								href="https://github.com/underscorelior"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="github"
								className="w-auto rounded-2xl border-2 bg-[#313030] p-[1.64rem] md:p-5 text-4xl text-white duration-300 hover:bg-[#181717]">
								<SiGithub />
							</a>
							<a
								href="mailto://lior@underscore.wtf"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="twitch"
								className="w-auto rounded-2xl border-2 bg-[#EA4335] p-[1.64rem] md:p-5 text-4xl text-white duration-300 hover:bg-[#d93729]">
								<SiGmail />
							</a>
							<a
								href="https://discordapp.com/users/454356237614841870"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="discord"
								className="w-auto rounded-2xl border-2 bg-[#5865F2] p-[1.64rem] md:p-5 text-4xl text-white duration-300 hover:bg-[#4445e7]">
								<SiDiscord />
							</a>
						</section>
					</div>
				</section>
			</header>
		);
	}
}

export default Header;
