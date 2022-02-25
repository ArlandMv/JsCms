import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';
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

/*  Es bien sabido que
  	<span>buen diseño</span>
		puede ser
		<span>una gran ventaja</span>
		para su negocio o empresa 
 */

const About = () => {
	return (
		<>
			<h2 className="head-text">
				una buena <span>presencia online</span>
				<br />
				implica un<span> negocio exitoso</span>
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="app__profile-item"
						key={about.title + index}>
						<img src={about.imgUrl} alt={about.title} />
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

export default About;
