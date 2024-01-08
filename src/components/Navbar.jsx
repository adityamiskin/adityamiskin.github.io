import React, { useState, useEffect } from 'react';
import {
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
	FaGithub,
	FaBars,
} from 'react-icons/fa6';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
	const [activeLink, setActiveLink] = useState('/');
	const [isSubmenuOpen, setSubmenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const location = useLocation();
	const imageTypes = ['Street', 'Landscape', 'Nature', 'Portraits', 'Urban'];

	useEffect(() => {
		setActiveLink(location.pathname);
	}, [location]);

	const handleClick = (path) => {
		setActiveLink(path);
		setNavbarOpen(false); // Close the menu when a link is clicked
	};

	// Extract image type from location
	const imageType = location.pathname.split('/')[2];

	// Convert imageType to lowercase if it exists
	const lowerCaseImageType = imageType ? imageType.toLowerCase() : '';

	// Convert imageTypes to lowercase and check if the current path is an image type path
	const isImageTypePath = imageTypes
		.map((type) => type.toLowerCase())
		.includes(lowerCaseImageType);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
		document.body.classList.add('transition-colors');
	}, [darkMode]);

	return (
		<>
			{location.pathname === '/photo' && (
				<div
					className='fixed top-0 w-full h-1/4 left-0 z-20'
					style={{
						background:
							'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 100%)',
					}}></div>
			)}

			<div className='flex md:hidden flex-col mb-8 p-4 relative '>
				<div
					className={`flex justify-between mb-2 ${
						location.pathname === '/photo'
							? 'text-white'
							: location.pathname.startsWith('/photo/')
							? 'text-black'
							: 'text-black'
					} dark:text-white`}>
					<Link to='/' className='' onClick={() => handleClick('/')}>
						<h1 className='tracking-widest font-head font-semibold text-3xl z-20 relative'>
							ADITYA MISKIN
						</h1>
					</Link>
					<div className='flex items-center gap-4'>
						<button onClick={() => setDarkMode(!darkMode)}>
							{darkMode ? (
								<FiSun className='text-2xl transition ease-in-out duration-500 stroke-2 fill-orange-400 stroke-orange-400' />
							) : (
								<FiMoon className='text-2xl transition ease-in-out duration-500 stroke-1 stroke-violet-500 fill-violet-500' />
							)}
						</button>
						<button
							onClick={() => setNavbarOpen((prevState) => !prevState)}
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

			<header
				className={`justify-between items-center transition-all duration-250 dark:text-white ${
					isImageTypePath ? 'mb-10 p-4' : 'mb-10 p-10'
				} z-50 relative md:flex hidden max-w-8xl mx-auto ${
					location.pathname === '/photo'
						? 'text-white'
						: location.pathname.startsWith('/photo/')
						? 'text-black'
						: 'text-black'
				}`}>
				<div className='text-4xl'>
					<Link to='/' className='' onClick={() => handleClick('/')}>
						<h1 className='tracking-widest font-head font-semibold'>
							ADITYA MISKIN
						</h1>
					</Link>
				</div>

				<div>
					<ul className='flex gap-8 items-center tracking-wider text-base font-head'>
						<Link
							to='/'
							className={`link ${
								activeLink === '/' ? 'active' : ''
							} underline-offset-2`}
							onClick={() => handleClick('/')}>
							<li>About</li>
						</Link>

						<Link
							to='/work'
							className={`link ${
								activeLink === '/work' ? 'active' : ''
							} underline-offset-2`}
							onClick={() => handleClick('/work')}>
							<li>Work</li>
						</Link>
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
								<li>+ Photo</li>
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
						<Link
							to='/contact'
							className={`link ${
								activeLink === '/contact' ? 'active' : ''
							} underline-offset-2`}
							onClick={() => handleClick('/contact')}>
							<li>Contact</li>
						</Link>

						<button onClick={() => setDarkMode(!darkMode)}>
							{darkMode ? (
								<FiSun className='text-2xl transition ease-in-out duration-500 stroke-2 fill-orange-400 stroke-orange-400' />
							) : (
								<FiMoon className='text-2xl transition ease-in-out duration-500 stroke-1 stroke-violet-500 fill-violet-500' />
							)}
						</button>

						<li className='text-xl flex gap-4'>
							<Link to='https://github.com/adityamiskin'>
								<FaGithub />
							</Link>
							<Link to='https://twitter.com/AdityaMiskin3'>
								<FaTwitter />
							</Link>
							<Link to='https://www.instagram.com/by.miskin'>
								<FaInstagram />
							</Link>
							<Link to='https://www.linkedin.com/in/aditya-miskin/'>
								<FaLinkedinIn />
							</Link>
						</li>
					</ul>
				</div>
			</header>

			<div
				className={`w-full h-full text-left transition-transform duration-300 ease-out transform fixed bg-[#fbfbfb] top-0 left-0 p-6 py-8 font-head md:hidden z-40 dark:text-black ${
					navbarOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<ul className='flex flex-col gap-8 tracking-wider text-lg font-head'>
					<Link to='/' className={`link ml-3`} onClick={handleClick}>
						<li>About</li>
					</Link>

					<Link to='/work' className={`link ml-3`} onClick={handleClick}>
						<li>Work</li>
					</Link>

					<Link to='/photo' className={`link`} onClick={handleClick}>
						<li className='mb-4'>+ Photo</li>
						<ul className='ml-8 flex flex-col gap-3'>
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
					</Link>

					<Link
						to='/contact'
						className={`link ${
							activeLink === '/contact' ? 'active' : ''
						} underline-offset-2`}
						onClick={() => handleClick('/contact')}>
						<li>Contact</li>
					</Link>

					<li className='text-xl flex gap-4'>
						<Link to='https://github.com/adityamiskin'>
							<FaGithub />
						</Link>
						<Link to='https://twitter.com/AdityaMiskin3'>
							<FaTwitter />
						</Link>
						<Link to='https://www.instagram.com/by.miskin'>
							<FaInstagram />
						</Link>
						<Link to='https://www.linkedin.com/in/aditya-miskin/'>
							<FaLinkedinIn />
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
