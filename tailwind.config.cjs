/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				blob: 'blob 12s infinite',
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)',
					},
					'100%': {
						transform: 'tranlate(0px, 0px) scale(1)',
					},
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			backgroundImage: {
				elitlabs:
					"url('https://www.site-shot.com/cached_image/3MINdCZkEe640AJCrBEACA')",
				l0n3ly: "url('https://www.site-shot.com/cached_image/DNApDibpEe6gUgJCrBEAAg')",
			},
		},
	},
};
