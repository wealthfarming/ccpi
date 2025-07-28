"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';


const AboutUsBanner = () => {
  const { t } = useTranslation()

  return (
    <div className="relative w-full" id="financity-page-wrapper">
      <div 
        className="relative w-full"
        style={{
          backgroundImage: "url(https://ccpi.vn/wp-content/uploads/2024/01/about-us.png)",
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
        <div className="financity-blog-title-container financity-container max-w-7xl mx-auto px-4">
          <div 
            className="financity-blog-title-content financity-item-pdlr"
            style={{
              paddingTop: "400px",
              paddingBottom: "80px"
            }}
          >
            <header className="financity-single-article-head clearfix">
              <div className="financity-single-article-head-right">
                <h1 
                  className="financity-single-article-title text-white font-bold text-4xl md:text-5xl lg:text-6xl"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
                  }}
                >
                  {t("about-us")}
                </h1>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner; 