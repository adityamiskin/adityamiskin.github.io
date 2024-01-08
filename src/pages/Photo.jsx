import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Photo = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const images = [
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2500/v1704632731/test_hjtzaw.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2500/v1704632729/test7_fasrqt.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2500/v1704632729/test8_wethqp.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2500/v1704632731/test3_yqykrt.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2500/v1704633882/test4_xtagby.webp',
	];
	const imageTypes = ['STREET', 'LANDSCAPE', 'NATURE', 'PORTRAIT', 'URBAN'];
	const [isMouseLeft, setIsMouseLeft] = useState(false);

	const nextImage = () => {
		setCurrentImage((prevImage) => (prevImage + 1) % images.length);
	};

	const previousImage = () => {
		setCurrentImage(
			(prevImage) => (prevImage - 1 + images.length) % images.length,
		);
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

	return (
		<section className='relative'>
			{images.map((image, index) => (
				<Link
					to={`/photo/${imageTypes[currentImage].toLowerCase()}`}
					key={index}>
					<img
						src={image}
						alt=''
						className={`test-img w-full h-full object-cover fixed top-0 left-0 z-10 transition-opacity duration-500 ${
							currentImage === index ? 'opacity-100' : 'opacity-0'
						}`}
					/>
				</Link>
			))}
			<button
				onClick={previousImage}
				className='bg-black p-4 fixed left-10 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 z-50'
				style={{ opacity: isMouseLeft ? 1 : 0 }}>
				<FaChevronLeft className='text-lg text-white' />
			</button>
			<button
				onClick={nextImage}
				className='bg-black p-4 fixed right-10 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 z-50'
				style={{ opacity: !isMouseLeft ? 1 : 0 }}>
				<FaChevronRight className='text-lg text-white' />
			</button>
			<Link to={`/photo/${imageTypes[currentImage].toLowerCase()}`}>
				<div className='fixed bottom-0 left-0 bg-white text-black px-6 py-2 tracking-[0.25em] z-50'>
					<span className='text-[#111] opacity-50'>PHOTO / </span>

					{imageTypes[currentImage]}
				</div>
			</Link>
		</section>
	);
};

export default Photo;
