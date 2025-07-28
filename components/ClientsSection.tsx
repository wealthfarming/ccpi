"use client"
// components/ClientsSection.tsx
import Image from "next/image";
import { Link } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ClientsSection() {
  const { t } = useTranslation()
  return (
    <section className="py-12" style={{ margin: "30px 0px 0px 0px" }}>
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center" style={{ paddingBottom: "27px" }}>
          <h3 
            className="font-semibold text-center" 
            style={{ 
              fontSize: "44px", 
              fontWeight: "600", 
              letterSpacing: "0px", 
              textTransform: "none", 
              color: "#232323" 
            }}
          >
            {t("our-clients")}
          </h3>
        </div>

        {/* Divider */}
        <div className="flex justify-center" style={{ marginBottom: "55px" }}>
          <div 
            style={{ 
              width: "54px", 
              height: "4px", 
              backgroundColor: "#254099" 
            }}
          ></div>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ paddingBottom: "160px" }}>
          {/* Asset Managers */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/08/hompage-ccpi-2.png" 
                alt="Asset Managers" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                {t("asset-managers")}
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("client-section-1")}
              </p>
            </div>
          </div>

          {/* Asset Owners */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/08/hompage-ccpi-3.png" 
                alt="Asset Owners" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                {t("asset-owners")}
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("client-section-2")}
              </p>
            </div>
          </div>

          {/* Financial Intermediary */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/01/3.png" 
                alt="Financial Intermediary" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                {t("finan-inter")}
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("client-section-3")}
              </p>
            </div>
          </div>

          {/* Corporates */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/08/hompage-ccpi-1.png" 
                alt="Corporates" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                {t("corporates")}
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("client-section-4")}
              </p>
            </div>
          </div>

          {/* Researchers */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/01/researcher.png" 
                alt="Researchers" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                {t("researchers")}
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("client-section-5")}
              </p>
            </div>
          </div>

          {/* Media & Association */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/01/media.png" 
                alt="Media & Association" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                {t("media-association")}
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("client-section-6")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}