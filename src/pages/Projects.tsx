'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
  // 🟢 MOBILE APPLICATIONS
  {
    title: 'The Christmas Channel',
    description:
      'A live streaming entertainment app available on Android, iOS, and Roku platforms. Features curated Christmas-themed movies and TV shows using custom streaming SDK integration.',
    image: 'https://play-lh.googleusercontent.com/S8RoJ7NIg5YglZhIVQHVyYmcvUmgRZtOEaA_hVzuC4qcmsPyBpZJf8VSGc-_x2qBgHo=w526-h296-rw',
    
    live: 'http://play.google.com/store/apps/details?id=com.christmaschannel.tv',
    tags: ['React Native', 'Roku TV', 'BrightScript',  'IOS & Android', 'OTT App'],
  },
  {
    title: 'Solace TV',
    description:
      'A streaming OTT app offering inspirational and religious content. Built for Android, iOS, and Roku using React Native and BrightScript.',
    image: 'https://play-lh.googleusercontent.com/UhaxOpBEPH-xRSCqX7ibxiugYqf-VWpLHo1HgcBJ4Yiucvx-tCAHhR0GHq6e_XqHxQ=w526-h296-rw',
    
    live: 'https://play.google.com/store/apps/details?id=com.solacesine.tv',
    tags: ['React Native', 'Roku', 'Amazon Fire TV, AppleTV, LG TV', 'Firebase'],
  },
  {
    title: 'ReelMax',
    description:
      'An entertainment app that streams classic and new-age films with real-time updates. Integrated RESTful APIs and adaptive streaming.',
    image: 'https://image.roku.com/developer_channels/prod/4f1b11ce023520e541e7934a134033090f595add8088c4d8cffa09a7f8b34d46.png',
     
    live: 'https://play.google.com/store/apps/details?id=com.reelmax.tv',
    tags: ['React Native', 'Amazon Fire TV, AppleTV, LG TV',  'IOS & Android', 'Roku TV'],
  },
  {
    title: 'Shiloh TV',
    description:
      'A live faith-based streaming application for mobile and Roku platforms. Supports live SDK, push notifications, and content scheduling.',
    image: 'https://cigars.roku.com/v1/contain/800x454/https%3A%2F%2Fimage.roku.com%2Fdeveloper_channels%2Fprod%2Fdcd1f4ed7904f34f9165fcba1e82d66c1aca6c0b7cc2341acef60200c36b1049.png',
     
    live: 'https://channelstore.roku.com/details/2ce530ec2719048821f016ac3b1c7315:b522dc3bdc911c3857c2af54e84d310a/shiloah-tv',
    tags: ['React Native', 'BrightScript',  'IOS & Android', 'Node.js'],
  },
  {
    title: 'Legind Plus',
    description:
      'An OTT app that streams films and series for specific regions. Integrated custom content management and push notification system.',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/59/df/c5/59dfc55b-a43f-71cc-0904-715de572c6c3/ac4fda67-1dba-449b-8437-16495eb8a668_Simulator_Screen_Shot_-_Apple_TV_-_2023-03-08_at_13.41.26.png/643x0w.jpg',
     
    live: 'https://apps.apple.com/us/app/legind/id6446117669',
    tags: ['React Native',  'IOS & Android',  'Amazon Fire TV, AppleTV, LG TV', 'Roku'],
  },
  {
    title: 'Rediscover TV',
    description:
      'A multi-platform streaming app that offers classic movies and shows. Features real-time synchronization and Roku integration.',
    image: 'https://image.roku.com/developer_channels/prod/245f6a81dceb0b7bd150c8115aa49d7ae5a54857f06567346ab6972a0bd9aa42.png',
     
    live: 'https://play.google.com/store/apps/details?id=com.app.rediscovertv',
    tags: ['React Native',  'IOS & Android', 'Roku TV', 'BrightScript'],
  },
  {
    title: 'Blessings Jar App & Website',
    description:
      'A motivational app and website that allows users to record, view, and reflect on daily blessings. Published on App Store and Play Store.',
    image: 'https://play-lh.googleusercontent.com/12MhocN6zZC8NRMeckofjYUfpDwPnipepNKRdUa-upHqz_tXy70VjN_Q9b9JwUy9Rb06FEdo9AaIBwdPAWk_4w',
     
    live: 'https://play.google.com/store/apps/details?id=com.umar_khalid.BlessingJar&hl=ar',
    tags: ['React Native', 'React.js',  'IOS & Android', 'Expo'],
  },
  {
    title: 'ICFF Attendee App',
    description:
      'An event management app for ICFF attendees providing schedules, maps, and push notifications in real-time.',
    image: 'https://media.licdn.com/dms/image/v2/D4E10AQF1MG52XBDW4Q/image-shrink_800/image-shrink_800/0/1709198729708?e=2147483647&v=beta&t=QlfWhVIkkIFwGOSbIKzbrkb5tWCkbImmAwxCQugHUTY',
     
    live: 'https://play.google.com/store/apps/details?id=com.eventcentral.mobile',
    tags: ['React Native',  'IOS & Android','Push Notifications'],
  },
  {
    title: 'ICFF Organizer App',
    description:
      'A companion app for event organizers to manage event logistics, schedules, and real-time updates.',
    image: 'https://play-lh.googleusercontent.com/j_9w8nDsH75nfycaAnL_cU-_YpqtMX3mgQEVgXT9kEJS9tv1DLOEVIQs4ih3oldpnQ=w480-h960-rw',
     
    live: 'https://play.google.com/store/apps/details?id=com.eventcentralorganizer.mobile',
    tags: ['React Native',  'IOS & Android', 'Amazon Fire TV, AppleTV, LG TV', 'Realtime Updates'],
  },
  {
    title: 'LinkUp Vibes',
    description:
      'A Flutter-based social app prototype for connecting users with nearby events and communities.',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/00/a5/16/00a516a3-60da-9d61-636c-05b3a8a9afee/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp',
     
    live: 'https://apps.apple.com/us/app/linkup-vibes/id1611191559',
    tags: ['Flutter',  'IOS & Android', 'Dart'],
  },
  
  {
    title: 'Prayer Bowl',
    description:
      'A mobile app designed for sharing and managing prayer requests, featuring cloud sync and reminders.',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/99/b1/55/99b155ed-126c-44a3-1ded-69dc793db05c/AppIcon-1x_U007emarketing-0-6-0-85-220-0.png/1200x630wa.png',
     
    live: 'https://apps.apple.com/us/app/prayer-bowl/id6476140517',
    tags: ['React Native',  'IOS & Android', 'Notifications'],
  },

  // 🟣 WEBSITES
  {
    title: 'Talents & Stars',
    description:
      'A professional portfolio and management platform for artists and creators, developed with React.js and Firebase.',
    image: 'https://media.licdn.com/dms/image/v2/D4E0BAQE8PJbaqa1lpg/company-logo_200_200/company-logo_200_200/0/1667222173606?e=2147483647&v=beta&t=CfL29p9Of3b6GFDtYMDohsHPcy6vIZ7-1PhLujLQjWc',
     
    live: 'https://www.talentsandstars.com/',
     tags: ['React.js', 'Tailwind CSS','Express JS ','Vite','Wasabi','Resend','OpenAI','Stripe'],
  },
  {
    title: 'FilmRights',
    description:
      'A film distribution and rights management platform built with modern web technologies for content creators and buyers.',
    image: '/projects_img/film.png',
     
    live: 'https://filmrightsmarket.com/',
     tags: ['React.js', 'Tailwind CSS','Express JS ','Vite','Wasabi','Resend','OpenAI','Stripe'],
  },
  {
    title: 'KastingHub',
    description:
      'A talent management and casting website featuring user dashboards, search, and content uploads.',
    image: '/projects_img/kast.png',
     
    live: 'https://kastinghub.com/',
    tags: ['React.js', 'Tailwind CSS','Express JS ','Vite','Wasabi','Resend','OpenAI','Stripe'],
  },
  {
    title: 'FokusHub360',
    description:
      'A business management and analytics website for organizations, with role-based dashboards and API integrations.',
    image: '/projects_img/fokus.png',
     
    live: 'https://fokushub360.com/',
     tags: ['React.js', 'Tailwind CSS','Express JS ','Vite','Wasabi','Resend','OpenAI','Stripe'],
  },
  {
    title: 'DriveBisdz (Web & Mobile)',
    description:
      'A web platform for live car auctions with real-time bidding updates, admin panel, and analytics.',
    image: '/projects_img/Drivebidz2.png',
     
    live: '',
    tags: ['React.js',  'WebSocket', 'MongoDB','Express JS','Material UI','Node JS','React Native',],
  },
  {
    title: 'ToneSync AI',
    description:
      'Product for quality assurance in customer support (NayaTel)',
    image: '/projects_img/tonesync.png',
     
    live: 'https://www.ayzenntechnologies.com/img/Tonesync.png',
    tags: ['React.js', 'APIs', 'Frontend QA', 'JavaScript'],
  },
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <ScrollAnimation key={project.title}>
      <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm flex flex-col h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4 mt-auto">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  ))}
</div>

		</div>
	);
};

export default Projects;