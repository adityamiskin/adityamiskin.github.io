import React from 'react';
import { Link } from 'react-router-dom';
// import Anya from '../assets/images/anya.png';

const About = () => {
	return (
		<section className='md:w-9/12 w-full max-w-3xl mx-auto flex flex-col p-4 md:p-8 mb-14 relative my-auto md:mt-40 mt-8'>
			<h1 className='font-head font-semibold text-3xl mb-6'>About</h1>
			<div className='flex mx-auto gap-6 flex-col md:flex-row'>
				<div className='tracking-wide text-sm order-2 md:order-1'>
					<p className='mb-4 mt-2'>Hi, I'm Aditya.</p>
					<p className='mb-8 tracking-wide leading-normal'>
						I'm a software engineer living in Bengaluru, IN. I’m also a hobbyist
						photographer travelling the world, documenting this beautiful planet
						of ours. In my free time, I play a lot of games and learn guitar.
						Check out my resume over{' '}
						<a
							href='https://drive.google.com/file/d/1FNhPrthCFp8oFNeC0Ve9pj9fte2GKg1X/view?usp=sharing'
							className='link-text'
							target='_blank'
							rel='noopener noreferrer'>
							here.
						</a>
					</p>

					<h3 className='mb-3 font-head text-lg font-semibold'>
						Toss me a line
					</h3>

					<p className='italic'>adityamiskin98@gmail.com</p>
				</div>

				<img
					src='https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,h_1179/v1704632730/profile_bhu0aw.webp'
					alt='profile picture'
					className='md:w-1/2 md:h-1/2 md:p-4 md:max-w-96 md:max-h-96 order-1 md:order-2 w-full h-full'
				/>
			</div>
		</section>
	);
};

export default About;
