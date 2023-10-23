import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import Play from '../components/Play';
import Work from '../components/Work';
import ParticleEffect from '../components/ParticlesEffect';

const Home = ({ isWorkMode, theme }) => {

	return (
		<>
			<motion.div
				className='max-w-screen-xl mx-auto mb-24'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 1,
				}}>
				{theme == "dark" ? (
					<ParticleEffect />
				) : (null)}
				<Hero isWorkMode={isWorkMode} />
				<div className='flex flex-col justify-center items-center'>
					{isWorkMode ? <Work /> : <Play />}
				</div>
			</motion.div>
		</>
	);
};

export default Home;
