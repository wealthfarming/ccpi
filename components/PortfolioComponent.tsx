'use client'
import Image from 'next/image';
import React from 'react';
// Assuming phosphor-icons is installed, import any icons if needed. For now, no icons in original, but example import:
import { Calendar, User } from '@phosphor-icons/react'; // Example icons for Date and Client

const PortfolioComponent: React.FC = () => {
  return (
    <div className="relative py-[90px] pb-[25px] px-0 mx-0">
      {/* Background wrap - empty in original */}
      <div className="absolute inset-0 bg-transparent"></div>

      <div className="relative">
        <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap">
          {/* Left column: Image */}
          <div className="w-full md:w-1/2 pr-0 md:pr-4">
            <div className="relative -mt-[170px] p-0">
              <div className="shadow-[0_0_74px_rgba(15,15,15,0.07)]">
                <Image
                  src="https://ccpi.vn/wp-content/uploads/2017/09/single-port-3-1-1.jpg"
                  alt=""
                  width={595}
                  height={580}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right column: Content */}
          <div className="w-full md:w-1/2 pl-0 md:pl-[30px] pb-[40px] pt-8 md:pt-0">
            {/* Title */}
            <div className="mb-4">
              <h4 className="text-[27px] font-semibold tracking-normal capitalize-none flex items-center">
                Project Title
                <span className="ml-2 h-[1px] flex-grow"></span>
              </h4>
            </div>

            {/* Description */}
            <div className="mb-6 text-[16px]">
              <p>
                Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell.
              </p>
            </div>

            {/* Info */}
            <div className="pb-[50px]">
              <div className="py-2 flex items-center">
                <span className="font-semibold mr-2">Client</span>
                <span>DreamAct</span>
                {/* Example icon usage */}
                <User size={20} className="ml-2 text-gray-600" />
              </div>
              <div className="py-2 flex items-center">
                <span className="font-semibold mr-2">Date</span>
                <span>17 August 2017</span>
                {/* Example icon usage */}
                <Calendar size={20} className="ml-2 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;