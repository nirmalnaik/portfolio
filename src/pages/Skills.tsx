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
	VirtualBoxLogo
} from '@/components/TechLogos';

const skills = [
	{
		category: 'Backend Development',
		icon: <Server className="w-6 h-6" />,
		items: [
			{ name: 'Java', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'Spring Boot', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'Spring MVC', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'Spring Security', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'Spring Data JPA', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'Hibernate', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'REST APIs', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'Microservices', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'JWT', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'OAuth2', icon: <Code2 className="w-4 h-4" /> }
		]
	},
	{
		category: 'Databases',
		icon: <Database className="w-6 h-6" />,
		items: [
			{ name: 'PostgreSQL', icon: <MySQLLogo /> },
			{ name: 'MySQL', icon: <MySQLLogo /> },
			{ name: 'MongoDB', icon: <MongoDBLogo /> },
			{ name: 'JPA/Hibernate', icon: <Database className="w-4 h-4" /> }
		]
	},
	{
		category: 'Cloud & DevOps',
		icon: <Cloud className="w-6 h-6" />,
		items: [
			{ name: 'AWS', icon: <Cloud className="w-4 h-4" /> },
			{ name: 'Docker', icon: <Cloud className="w-4 h-4" /> },
			{ name: 'GitHub Actions', icon: <GitLogo /> },
			{ name: 'Kubernetes', icon: <Cloud className="w-4 h-4" /> },
			{ name: 'Nginx', icon: <Cloud className="w-4 h-4" /> },
			{ name: 'Linux', icon: <Terminal className="w-4 h-4" /> }
		]
	},
	{
		category: 'Frontend (Supportive)',
		icon: <Layout className="w-6 h-6" />,
		items: [
			{ name: 'Next.js', icon: <NextjsLogo /> },
			{ name: 'React.js', icon: <ReactLogo /> },
			{ name: 'TypeScript', icon: <TypeScriptLogo /> },
			{ name: 'HTML5', icon: <HTML5Logo /> },
			{ name: 'CSS3', icon: <CSSLogo /> }
		]
	},
	{
		category: 'Testing & Monitoring',
		icon: <Wrench className="w-6 h-6" />,
		items: [
			{ name: 'JUnit', icon: <Code2 className="w-4 h-4" /> },
			{ name: 'Postman', icon: <Wrench className="w-4 h-4" /> },
			{ name: 'Logging', icon: <Wrench className="w-4 h-4" /> },
			{ name: 'CloudWatch', icon: <Cloud className="w-4 h-4" /> }
		]
	},
	{
		category: 'Version Control',
		icon: <GitLogo />,
		items: [
			{ name: 'Git', icon: <GitLogo /> },
			{ name: 'GitHub', icon: <GitLogo /> },
			{ name: 'CI/CD', icon: <Code2 /> }
		]
	}
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

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map((skillGroup, index) => (
					<ScrollAnimation key={skillGroup.category}>
						<div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="flex items-center space-x-3 mb-6">
								<div className="p-2 bg-white/10 rounded-lg">
									{skillGroup.icon}
								</div>
								<h3 className="text-lg font-semibold">{skillGroup.category}</h3>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{skillGroup.items.map((skill, skillIndex) => (
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