"use client"
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export function ServicesSection() {
  const { t }  = useTranslation()
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6">
        {/* Main Title and Divider */}
        <div className="text-center" style={{ paddingBottom: "26px" }}>
          <h3 
            className="font-semibold text-center" 
            style={{ 
              fontSize: "44px", 
              fontWeight: "600", 
              letterSpacing: "0px", 
              textTransform: "none", 
              color: "#212121" 
            }}
          >
            {t("our-services")}
          </h3>
        </div>
        
        {/* Blue Divider */}
        <div className="flex justify-center" style={{ marginBottom: "55px" }}>
          <div 
            className="h-1"
            style={{ 
              width: "54px", 
              backgroundColor: "#254099", 
              height: "4px" 
            }}
          />
        </div>

        {/* Service 1: Indexes & Benchmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-30">
          <div className="lg:col-span-3">
            <div className="flex justify-center">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2024/01/Indexes-Benchmarks.png"
                alt="Indexes & Benchmarks"
                width={700}
                height={423}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:col-span-2 flex items-start">
            <div className="text-black">
              <h4 className="text-center text-xl font-bold mb-6">{t("services-title-1")}</h4>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li>
                  <strong>{t("services-des-bold-11")}</strong> {t("services-des-11")}
                </li>
                <li>
                  <strong>{t("services-des-bold-12")}</strong> {t("services-des-12")}
                </li>
                <li>
                  <strong>{t("services-des-bold-13")}</strong> {t("services-des-13")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 2: Research & Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-30">
          <div className="lg:col-span-2 flex items-start">
            <div className="text-black">
              <h4 className="text-center text-xl font-bold mb-6">{t("services-title-2")}</h4>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li>
                  <strong>{t("services-des-bold-21")}</strong> {t("services-des-21")}
                </li>
                <li>
                  <strong>{t("services-des-bold-22")}</strong> {t("services-des-22")}
                </li>
                <li>
                  <strong>{t("services-des-bold-23")}</strong> {t("services-des-23")}
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="flex justify-center">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2024/01/Research.png"
                alt="Research & Analytics"
                width={700}
                height={423}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Service 3: Portfolio Tools & Technology */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-30">
          <div className="lg:col-span-3">
            <div className="flex justify-center">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2024/01/Portfolio-Tools-Technology.png"
                alt="Portfolio Tools & Technology"
                width={700}
                height={423}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:col-span-2 flex items-start">
            <div className="text-black">
              <h4 className="text-center text-xl font-bold mb-6">{t("services-title-3")}</h4>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li>
                  <strong>{t("services-des-bold-31")}</strong> {t("services-des-31")}
                </li>
                <li>
                  <strong>{t("services-des-bold-32")}</strong> {t("services-des-32")}
                </li>
                <li>
                  <strong>{t("services-des-bold-33")}</strong> {t("services-des-33")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 4: Investment Support & Services */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex items-start">
            <div className="text-black">
              <h4 className="text-center text-xl font-bold mb-6">{t("services-title-4")}</h4>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li>
                  <strong>{t("services-des-bold-41")}</strong> {t("services-des-41")}
                </li>
                <li>
                  <strong>{t("services-des-bold-42")}</strong> {t("services-des-42")}
                </li>
                <li>
                  <strong>{t("services-des-bold-43")}</strong> {t("services-des-43")}
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="flex justify-center">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2024/01/Investment-Support.png"
                alt="Investment Support & Services"
                width={700}
                height={423}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}