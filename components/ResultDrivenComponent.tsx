// components/ResultDrivenComponent.tsx
'use client'
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

const ResultDrivenComponent: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && imageContainerRef.current) {
      const height = contentRef.current.clientHeight;
      imageContainerRef.current.style.height = `${height}px`;
    }
  }, []);

  return (
    <div className="w-[1250px] mx-auto">
      <div className="p-[50px_0_0_0]">
        {/* Background wrap - empty */}
        <div className="bg-transparent"></div>

        <div className="clearfix flex flex-col md:flex-row">
          {/* Left: Content */}
          <div ref={contentRef} className="w-full md:w-3/5 pr-0 md:pr-4 text-left">
            {/* Title Element */}
            <div className="mb-4">
              <div>
                <h4 className="text-[25px] font-semibold tracking-normal capitalize-none text-[#2b2b2b] flex items-center">
                  Result Driven
                  <span className="ml-2 h-[1px] flex-grow"></span>
                </h4>
              </div>
            </div>

            {/* Text Box Element */}
            <div className="mb-6 text-[16px] text-[#8c8c8c]">
              <p className="mb-4">
                More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital, technology and operations that help our clients with their trading projects around the world. Capabilities we leverage for our clients include a powerful alliance network with leading capital markets software vendors, and programs such as the FinTech Innovation Lab that keep us at the forefront of innovation. Our Trading helps clients run and transform their front, middle and back-office trading operations. We provide buy-side, sell-side and market infrastructure firms.
              </p>
              <p>
                <span className="text-[21px]">
                  We provide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems integration and technology consulting services, to assist in delivering high performance trading and settlement.
                </span>
              </p>
            </div>

            {/* Column Service Item */}
            <div className="pb-[30px] flex items-start">
              <div className="mr-[25px] mt-[10px]">
                <Image
                  src="https://ccpi.vn/wp-content/uploads/2017/09/icon-1.png"
                  alt=""
                  width={76}
                  height={72}
                  loading="lazy"
                />
              </div>
              <div>
                <div className="mb-2">
                  <h3 className="text-[22px] text-[#254099] font-semibold tracking-normal capitalize-none">
                    A Team Of Professionals.
                  </h3>
                </div>
                <div className="text-[16px] text-[#8c8c8c]">
                  <p>
                    Transforming distribution and marketing with key capabilities in customer insight and analytics, omni-chan vide buy-side, sell-side and market infrastructure firms with a full-service offering, including systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-2/5 pl-0 md:pl-4">
            <div ref={imageContainerRef} className="shadow-[0_0_74px_rgba(15,15,15,0.07)] overflow-hidden relative">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2017/09/single-port-3-2.jpg"
                alt=""
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDrivenComponent;