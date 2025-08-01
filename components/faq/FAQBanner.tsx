"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQBanner = () => {
  const { t } = useTranslation()
  return (
    <div className="relative w-full" id="financity-page-wrapper">
      <div 
        className="relative w-full"
        style={{
          height: "500px",
          backgroundImage: "url(https://ccpi.vn/wp-content/uploads/2024/01/glossary-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Header transparent substitute */}
        <div className="financity-header-transparent-substitute"></div>
        
        {/* Top overlay */}
        <div className="financity-blog-title-top-overlay"></div>
        
        {/* Main overlay */}
        <div className="financity-blog-title-overlay absolute inset-0"></div>
        
        {/* Bottom overlay */}
        <div className="financity-blog-title-bottom-overlay"></div>
        
        {/* Content container */}
        <div className="financity-blog-title-container financity-container max-w-7xl mx-auto px-4 h-full">
          <div 
            className="financity-blog-title-content financity-item-pdlr h-full flex items-center justify-start"
          >
            <header className="financity-single-article-head clearfix">
              <div className="financity-single-article-head-right">
                <h1 
                  className="financity-single-article-title text-white font-bold text-4xl md:text-5xl lg:text-6xl"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
                  }}
                >
                  {t("faqs")}
                </h1>
                <p className="text-white text-xl">
                  {t("faqs-description")}
                </p>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQBanner;