import React from 'react';

const ProductBanner = () => {
  return (
    <div className="relative w-full" id="financity-page-wrapper">
      <div 
        className="relative w-full"
        style={{
          height: "400px",
          backgroundImage: "url(https://ccpi.vn/wp-content/uploads/2017/09/page-title-background.jpg)",
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
            className="financity-blog-title-content financity-item-pdlr h-full flex items-center justify-center"
          >
            <header className="financity-single-article-head clearfix">
              <div className="financity-single-article-head-right">
                <h1 
                  className="text-center financity-single-article-title text-white font-bold text-4xl md:text-5xl lg:text-6xl"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
                  }}
                >
                  Products
                </h1>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner; 