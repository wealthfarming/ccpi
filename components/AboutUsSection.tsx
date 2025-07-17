// components/AboutUsSection.tsx

import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <nav className="text-sm text-blue-600 mb-8">
          <a href="https://ccpi.vn" className="hover:underline">CCPI</a> &gt; 
          <a href="https://ccpi.vn/category/uncategorized/" className="hover:underline"> Uncategorized</a> &gt; About Us
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <h3 className="text-3xl font-light text-gray-800 mb-2">
              Investing with confidence? CCPI guides the way.
            </h3>
            <p className="text-gray-600 mb-4">
              Invest with greater clarity and confidence thanks to CCPI&apos;s market-leading analysis and decision support tools.
            </p>
            <div className="w-28 h-1 bg-blue-800"></div>
          </div>
          <div>
            <p className="text-lg text-gray-700">
              Leveraging 40+ years of data mastery, we empower clients to navigate risk and return, building stronger portfolios through our research-driven solutions. At CCPI, we&apos;re dedicated to transparency in financial markets and using innovation to fuel economic prosperity worldwide. (Highlights data expertise and global impact)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;