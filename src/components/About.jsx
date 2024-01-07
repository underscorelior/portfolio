import React, { Component } from 'react';
import {
	SiJavascript,
	SiPython,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import me from '../assets/me.webp';

class About extends Component {
	render() {
		return (
			<div
				id="about"
				className="mx-auto flex w-[85%] flex-col items-center justify-center pt-28 lg:w-[80%] ">
				<h1 className="text-5xl font-black">About</h1>

				<div className="flex flex-col items-center justify-center pt-8 lg:grid lg:grid-cols-[25%,5%,70%] 4xl:grid-cols-[15%,2.5%,82.5%] lg:pt-4">
					<img
						src={me}
						alt="Picture of me"
						className="my-auto aspect-square h-auto w-[45%] rounded-xl lg:w-[95%] 4xl:w-[90%]"
						height={'full'}
						width={'full'}
					/>
					<p className="tracking col-start-3 self-center pt-4 text-2xl font-medium">
						I'm a high school junior based in the United States who loves to
						work on new projects and learn new technologies. I have experience
						in many areas of development, including:
						<span className="ml-2 mr-3 inline-block">
							<SiPython className="mr-1 inline-block text-2xl text-[#3776AB]" />{' '}
							Python,{' '}
						</span>
						<span className="mr-2 inline-block">
							<SiJavascript className="inline-block text-2xl text-[#F7DF1E]" />{' '}
							JavaScript,{' '}
						</span>
						<span className="mr-2 inline-block">
							<SiReact className="inline-block text-2xl text-[#61DAFB]" />{' '}
							React,{' '}
						</span>
						<span className="mr-2 inline-block">
							<SiNextdotjs className="inline-block text-2xl text-[#000000]" />{' '}
							Next.js,{' '}
						</span>
						<span className="mr-2 inline-block">
							<SiTailwindcss className="inline-block text-2xl text-[#38B2AC]" />{' '}
							TailwindCSS,{' '}
						</span>
						<span className="inline-block">
							<FaDatabase className="inline-block text-2xl text-neutral-700" />{' '}
							SQL
						</span>
						, and more. I am currently working on a few projects, including{' '}
						<a
							href="https://elitlabs.com"
							target="_blank"
							className="text-slate-700 underline">
							ElitLabs
						</a>
						, a nonprofit organization dedicated to delivering quality and
						affordable programming classes for underserved students.
					</p>
				</div>
			</div>
		);
	}
}

export default About;
