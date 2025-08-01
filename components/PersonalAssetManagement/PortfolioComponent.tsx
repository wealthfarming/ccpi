// components/PortfolioComponent.tsx

import Image from 'next/image';
import React from 'react';

const PortfolioComponent: React.FC = () => {
  return (
    <div className="mt-[-90px] pb-[60px] z-10">
      <div className="mx-auto">
        {/* Main Column */}
        <div className="w-full pb-[40px] max-w-[800px] mx-auto">
          {/* Image */}
          <div className="mb-[60px] shadow-[0_0_74px_rgba(10,10,10,0.07)]">
            <Image
              src="https://ccpi.vn/wp-content/uploads/2017/09/single-port-2-1.jpg"
              alt=""
              width={840}
              height={468}
              className="w-full h-auto z-10"
              loading="lazy"
            />
          </div>

          {/* Title */}
          <div className="mb-4">
            <h4 className="text-[27px] font-semibold tracking-normal capitalize-none flex items-center">
              Project Title
              <span className="ml-2 h-[1px] flex-grow bg-gray-300"></span>
            </h4>
          </div>

          {/* Text */}
          <div className="mb-6 text-[16px]">
            <p>
              Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high. Our Trading helps clients run and transform their fro nt, middle and back-office trading operations. We provide buy-side, sell. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading.
            </p>
          </div>

          {/* Info */}
          <div className="pb-[50px] border-t border-b border-gray-300 divide-y divide-gray-300">
            <div className="py-2 flex items-center">
              <span className="font-semibold mr-2">Client</span>
              <span>DreamAct</span>
            </div>
            <div className="py-2 flex items-center">
              <span className="font-semibold mr-2">Date</span>
              <span>17 August 2017</span>
            </div>
            <div className="py-2 flex items-center">
              <span className="font-semibold mr-2">Skills</span>
              <span>Project Planning</span>
            </div>
          </div>
        </div>

        {/* Small Image and Help Monitoring */}
        <div className="flex flex-col gap-20 md:flex-row max-w-[1200px] mx-auto">
          {/* Small Image */}
          <div className="w-full md:w-2/5 pl-0 md:pl-[20px] pt-[10px]">
            <div className="shadow-[0_0_74px_rgba(10,10,10,0.12)]">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2017/09/single-port-2-2-1.jpg"
                alt=""
                width={450}
                height={478}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Help Monitoring */}
          <div className="w-full md:w-3/5 pr-0 md:pr-[35px] pt-[50px]">
            <div className="mb-4">
              <h4 className="text-[27px] font-semibold tracking-normal capitalize-none flex items-center">
                Help Monitoring
                <span className="ml-2 h-[1px] flex-grow bg-gray-300"></span>
              </h4>
            </div>
            <div className="text-[16px]">
              <p className="mb-4">
                More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include a powerful alliance network with leading capital markets software vendors, and programs such as the FinTech Innovation Lab that keep us at the forefront of innovation. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms.
              </p>
              <p>
                <span className="text-[20px]">
                  We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;