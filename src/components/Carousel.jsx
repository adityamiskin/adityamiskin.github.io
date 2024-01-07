import React, { useState, useRef, useEffect } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ slides }) => {
	// const slides = [Test, Test1, Test2, Test3, Test4];
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	const [offset, setOffset] = useState(0);
	const imageRefs = useRef([]);

	const gap = 8;

	const nextSlide = () => {
		let next = current === length - 1 ? 0 : current + 1;
		if (next === 0) {
			setOffset(0);
		} else {
			setOffset(
				(offsets) => offsets + imageRefs.current[current].offsetWidth + gap,
			);
		}
		setCurrent(next);
	};

	const prevSlide = () => {
		let prev = current === 0 ? length - 1 : current - 1;
		setOffset((offsets) => offsets - imageRefs.current[prev].offsetWidth - gap);
		setCurrent(prev);
	};

	useEffect(() => {
		imageRefs.current = imageRefs.current.slice(0, slides.length);
	}, [slides]);

	return (
		<section className='flex items-center h-[550px] md:overflow-x-hidden md:absolute w-full relative px-4'>
			{current !== 0 && (
				<button
					className='bg-black p-4 fixed left-10 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex'
					onClick={prevSlide}>
					<FaChevronLeft className='text-lg text-white' />
				</button>
			)}

			<button
				className='bg-black p-4 fixed right-10 top-1/2 transform -translate-y-1/2 transition duration-1000 z-50 hidden md:flex'
				onClick={nextSlide}>
				<FaChevronRight className='text-lg text-white' />
			</button>
			<div
				className='flex overflow-x-hidden md:gap-4 gap-8 absolute md:absolute md:flex-row flex-col md:w-[20000px] w-full top-0 left-0 md:left-auto'
				style={{
					transform: `translateX(-${offset}px)`,
					transition: 'transform 0.5s ease-in-out',
				}}>
				{slides.map((slide, index) => {
					return (
						<div
							key={index}
							className={`md:h-[550px] md:w-fit w-full transition-opacity duration-500  ${
								index === current - 1 ? 'opacity-0' : 'opacity-100'
							}`}
							ref={(el) => (imageRefs.current[index] = el)}>
							<img
								src={slide}
								alt='portrait'
								className='w-full md:h-[500px] h-full mb-3 z-40'
							/>
							<p className='text-black mb-4 font-head font-semibold text-lg ml-4'>
								Lorem ipsum dolor sit amet.
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Carousel;
