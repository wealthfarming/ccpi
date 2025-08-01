// components/ExpertiseSection.tsx
'use client';

import { Check } from "lucide-react";
import Image from "next/image";
import { useInterface } from "@/components/context/interface-context";
import { useTranslation } from "react-i18next";

export function ExpertiseSection() {
  const { isDesktop } = useInterface();
  const { t } = useTranslation()
  return (
    <>
      {/* Hero Section with Background */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://ccpi.vn/wp-content/uploads/2017/09/hp2-about-bg.jpg')",
          padding: "110px 0px 225px 0px"
        }}
      >
        <div className="container mx-auto">
          <div className="text-center">
            <h3 
              className="font-bold text-center"
              style={{
                fontSize: "44px",
                fontWeight: "700",
                letterSpacing: "0px",
                textTransform: "none",
                color: "#ffffff"
              }}
            >
              {t("expertise-title")}
            </h3>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section style={{ margin: "-180px 0px 20px 0px" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            {/* Left Column - Blue Background */}
            <div 
              className="relative flex flex-col"
              style={{
                backgroundColor: "#1b2fb5",
                padding: "95px 50px 55px 65px"
              }}
            >
              <div className="text-white flex-1">
                {/* Title */}
                <div style={{ paddingBottom: "10px" }}>
                  <h3 
                    className="font-semibold text-left"
                    style={{
                      fontSize: "42px",
                      fontWeight: "600",
                      letterSpacing: "0px",
                      textTransform: "none",
                      color: "#ffffff"
                    }}
                  >
                    {t("expert-in")}<br />
                    {t("this-field")}
                  </h3>
                </div>

                {/* Icon List */}
                <div className="mt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">
                        <Check 
                          className="w-4 h-4" 
                          style={{ color: "#ffffff", fontSize: "17px" }}
                        />
                      </span>
                      <span 
                        className="text-left"
                        style={{ 
                          color: "#e5e5e5", 
                          fontSize: "17px" 
                        }}
                      >
                        {t("expert-des-1")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">
                        <Check 
                          className="w-4 h-4" 
                          style={{ color: "#ffffff", fontSize: "17px" }}
                        />
                      </span>
                      <span 
                        className="text-left"
                        style={{ 
                          color: "#e5e5e5", 
                          fontSize: "17px" 
                        }}
                      >
                        {t("expert-des-2")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">
                        <Check 
                          className="w-4 h-4" 
                          style={{ color: "#ffffff", fontSize: "17px" }}
                        />
                      </span>
                      <span 
                        className="text-left"
                        style={{ 
                          color: "#e5e5e5", 
                          fontSize: "17px" 
                        }}
                      >
                        {t("expert-des-3")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">
                        <Check 
                          className="w-4 h-4" 
                          style={{ color: "#ffffff", fontSize: "17px" }}
                        />
                      </span>
                      <span 
                        className="text-left"
                        style={{ 
                          color: "#e5e5e5", 
                          fontSize: "17px" 
                        }}
                      >
                        {t("expert-des-4")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard */}
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center h-full">
              {/* Content Area */}
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/01/CCPI-VN-Content.png" 
                alt="Expertise" 
                width={1000} 
                height={648.68} 
                style={isDesktop ? { maxHeight: "648px" } : {}}
                className="object-top object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 