'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const experiences = [
	{
		title: "Software Engineer (Contract)",
		company: "MyBeacon",
		location: "Toronto, Canada",
		period: "June 2025 - Oct 2025",
		description: [
			"Developed and maintained scalable microservices in Java Spring Boot to support data-intensive backend operations and RESTful API endpoints",
			"Designed asynchronous APIs and integrated caching and pagination mechanisms, reducing latency by 35% and enhancing data throughput",
			"Implemented secure authentication and authorization using Spring Security (JWT, OAuth2), ensuring compliance with access control standards",
			"Containerized backend services using Docker and automated build/deployment pipelines via GitHub Actions, reducing release cycles from 2 days to hours",
			"Monitored production services with performance dashboards, resolving data flow bottlenecks and improving system reliability",
			"Partnered with cross-functional teams (QA, Design, Product) across time zones to enhance UPI transaction data flow, increasing payment success by 30%"
		]
	},
	{
		title: "Software Development Engineer (Contract)",
		company: "Aarvicom",
		location: "Toronto, Canada",
		period: "Sept 2023 – June 2025",
		description: [
			"Built scalable backend APIs in Spring Boot + PostgreSQL, supporting 10K+ concurrent users with efficient connection pooling and indexing",
			"Integrated Stripe, Twilio, and SendGrid through REST APIs to expand platform capabilities with zero-downtime deployments",
			"Refactored legacy JSP codebase into React + Next.js, improving frontend load time by 40% and achieving a 90+ Lighthouse score",
			"Implemented role-based access control (RBAC) via Spring Security & JWT, eliminating unauthorized access incidents",
			"Deployed services to AWS ECS with load-balanced containers, achieving 99.9% uptime and faster horizontal scaling",
			"Enhanced developer workflows by implementing Git-based CI/CD pipelines and automated test coverage reports",
			"Contributed to internal authentication service migration to OAuth2, improving token validation and session consistency"
		]
	},
	{
		title: "Software Development Engineer",
		company: "Ajmera Infotech",
		location: "India",
		period: "Jan 2022 – July 2023",
		description: [
			"Developed interactive client dashboards using React + Redux, improving onboarding time by 25% and boosting user engagement",
			"Implemented form validations, state management, and modular UI components to improve data accuracy and maintainability",
			"Designed RESTful APIs with Spring Boot, enabling smooth data flow between the frontend and MySQL databases",
			"Created and maintained MySQL schemas and JPA repositories, reducing redundant queries by 20% through proper indexing and normalization",
			"Configured CI/CD pipelines with Jenkins + Docker for QA and staging environments, ensuring consistent deployments",
			"Optimized error handling and logging using Spring AOP, cutting debugging time by 30% during releases"
		]
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
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Experience;