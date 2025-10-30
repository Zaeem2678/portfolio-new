'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const certificates = [
  {
    title: "The Complete Web Development Course: Zero to Hero | Udemy",
    issuer: "Udemy",
    date: "14th July 2024",
    description:
      "Comprehensive training on Python programming for data science and machine learning. Covered topics include data analysis, predictive modeling, and advanced Python libraries.",
    skills: ["Python", "Data Science", "Machine Learning", "Pandas", "NumPy"],
  },
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "COMSATS University Islamabad, Abbottabad Campus",
    date: "21st March 2023",
    link: "./files/certificates_pdf/ccna_intro_networks.pdf",
    description:
      "Validates knowledge and skills to install, configure, operate, and troubleshoot basic network infrastructure with a comprehensive understanding of networking concepts, protocols, and configuration.",
    skills: [
      "Networking",
      "Cisco",
      "Routing",
      "Switching",
      "Network Configuration",
    ],
  },
];

const Certificates = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Award className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Certificates</h2>
				</motion.div>
			</ScrollAnimation>

		<div className="grid md:grid-cols-2 gap-6">
  {certificates.map((cert, index) => (
    <ScrollAnimation key={cert.title}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5 h-full flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
          <div className="text-gray-400 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-lg">{cert.issuer}</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{cert.date}</span>
              </div>
            </div>
            <p className="text-gray-300 line-clamp-2">{cert.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-sm bg-white/10 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </ScrollAnimation>
  ))}
</div>

		</div>
	);
};

export default Certificates;