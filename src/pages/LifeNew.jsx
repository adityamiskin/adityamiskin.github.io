import React, { useState } from 'react';
import TestImg from '../assets/images/test.jpg';
import Profile from '../assets/images/profile.jpg';
import Maha from '../assets/images/maha.jpg';
import Maha1 from '../assets/images/maha-1.jpg';
import Him from '../assets/images/him-1.jpg';
import Kar from '../assets/images/kar.jpg';
import Flora from '../assets/images/flora.jpg';

const HoverableImage = ({ text, img }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className='transition flex items-center justify-center cursor-pointer object-cover'>
			<p
				className={`absolute text-center text-black font-medium text-4xl ${
					isHovered ? 'opacity-100' : 'opacity-0'
				} transition-opacity duration-300`}>
				{text}
			</p>
			<img
				src={img}
				alt=''
				className={`${
					isHovered ? 'opacity-0' : 'opacity-100'
				} transition-opacity duration-300`}
			/>
		</div>
	);
};

const LifeNew = () => {
	return (
		<section className='md:p-16 p-6 font-serif mt-24 max-w-[1920px] mx-auto flex flex-col gap-24 bh-white'>
			<div className='flex md:gap-32 gap-8 md:flex-row flex-col'>
				<img
					src={Profile}
					alt=''
					className='md:bg-auto bg-no-repeat bg-center md:w-2/5 md:h-1/2 w-2/3 h-60 object-cover'
				/>
				<div className='flex flex-col'>
					<div className='flex justify-center md:items-center md:flex-row flex-col'>
						<p className='text-3xl mr-10 text-black order-2 md:order-1 text-left'>
							Hello,{' '}
						</p>
						<hr className='h-0.5 w-full bg-black mb-4 md:order-2' />
					</div>
					<p className='md:text-6xl text-5xl text-black font-medium md:leading-relaxed leading-tight'>
						I’m a <span className='italic'>photographer</span> based out of{' '}
						<span className='font-semibold'>Bengaluru, IN</span>. I’m lucky to
						travel the world, documenting this{' '}
						<span className='italic'>beautiful</span>{' '}
						<span className='font-semibold'>planet</span> of ours.
					</p>
					<p className='text-6xl text-black font-medium'>⇩</p>
				</div>
			</div>

			<div>
				<p className='text-center text-2xl italic text-black'>Recent Works</p>
			</div>

			<div className='grid sm:grid-cols-2 grid-cols-1 gap-8 mx-auto'>
				<HoverableImage text='Flora' img={Flora} />
				<HoverableImage text='Himachal Pradesh' img={Him} />
				<HoverableImage text='Maharashtra' img={Maha1} />
				<HoverableImage text='Karnataka' img={Kar} />
			</div>
		</section>
	);
};

export default LifeNew;
