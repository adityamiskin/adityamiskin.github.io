/* eslint-disable react/jsx-no-target-blank */
import '../assets/css/Footer.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ReactComponent as Twitter } from '../assets/images/twitter.svg';
import { ReactComponent as Github } from '../assets/images/github.svg';
import { ReactComponent as LinkedIn } from '../assets/images/linkedin.svg';
const Footer = () => {
	const [buttonStyles, setButtonStyles] = useState(
		Array(3).fill({
			transform: 'translate3d(0.73892px, 0.73816px, 0px)',
		})
	);
	const handleMouseMove = (e, index) => {
		const button = e.currentTarget;
		const rect = button.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const maxOffset = 2; // Maximum offset in pixels

		const translateX = Math.min(maxOffset, Math.max(-maxOffset, (x - rect.width / 2) / rect.width * maxOffset * 2));
		const translateY = Math.min(maxOffset, Math.max(-maxOffset, (y - rect.height / 2) / rect.height * maxOffset * 2));

		// Update the style for the hovered project only
		const updatedStyles = [...buttonStyles];
		updatedStyles[index] = {
			transform: `translate3d(${translateX}px, ${translateY}px, 0px)`,
		};

		setButtonStyles(updatedStyles);
	};

	const handleMouseLeave = (e, index) => {
		const updatedStyles = [...buttonStyles];
		updatedStyles[index] = {
			transform: 'translate3d(0.73892px, 0.73816px, 0px)',
		};

		setButtonStyles(updatedStyles);
	};

	return (
		<div className='footer dark:bg-black'>
			<div className='social-links-wrapper'>
				<a
					href='https://twitter.com/AdityaMiskin3'
					target='_blank'
					className='social-icon-link w-inline-block dark:bg-white'
					onMouseMove={(e) => handleMouseMove(e, 0)}
					onMouseLeave={(e) => handleMouseLeave(e, 0)}
					style={buttonStyles[0]}
				>
					<Twitter className='w-8 h-8 mx-auto' />
				</a>
				<a
					href='https://www.linkedin.com/in/aditya-miskin/'
					target='_blank'
					className='social-icon-link w-inline-block dark:bg-white'
					onMouseMove={(e) => handleMouseMove(e, 1)}
					onMouseLeave={(e) => handleMouseLeave(e, 1)}
					style={buttonStyles[1]}>
					<LinkedIn className='w-8 h-8 mx-auto' />
				</a>
				<a
					href='https://github.com/adityamiskin'
					target='_blank'
					className='social-icon-link w-inline-block dark:bg-white'
					onMouseMove={(e) => handleMouseMove(e, 2)}
					onMouseLeave={(e) => handleMouseLeave(e, 2)}
					style={buttonStyles[2]}>
					<Github className='w-8 h-8 mx-auto' />
				</a>
			</div>
			<div className='caption dark:text-white'>
				Copyright © 2023 Aditya Miskin. All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
