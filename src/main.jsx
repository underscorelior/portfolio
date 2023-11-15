import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MobileNavbar from './components/MobileNav';
import Footer from './components/Footer';

function App() {
	return (
		<div className="flex min-h-screen w-full min-w-full max-w-full flex-col items-center justify-between bg-neutral-100 font-poppins">
			<Navbar />
			<MobileNavbar />
			<Home />
			<Footer />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
