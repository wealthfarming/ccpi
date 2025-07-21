// components/BottomNavigation.tsx
'use client';
import React from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

const BottomNavigation: React.FC = () => {
  return (
    <div className="bg-white py-8 mb-8 mt-8">
      <div className="max-w-[800px] mx-auto p-8 px-4 border-t border-b border-gray-200">
        <div className="flex justify-between items-center">
          <a href="https://ccpi.vn/product-pricing-2/" rel="prev" className="flex items-center text-gray-400 hover:text-gray-700 text-sm font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            PREV    
          </a>
          <a href="https://ccpi.vn/ccpi-news/" rel="next" className="flex items-center text-gray-400 hover:text-gray-700 text-sm font-medium">
            NEXT
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;