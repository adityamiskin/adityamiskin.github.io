import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Photo from './pages/Photo';
import AnimatedCursor from 'react-animated-cursor';
import Carousel from './components/Carousel';
import Work from './pages/Work';
import NotFound from './pages/NotFound';

function App() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const imageTypes = ['Street', 'Landscape', 'Nature', 'Portraits', 'Urban'];

	const street = [
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_70,w_1800/v1704634247/DSCF5114_gqu1gy.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_1541/v1697995113/IMG_20230626_215242_984_fhpfnc.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2089/v1697995114/IMG_20230626_220758_719_omhfux.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2500/v1704632731/test_hjtzaw.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_70,w_1800/v1704634255/DSCF5134_ap7qjx.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_70,w_1800/v1704634255/DSCF5167_w0oxu3.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2266/v1704647622/DSCF5059_izylhv.webp',
	];
	const landscape = [
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_76,w_2464/v1697995108/IMG_5329_ydugbu.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_72,w_2124/v1697995108/IMG_5457_io4yrn.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2693/v1697995112/IMG_20230626_204602_413_jfr8t7.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2227/v1697995149/IMG_20230627_161221_997_wkljdb.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2109/v1697995109/IMG_20230626_155050_238_lnsx65.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2555/v1697995150/IMG_20230627_181713_869_z9elkk.webp',
	];
	const nature = [
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2647/v1697995106/IMG_4323_zyigit.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2601/v1697995154/IMG_20230627_181655_483_rpbovu.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_81,w_2601/v1697995135/IMG_20230627_161213_639_zijls5.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_82,w_2021/v1697995126/IMG_20230627_143518_831_1_hvndpw.webp',
	];
	const portraits = [
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_78,w_1780/v1697995111/IMG_20230626_195628_445_mm200y.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2192/v1697995127/IMG_20230627_161205_165_fxek47.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2500/v1704632731/test3_yqykrt.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2124/v1697995125/IMG_20230627_143545_797_onv1fp.webp',
	];
	const urban = [
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2481/v1704647230/DSCF4684_2_amx9im.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_68,w_2204/v1697995106/IMG_20230626_143812_171_rtgyto.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_80,w_2695/v1704646892/DSCF4657_jsoinl.webp',
		'https://res.cloudinary.com/vite-img/image/upload/c_scale,q_74,w_2624/v1704647410/DSCF4903_so4nmr.webp',
	];

	const carouselImages = [street, landscape, nature, portraits, urban];

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
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
