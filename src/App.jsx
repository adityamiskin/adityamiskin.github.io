/* eslint-disable no-unused-vars */
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';

import './app.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

	const [isWorkMode, setIsWorkMode] = useState(true);
	const [toggleDirection, setToggleDirection] = useState(0);
	const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});

	const getThemeFromLocalStorage = () => {
		const savedTheme = localStorage.getItem('theme') // returns 'light' in this case

		if (savedTheme) {
			setTheme(savedTheme);
		}
	}

	const handleThemeChange = () => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		getThemeFromLocalStorage();
	}, [theme]);

	useEffect(() => {
		if (theme === 'dark') {
			document.body.classList.add('dark');
		}
		else {
			document.body.classList.remove('dark');
		}
	}, [theme]);



	const toggleOnWork = () => {
		if (!isWorkMode) {
			setIsWorkMode(true);
			setToggleDirection(0);
		}
	};

	const toggleOnPlay = () => {
		if (isWorkMode) {
			setIsWorkMode(false);
			setToggleDirection(87);
		}
	};

	return (
		<>
			<Router>
				<Navbar toggleOnPlay={toggleOnPlay} toggleOnWork={toggleOnWork} toggleDirection={toggleDirection} toggleTheme={handleThemeChange} theme={theme} />
				<Routes>
					<Route path='/' element={<Home isWorkMode={isWorkMode} />} />
					<Route path='/about' element={<About />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
