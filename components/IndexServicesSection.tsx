// components/IndexServicesSection.tsx
'use client';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Gear, Leaf, DotsSix } from '@phosphor-icons/react';

const IndexServicesSection: React.FC = () => {
    const { t } = useTranslation()

  return (
    <div className="relative bg-[#254099] py-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://ccpi.vn/wp-content/uploads/2017/09/about-2-bg-column.jpg')] bg-cover bg-no-repeat bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex">
            <Gear weight="light" className="w-10 h-10 text-indigo-300 flex-shrink-0 mr-6 mt-2" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{t("custom-indexes")}</h3>
              <p className="text-indigo-100 text-lg">
                {t("about-des-4")}
              </p>
            </div>
          </div>
          <div className="flex">
            <Leaf weight="light" className="w-10 h-10 text-indigo-300 flex-shrink-0 mr-6 mt-2" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{t("thematic-indexes")}</h3>
              <p className="text-indigo-100 text-lg">
                {t("about-des-5")}
              </p>
            </div>
          </div>
          <div className="flex">
            <DotsSix weight="light" className="w-10 h-10 text-indigo-300 flex-shrink-0 mr-6 mt-2" />
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">{t("factor-indexes")}</h3>
              <p className="text-indigo-100 text-lg">
                {t("about-des-6")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexServicesSection;