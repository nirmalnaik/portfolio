'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const Education = () => {
	const educationData = [
		{
			school: "Trent University",
			location: "Canada",
			duration: "Sep 2023 – Dec 2024",
			degree: "Master of Science - Big Data Analytics",
			grade: "Graduated",
			coursework: [
				"Big Data Analytics",
				"Data Engineering",
				"Machine Learning",
				"Data Warehousing",
				"Cloud Computing",
				"Distributed Systems",
				"Data Visualization"
			],
			description: "Pursued advanced studies in Big Data Analytics, focusing on scalable data processing, machine learning, and cloud-based analytics solutions. Gained expertise in building data pipelines, working with large datasets, and implementing real-time analytics systems."
		},
		{
			school: "Gujarat Technological University",
			location: "India",
			duration: "Jun 2018 – May 2022",
			degree: "Bachelor of Engineering – Information Technology",
			grade: "Graduated",
			subjects: [
				"Software Engineering",
				"Database Systems",
				"Computer Networks",
				"Data Structures",
				"Algorithms",
				"Web Technologies"
			],
			description: "Built a strong foundation in Information Technology, focusing on software development, database management, and system design. The curriculum emphasized practical application through projects and hands-on experience, preparing me for real-world software engineering challenges."
		}
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<GraduationCap className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Education</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="space-y-12">
				{educationData.map((edu, index) => (
					<ScrollAnimation key={edu.school}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
						>
							<div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2 z-10">
								<Calendar className="w-4 h-4 text-gray-300" />
								<span className="text-gray-300">{edu.duration}</span>
							</div>

							<div className="p-6 pt-8">
								<div className="mb-6">
									<h3 className="text-xl font-bold mb-3">{edu.school}</h3>
									<div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
										<div className="flex items-center gap-2">
											<MapPin className="w-4 h-4" />
											<span>{edu.location}</span>
										</div>
										<div className="flex items-center gap-2">
											<Award className="w-4 h-4" />
											<span>{edu.grade}</span>
										</div>
									</div>
								</div>

								<div className="flex items-center gap-2 mb-4">
									<BookOpen className="w-5 h-5 text-gray-400" />
									<h4 className="text-lg font-semibold">{edu.degree}</h4>
								</div>

								<div className="flex items-start gap-2 text-gray-300 mb-6">
									<FileText className="w-5 h-5 mt-1 flex-shrink-0" />
									<p className="text-sm leading-relaxed">{edu.description}</p>
								</div>

								{edu.coursework && (
									<div className="mb-6">
										<div className="flex flex-wrap gap-2">
											{edu.coursework.map((course) => (
												<span
													key={course}
													className="px-3 py-1 bg-white/10 rounded-full text-sm"
												>
													{course}
												</span>
											))}
										</div>
									</div>
								)}

								{edu.subjects && (
									<div className="mb-6">
										<div className="flex flex-wrap gap-2">
											{edu.subjects.map((subject) => (
												<span
													key={subject}
													className="px-3 py-1 bg-white/10 rounded-full text-sm"
												>
													{subject}
												</span>
											))}
										</div>
									</div>
								)}
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Education;