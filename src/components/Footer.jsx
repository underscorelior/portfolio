export default function Footer() {
	return (
		<footer className='bottom-0 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-gray-50 py-6 text-center md:justify-between md:mx-auto '>
			<div className='md:max-w-[90%] flex-row flex w-full justify-between items-center mx-auto'>
				<h1>&copy; 2023 Lior</h1>
				<ul className='grid grid-rows-2 grid-cols-2 md:flex md:flex-row md:flex-wrap md:items-center gap-y-2 gap-x-8'>
					<li>
						<h1>About</h1>
					</li>
					<li>
						<h1>Contact</h1>
					</li>
					<li>
						<h1>Github</h1>
					</li>
					<li>
						<h1>Projects</h1>
					</li>
				</ul>
			</div>
		</footer>
	);
}
