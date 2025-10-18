'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, MessageSquare, Lightbulb, Users, Brain,
	Cloud, Terminal, Wrench,
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	CppLogo, PythonLogo, JavaScriptLogo, HTML5Logo,
	CSSLogo, ReactLogo, TypeScriptLogo, NodeLogo, MySQLLogo,
	MongoDBLogo, VSCodeLogo, GitLogo, TailwindLogo, ShadCNLogo, NextjsLogo,
	VirtualBoxLogo, VercelLogo
} from '@/components/TechLogos';

const skills = [
  {
    category: 'Programming Languages',
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: 'JavaScript (ES6+)', icon: <JavaScriptLogo /> },
      { name: 'TypeScript', icon: <TypeScriptLogo /> },
      { name: 'Python', icon: <PythonLogo /> },
      { name: 'C++', icon: <CppLogo /> },
    ],
  },
  {
    category: 'Front-End & Mobile Development',
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: 'React.js', icon: <ReactLogo /> },
      { name: 'React Native', icon: <ReactLogo /> },
      { name: 'Expo', icon: <ReactLogo /> },
      { name: 'Tailwind CSS', icon: <TailwindLogo /> },
      { name: 'ShadCN UI', icon: <ShadCNLogo /> },
      { name: 'Redux / Zustand', icon: <Code2 /> },
    ],
  },
  {
    category: 'Back-End & APIs',
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: 'Node.js', icon: <NodeLogo /> },
      { name: 'Express.js', icon: <NodeLogo /> },
      { name: 'WebSockets', icon: <Server className="w-4 h-4" /> },
      { name: 'Firebase / Firestore', icon: <Cloud className="w-4 h-4" /> },
      { name: 'RESTful APIs', icon: <Code2 /> },
    ],
  },
  {
    category: 'Databases & Cloud Storage',
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: 'MongoDB', icon: <MongoDBLogo /> },
      { name: 'PostgreSQL', icon: <Database className="w-4 h-4" /> },
      { name: 'Redis', icon: <Database className="w-4 h-4" /> },
      { name: 'Wasabi S3', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Cloudinary', icon: <Cloud className="w-4 h-4" /> },
    ],
  },
  {
    category: 'DevOps & Deployment',
    icon: <GitLogo />,
    items: [
      { name: 'Git / GitHub', icon: <GitLogo /> },
      { name: 'Vercel', icon: <VercelLogo /> },
      { name: 'Render', icon: <Code2 /> },
      { name: 'Railway', icon: <Server className="w-4 h-4" /> },
      { name: 'CI/CD Automation', icon: <Code2 /> },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: 'VS Code', icon: <VSCodeLogo /> },
      { name: 'Postman', icon: <Wrench className="w-4 h-4" /> },
      { name: 'MongoDB Compass', icon: <MongoDBLogo /> },
      { name: 'pgAdmin', icon: <Database className="w-4 h-4" /> },
      { name: 'Expo Go', icon: <ReactLogo /> },
    ],
  },
  {
    category: 'Operating Systems',
    icon: <Terminal className="w-6 h-6" />,
    items: [
      { name: 'macOS', icon: <Terminal className="w-4 h-4" /> },
      { name: 'Windows', icon: <Terminal className="w-4 h-4" /> },
      { name: 'Ubuntu / Linux', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    category: 'Soft Skills',
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: 'Team Collaboration', icon: <Users className="w-4 h-4" /> },
      { name: 'Problem Solving', icon: <Lightbulb className="w-4 h-4" /> },
      { name: 'Adaptability', icon: <Wrench className="w-4 h-4" /> },
      { name: 'Communication', icon: <MessageSquare className="w-4 h-4" /> },
      { name: 'Leadership', icon: <Brain className="w-4 h-4" /> },
    ],
  },
];


const Skills = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
			</ScrollAnimation>

			<ScrollAnimation>
				<p className="text-gray-400 mb-12 max-w-2xl">
					A comprehensive overview of my technical expertise and tools I work with
				</p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
  {skills.map((skillGroup) => (
    <ScrollAnimation key={skillGroup.category}>
      <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 h-full flex flex-col">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-white/10 rounded-lg">{skillGroup.icon}</div>
          <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 flex-grow">
          {skillGroup.items.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
            >
              <div className="text-gray-400 group-hover:text-white transition-colors">
                {skill.icon}
              </div>
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  ))}
</div>

		</div>
	);
};

export default Skills;