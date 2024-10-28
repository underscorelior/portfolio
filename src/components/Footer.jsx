import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si';

export default function Footer() {
	return (
		<section className="mt-16 flex h-auto w-full items-center justify-center rounded-t-lg border-t-2 border-gray-200 p-8 lg:p-6">
			<footer className="mx-auto flex w-full flex-col gap-x-10 md:max-w-[90%] md:flex-row md:justify-between">
				<div className="flex flex-col gap-x-10 md:flex-row md:items-center md:justify-center">
					<a
						className="text-4xl font-bold text-neutral-800 md:text-3xl"
						href="/#">
						2024 Lior
					</a>
					<div className="mb-4 mt-6 flex flex-col gap-x-10 gap-y-4 text-xl font-medium text-neutral-800">
						<h1 className="text-3xl font-semibold md:hidden">Pages</h1>
						<div className="flex flex-col gap-x-5 md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row">
							<a href="/#about">About</a>
							<a href="/#contact">Contact</a>
							<a href="/#work">Work</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:items-center md:justify-center">
					<h1 className="my-3 text-2xl font-semibold text-neutral-800">
						Contact Me
					</h1>
					<div className="flex flex-row gap-x-7">
						<a
							href="https://github.com/underscorelior"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="github">
							<SiGithub color="#181717" size={32} />
						</a>	
						<a
							href="mailto:lior@underscore.wtf"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="email">
							<SiGmail color="#EA4335" size={32} />
						</a>
						<a
							href="https://www.linkedin.com/in/liorpendler/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="linkedin">
							<SiLinkedin color="#0077B5" size={32} />
						</a>
					</div>
				</div>
			</footer>
		</section>
	);
}
