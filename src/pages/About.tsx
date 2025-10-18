'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
const achievements = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "9+ Apps & Websites Launched",
    description: "Published cross-platform OTT and mobile applications and wesbites",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "2.5+ Years Experience",
    description: "Full-stack mobile engineer specializing in React Native & Node.js",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "CGPA 3.25 / 4.0",
    description: "Bachelor’s in Software Engineering from COMSATS University",
  },
];

	const interests = [
  "Mobile App Development",
  "Website Development",
  "Backend Systems & APIs",
  "UI/UX & Frontend Architecture",
  "Cloud & Backend Infrastructure",
  "Open Source Collaboration",
];
	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
					About Me
				</motion.h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-8">
				<ScrollAnimation>
					<div className="aspect-square overflow-hidden rounded-2xl">
						<img
							src="/profile/new.jpeg"
							alt="Hozefa Hassan Rizvi"
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</ScrollAnimation>

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							Hi! I’m Hozefa Hassan Rizvi a passionate full-stack developer who loves turning ideas into powerful, user friendly applications. My journey in tech began during my university years at COMSATS, where I discovered how much I enjoy building innovative solutions through code.
						</p>
						<p className="text-gray-300 leading-relaxed">
						I hold a BS in Software Engineering and have consistently balanced strong academics with hands-on experience through real-world projects and professional work. This combination of theory and practice has really shaped how I approach problem-solving and software design.
						</p>
						<p className="text-gray-300 leading-relaxed">
							I specialize in React, React Native, Node.js, Express, and modern web technologies, focusing on creating fast, scalable, and seamless user experiences. Over the years, I’ve collaborated with several startups and contributed to multiple projects from real-time chat systems and event platforms to full-scale mobile apps always striving to build clean, efficient, and impactful software.
						</p>
					</div>

					<ScrollAnimation>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
							<ul className="list-none space-y-3">
								{["Based in Riyadhs, KSA", "Software Engineer", "CGPA: 3.25/4"].map((fact, index) => (
									<motion.li
										key={fact}
										className="flex items-center space-x-2 text-gray-300"
									>
										<span className="w-2 h-2 bg-white rounded-full" />
										<span>{fact}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</ScrollAnimation>

					<ScrollAnimation>
						<div className="flex justify-start space-x-4">
							<a
								href="/files/cv_pdf/Hozefa_Chatterjee(CV).pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
							>
								Download CV
							</a>
							<a
								href="/skills"
								className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
							>
								My Skills
							</a>
						</div>
					</ScrollAnimation>
				</ScrollAnimation>
			</div>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Achievements</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{achievements.map((achievement, index) => (
							<ScrollAnimation key={achievement.title}>
								<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
									<div className="text-white mb-4">{achievement.icon}</div>
									<h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
									<p className="text-gray-400">{achievement.description}</p>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">Areas of Interest</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{interests.map((interest, index) => (
							<ScrollAnimation key={interest}>
								<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
									<Globe className="w-5 h-5 text-gray-400" />
									<span className="text-gray-300">{interest}</span>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default About;