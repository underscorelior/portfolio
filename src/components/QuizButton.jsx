import React, { Component } from 'react';

class QuizButton extends Component {
	render() {
		const { option, isSelected, isDisabled, isCorrect, onClick } =
			this.props;
		let className = 'quiz-button';

		if (isSelected) {
			className += ' quiz-button-selected';
		}

		if (isDisabled) {
			className = isSelected
				? isCorrect
					? 'quiz-button-correct'
					: 'quiz-button-wrong'
				: 'quiz-button-disabled';
		}

		return (
			<button
				className={className}
				onClick={() => onClick(option)}
				disabled={isDisabled}
			>
				{option}
			</button>
		);
	}
}

export default QuizButton;