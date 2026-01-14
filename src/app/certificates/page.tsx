import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Certificates - Nirmal Naik',
	description: 'View Nirmal Naik\'s certifications and achievements in web development, programming, and other technical skills.',
};

export default function CertificatesPage() {
	return <Certificates />;
}