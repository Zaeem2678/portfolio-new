import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact - Hozefa Hassan Rizvi',
	description: 'Get in touch with Hozefa Hassan Rizvi, a Software Developer specializing in full-stack development.',
};

export default function ContactPage() {
	return <Contact />;
}