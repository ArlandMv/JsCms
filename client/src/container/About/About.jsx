import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';
const abouts = [
	{
		title: 'UX/UI',
		description: 'description',
		imgUrl: images.about01,
	},
	{
		title: 'Web Design',
		description: 'description',
		imgUrl: images.about02,
	},
	{
		title: 'Web Development',
		description: 'description',
		imgUrl: images.about03,
	},
	{
		title: 'SEO',
		description: 'description',
		imgUrl: images.about04,
	},
];

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';
		client
			.fetch(query)
			.then((data) => setAbouts(data))
			.then(console.log('useEffect DONE'));
	}, []);

	return (
		<>
			<h2 className="head-text">
				una buena <span>presencia online</span>
				<br />
				implica un <span> negocio exitoso</span>
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="app__profile-item"
						key={about.title + index}>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(About, 'about');
