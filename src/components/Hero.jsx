import '../assets/css/Hero.css';
import { motion } from 'framer-motion';

import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Hero = ({ isWorkMode }) => {
	const particlesInit = useCallback(async engine => {
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, []);
	return (
		<>
			<motion.div className='my-36 mt-60 top-28 overflow-visible'>

				{isWorkMode ? (
					<motion.div className='flex flex-col items-center justify-center text-center hero'>
						<h1 className='mb-3 work-title dark:work-title'>Hi, I&apos;m Aditya.</h1>
						<div className='location-wrapper'>
							<img
								src='https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/5fd67d88e589fa52700f6034_MapPin.svg'
								loading='lazy'
								width='24'
								height='24'
								alt=''
								className='location-icon'
							/>
							<p className='strong-text dark:text-white'>Bengaluru, KA</p>
						</div>

						<p className='text-center text-lg hero-centered-paragraph work dark:text-white z-10'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, quibusdam pariatur repellendu. Check out my {' '} <a href='https://drive.google.com/file/d/1vcZuMpWLirjbk_POncp6-W7ZxPj_H8jT/view?usp=drivesdk' className='link-text dark:text-white'>
								resume.
							</a>
						</p>

					</motion.div>
				) : (

					<div className='flex flex-col items-center justify-center text-center hero'>
						<h1 className='colored-gradient-h1 mb-3'>Hi, I&apos;m Aditya.</h1>
						<div className='location-wrapper'>
							<img
								src='https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/5fd67d88e589fa52700f6034_MapPin.svg'
								loading='lazy'
								width='24'
								height='24'
								alt=''
								className='location-icon'
							/>
							<p className='strong-text dark:text-white'>Bengaluru, KA</p>
						</div>
						<p className='text-center text-lg hero-centered-paragraph dark:text-white z-10'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus amet, repellat at nihil blanditiis aliquid ullam! Beatae. Learn more{' '}
							<a href='/about' className='link-text dark:text-white'>
								about me.
							</a>
						</p>
					</div>
				)}
			</motion.div >
		</>
	);
};

export default Hero;
