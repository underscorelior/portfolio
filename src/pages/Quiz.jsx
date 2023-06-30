import React, { useState } from 'react';
import CapitalsQuiz from '../components/Quiz/CapitalsQuiz';
import FlagsQuiz from '../components/Quiz/FlagsQuiz';
import { Toaster } from 'react-hot-toast';

export default function Quiz() {
	const [quizType, setQuizType] = useState(true); // true = capitals, false = flags
	const [capitalScore, setCapitalScore] = useState(
		localStorage.getItem('capital-score') || 0
	);
	const [flagScore, setFlagScore] = useState(
		localStorage.getItem('flag-score') || 0
	);

	const updateScore = () => {
		if (quizType) {
			setCapitalScore(localStorage.getItem('capital-score'));
		} else {
			setFlagScore(localStorage.getItem('flag-score'));
		}
	};

	return (
		<div className='w-full flex flex-col VHcenter gap-y-8 my-8'>
			<Toaster />
			{quizType ? (
				<CapitalsQuiz updateScore={updateScore} />
			) : (
				<FlagsQuiz updateScore={updateScore} />
			)}
			<div className='font-semibold text-xl grid grid-rows-2 md:grid-cols-2 w-full max-w-[70%] md:max-w-[35%]'>
				<h1 className=''>
					{quizType ? 'Capital' : 'Flag'} Score:{' '}
					{quizType ? capitalScore : flagScore}
				</h1>
				<button
					onClick={() => setQuizType(!quizType)}
					className='quiz-button'
				>
					Change Quiz Type
				</button>
			</div>
		</div>
	);
}
