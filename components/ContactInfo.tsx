'use client';
import { Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react';

const contactItems = [
  {
    icon: <Phone size={40} className="text-gray-700" />,
    title: 'Phone',
    description: 'A wonderful serenity has taken possession of my entire soul, like these.',
    info: '+1-2345-2345',
    link: '#',
  },
  {
    icon: <EnvelopeSimple size={40} className="text-gray-700" />,
    title: 'Email',
    description: 'A wonderful serenity has taken possession of my entire soul, like these.',
    info: 'Contact@goodlayers.com',
    link: '#',
  },
  {
    icon: <MapPin size={40} className="text-gray-700" />,
    title: 'Location',
    description: '4 apt. Flawing Street. The Grand Avenue.<br />Liverpool, UK 33342',
    info: 'View On Google Map',
    link: '#',
  },
];

export default function ContactInfo() {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="text-center md:text-left p-6"
          >
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-base mb-4" dangerouslySetInnerHTML={{ __html: item.description }} />
            <p className="text-base">
              <a href={item.link} className="text-[#254099] hover:underline">
                {item.info}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}