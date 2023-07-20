import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects';
class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Projects />
			</div>
		);
	}
}

export default Home;
