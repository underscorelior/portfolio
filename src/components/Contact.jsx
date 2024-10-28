import { SiDiscord } from 'react-icons/si';

export default function Contact() {
	return (
		<div
			id="contact"
			className="mx-auto flex w-[85%] flex-col pb-6 pt-32 lg:w-[80%] 4xl:w-[65%]">
			<h1 className="text-center text-5xl font-black">Contact</h1>
			<p className="tracking pt-4 text-2xl font-medium">
				You can reach out to me at{' '}
				<a
					href="mailto:lior@underscore.wtf"
					target="_blank"
					className="text-slate-700 underline">
					lior@underscore.wtf
				</a>
				, or on{' '}
				<a
					href="https://discordapp.com/users/454356237614841870"
					target="_blank"
					className="text-slate-700 underline">
					<SiDiscord className="inline-block text-2xl text-[#5865F2]" /> Discord (underscorelior)
				</a>
				.
			</p>
		</div>
	);
}
