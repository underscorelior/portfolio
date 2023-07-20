import React, { Component } from 'react';
import BlobHeader from './Header/BlobHeader';

class Header extends Component {
	render() {
		return (
			<header className='flex items-center justify-center flex-col'>
				<BlobHeader />
			</header>
		);
	}
}

export default Header;
