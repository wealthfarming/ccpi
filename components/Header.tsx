// components/Header.tsx
'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-[#254099] text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              fetchPriority="high" 
              src="https://ccpi.vn/wp-content/uploads/2023/12/CCPI-backend-nen-trang-1.png" 
              width={200} 
              height={48.45} 
              alt="CCPI Logo" 
              className="h-[48.45px] w-auto"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-8">
          <Link href="/about-us/" className="text-white hover:text-blue-200 transition-colors font-medium">
            {t("about-us")}
          </Link>
          
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <Link href="/products/" className="text-white hover:text-blue-200 transition-colors font-medium flex items-center">
            {t("products")}
              <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            {isProductsOpen && (
              <div className="absolute top-full left-0 mt-0 w-96 z-50">
                <div className="h-[29px] w-full"></div>
                <div className="bg-gray-100 shadow-lg">
                  <Link href="/products/beq-top-5-exchanges-index/" className="block px-6 py-4 text-[#2B4FBB] hover:bg-gray-200 transition-colors font-medium">
                    BEQ TOP 5 EXCHANGES INDEX
                  </Link>
                  <Link href="/products/indexes-review-strategy-index-2/" className="block px-6 py-4 text-[#2B4FBB] hover:bg-gray-200 transition-colors font-medium">
                    INDEXES REVIEW STRATEGY INDEX
                  </Link>
                  <Link href="/products/dynamic-multi-asset-tradable-index/" className="block px-6 py-4 text-[#2B4FBB] hover:bg-gray-200 transition-colors font-medium">
                    DYNAMIC MULTI ASSET TRADABLE INDEX
                  </Link>
                  <Link href="/products/blockchain-etf-tradable-index/" className="block px-6 py-4 text-[#2B4FBB] hover:bg-gray-200 transition-colors font-medium">
                    BLOCKCHAIN ETF TRADABLE INDEX
                  </Link>
                  <Link href="/products/women-ceo-usa-tradable-index/" className="block px-6 py-4 text-[#2B4FBB] hover:bg-gray-200 transition-colors font-medium">
                    WOMEN CEO USA TRADABLE INDEX
                  </Link>
                  <Link href="/products/beq-top-10-sports-index/" className="block px-6 py-4 text-[#2B4FBB] hover:bg-gray-200 transition-colors font-medium">
                    BEQ TOP 10 SPORTS INDEX
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* News Dropdown */}
          <div 
            className="relative"
          >
            <Link href="/news/" className="text-white hover:text-blue-200 transition-colors font-medium flex items-center">
              {t("news")}
            </Link>
          </div>

          <Link href="/legal-term-of-service/" className="text-white hover:text-blue-200 transition-colors font-medium">
            {t("terms-of-service")}
          </Link>
          <Link href="/faqs/" className="text-white hover:text-blue-200 transition-colors font-medium">
            {t("faqs")}
          </Link>
          <Link href="/contact/" className="text-white hover:text-blue-200 transition-colors font-medium">
            {t("contact")}
          </Link>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2 ml-4">
            <button 
              onClick={() => changeLanguage('vi')}
              className="flex items-center space-x-1 text-white hover:text-blue-200 transition-colors"
            >
              <Image 
                className="inline" 
                src="https://ccpi.vn/wp-content/plugins/translatepress-multilingual/assets/images/flags/vi.png" 
                width={18} 
                height={12} 
                alt="vi" 
                title="Vietnamese"
              />
              <span className="text-sm font-medium">VI</span>
            </button>
            <span className="text-blue-200">|</span>
            <button 
              onClick={() => changeLanguage('en')}
              className="flex items-center space-x-1 text-white hover:text-blue-200 transition-colors"
            >
              <Image 
                loading="lazy" 
                className="inline" 
                src="https://ccpi.vn/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png" 
                width={18} 
                height={12} 
                alt="en_US" 
                title="English"
              />
              <span className="text-sm font-medium">EN</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}