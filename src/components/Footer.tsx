'use client';

import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const pageLinks = [
		{ name: 'Home', path: '#home', isAnchor: true },
		{ name: 'About', path: '#about', isAnchor: true },
		{ name: 'Education', path: '#education', isAnchor: true },
		{ name: 'Experience', path: '#experience', isAnchor: true },
		{ name: 'Skills', path: '#skills', isAnchor: true },
		{ name: 'Projects', path: '#projects', isAnchor: true },
		{ name: 'Certificates', path: '#certificates', isAnchor: true },
		{ name: 'Contact', path: '#contact', isAnchor: true },
	];

	const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
		if (path.startsWith('#')) {
			e.preventDefault();
			const targetId = path.replace('#', '');
			const targetElement = document.getElementById(targetId);
			
			if (targetElement) {
				const offsetTop = targetElement.offsetTop - 80;
				window.scrollTo({
					top: offsetTop,
					behavior: 'smooth'
				});
			}
		}
	};

	// Split links into columns of 3
	const column1 = pageLinks.slice(0, 3);
	const column2 = pageLinks.slice(3, 6);
	const column3 = pageLinks.slice(6, 9);

	return (
		<footer className="relative mt-24">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
					{/* Branding */}
					<div className="space-y-4">
						<a 
							href="#home" 
							onClick={(e) => handleAnchorClick(e, '#home')}
							className="flex items-center space-x-3 cursor-pointer"
						>
							<Code2 className="w-8 h-8 text-white" />
							<span className="text-xl font-bold text-white">Nirmal Naik</span>
						</a>
						<p className="text-sm text-gray-400">
							Java Developer & Full Stack Engineer based in Toronto, Ontario, Canada.
						</p>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Contact</h3>
						<ul className="space-y-3">
							<li>
								<a href="mailto:nirmalnaikca@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
									<Mail className="w-4 h-4" />
									nirmalnaikca@gmail.com
								</a>
							</li>
							<li>
								<a
									href="tel:+12496881511"
									className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
								>
									<Phone className="w-4 h-4" />
									(249)-688-1511
								</a>
							</li>
						</ul>
					</div>

					{/* Links - First Column */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Quick Links</h3>
						<div className="grid grid-cols-3 gap-x-6 gap-y-3">
							{/* Column 1 */}
							<div>
								{column1.map(link => (
									link.isAnchor ? (
										<a
											key={link.path}
											href={link.path}
											onClick={(e) => handleAnchorClick(e, link.path)}
											className="block text-sm text-gray-400 hover:text-white transition-colors mb-2 cursor-pointer"
										>
											{link.name}
										</a>
									) : (
										<Link
											key={link.path}
											href={link.path}
											className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
										>
											{link.name}
										</Link>
									)
								))}
							</div>
							{/* Column 2 */}
							<div>
								{column2.map(link => (
									link.isAnchor ? (
										<a
											key={link.path}
											href={link.path}
											onClick={(e) => handleAnchorClick(e, link.path)}
											className="block text-sm text-gray-400 hover:text-white transition-colors mb-2 cursor-pointer"
										>
											{link.name}
										</a>
									) : (
										<Link
											key={link.path}
											href={link.path}
											className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
										>
											{link.name}
										</Link>
									)
								))}
							</div>
							{/* Column 3 */}
							<div>
								{column3.map(link => (
									link.isAnchor ? (
										<a
											key={link.path}
											href={link.path}
											onClick={(e) => handleAnchorClick(e, link.path)}
											className="block text-sm text-gray-400 hover:text-white transition-colors mb-2 cursor-pointer"
										>
											{link.name}
										</a>
									) : (
										<Link
											key={link.path}
											href={link.path}
											className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
										>
											{link.name}
										</Link>
									)
								))}
							</div>
						</div>
					</div>

					{/* Social */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Social</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com/nirmalnaik"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://linkedin.com/in/nirmalnaik"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="mailto:nirmalnaikca@gmail.com"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Mail className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/10 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-400">
							© {currentYear} Nirmal Naik. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<a href="" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
								<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 32 32">
									<path d="M12 1L24 22H0L12 1Z" />
								</svg>
								nirmal's Portfolio
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;