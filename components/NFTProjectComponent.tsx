'use client'
import Image from 'next/image';
import React from 'react';

const NFTProjectComponent: React.FC = () => {
  return (
    <div className="py-[60px]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Column: Images */}
        <div className="w-full md:w-1/2">
          {/* First Image */}
          <div className="mb-[70px] overflow-hidden shadow-none">
            <a href="https://ccpi.vn/wp-content/uploads/2017/09/single-port-1.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2017/09/single-port-1.jpg"
                alt=""
                width={620}
                height={348}
                className="w-full h-auto"
                loading="lazy"
              />
            </a>
          </div>

          {/* Second Image */}
          <div className="overflow-hidden shadow-[0_0_74px_rgba(10,10,10,0.07)]">
            <a href="https://ccpi.vn/wp-content/uploads/2017/09/single-port-1-2.jpg" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2017/09/single-port-1-2.jpg"
                alt=""
                width={620}
                height={388}
                className="w-full h-auto"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-1/2 pt-[10px] pl-0 md:pl-[30px]">
          {/* Project Detail */}
          <div className="mb-[35px]">
            <h4 className="text-[27px] font-semibold tracking-normal capitalize-none flex items-center">
              Project Detail
              <span className="ml-2 h-[1px] flex-grow "></span>
            </h4>
          </div>
          <div className="text-[17px] mb-[15px]">
            <p>
              Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell.
            </p>
          </div>
          <div className="pb-[60px]">
            <div className="py-2 flex items-center">
              <span className="font-semibold mr-2">Client</span>
              <span>DreamAct</span>
            </div>
            <div className="py-2 flex items-center">
              <span className="font-semibold mr-2">Date</span>
              <span>17 August 2017</span>
            </div>
          </div>

          {/* Result Driven */}
          <div className="mb-[35px]">
            <h4 className="text-[25px] font-semibold tracking-normal capitalize-none flex items-center">
              Result Driven
              <span className="ml-2 h-[1px] flex-grow "></span>
            </h4>
          </div>
          <div className="text-[17px] mb-[40px]">
            <p className="mb-4">
              More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include a powerful alliance network with leading capital markets software vendors, and programs such as the FinTech Innovation Lab that keep us at the forefront of innovation. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting Our Trading helps clients run and transform their front, middle and back-office trading operations.
            </p>
            <p>
              <span className="text-[21px]">
                We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement capabilities across.
              </span>
            </p>
          </div>

          {/* What We’ve Done */}
          <div className="mb-[35px]">
            <h4 className="text-[25px] font-semibold tracking-normal capitalize-none flex items-center">
              What We’ve Done
              <span className="ml-2 h-[1px] flex-grow "></span>
            </h4>
          </div>
          <div className="text-[17px] mb-[15px]">
            <p>
              <span className="text-[22px]">
                <span className="text-[#3039ac]">We provide buy-side, sell-side</span> and market infrastructure firms with a full-service offering, including systems integration and technology consulting services,<strong> to assist in delivering</strong> high performance trading and settlement
              </span>
            </p>
            <p className="mt-4">
              More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTProjectComponent;