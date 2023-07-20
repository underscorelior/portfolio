import React, { Component } from 'react';
import header from '../../assets/header.json';
class BlobHeader extends Component {
	render() {
		return (
			<div className='relative w-full flex justify-center mt-6 max-w-[90%] md:max-w-[75%]'>
				<div className='relative max-w-lg'>
					<div className='absolute w-32 h-32 md:w-80 md:h-80 rounded-full filter blur-xl opacity-70 animate-blob top-10 -left-10 md:-left-20 bg-fuchsia-300 mix-blend-multiply'></div>
					<div className='absolute w-32 h-32 md:w-80 md:h-80 rounded-full filter blur-xl opacity-70 animate-blob top-0 left-32 md:left-64 bg-teal-300 mix-blend-multiply animation-delay-2000'></div>
					<div className='absolute w-32 h-32 md:w-80 md:h-80 rounded-full filter blur-xl opacity-70 animate-blob top-16 md:top-32 left-10 md:left-20 bg-lime-300 animation-delay-4000'></div>
				</div>
				<div className='relative flex justify-center'>
					<div className='rounded-lg flex justify-center mt-8 md:w-[81%] flex-col'>
						<h1 className='text-[2.5rem] leading-[2.75rem] md:text-7xl md:w-[81%] text-neutral-900 font-semibold md:font-medium'>
							{header.subtitle}
						</h1>
						<div className='mt-8'>
							<span className='text-xl md:text-5xl font-normal text-neutral-700'>
								{header.description}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BlobHeader;
