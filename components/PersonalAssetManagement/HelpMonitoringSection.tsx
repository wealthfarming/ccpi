// components/HelpMonitoringSection.tsx

import React from 'react';

const HelpMonitoringSection: React.FC = () => {
  return (
    <div className="pt-[20px] pb-[30px]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 pt-[30px] pb-[30px] text-left">
          {/* Title */}
          <div className="mb-4">
            <h4 className="text-[27px] font-semibold tracking-normal capitalize-none flex items-center">
              Help Monitoring
              <span className="ml-2 h-[1px] flex-grow bg-gray-300"></span>
            </h4>
          </div>

          {/* Text */}
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

        {/* Right: Background Image */}
        <div className="w-full md:w-1/2 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(https://ccpi.vn/wp-content/uploads/2017/09/shutterstock_400221685.jpg)` }}>
        </div>
      </div>
    </div>
  );
};

export default HelpMonitoringSection;