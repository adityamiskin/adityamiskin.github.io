import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Photo from './pages/Photo';
import AnimatedCursor from 'react-animated-cursor';
import Carousel from './components/Carousel';

import Work from './pages/Work';

function App() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const imageTypes = ['Street', 'Landscape', 'Nature', 'Portraits', 'Urban'];

	const shuffleImages = (images) => {
		for (let i = images.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[images[i], images[j]] = [images[j], images[i]];
		}
		return images;
	};

	const carouselImages2 = [
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_70,w_1800/v1704634247/DSCF5114_gqu1gy.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_70,w_1800/v1704634246/DSCF5246_lqgfod.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_70,w_1800/v1704634255/DSCF5134_ap7qjx.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_70,w_1800/v1704634260/DSCF5209_ewun9f.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_70,w_1800/v1704634255/DSCF5167_w0oxu3.webp',
	];

	const shuffledCarouselImages2 = shuffleImages(carouselImages2);

	const shuffledCarouselImages = imageTypes.map(() =>
		shuffleImages([...shuffledCarouselImages2]),
	);

	return (
		<BrowserRouter>
			{/* <AnimatedCursor
					color='#fff'
					innerSize={6}
					outerSize={28}
					innerScale={1.5}
					outerScale={2}
					outerAlpha={0}
					hasBlendMode={true}
					trailingSpeed={4}
					innerStyle={{
						backgroundColor: 'black',
					}}
					outerStyle={{
						border: '2px solid black',
					}}
				/> */}
			<Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
			<Routes>
				<Route path='/' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/photo' element={<Photo />} />
				<Route path='/work' element={<Work />} />
				{imageTypes.map((type, index) => (
					<Route
						key={type}
						path={`/photo/${type.toLowerCase()}`}
						element={<Carousel slides={shuffledCarouselImages[index]} />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
