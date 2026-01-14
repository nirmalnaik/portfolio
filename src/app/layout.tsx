import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Nirmal Naik - Java Developer & Full Stack Engineer',
	description: 'Nirmal Naik - Detail-oriented Java Developer with 4 years of experience designing and delivering scalable backend systems using Java Spring Boot and Microservices. Expert in building secure REST APIs and deploying containerized services.',
	keywords: 'Nirmal Naik, Java Developer, Full Stack Engineer, Spring Boot, Microservices, Backend Developer, AWS, Docker, PostgreSQL, MongoDB, Data Engineer, Toronto, Canada',
	authors: [{ name: 'Nirmal Naik' }],
	creator: 'Nirmal Naik',
	manifest: '/manifest.json',
	themeColor: '#000000',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://nirmalnaik.dev/',
		title: 'Nirmal Naik - Java Developer & Full Stack Engineer',
		description: 'Java Developer with 4 years of experience in Spring Boot, Microservices, and scalable backend systems.',
		siteName: 'Nirmal Naik Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Nirmal Naik - Java Developer & Full Stack Engineer',
		description: 'Java Developer with 4 years of experience in Spring Boot, Microservices, and scalable backend systems.',
		creator: '@nirmalnaik',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://nirmalnaik.dev'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/googlea4a36904e14398c1.html',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/nextjs.png" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
			</head>
			<body>
				<div className="flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow w-full">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}