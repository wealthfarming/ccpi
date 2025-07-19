// components/ServicesSection.tsx
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-3 gap-0">
      {/* Business & Financial Consult */}
      <div className="relative bg-black text-white py-24">
        <div className="absolute inset-0">
          <Image
            src="https://ccpi.vn/wp-content/uploads/2017/09/shutterstock_15900814.jpg"
            alt="Business Consult Background"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 pl-20">
          <h3 className="text-2xl font-light text-blue-400 mb-4">
            Business & Financial Consult
          </h3>
          <p className="text-base text-gray-300">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.
          </p>
        </div>
      </div>

       {/* Image Section */}
       <div className="relative">
        <Image
          src="https://ccpi.vn/wp-content/uploads/2017/09/shutterstock_361397258.jpg"
          alt="Analysis Image"
          fill
          className="object-cover"
          priority
        />
      </div>

       {/* Consulting */}
       <div className="relative bg-blue-700 text-white flex items-center justify-center">
        <div className="text-center">
          <svg className="mx-auto mb-4" width="58" height="51" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <h3 className="text-xl font-light">Consulting</h3>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <Image
          src="https://ccpi.vn/wp-content/uploads/2017/09/hp3-service-2.jpg"
          alt="Team Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Analyzing */}
      <div className="relative bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <Image
            src="https://ccpi.vn/wp-content/uploads/2017/09/hp3-service2-icon-1.png"
            alt="Analyzing Icon"
            width={45}
            height={56}
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-light text-gray-800">Analyzing</h3>
        </div>
      </div>

      {/* Analyze The Opportunities */}
      <div className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0">
          <Image
            src="https://ccpi.vn/wp-content/uploads/2017/08/shutterstock_251068444.jpg"
            alt="Opportunities Background"
            fill
            className="object-cover opacity-17"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 pl-20">
          <h3 className="text-2xl font-light text-blue-400 mb-4">
            Analyze The Opportunities
          </h3>
          <p className="text-base text-gray-300">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.
          </p>
        </div>
      </div>

    </div>
  );
}