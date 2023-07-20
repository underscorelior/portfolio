import React, { Component } from 'react';
import QuizButton from './QuizButton';
import toast from 'react-hot-toast';

class FlagsQuiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [],
			answer: '',
			selectedOption: '',
			isChecked: false,
			flagUrl: '',
		};
	}

	handleOptionSelect = (option) => {
		this.setState({ selectedOption: option });
	};

	handleAnswerCheck = () => {
		const { selectedOption, answer } = this.state;
		const isCorrect = selectedOption === answer;
		localStorage.setItem(
			'flag-score',
			parseInt(localStorage.getItem('flag-score')) + (isCorrect ? 1 : 0)
		);
		this.props.updateScore();
		this.setState({ isChecked: true });
		toast(
			isCorrect ? 'Correct!' : `Incorrect! Correct Answer: ${answer}.`,
			{
				icon: isCorrect ? '✅' : '⛔',
				style: {
					borderRadius: '10px',
				},
			}
		);
	};

	generateNextQuestion = async () => {
		try {
			const response = await fetch(
				'https://underscore.wtf/countries/countries.json'
			);
			const countries = await response.json();
			const randomIndex = Math.floor(Math.random() * countries.length);
			const country = countries[randomIndex];

			let options = [country.name];

			while (options.length < 4) {
				const randomIndex = Math.floor(
					Math.random() * countries.length
				);

				const optionName = countries[randomIndex].name;
				const option = Array.isArray(optionName)
					? optionName.join(', ')
					: optionName;

				if (!options.includes(option)) {
					options.push(option);
				}
			}

			for (let i = options.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[options[i], options[j]] = [options[j], options[i]];
			}

			this.setState({
				options,
				answer: country.name,
				isChecked: false,
				selectedOption: '',
				flagUrl: country.flags,
			});
		} catch (error) {
			console.error(error);
			toast.error(
				'Could not load countries. Please check your internet connection.'
			);
		}
	};

	componentDidMount() {
		this.generateNextQuestion();
	}

	render() {
		const { flagUrl, options, selectedOption, isChecked } = this.state;
		const isDisabled = selectedOption === '';

		return (
			<section className='flex flex-col gap-y-4 min-w-[80%] max-w-[80%] md:min-w-[40%] md:max-w-[40%] w-full  items-center justify-center'>
				<header className='flex flex-col items-center justify-center w-full gap-y-4'>
					<h1 className='text-2xl font-semibold mb-3 text-center'>
						Which country does this flag belong to?
					</h1>
					<img
						src={flagUrl}
						className='w-[320px] h-auto rounded-3xl drop-shadow-2xl p-4 select-none'
					/>
				</header>
				{options.map((option, index) => (
					<QuizButton
						key={index}
						option={option}
						isSelected={selectedOption === option}
						isCorrect={(option === this.state.answer) === isChecked}
						isDisabled={isChecked}
						onClick={this.handleOptionSelect}
					/>
				))}
				{!isChecked ? (
					<button
						className={'quiz-button-check'}
						onClick={this.handleAnswerCheck}
						disabled={isChecked || isDisabled}
					>
						Check Answer
					</button>
				) : (
					<button
						className='quiz-button-next'
						onClick={this.generateNextQuestion}
					>
						Next Question
					</button>
				)}
			</section>
		);
	}
}

export default FlagsQuiz;
