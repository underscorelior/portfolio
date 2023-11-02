import React, { Component } from 'react';
import {
	SiJavascript,
	SiPython,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import me from '../assets/me.png';

class About extends Component {
	render() {
		return (
			<div
				id="about"
				className="mx-auto flex w-[80%] flex-col items-center justify-center pt-28 ">
				<h1 className="text-5xl font-black">About</h1>

				<div className="grid grid-cols-[25%,75%]">
					<img
						src={me}
						alt="Picture of me"
						className="my-auto -ml-[12.5%] aspect-square h-auto w-[95%] rounded-xl"
					/>
					<p className="tracking pt-4 text-2xl font-medium">
						I'm a high school junior based in the United States who loves to
						work on new projects and learn new technologies. I have experience
						in many areas of development, including:
						<span className="inline-block">
							<SiPython className="ml-2 mr-1 inline-block text-2xl text-[#3776AB]" />{' '}
							Python,{' '}
						</span>
						<span className="inline-block">
							<SiJavascript className="ml-2 inline-block text-2xl text-[#F7DF1E]" />{' '}
							JavaScript,{' '}
						</span>
						<span className="inline-block">
							<SiReact className="ml-2 inline-block text-2xl text-[#61DAFB]" />{' '}
							React,{' '}
						</span>
						<span className="inline-block">
							<SiNextdotjs className="ml-2 inline-block text-2xl text-[#000000]" />{' '}
							Next.js,{' '}
						</span>
						<span className="inline-block">
							<SiTailwindcss className="ml-2 inline-block text-2xl text-[#38B2AC]" />{' '}
							TailwindCSS,{' '}
						</span>
						<span className="inline-block">
							<FaDatabase className="ml-2 inline-block text-2xl text-neutral-700" />{' '}
							SQL
						</span>
						, and more. I am currently working on a few projects, including{' '}
						<a
							href="https://elitlabs.com"
							target="_blank"
							className="text-slate-700 underline">
							ElitLabs
						</a>
						, an online course platform to help others learn in a better way,
						and on{' '}
						<a
							href="https://quiz.underscore.wtf"
							target="_blank"
							className="text-slate-700 underline">
							Geography Quiz
						</a>
						, to test your geography knowlege.
					</p>
				</div>
			</div>
		);
	}
}

export default About;
