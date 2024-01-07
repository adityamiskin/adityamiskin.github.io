import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Photo from './pages/Photo';
import AnimatedCursor from 'react-animated-cursor';
import Carousel from './components/Carousel';

import Test from './assets/images/portraits/DSCF5114.jpg';
import Test1 from './assets/images/portraits/DSCF5134.jpg';
import Test2 from './assets/images/portraits/DSCF5167.jpg';
import Test3 from './assets/images/portraits/DSCF5209.jpg';
import Test4 from './assets/images/portraits/DSCF5246.jpg';
import Work from './pages/Work';

function App() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const imageTypes = ['Street', 'Landscape', 'Nature', 'Portraits', 'Urban'];
	const carouselImages = [
		[Test, Test1, Test2, Test3, Test4], // Street
		[Test1, Test2, Test3, Test4, Test], // Landscape
		[Test2, Test3, Test4, Test, Test1], // Nature
		[Test3, Test4, Test, Test1, Test2], // Portraits
		[Test4, Test, Test1, Test2, Test3], // Urban
	];
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
						element={<Carousel slides={carouselImages[index]} />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
