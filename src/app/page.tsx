'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const Home = dynamic(() => import('@/pages/Home'), {
	loading: () => <Loading />,
	ssr: false,
	suspense: true,
});

const About = dynamic(() => import('@/pages/About'), {
	loading: () => <Loading />,
	ssr: false,
	suspense: true,
});

const Education = dynamic(() => import('@/pages/Education'), {
	loading: () => <Loading />,
	ssr: false,
	suspense: true,
});

const Experience = dynamic(() => import('@/pages/Experience'), {
	loading: () => <Loading />,
	ssr: false,
	suspense: true,
});

const Skills = dynamic(() => import('@/pages/Skills'), {
	loading: () => <Loading />,
	ssr: false,
	suspense: true,
});

const Projects = dynamic(() => import('@/pages/Projects'), {
	loading: () => <Loading />,
	ssr: false,
	suspense: true,
});

const Certificates = dynamic(() => import('@/pages/Certificates'), {
	loading: () => <Loading />,
	ssr: false,
	suspense: true,
});

const Contact = dynamic(() => import('@/pages/Contact'), {
	loading: () => <Loading />,
	ssr: false,
	suspense: true,
});

export default function HomePage() {
	return (
		<div className="w-full">
			<Suspense fallback={<Loading />}>
				<section id="home" className="w-full">
					<Home />
				</section>
			</Suspense>
			<Suspense fallback={<Loading />}>
				<section id="about" className="w-full">
					<About />
				</section>
			</Suspense>
			<Suspense fallback={<Loading />}>
				<section id="education" className="w-full">
					<Education />
				</section>
			</Suspense>
			<Suspense fallback={<Loading />}>
				<section id="experience" className="w-full">
					<Experience />
				</section>
			</Suspense>
			<Suspense fallback={<Loading />}>
				<section id="skills" className="w-full">
					<Skills />
				</section>
			</Suspense>
			<Suspense fallback={<Loading />}>
				<section id="projects" className="w-full">
					<Projects />
				</section>
			</Suspense>
			<Suspense fallback={<Loading />}>
				<section id="certificates" className="w-full">
					<Certificates />
				</section>
			</Suspense>
			<Suspense fallback={<Loading />}>
				<section id="contact" className="w-full">
					<Contact />
				</section>
			</Suspense>
		</div>
	);
}
