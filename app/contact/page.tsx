// app/contact/page.tsx
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import SocialNetworks from '@/components/SocialNetworks';
// Import Google Map component if needed, e.g., from react-google-maps or similar


export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
      <SocialNetworks />
      <Footer />
    </div>
  );
}