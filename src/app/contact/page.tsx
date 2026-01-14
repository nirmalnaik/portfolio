import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Nirmal Naik',
	description: 'Get in touch with Nirmal Naik, a Software Developer specializing in full-stack development.',
};

export default function ContactPage() {
	return <Contact />;
}