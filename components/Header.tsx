// components/Header.tsx
'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);

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
            About Us
          </Link>
          
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <Link href="https://ccpi.vn/products/" className="text-white hover:text-blue-200 transition-colors font-medium flex items-center">
              Products
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
            onMouseEnter={() => setIsNewsOpen(true)}
            onMouseLeave={() => setIsNewsOpen(false)}
          >
            <Link href="https://ccpi.vn/news/" className="text-white hover:text-blue-200 transition-colors font-medium flex items-center">
              News
              <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            {isNewsOpen && (
              <div className="absolute top-full left-0 mt-0 w-96 z-50">
                <div className="h-[29px] w-full"></div>
                <div className="bg-gray-100 shadow-lg">
                  <Link href="https://ccpi.vn/nft-beq-index-the-next-gen-index-investment-certificate/" className="block px-6 py-4 text-[#2B4FBB] hover:bg-gray-200 transition-colors font-medium">
                    NFT BEQ INDEX – The Next-Gen Index Investment Certificate
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/legal-term-of-service/" className="text-white hover:text-blue-200 transition-colors font-medium">
            Terms of Service
          </Link>
          <Link href="/faqs/" className="text-white hover:text-blue-200 transition-colors font-medium">
            FAQs
          </Link>
          <Link href="/contact/" className="text-white hover:text-blue-200 transition-colors font-medium">
            Contact
          </Link>
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 ml-4">
            <Link href="https://ccpi.vn/vi/" className="flex items-center space-x-1 text-white hover:text-blue-200 transition-colors">
              <Image 
                className="inline" 
                src="https://ccpi.vn/wp-content/plugins/translatepress-multilingual/assets/images/flags/vi.png" 
                width={18} 
                height={12} 
                alt="vi" 
                title="Vietnamese"
              />
              <span className="text-sm font-medium">VI</span>
            </Link>
            <span className="text-blue-200">|</span>
            <Link href="https://ccpi.vn/" className="flex items-center space-x-1 text-white hover:text-blue-200 transition-colors">
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
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}