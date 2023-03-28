import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="">
				<div className='relative w-full flex justify-center mt-20'>
					<div className="relative max-w-lg">
						<div className='blobs top-0 -left-20 bg-fuchsia-300 mix-blend-multiply'></div>
						<div className='blobs top-0 left-64 bg-teal-300 mix-blend-multiply animation-delay-2000'></div>
						<div className='blobs top-32 left-20 bg-lime-300 animation-delay-4000'></div>
					</div>
					<div className='relative flex justify-center'>
					<div className='rounded-lg flex justify-center mt-20 w-[81%] flex-col'>
						<h1 className="text-7xl w-[81%] text-neutral-800 font-medium"><span className="font-extrabold text-8xl">Lior</span><br/>Fullstack and UI/UX Developer</h1>
						<div className="mt-8">
							<span className='text-4xl font-normal'>
							</span>
						</div>
					</div>
				</div>
			</div>
		</header>
		);
	}
}

export default Header;