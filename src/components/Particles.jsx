import { motion, useMotionValue, useTransform } from 'framer-motion';
import '../assets/css/Particles.css';

const ParallaxParticles = () => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const parallax = (value, multiplier) => {
		return useTransform(
			value,
			[-100, 100],
			[-100 * multiplier, 100 * multiplier],
		);
	};

	const particles = [
		{ id: 1, multiplier: 0.07 },
		{ id: 2, multiplier: 0.07 },
		{ id: 3, multiplier: 0.07 },
		{ id: 4, multiplier: 0.07 },
		{ id: 5, multiplier: 0.07 },
		{ id: 6, multiplier: 0.07 },
		{ id: 7, multiplier: 0.07 },
		{ id: 8, multiplier: 0.07 },
	];

	const handleMouseMove = (event) => {
		mouseX.set(event.clientX);
		mouseY.set(event.clientY);
	};

	return (
		<motion.div className='particle-wrapper' onMouseMove={handleMouseMove}>
			{particles.map((particle) => {
				const particleX = parallax(mouseX, particle.multiplier);
				const particleY = parallax(mouseY, particle.multiplier);

				return (
					<motion.div
						key={particle.id}
						className={`particle particle-${particle.id}`}
						style={{
							x: particleX,
							y: particleY,
						}}></motion.div>
				);
			})}
		</motion.div>
	);
};

export default ParallaxParticles;
