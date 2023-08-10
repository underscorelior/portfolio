import React, { Component, useEffect } from 'react';

class QuizRedirect extends Component {
	render() {
		useEffect(() => {
			window.location.href = 'https://underscore-quiz.vercel.app/';
			return null;
		}, []);
		window.location.href = 'https://underscore-quiz.vercel.app/';
		return (
			<div>
				<h1>G</h1>
			</div>
		);
	}
}

export default QuizRedirect;