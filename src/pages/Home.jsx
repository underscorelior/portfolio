import React, { Component } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import { Analytics } from '@vercel/analytics/react';
class Home extends Component {
	render() {
		return (
			<div className="w-full">
				<Analytics />
				<Header />
				<Projects />
				<About />
				<Contact />
			</div>
		);
	}
}

export default Home;
