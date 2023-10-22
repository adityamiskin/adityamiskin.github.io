import '../assets/css/ProjectCard.css';
import { useState } from 'react';
import { ReactComponent as ArrowRightSvg } from '../assets/images/ArrowRight.svg';

const ProjectCard = () => {
	const projectDetails = [
		{
			title: 'Hello world',
			type: 'UX/UI Design',
			year: '2020',
			desc: 'lorem ipsum asbfdoabsf asduauhbhsd asoujbdfaos',
		},
		{
			title: 'Hello world 2',
			type: 'UX/UI Design 2',
			year: '2021',
			desc: 'lorem ipsum asbfdoabsf asduauhbhsd asoujbdfaos dasdaas',
		},
	];

	const [buttonStyles, setButtonStyles] = useState(
		Array(projectDetails.length).fill({
			transform: 'translate3d(0.73892px, 0.73816px, 0px)',
		})
	);

	const [buttonIconStyles, setButtonIconStyles] = useState(
		Array(projectDetails.length).fill({
			transform: 'transform: translate3d(0px, 0px, 0px)',
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

		const updatedIconStyles = [...buttonIconStyles];
		updatedIconStyles[index] = {
			transform: `translate3d(6px, 0px, 0px)`,
		};

		setButtonStyles(updatedStyles);
		setButtonIconStyles(updatedIconStyles);
	};

	const handleMouseLeave = (e, index) => {
		const updatedStyles = [...buttonStyles];
		updatedStyles[index] = {
			transform: 'translate3d(0.73892px, 0.73816px, 0px)',
		};

		const updatedIconStyles = [...buttonIconStyles];
		updatedIconStyles[index] = {
			transform: 'translate3d(0px, 0px, 0px)',
		};

		setButtonStyles(updatedStyles);
		setButtonIconStyles(updatedIconStyles);
	};

	return (
		<>
			{
				projectDetails.map((project, index) => {
					return (
						<div className='project-card' key={index}>
							<div className='v-stack max-width flex flex-col max-w-sm justify-center'>
								<img
									src='https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/60ec78fc1f2590230d69a4ac_ZipRecruiter%20Small%20Logo.png'
									loading='lazy'
									alt=''
									className='company-logo mb-4'
								/>
								<h2 className='text-2xl md:text-4xl font-bold mb-1'>
									{project.title}
								</h2>
								<div className='flex items-center justify-start small-caps-subtitle mb-4 '>
									<p className='me-2 text-base md:text-lg'>{project.type}</p>
									<p className='light me-2 text-base md:text-lg'>•</p>
									<p className='text-base md:text-lg'>{project.year}</p>
								</div>
								<p className='text-base md:text-lg dark:text-black'>{project.desc}</p>
								<button className='primary-button w-fit bg-white' type='button'
									onMouseMove={(e) => handleMouseMove(e, index)}
									onMouseLeave={(e) => handleMouseLeave(e, index)}
									style={buttonStyles[index]}>
									<div className='button-text'>Go to Github</div>
									<ArrowRightSvg className="button-icon ms-2" style={buttonIconStyles[index]} />
								</button>
							</div>
							<img
								src='https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/61019f9f743b67201879170a_Project%20List%20Image%20Frame%20-%20SJ.png'
								loading='lazy'
								sizes='(max-width: 479px) 100vw, (max-width: 767px) 83vw, (max-width: 991px) 87vw, 480px'
								srcSet='https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/61019f9f743b67201879170a_Project%20List%20Image%20Frame%20-%20SJ-p-500.png 500w, https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/61019f9f743b67201879170a_Project%20List%20Image%20Frame%20-%20SJ-p-800.png 800w, https://uploads-ssl.webflow.com/5e1689facb9d5168c0dcbe0b/61019f9f743b67201879170a_Project%20List%20Image%20Frame%20-%20SJ.png 960w'
								alt='Preview image of the redesigned suggested jobs carousels..'
								className='project-preview-image right-align'
							/>
						</div>
					);
				})
			}
		</>
	);
};

export default ProjectCard;
