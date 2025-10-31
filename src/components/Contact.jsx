import { SiLinkedin } from 'react-icons/si';

export default function Contact() {
	return (
		<div
			id="contact"
			className="mx-auto flex w-[85%] flex-col pb-6 pt-32 lg:w-[80%] 4xl:w-[65%]">
			<h1 className="text-center text-5xl font-black">Contact</h1>
			<p className="tracking pt-4 text-2xl font-medium">
				You can reach out to me at{' '}
				<a
					href="mailto:lior.pendler@gmail.com"
					target="_blank"
					className="text-slate-700 underline">
					lior.pendler@gmail.com
				</a>
				, or connect with me on{' '}
				<a
					href='https://linkedin.com/in/liorpendler'
					target="_blank"
					className="text-slate-700">
					<SiLinkedin className="inline-block text-2xl text-[#005E93]" /> <span className='underline'>LinkedIn</span>
				</a>
				.
			</p>
		</div>
	);
}
