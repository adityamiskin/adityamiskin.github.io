import React from 'react';
import { FaCircle } from 'react-icons/fa';

const Work = () => {
	const experiences = [
		'Experience 1',
		'Experience 2',
		'Experience 3',
		// Add more experiences as needed
	];

	return (
		<section className='flex justify-center items-center h-96 flex-col gap-10'>
			<h2 className='font-head font-semibold'>Under Development...＞﹏＜</h2>
			<div className='flex items-center gap-2'>
				{experiences.map((experience, index) => (
					<FaCircle key={index} style={{ display: 'inline-block' }} />
				))}
			</div>
		</section>
	);
};

export default Work;
