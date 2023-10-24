import '../assets/css/About.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {

	const [jiggles, setJiggles] = useState(
		Array(3).fill({
			transform: 'translate3d(0px, 0px, 0px)',
		})
	);

	const handleMouseMove = (e) => {
		const container = e.currentTarget;
		const rect = container.getBoundingClientRect();

		const maxOffset = [2, 4, 1]; // Maximum offset in pixels

		const updatedStyles = jiggles.map((_, index) => {
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const translateX = Math.min(maxOffset[index], Math.max(-maxOffset[index], (x - rect.width / 2) / rect.width * maxOffset[index] * 2));
			const translateY = Math.min(maxOffset[index], Math.max(-maxOffset[index], (y - rect.height / 2) / rect.height * maxOffset[index] * 2));

			return {
				transform: `translate3d(${translateX}px, ${translateY}px, 0px)`,
			};
		});

		setJiggles(updatedStyles);
	};


	return (
		<motion.div onMouseMove={handleMouseMove} className='full-about'>
			<div className='full-width-section dark:text-white' >
				<div className='about-cloud-container'>
					<img
						className='about-cloud-image olive'
						src="https://res.cloudinary.com/vite-img/w_700/q_auto/hejqwvyhm5j9b7kiawye"
						loading='eager'
						width='233'
						data-w-id='75ace4df-5ec6-8ef2-5c94-adab473822f3'
						sizes='(max-width: 479px) 28vw, (max-width: 767px) 26vw, (max-width: 991px) 21vw, (max-width: 1439px) 19vw, 22vw'
						alt='A pic of my dog, Olive.'
						style={jiggles[0]}
					/>
					<img
						className='about-cloud-image waterfall'
						src="https://res.cloudinary.com/vite-img/w_700/q_auto/ocpnyqzz9zvna37wugnr"
						loading='eager'
						width='233'
						data-w-id='8147d119-0101-44b7-296b-0b9d03bad731'
						sizes='(max-width: 479px) 36vw, (max-width: 767px) 33vw, (max-width: 991px) 26vw, (max-width: 1439px) 24vw, 27vw'
						alt='A photo of me next to a small waterfall'
						style={jiggles[1]}
					/>
					<img
						className='about-cloud-image bridge'
						src="https://res.cloudinary.com/vite-img/w_700/q_auto/osnpgh6skjk113nsdlxd"
						width='233'
						height='200'
						alt='A photo of The Williamsburg Bridge'
						sizes='(max-width: 479px) 30vw, (max-width: 767px) 27vw, (max-width: 991px) 26vw, (max-width: 1439px) 24vw, 27vw'
						data-w-id='f890f31c-d0cd-2f75-2fad-98762d5ac331'
						loading='eager'
						style={jiggles[2]}
					/>
				</div>
			</div>
			<div className='single-column-section '>
				<div className='v-space medium'></div>
				<h1 className='colored-h1-small'>Hi again, I&apos;m Aditya.</h1>
				<div className='v-space small'></div>
				<p className='case-paragraph dark:text-white'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit incidunt nostrum minima doloremque officia expedita quos, ipsam, cupiditate earum vero porro ex voluptas laboriosam quasi facilis veniam similique. Temporibus aliquid necessitatibus et, explicabo incidunt eligendi natus?
				</p>
				<p className='case-paragraph dark:text-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi sed quaerat vero ad voluptate impedit doloribus quod fugit culpa omnis eius, obcaecati quasi aut repudiandae ipsum itaque debitis iure ratione, qui modi nulla sit. Minima magni vero magnam voluptas ab eius saepe repellat alias nulla. Veniam libero tenetur ullam.
				</p>
				<p className='case-paragraph dark:text-white'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ipsa aperiam rerum tempora error ratione veritatis minus et, animi iure facilis voluptate perspiciatis, fugiat maiores molestias blanditiis aliquid atque ut est labore. Quisquam voluptatum assumenda delectus, reiciendis doloremque accusantium mollitia. Fugit, minima perferendis.
				</p>
				<p className='case-paragraph dark:text-white'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur exercitationem perferendis minima distinctio ducimus, voluptatibus laudantium. Id ad necessitatibus quam commodi eos vel maiores ut iure voluptas velit temporibus alias, rem ratione asperiores ea quae quidem perferendis at quas autem pariatur recusandae! Fugit, molestiae officiis.
				</p>
				<p className='case-paragraph dark:text-white'>
					If you want to chat, feel free to{' '}
					<a href='https://www.linkedin.com/in/aditya-miskin/' className='link-text dark:text-white'>
						reach out.
					</a>
				</p>
			</div>
		</motion.div>
	);
};

export default About;
