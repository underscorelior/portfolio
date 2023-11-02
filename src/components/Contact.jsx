import React, { Component } from 'react';
import { SiDiscord } from 'react-icons/si';

class Contact extends Component {
	render() {
		return (
			<div id="contact" className="mx-auto flex w-[80%] flex-col pt-32 pb-6">
				<h1 className="text-center text-5xl font-black">Contact</h1>
				<p className="tracking pt-4 text-2xl font-medium">
					You can contact me at{' '}
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
						<SiDiscord className="inline-block text-2xl text-[#5865F2]" />{' '}
						Discord
					</a>
					. Looking for a developer or designer? I'm available for freelance work! Reach
					out to me and I'll get back to you as soon as possible.
				</p>
			</div>
		);
	}
}

export default Contact;
