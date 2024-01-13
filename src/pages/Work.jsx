import { FaSchool, FaBriefcase, FaShareFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import DataViz from '../assets/images/projects/dataviz.png';
import Subtitle from '../assets/images/projects/subtitle.jpg';
import CLI from '../assets/images/projects/cli.jpg';
import Annote from '../assets/images/projects/annote.jpg';

const Project = ({ project }) => (
	<Link to='//www.github.com'>
		<div className='flex flex-col p-4 border border-black dark:border-white h-full'>
			<img src={project.image} alt='' className='object-cover mb-2' />
			<div className='flex gap-2 items-baseline'>
				<h3 className='font-head font-semibold text-2xl mb-2'>
					{project.name}
				</h3>
				<p className='text-xs text-gray-600 dark:text-gray-400'>
					({project.techStack})
				</p>
			</div>
			<p className='project-desc text-sm'>{project.description}</p>
		</div>
	</Link>
);

const ListItem = ({ item, type }) => (
	<li className='mb-10 ms-6'>
		<span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
			{type === 'experience' ? (
				<FaBriefcase className='w-3 h-3 text-blue-800 dark:text-blue-300' />
			) : (
				<FaSchool className='w-3 h-3 text-blue-800 dark:text-blue-300' />
			)}
		</span>
		<h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
			<Link className='flex gap-2 items-center' to={item.link}>
				<span>{item.company || item.institution}</span> <FaShareFromSquare />
			</Link>
			{item.position && (
				<span className='bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3'>
					{item.position}
				</span>
			)}
		</h3>
		<time className='block mb-2 text-sm font-semibold leading-none text-gray-400 dark:text-gray-500'>
			{item.duration}
		</time>
		<p className='mb-2 text-base text-gray-500 dark:text-gray-400'>
			{item.description || item.course}
		</p>
		{item.cgpa && <span className='font-bold'>{item.cgpa}</span>}
	</li>
);

const Work = () => {
	const projects = [
		{
			name: 'Data Visualization AI',
			description:
				'A powerful AI tool for visualizing and analyzing complex data sets.',
			techStack: 'React, AI',
			image: DataViz,
		},
		{
			name: 'AI Subtitle Generator',
			description:
				'An AI-powered tool that generates subtitles with timestamps for videos.',
			techStack: 'React, AI',
			image: Subtitle,
		},
		{
			name: 'ML Preprocessor CLI',
			description:
				'A command-line interface for preprocessing machine learning datasets.',
			techStack: 'CLI, Machine Learning',
			image: CLI,
		},
		{
			name: 'Image Annotation Tool',
			description:
				'A tool for annotating images with bounding boxes and labels.',
			techStack: 'HTML, CSS, Flask, Tessaract',
			image: Annote,
		},
	];

	const experiences = [
		{
			company: 'Carelon Global Solutions, Bengaluru',
			link: 'https://www.carelonglobal.in/',
			position: 'Associate Data Scientist',
			duration: 'August 2023 - Present',
			description:
				'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
		},
		{
			company: 'Magnimus',
			link: 'https://magnimus.com',
			position: 'Lead Frontend Developer',
			duration: 'October 2022 - June 2023',
			description:
				'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
		},
	];

	const educations = [
		{
			institution: 'National Institute of Technology Karnataka, Surathkal',
			link: 'https://www.nitk.ac.in/',
			duration: 'April 2019 - June 2023',
			course:
				'Bachelor of Technology in Electronics and Communication Engineering (ECE)',
			cgpa: 'CGPA: 7.9/10',
		},
	];

	return (
		<section className='md:px-10 p-4 max-w-8xl mx-auto mb-10 mt-8 md:mt-40'>
			<div className='flex md:gap-11 gap-4 flex-col md:flex-row px-4 md:px-0 mb-10'>
				<div className='professional-exp'>
					<h2 className='text-4xl font-head font-semibold mb-8'>
						Professional Experience
					</h2>
					<ol className='relative border-s border-gray-200 dark:border-gray-700 mb-8'>
						{experiences.map((experience, index) => (
							<ListItem key={index} item={experience} type='experience' />
						))}
					</ol>
				</div>

				<div className='education'>
					<h2 className='text-4xl font-head font-semibold mb-8'>Education</h2>
					<ol className='relative border-s border-gray-200 dark:border-gray-700 mb-8'>
						{educations.map((education, index) => (
							<ListItem key={index} item={education} type='education' />
						))}
					</ol>
				</div>
			</div>

			<h2 className='text-4xl font-head font-semibold mb-8'>Projects</h2>
			<div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 md:gap-8 mb-12'>
				{projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</div>
		</section>
	);
};

export default Work;
