import React, { Component } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Contact />
				<h1 className='py-96 my-96'>a</h1>
				{/* This is just to test navbar and scrolling */}
			</div>
		);
	}
}

export default Home;
