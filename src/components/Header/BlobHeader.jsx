import React, { Component } from 'react';
import header from '../../assets/header.json';
import { HashLink } from 'react-router-hash-link';
class BlobHeader extends Component {
	render() {
		return (
			<div className='relative w-full flex justify-center mt-32'>
				<div className='relative max-w-lg blur-3xl'>
					<div className='absolute w-32 h-32 md:w-80 md:h-80 rounded-full filter blur-3xl animate-blob top-10 -left-10 md:-left-20 bg-fuchsia-400 mix-blend-multiply'></div>
					<div className='absolute w-32 h-32 md:w-80 md:h-80 rounded-full filter blur-3xl animate-blob top-0 left-32 md:left-64 bg-teal-300 mix-blend-multiply animation-delay-2000'></div>
					<div className='absolute w-32 h-32 md:w-80 md:h-80 rounded-full filter blur-3xl animate-blob top-16 md:top-32 left-10 md:left-20 bg-lime-300 animation-delay-4000'></div>
				</div>
				<div className='relative flex justify-center w-full h-full'>
					<div className='rounded-lg flex justify-center mt-8 md:w-[81%] flex-col max-w-[90%] md:max-w-[75%]'>
						<h1 className='text-[2.5rem] leading-[2.75rem] md:text-7xl md:w-[81%] text-neutral-900 font-semibold md:font-medium'>
							{header.subtitle}
						</h1>
						<div className='mt-4'>
							<span className='text-xl md:text-5xl font-normal text-neutral-700'>
								{header.description}
							</span>
						</div>
						<HashLink
							to='#work'
							smooth
							className='mt-8 bg-neutral-900 text-neutral-100 p-4 rounded-2xl max-w-[15%] font-semibold text-xl text-center'
						>
							View Work
						</HashLink>
					</div>
				</div>
			</div>
		);
	}
}

export default BlobHeader;
