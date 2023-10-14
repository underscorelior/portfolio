import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MobileNavbar from './components/MobileNav';
import Footer from './components/Footer';

function App() {
	return (
		<div className="flex min-h-screen w-full min-w-full max-w-full flex-col items-center justify-between bg-neutral-100 font-poppins">
			<Navbar />
			<MobileNavbar />
			<div className="mb-auto flex w-full items-center justify-center">
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="*" element={<Home />} />
					</Route>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
