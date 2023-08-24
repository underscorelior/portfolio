import React, { Component } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
class Home extends Component {
	render() {
		return (
			<div className="w-full">
				<Header />
				<Projects />
				<About />
				<Contact />
			</div>
		);
	}
}

export default Home;
