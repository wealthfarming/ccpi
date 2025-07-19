// app/products/page.tsx
import { Metadata } from 'next';
import ServiceGrid from '@/components/ServiceGrid';
import ConsultSection from '@/components/ConsultSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ProductBanner from '@/components/ProductBanner';

export const metadata: Metadata = {
  title: 'Products',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductBanner />

      {/* Service Grid Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ServiceGrid />
        </div>
      </div>

      {/* Consult Section */}
      <ConsultSection />
      <Footer />
    </div>
  );
}