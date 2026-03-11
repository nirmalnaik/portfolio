'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import SearchDialog from './SearchDialog';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	const navLinks = [
		{ path: '#home', label: 'Home', id: 'home' },
		{ path: '#about', label: 'About', id: 'about' },
		{ path: '#projects', label: 'Projects', id: 'projects' },
		{ path: '#experience', label: 'Experience', id: 'experience' },
		{ path: '#skills', label: 'Skills', id: 'skills' },
		{ path: '#certificates', label: 'Certificates', id: 'certificates' },
		{ path: '#education', label: 'Education', id: 'education' },
		{ path: '#contact', label: 'Contact', id: 'contact' }
	];

	// Scroll spy functionality
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const offset = 150; // Offset for navbar
			
			// Get all sections with their positions
			const sections = navLinks
				.map(link => {
					const element = document.getElementById(link.id);
					if (element) {
						const top = element.offsetTop;
						const bottom = top + element.offsetHeight;
						return {
							id: link.id,
							top,
							bottom,
							element
						};
					}
					return null;
				})
				.filter(Boolean) as Array<{ id: string; top: number; bottom: number; element: HTMLElement }>;

			if (sections.length === 0) return;

			// Find which section is currently in view
			let activeId = 'home';
			
			// Check from bottom to top to get the most recent section
			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (scrollPosition + offset >= section.top) {
					activeId = section.id;
					break;
				}
			}

			setActiveSection(activeId);
		};

		// Throttle scroll events for better performance
		let ticking = false;
		const throttledScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', throttledScroll, { passive: true });
		
		// Check initial position after DOM is ready
		const checkInitial = () => {
			handleScroll();
		};
		
		// Check immediately and after delays to ensure DOM is ready
		setTimeout(checkInitial, 100);
		setTimeout(checkInitial, 500);
		setTimeout(checkInitial, 1000);

		return () => {
			window.removeEventListener('scroll', throttledScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
		e.preventDefault();
		const targetId = path.replace('#', '');
		const targetElement = document.getElementById(targetId);
		
		if (targetElement) {
			const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth'
			});
			setIsMenuOpen(false);
		}
	};

	return (
		<motion.nav
			className="fixed top-0 w-full z-50"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="relative">
				<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

				<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						{/* Logo */}
						<a 
							href="#home" 
							onClick={(e) => handleNavClick(e, '#home')}
							className="flex items-center space-x-3 cursor-pointer"
						>
							<Code2 className="w-8 h-8 text-white" />
							<span className="text-xl font-bold text-white">Nirmal</span>
						</a>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-6">
							<SearchDialog />
							{navLinks.map(link => (
								<a
									key={link.path}
									href={link.path}
									onClick={(e) => handleNavClick(e, link.path)}
									className={`nav-link ${activeSection === link.id ? 'bg-white/15 backdrop-blur-sm text-white' : ''}`}
								>
									{link.label}
								</a>
							))}
						</div>

						{/* Mobile header right section */}
						<div className="flex md:hidden items-center space-x-2">
							<SearchDialog />
							<button
								className="p-2 text-gray-400 hover:text-white transition-colors"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<motion.div
						className="md:hidden absolute top-full left-0 right-0 bg-black/50 backdrop-blur-xl"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2 }}
					>
						<div className="px-4 pt-2 pb-3 space-y-1">
							{navLinks.map(link => (
								<a
									key={link.path}
									href={link.path}
									onClick={(e) => handleNavClick(e, link.path)}
									className={`block px-3 py-2 text-gray-400 hover:text-white transition-colors ${activeSection === link.id ? 'bg-white/10 backdrop-blur-sm text-white' : ''
										}`}
								>
									{link.label}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navbar;