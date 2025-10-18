'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const experiences = [
  {
    title: "React Native Developer",
    company: "ADMK Solutions",
    location: "Islamabad, Pakistan",
    period: "Sep 2024 - Oct 2025",
    type: "Full-time",
    image: "/profile/image.png",
    description: [
      "Developing and maintaining scalable mobile applications using React Native and Expo.",
      "Collaborating with cross-functional teams to design, build, and deploy new app features.",
      "Optimizing app performance, implementing reusable components, and ensuring smooth UI/UX across iOS and Android.",
      "Integrating REST APIs and handling app releases, version control, and debugging in production.",
    ],
  },
  {
    title: "Software Engineer (Full Stack)",
    company: "Ayzenn Technologies",
    location: "Islamabad, Pakistan",
    period: "Jan 2024 - Sep 2025",
    type: "Full-time (On-site)",
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQExT36WA96STw/company-logo_200_200/company-logo_200_200/0/1715023349348?e=2147483647&v=beta&t=QNapg9kOp3ffoj4kqAJh7UquxO3P-h6oII_lazOrgkk",
    description: [
      "Designed, developed, and deployed full-stack web and mobile applications using React Native, React.js, Express.js, and MongoDB.",
      "Built scalable backend systems and integrated WebSockets for real-time messaging and notifications.",
      "Implemented RESTful APIs and optimized front-end performance for seamless user experiences.",
      "Led end-to-end application development — from UI design and backend architecture to deployment and maintenance.",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Online Channel TV (Remote)",
    location: "California, United States",
    period: "Feb 2023 - Sep 2025",
    type: "Freelance",
    image: "https://image.roku.com/developer_channels/prod/34a570a848a17a99a00e784d42bc576722eff3f56068177cb65681afb37254ee.png",
    description: [
      "Developed and maintained multiple production-ready web and mobile apps for Hollywood director Marty Jein Louis.",
      "Built platforms such as Talents & Stars, FokusHub360, KastingHub, FilmRights, and Blessings Jar App using React Native, React.js, and Node.js.",
      "Collaborated closely with clients to align technical solutions with creative and industry standards.",
      "Implemented cloud-based APIs, media handling, and scalable app architectures for high user engagement.",
    ],
  },
];


const Experience = () => {
	return (
		<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
			<ScrollAnimation>
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
					<Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
					Professional Experience
				</h2>
			</ScrollAnimation>

			<div className="space-y-8 sm:space-y-12">
				{experiences.map((exp, index) => (
					<ScrollAnimation key={exp.title}>
						<div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
								<div className="p-6 sm:p-8">
									<div className="flex items-center gap-3 mb-4 sm:mb-6">
										<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
											<Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
										</div>
										<div>
											<h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
											<p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
										</div>
									</div>

									<div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
										<MapPin className="w-4 h-4" />
										<span>{exp.location}</span>
										<span>•</span>
										<span>{exp.period}</span>
									</div>

									<ul className="space-y-3 sm:space-y-4">
										{exp.description.map((item, i) => (
											<li
												key={i}
												className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
											>
												<ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
												<span className="leading-relaxed">{item}</span>
											</li>
										))}
									</ul>

									
								</div>

								<div className="relative hidden md:block">
									<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
										<img
											src={exp.image}
											alt={exp.company}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent group-hover:scale-105 transition-transform duration-500" />
									</div>
									<div className="relative h-full flex items-center justify-center">
										
									</div>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Experience;