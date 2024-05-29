import React from 'react';
import ReactDOM from 'react-dom/client';

import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNav';
import Navbar from './components/Navbar';

import './style.css';

function App() {
	return (
		<div className="flex min-h-screen w-full min-w-full max-w-full flex-col items-center justify-between bg-neutral-100">
			<Navbar />
			<MobileNavbar />
			<Header />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
