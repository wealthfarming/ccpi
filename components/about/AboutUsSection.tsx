"use client"
import { useTranslation } from 'react-i18next';
import React from 'react';

const AboutUsSection: React.FC = () => {
    const { t } = useTranslation()

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-blue-600">
            <a href="/" className="hover:underline p-2 color-[#254099]">CCPI</a> &gt; 
            <a href="/category/uncategorized/" className="hover:underline p-2 color-[#254099]"> Uncategorized</a> &gt; <span className="text-gray-600 p-2">About Us</span>
          </nav>
        </div>
      </div>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-light text-gray-800 mb-2">
                {t("about-des-1")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("about-des-2")}
              
              </p>
              <div className="w-28 h-1 bg-blue-800"></div>
            </div>
            <div>
              <p className="text-lg text-gray-700">
                {t("about-des-3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;