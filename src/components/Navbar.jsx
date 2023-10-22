/* eslint-disable react/prop-types */
import '../assets/css/Navbar.css';
import { motion, useCycle, useMotionValue, useTransform } from 'framer-motion';
import { MenuButton } from './MenuButton';
import { useEffect, useState } from 'react';
import { ReactComponent as SunSvg } from '../assets/images/sun.svg';
import { ReactComponent as MoonSvg } from '../assets/images/moon.svg';
import { ReactComponent as House } from '../assets/images/House.svg';
import { ReactComponent as User } from '../assets/images/User.svg';
import { ReactComponent as ArrowLeft } from '../assets/images/ArrowLeft.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ toggleOnPlay, toggleOnWork, toggleDirection, toggleTheme, theme }) => {
	// const location = useLocation();
	const [buttonStyle, setButtonStyle] = useState({
		transform: 'translate3d(0.739px, 0.739px, 0px)',
	});

	const handleMouseMove = (e) => {
		const button = e.currentTarget;
		const rect = button.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const maxOffset = 3; // Maximum offset in pixels

		const translateX = Math.min(maxOffset, Math.max(-maxOffset, (x - rect.width / 2) / rect.width * maxOffset * 2));
		const translateY = Math.min(maxOffset, Math.max(-maxOffset, (y - rect.height / 2) / rect.height * maxOffset * 2));

		setButtonStyle({
			transform: `translate3d(${translateX}px, ${translateY}px, 0px)`,
		});
	};

	const handleMouseLeave = () => {
		setButtonStyle({
			transform: 'translate3d(0.739px, 0.739px, 0px)',
		});
	};
	const navigate = useNavigate();
	const [isOpen, setOpen] = useState(false);
	const variants = {
		open: { opacity: 1, scale: 1 },
		closed: { opacity: 0, scale: 0 },
	};

	const iconVariants = {
		initial: { opacity: 0, scale: 0 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0 },
	};

	const Menu = (props) => {
		useEffect(() => {
			const homePath = document.querySelector('.home-path');
			const aboutPath = document.querySelector('.about-path');
			if (location.pathname === '/') {
				homePath.classList.add('open-current');
				aboutPath.classList.remove('open-current');
			} else {
				// console.log(homePath.classList);
				aboutPath.classList.add('open-current');
				homePath.classList.remove('open-current');

				// console.log(homePath.classList);
			}
		}, []);

		return (
			<>
				<button
					className='primary-nav flex justify-center items-center dark:bg-black bg-white'
					onClick={() => setOpen(!props.isOpen)}
					type='button'>
					<MenuButton
						isOpen={props.isOpen}
						strokeWidth='2'
						lineProps={{ strokeLinecap: 'round' }}
						transition={{ ease: 'easeOut', duration: 0.2 }}
						width='24'
						height='16'
						color={theme === 'dark' ? '#fff' : '#000'}
					/>
				</button>
				<motion.div
					className='menu-container dark:bg-black'
					initial={props.closed}
					animate={props.isOpen ? 'open' : 'closed'}
					variants={variants}>
					<a
						href='/'
						aria-current='page'
						className='menu-item flex p-4 rounded-lg open-current home-path'>
						<House className='menu-item-icon' />
						<div className='menu-item-text dark:text-white'>Home</div>
					</a>
					<a href='/about' className='menu-item flex p-4 rounded-lg about-path'>
						<User className='menu-item-icon' />
						<div className='menu-item-text dark:text-white'>About</div>
					</a>
				</motion.div>
			</>
		);
	};

	return (
		<>
			{location.pathname === '/' ? (
				<motion.div
					className='flex justify-between nav-menu'
					initial={{ y: -200 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.4 }}>
					<motion.div
						className='primary-nav flex justify-center items-center bg-[#6b46c1] dark:bg-[#f6ad55] '
						whileTap={{ scale: 0.95 }}
						whileHover={{ scale: 0.9 }}
						onClick={toggleTheme}>
						<motion.div
							initial='initial'
							animate='animate'
							transition={{ duration: 0.1 }}
							style={{ originX: 1, originY: 1 }}>
							{theme == "dark" ? (
								<motion.div key='moon' variants={iconVariants}>
									<SunSvg className="dark:text-white" />
								</motion.div>
							) : (
								<motion.div key='sun' variants={iconVariants}>
									<MoonSvg className="text-white" />
								</motion.div>
							)}
						</motion.div>
					</motion.div>

					<div className='tabs-toggle-background dark:bg-black'
						onMouseMove={handleMouseMove}
						onMouseLeave={handleMouseLeave}
						style={buttonStyle} >
						<div className='flex w-full justify-around items-center z-20'>
							<div
								className='black-gradient-span text-lg w-full text-center'
								onClick={toggleOnWork}>
								Work
							</div>
							<div
								className='color-gradient-span text-lg w-full text-center'
								onClick={toggleOnPlay}>
								Play
							</div>
						</div>

						<motion.div
							className='sliding-toggle-indicator'
							animate={{ x: toggleDirection }}
							style={{ background: '#fff' }}
							transition={{
								type: 'spring',
								stiffness: 500,
								damping: 40,
								duration: 0.08,
							}}
						/>
					</div>

					<Menu closed={closed} isOpen={isOpen} />
				</motion.div>
			) : (
				<nav className='flex justify-between nav-menu dark:text-white'>
					<motion.div
						className='primary-nav animoji-button flex justify-center items-center dark:bg-black dark:text-white'
						whileTap={{ scale: 0.95 }}
						whileHover={{ scale: 0.9 }}
						onClick={() => navigate('/')}>
						<ArrowLeft />
					</motion.div>
					<Menu closed={closed} isOpen={isOpen} />
				</nav>
			)}
		</>
	);
};

export default Navbar;
