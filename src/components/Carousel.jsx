import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	const [offset, setOffset] = useState(0);
	const imageRefs = useRef([]);
	const [isMouseLeft, setIsMouseLeft] = useState(false);

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

	const getMousePosition = (event) => {
		const x = event.clientX;
		const windowWidth = window.innerWidth;

		setIsMouseLeft(x < windowWidth / 2);
	};

	useEffect(() => {
		window.addEventListener('mousemove', getMousePosition);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('mousemove', getMousePosition);
		};
	}, []);

	useEffect(() => {
		imageRefs.current = imageRefs.current.slice(0, slides.length);
	}, [slides]);

	return (
		<section className='flex items-center h-[600px] md:overflow-x-hidden md:absolute w-full relative px-4 fade-in '>
			{current !== 0 && (
				<button
					className='bg-black p-4 fixed left-10 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex transition-opacity duration-300'
					onClick={prevSlide}
					style={{ opacity: isMouseLeft ? 1 : 0 }}>
					<FaChevronLeft className='text-lg text-white' />
				</button>
			)}

			<button
				className='bg-black p-4 fixed right-10 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex transition-opacity duration-300'
				onClick={nextSlide}
				style={{ opacity: !isMouseLeft ? 1 : 0 }}>
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
							className={`md:h-[600px] md:w-fit w-full transition-opacity duration-500  ${
								index === current - 1 ? 'opacity-0' : 'opacity-100'
							}`}
							ref={(el) => (imageRefs.current[index] = el)}>
							<img
								src={slide}
								alt='portrait'
								className='w-full md:h-[500px] h-full mb-3 z-40'
							/>
							<p className='text-black mb-4 font-head font-semibold text-lg ml-4 md:ml-0 dark:text-white'>
								Lorem ipsum dolor sit amet.
							</p>
							<p className='text-black mb-4 text-base ml-4 md:ml-0 dark:text-white'>
								Lorem ipsum dolor, sit amet consectetur
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Carousel;
