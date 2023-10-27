/* eslint-disable no-unused-vars */
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor"

import './app.css';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom'

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
		<BrowserRouter basename='/'>
			{/* <Cursor /> */}
			{/* <AnimatedCursor
				innerSize={8}
				outerSize={35}
				outerAlpha={0}
				innerScale={1}
				outerScale={2}
				hasBlendMode={true}
				clickables={[
					'a',
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					'label[for]',
					'select',
					'textarea',
					'button',
					'.link'
				]}
				trailingSpeed={3}
				outerStyle={{ mixBlendMode: 'exclusion', border: `2px solid ${theme === "dark" ? "#fff" : "#000"}` }}
				innerStyle={{
					mixBlendMode: 'exclusion',
					backgroundColor: `${theme === "dark" ? "#fff" : "#000"}`
				}}
			/> */}
			<Navbar toggleOnPlay={toggleOnPlay} toggleOnWork={toggleOnWork} toggleDirection={toggleDirection} toggleTheme={handleThemeChange} theme={theme} />
			<Routes>
				<Route path='/' element={<Home isWorkMode={isWorkMode} theme={theme} />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter >
	);
}

export default App;
