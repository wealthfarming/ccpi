// components/ServiceGrid.tsx
import ServiceCard from './ServiceCard';

export default function ServiceGrid() {
  const services = [
    {
      title: 'Capital Markets',
      description: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.',
      iconSrc: 'https://ccpi.vn/wp-content/uploads/2017/08/service-icon-1.png',
      iconAlt: 'Capital Markets Icon',
      iconWidth: 60,
      iconHeight: 60,
    //   href: '/financity/capital-markets/',`
    },
    {
      title: 'Indexing',
      iconSrc: '', // No icon in the provided HTML for this one, you can add if needed or use a Phosphor icon as fallback
      iconAlt: 'Indexing Icon',
      iconWidth: 60,
      iconHeight: 60,
    //   href: '', // No href in HTML, add if needed
    },
    {
      title: 'Blockchain',
      description: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.',
      iconSrc: 'https://ccpi.vn/wp-content/uploads/2017/08/service-icon-3.png',
      iconAlt: 'Blockchain Icon',
      iconWidth: 55,
      iconHeight: 55,
    //   href: '/financity/blockchain/',
    },
    {
      title: 'Technology Advisory',
      description: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.',
      iconSrc: 'https://ccpi.vn/wp-content/uploads/2017/08/service-icon-4.png',
      iconAlt: 'Technology Advisory Icon',
      iconWidth: 59,
      iconHeight: 46,
    //   href: '/financity/technology-advisory/',
    },
    {
      title: 'Finance & Risk',
      description: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.',
      iconSrc: 'https://ccpi.vn/wp-content/uploads/2017/08/service-icon-5.png',
      iconAlt: 'Finance & Risk Icon',
      iconWidth: 58,
      iconHeight: 51,
    //   href: '/financity/finance-risk/',
    },
    {
      title: 'Portfolio Management',
      description: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.',
      iconSrc: 'https://ccpi.vn/wp-content/uploads/2017/08/service-icon-6.png',
      iconAlt: 'Portfolio Management Icon',
      iconWidth: 57,
      iconHeight: 54,
    //   href: '/financity/portfolio-management/',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}