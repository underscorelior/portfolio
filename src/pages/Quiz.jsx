import React from 'react';
import CapitalsQuiz from '../components/Quiz/CapitalsQuiz';
import FlagsQuiz from '../components/Quiz/FlagsQuiz';
import { Toaster } from 'react-hot-toast';

export default function QuizPage() {
	const [quizType, setQuizType] = React.useState(true); // true = capitals, false = flags
	if (!localStorage.getItem('capital-score')) {
		localStorage.setItem('capital-score', 0);
	}
	if (!localStorage.getItem('flag-score')) {
		localStorage.setItem('flag-score', 0);
	}
	return (
		<div className='w-full flex flex-col VHcenter gap-y-8 my-8'>
			<Toaster />
			{quizType ? <CapitalsQuiz /> : <FlagsQuiz />}
			<div className='font-semibold text-xl grid grid-rows-2 md:grid-cols-2 w-full max-w-[70%] md:max-w-[35%]'>
				<h1 className=''>
					{quizType ? 'Capital' : 'Flag'} Score:{' '}
					{localStorage.getItem(
						quizType ? 'capital-score' : 'flag-score'
					)}
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
