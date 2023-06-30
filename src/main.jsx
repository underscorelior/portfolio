import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MobileNavbar from './components/MobileNav';
import Footer from './components/Footer';
import Quiz from './pages/Quiz';

function App() {
	return (
		<div className='body flex-col justify-between'>
			<Navbar />
			<MobileNavbar />
			<div className='mb-auto flex VHcenter w-full'>
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='quiz' element={<Quiz />} />
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
	</BrowserRouter>
);
