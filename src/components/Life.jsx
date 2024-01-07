import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Life = () => {
	// useEffect(() => {
	//   AOS.init({
	//     disable: 'mobile',
	//     easing: "ease-in-out",
	//     duration: 300,

	//   });
	//   AOS.refresh();
	// }, [])

	const [images, setImages] = useState([]);

	var gallery = [];
	fetch('https://res.cloudinary.com/vite-img/image/list/imgs.json')
		.then((response) => response.json())
		.then((data) => {
			data.resources.forEach((element) => {
				gallery.push(
					'https://res.cloudinary.com/vite-img/w_700/q_auto/' +
						element.public_id,
				);
			});
			setImages(gallery);
		});

	return (
		<div className='w-full p-4 pb-10 mx-auto mb-10 gap-4 columns-md space-y-4 w-100 px-12'>
			{images.map((image, index) => {
				return (
					<div key={index} className='relative flex items-start w-100'>
						<img
							src={image}
							alt={`Image ${index}`}
							className='w-full h-auto object-cover shadow'
							loading='lazy'
							// data-aos="zoom-in"
							// data-aos-once="true"
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Life;
