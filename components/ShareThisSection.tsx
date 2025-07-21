'use client';

import React from 'react';
import { FacebookLogo, PinterestLogo, SkypeLogo, TwitterLogo, InstagramLogo } from '@phosphor-icons/react';

const ShareThisSection = () => {
  return (
    <div className="relative py-[55px] pb-[50px] pt-[50px] bg-[#254099]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-5 items-center">
          <div className="col-span-4 text-right">
            <div className="inline-block">
              <h3 className="text-white text-[18px] font-normal tracking-normal text-transform-none inline">
                Share This
              </h3>
            </div>
          </div>
          <div className="col-span-1 flex justify-start space-x-4 pb-0 pl-10">
            <a href="#" target="_blank" rel="noopener noreferrer" title="facebook" className="text-white">
              <FacebookLogo size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="pinterest" className="text-white">
              <PinterestLogo size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="skype" className="text-white">
              <SkypeLogo size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="twitter" className="text-white">
              <TwitterLogo size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="instagram" className="text-white">
              <InstagramLogo size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareThisSection;