// components/IndexServicesSection.tsx
'use client';

import React from 'react';
import { Gear, Leaf, DotsSix } from '@phosphor-icons/react';

const IndexServicesSection: React.FC = () => {
  return (
    <div className="relative bg-[#254099] py-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://ccpi.vn/wp-content/uploads/2017/09/about-2-bg-column.jpg')] bg-cover bg-no-repeat bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex">
            <Gear weight="light" className="w-10 h-10 text-indigo-300 flex-shrink-0 mr-6 mt-2" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Custom Indexes</h3>
              <p className="text-indigo-100 text-lg">
                CCPI allows clients to create custom indexes tailored to their specific investment needs and objectives. This includes choosing the underlying assets, weighting methodologies, and other customization options.
              </p>
            </div>
          </div>
          <div className="flex">
            <Leaf weight="light" className="w-10 h-10 text-indigo-300 flex-shrink-0 mr-6 mt-2" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Thematic and ESG Indexes</h3>
              <p className="text-indigo-100 text-lg">
                CCPI offers a wide range of thematic and ESG (Environmental, Social, and Governance) indexes that track specific trends or sectors. These indexes can be used to align investments with certain values or gain exposure to growing markets.
              </p>
            </div>
          </div>
          <div className="flex">
            <DotsSix weight="light" className="w-10 h-10 text-indigo-300 flex-shrink-0 mr-6 mt-2" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Factor Indexes</h3>
              <p className="text-indigo-100 text-lg">
                CCPI factor indexes target specific investment factors, such as value, growth, momentum, or volatility. This allows investors to gain targeted exposure to desired risk-return profiles and potentially enhance portfolio performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexServicesSection;