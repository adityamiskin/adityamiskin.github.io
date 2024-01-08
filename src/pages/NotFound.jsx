import React from 'react';
import Anya from '../assets/images/anya-new.png';

const NotFound = () => {
	return (
		<div className='md:p-10 p-4 mx-auto'>
			<img src={Anya} alt='404' className='mx-auto w-[500px] mt-10' />
		</div>
	);
};

export default NotFound;
