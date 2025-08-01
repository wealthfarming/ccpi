'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'

export function LogoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const logos = [
    {
      id: 1,
      src: "https://ccpi.vn/wp-content/uploads/2023/12/1.png",
      alt: "Women CEO World"
    },
    {
      id: 2,
      src: "https://ccpi.vn/wp-content/uploads/2023/12/2.png",
      alt: "BeQ Family"
    },
    {
      id: 3,
      src: "https://ccpi.vn/wp-content/uploads/2023/12/3-1.png",
      alt: "The IPO Times"
    },
    {
      id: 4,
      src: "https://ccpi.vn/wp-content/uploads/2023/12/4.png",
      alt: "BeQ Holdings"
    },
    {
      id: 5,
      src: "https://ccpi.vn/wp-content/uploads/2023/12/5.png",
      alt: "NFT"
    },
    {
      id: 6,
      src: "https://ccpi.vn/wp-content/uploads/2023/12/6.png",
      alt: "BeQ Share"
    },
    {
      id: 7,
      src: "https://ccpi.vn/wp-content/uploads/2023/12/7.png",
      alt: "Logo 7"
    },
    {
      id: 8,
      src: "https://ccpi.vn/wp-content/uploads/2023/12/8.png",
      alt: "Logo 8"
    },
    {
      id: 9,
      src: "https://ccpi.vn/wp-content/uploads/2023/12/9.png",
      alt: "Logo 9"
    },
    {
      id: 10,
      src: "https://ccpi.vn/wp-content/uploads/2023/12/10.png",
      alt: "Logo 10"
    }
  ];

  const itemsPerSlide = 6;
  const totalSlides = 5;

  // Auto-slide functionality with seamless loop
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        // Reset to beginning for seamless loop
        if (nextSlide >= totalSlides) {
          return 0;
        }
        return nextSlide;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides, isHovered]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section 
      className="relative"
      style={{
        margin: '0px 0px 0px 0px',
        padding: '70px 0px 30px 0px',
        backgroundColor: '#ededed'
      }}
    >
      <div className="container mx-auto" style={{ maxWidth: '1060px' }}>
        {/* Logo Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Logos Slider */}
          <div className="relative overflow-hidden mb-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100/itemsPerSlide)}%)` }}
            >
              {/* Original logos */}
              {logos.map((logo) => (
                <div key={logo.id} className="w-full lg:w-1/6 md:w-1/3 sm:w-1/2 flex-shrink-0 px-3">
                  <div className="flex items-center justify-center h-[120px]">
                    <Link 
                      href={logo.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={120}
                        className="w-full h-auto max-w-[120px] max-h-[120px] object-contain mx-auto transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              ))}
              
              {/* Duplicate first few logos for seamless loop */}
              {logos.slice(0, itemsPerSlide).map((logo) => (
                <div key={`duplicate-${logo.id}`} className="w-full lg:w-1/6 md:w-1/3 sm:w-1/2 flex-shrink-0 px-3">
                  <div className="flex items-center justify-center h-[120px]">
                    <Link 
                      href={logo.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={120}
                        className="w-full h-auto max-w-[120px] max-h-[120px] object-contain mx-auto transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Bullets */}
          <div className="flex justify-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
                 <button
                   key={index}
                   onClick={() => goToSlide(index)}
                   className={`w-8 h-2 transition-colors duration-300 cursor-pointer ${
                     index === currentSlide 
                       ? 'bg-[#254099]' 
                       : 'bg-gray-300 hover:bg-gray-400'
                   }`}
                 />
               ))}
            </div>
        </div>
      </div>
    </section>
  );
} 