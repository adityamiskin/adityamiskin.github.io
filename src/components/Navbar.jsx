import React, { useState, useEffect } from 'react';
import {
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
	FaGithub,
} from 'react-icons/fa6';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
	const [activeLink, setActiveLink] = useState('/');
	const [isSubmenuOpen, setSubmenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(() => {
		const storedDarkMode = window.localStorage.getItem('darkMode');
		return storedDarkMode ? JSON.parse(storedDarkMode) : false;
	});
	const location = useLocation();
	const imageTypes = ['Street', 'Landscape', 'Nature', 'Portraits', 'Urban'];

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setIsScrolled(currentScrollY > 45);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		setActiveLink(location.pathname);
	}, [location]);

	const handleClick = (path) => {
		setActiveLink(path);
		setNavbarOpen(false); // Close the menu when a link is clicked
	};

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
		document.body.classList.add('transition-colors');

		// Store darkMode in local storage
		window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
	}, [darkMode]);

	return (
		<header>
			<nav
				className={`justify-between top-0 fixed items-center transition-all duration-250 w-full dark:text-white p-10 z-50 md:flex hidden max-w-8xl mx-auto ${
					isScrolled
						? 'bg-black text-white dark:bg-[#fbfbfb] dark:text-black'
						: ''
				} ${
					location.pathname === '/photo'
						? 'text-white p-4 dark-hover'
						: location.pathname.startsWith('/photo/')
						? 'text-black p-4'
						: 'text-black'
				}`}>
				<div
					className={`text-4xl ${
						isScrolled ? 'text-white dark:text-black' : ''
					}`}>
					<Link to='/' className='' onClick={() => handleClick('/')}>
						<h1 className='tracking-widest font-head font-semibold'>
							ADITYA MISKIN
						</h1>
					</Link>
				</div>

				<div className={`${isScrolled ? ' text-white  dark:text-black' : ''}`}>
					<ul className='flex gap-8 items-center tracking-wider text-base font-head'>
						<li>
							<Link
								to='/'
								className={`link ${
									activeLink === '/' ? 'active' : ''
								} underline-offset-2`}
								onClick={() => handleClick('/')}>
								About
							</Link>
						</li>

						<li>
							<Link
								to='/work'
								className={`link ${
									activeLink === '/work' ? 'active' : ''
								} underline-offset-2`}
								onClick={() => handleClick('/work')}>
								Work
							</Link>
						</li>

						<li>
							<div
								className={`relative extra ${isSubmenuOpen ? 'open' : ''}`}
								onMouseEnter={() => setSubmenuOpen(true)}
								onMouseLeave={() => setSubmenuOpen(false)}>
								<Link
									to='/photo'
									className={`link ${
										activeLink === '/photo' ? 'active' : ''
									} underline-offset-2`}
									onClick={() => {
										handleClick('/photo');
									}}>
									+ Photo
								</Link>

								{isSubmenuOpen && (
									<ul className='absolute flex flex-col p-6 text-sm w-36 gap-4 left-[-35px] mt-2 bg-black text-white border-t-2 border-transparent dark:bg-[#fbfbfb] dark:text-black'>
										{imageTypes.map((type) => (
											<li key={type}>
												<Link
													to={`/photo/${type.toLowerCase()}`}
													className={`sublink ${
														activeLink === `/photo/${type.toLowerCase()}`
															? 'active'
															: ''
													} underline-offset-2 decoration-white`}
													onClick={() =>
														handleClick(`/photo/${type.toLowerCase()}`)
													}>
													{type}
												</Link>
											</li>
										))}
									</ul>
								)}
							</div>
						</li>

						<li>
							<Link
								to='/contact'
								className={`link ${
									activeLink === '/contact' ? 'active' : ''
								} underline-offset-2`}
								onClick={() => handleClick('/contact')}>
								Contact
							</Link>
						</li>

						<li className='flex'>
							<button
								onClick={() => setDarkMode(!darkMode)}
								aria-label='Dark Mode toggle'>
								{darkMode ? (
									<FiSun className='text-2xl transition ease-in-out duration-500 stroke-2 fill-orange-400 stroke-orange-400' />
								) : (
									<FiMoon className='text-2xl transition ease-in-out duration-500 stroke-1 stroke-violet-500 fill-violet-500' />
								)}
							</button>
						</li>

						<li className='text-xl flex gap-4'>
							<a
								href='https://github.com/adityamiskin'
								aria-label='Github'
								target='_blank'>
								<FaGithub />
							</a>
							<a
								href='https://twitter.com/AdityaMiskin3'
								aria-label='Twitter'
								target='_blank'>
								<FaTwitter />
							</a>
							<a
								href='https://www.instagram.com/by.miskin'
								aria-label='Instagram'
								target='_blank'>
								<FaInstagram />
							</a>
							<a
								href='https://www.linkedin.com/in/aditya-miskin/'
								aria-label='LinkedIn'
								target='_blank'>
								<FaLinkedinIn />
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<div className={`flex md:hidden flex-col mb-8 p-4 relative  `}>
				<div
					className={`flex justify-between mb-2 ${
						location.pathname === '/photo'
							? 'text-white'
							: location.pathname.startsWith('/photo/')
							? 'text-black'
							: 'text-black'
					} dark:text-white`}>
					<Link to='/' className='' onClick={() => handleClick('/')}>
						<h1 className='tracking-widest font-head font-semibold text-3xl relative z-30'>
							ADITYA MISKIN
						</h1>
					</Link>
					<div className='flex items-center gap-4 '>
						<button
							onClick={() => setDarkMode(!darkMode)}
							aria-label='Dark mode toggle'
							className='z-30'>
							{darkMode ? (
								<FiSun className='text-2xl transition ease-in-out duration-500 stroke-2 fill-orange-400 stroke-orange-400' />
							) : (
								<FiMoon className='text-2xl transition ease-in-out duration-500 stroke-1 stroke-violet-500 fill-violet-500' />
							)}
						</button>
						<button
							onClick={() => setNavbarOpen((prevState) => !prevState)}
							aria-label='Menu toggle'
							className={`relative z-50 ${navbarOpen ? 'text-black' : null}`}>
							<FiMenu className='text-3xl' />
						</button>
					</div>
				</div>
				<h2
					className={`tracking-[7.5px] text-[#111] font-thin z-30 relative ${
						location.pathname === '/photo'
							? 'text-white'
							: location.pathname.startsWith('/photo/')
							? 'text-black'
							: 'text-black'
					} dark:text-white`}>
					TELLING STORIES IN EVERY MEDIUM
				</h2>
			</div>

			<aside
				className={`w-full h-full text-left transition-transform duration-300 ease-out transform fixed bg-[#fbfbfb] top-0 left-0 p-6 py-8 font-head md:hidden z-40 dark:text-black ${
					navbarOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<ul
					className='flex flex-col gap-8 tracking-wider text-lg font-head'
					style={{ width: 'fit-content' }}>
					<li>
						<Link to='/' className={`link ml-3`} onClick={handleClick}>
							About
						</Link>
					</li>

					<li>
						<Link to='/work' className={`link ml-3`} onClick={handleClick}>
							Work
						</Link>
					</li>

					<li>
						<Link to='/photo' className='link' onClick={handleClick}>
							+ Photo
						</Link>
						<ul className='ml-8 flex flex-col gap-3 mt-3'>
							{imageTypes.map((type) => (
								<li key={type}>
									<Link
										to={`/photo/${type.toLowerCase()}`}
										className={`sublink `}
										onClick={handleClick}>
										{type}
									</Link>
								</li>
							))}
						</ul>
					</li>

					<li>
						<Link
							to='/contact'
							className={`link ${
								activeLink === '/contact' ? 'active' : ''
							} underline-offset-2`}
							onClick={() => handleClick('/contact')}>
							Contact
						</Link>
					</li>

					<li className='text-xl flex gap-4'>
						<Link to='https://github.com/adityamiskin' aria-label='Github'>
							<FaGithub />
						</Link>
						<Link to='https://twitter.com/AdityaMiskin3' aria-label='Twitter'>
							<FaTwitter />
						</Link>
						<Link
							to='https://www.instagram.com/by.miskin'
							aria-label='Instagram'>
							<FaInstagram />
						</Link>
						<Link
							to='https://www.linkedin.com/in/aditya-miskin/'
							aria-label='LinkedIn'>
							<FaLinkedinIn />
						</Link>
					</li>
				</ul>
			</aside>
		</header>
	);
};

export default Navbar;
