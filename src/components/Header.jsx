import React, { Component } from 'react';
import BlobHeader from "./Header/BlobHeader"
class Header extends Component {
	render() {
		return (
			<header className="flex VHcenter">
				<BlobHeader/>
			</header>
		);
	}
}

export default Header;