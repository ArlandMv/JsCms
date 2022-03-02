import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { wrapper } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const handleWorkFilter = () => {
	return <div>handleWorkFilter</div>;
};

const Work = () => {
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setactiveFilter] = useState('All');
	const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });
	return (
		<>
			<h2 className="head-text">
				Mi <span>Portafolio</span> de <span>proyectos</span>
			</h2>
			<div className="app__work-filter">
				{['UI/UX', 'Web App', 'Mobile App', 'React', 'React Native'].map(
					(item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`app__work-filter-item app__flex`}>
							{item}
						</div>
					)
				)}
			</div>
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.8, delayChildren: 0.8 }}>
				{filterWork.map((work, index) => (
					<div className="app__work-item app__flex">
						<div className="app__work-img app__flex">
							<img src={urlFor(work.imgUrl)} alt={work.name} />
							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.3,
									ease: 'easeInOut',
									staggerChildren: 0.5,
								}}
								className="app_work-hover app__flex">
								<a href={work.projectLink} target="_blanck" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default Work;
