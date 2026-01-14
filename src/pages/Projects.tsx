'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'Real-Time Customer Data Ingestion and Warehousing Pipeline',
		description: 'Built a real-time ingestion pipeline with Apache NiFi + Amazon S3, automating data loading with Snowpipe to handle continuous customer records. Enabled near real-time analytics by integrating Snowflake Streams/Tasks with BI tools.',
		image: '/projects_img/project-1.png',
		github: '#',
		live: '#',
		tags: ["Apache NiFi", "Amazon S3", "Snowflake", "Snowpipe", "Data Pipeline", "Real-time Analytics"]
	},
	{
		title: 'Olympics Data Integration and Management System',
		description: 'Designed an ingestion pipeline using Azure Data Factory + Databricks, processing structured/semi-structured Olympic datasets with PySpark. Delivered real-time dashboards in Power BI + Synapse Analytics.',
		image: '/projects_img/project-2.png',
		github: '#',
		live: '#',
		tags: ["Azure Data Factory", "Databricks", "PySpark", "Power BI", "Synapse Analytics"]
	},
	{
		title: 'Spotify Data Pipeline',
		description: 'Developed a serverless ETL workflow using AWS Lambda, S3, Glue, Athena, automating playlist analytics with weekly refresh. Structured a scalable data lake on S3 with raw/processed layers.',
		image: '/projects_img/project-3.png',
		github: '#',
		live: '#',
		tags: ["AWS Lambda", "S3", "Glue", "Athena", "ETL", "Data Lake"]
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
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.github} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>
									<a href={project.live} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
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