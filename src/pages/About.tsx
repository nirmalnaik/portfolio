'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Users, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
	const achievements = [
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "4+ Years",
			description: "Professional experience"
		},
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "Microservices",
			description: "Scalable backend systems"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "M.Sc. Big Data",
			description: "Advanced analytics expertise"
		}
	];

	const interests = [
		"Backend Development",
		"Microservices Architecture",
		"Cloud Computing",
		"DevOps & CI/CD",
		"Data Engineering",
		"System Design"
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
							src="/profile/profile.jpg"
							alt="Nirmal Naik"
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</ScrollAnimation>

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							Detail-oriented Java Developer with 4 years of experience designing and delivering scalable backend systems using Java Spring Boot and Microservices. Skilled in building secure REST APIs, integrating authentication and authorization flows, and deploying containerized services through Docker and modern orchestration tools.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Experienced with relational and NoSQL databases, continuous integration pipelines, and automated testing to maintain code quality. Collaborative team player with strong problem-solving ability and a focus on writing maintainable, high-performance software that enhances reliability and security.
						</p>
						<p className="text-gray-300 leading-relaxed">
							I hold a Master's degree in Big Data Analytics from Trent University, Canada, which complements my practical experience in building data-intensive applications and real-time analytics systems.
						</p>
					</div>

					<ScrollAnimation>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">Quick Facts</h3>
							<ul className="list-none space-y-3">
								{["Based in Toronto, Ontario, Canada", "M.Sc. Big Data Analytics", "4+ Years Experience"].map((fact, index) => (
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
								href="/files/cv_pdf/Nirmal_Naik_Fullstack_Developer_Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
							>
								Download CV
							</a>
							<a
								href="#skills"
								onClick={(e) => {
									e.preventDefault();
									const targetElement = document.getElementById('skills');
									if (targetElement) {
										const offsetTop = targetElement.offsetTop - 80;
										window.scrollTo({
											top: offsetTop,
											behavior: 'smooth'
										});
									}
								}}
								className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors cursor-pointer"
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