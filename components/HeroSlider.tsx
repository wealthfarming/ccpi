// components/HeroSlider.tsx
'use client';

import { useState, useEffect } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation()

  const slides = [
    {
      id: 1,
      backgroundImage: "https://ccpi.vn/wp-content/uploads/2023/12/side-3-1.png",
      subtitle: t("invest"),
      title: t("smarter-notharder"),
      description: t("hero-des-1"),
      buttonText: t("explore-indexes"),
      buttonLink: "https://dashboardlive.ccpi.vn/",
      maxWidth: "906px"
    },
    {
      id: 2,
      backgroundImage: "https://ccpi.vn/wp-content/uploads/2023/12/slide-2-2.png",
      subtitle: t("indexes-dashboard"),
      title: t("screener"),
      description: t("hero-des-2"),
      buttonText: t("screen"),
      buttonLink: "https://dashboard.ccpi.vn/",
      maxWidth: "896px"
    },
    {
      id: 3,
      backgroundImage: "https://ccpi.vn/wp-content/uploads/2023/12/slide-3-4.png",
      subtitle: t("ccpi-platform"),
      title: t("create-index"),
      description: t("hero-des-3"),
      buttonText: t("contact-us"),
      buttonLink: "#contact",
      maxWidth: "724px"
    },
    {
      id: 4,
      backgroundImage: "https://ccpi.vn/wp-content/uploads/2023/12/slide-4-1.png",
      subtitle: t("by"),  
      title: "CCPI",
      description: t("hero-des-4"),
      buttonText: t("website"),
      buttonLink: "https://ccpi.vn/",
      maxWidth: "906px"
    }
  ];

  const totalSlides = slides.length;

  // Auto-slide functionality
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [totalSlides, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: "#172852"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="relative h-[790px] w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-600 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full flex-shrink-0 relative"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundPosition: "center top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center text-white">
                <div className="container mx-auto px-6 lg:px-12">
                                     {/* Subtitle */}
                   <h2 
                     className="mb-4 leading-none"
                     style={{ 
                       fontSize: "60px",
                       fontFamily: "Montserrat, sans-serif",
                       color: "#89a6ef",
                       fontWeight: "normal",
                       marginTop: slide.id === 3 ? "-250px" : "0"
                     }}
                   >
                     {slide.subtitle}
                   </h2>

                   {/* Main Title */}
                   <h1 
                     className="mb-4 leading-none"
                     style={{ 
                       fontSize: "85px",
                       fontFamily: "Montserrat, sans-serif",
                       fontWeight: "700",
                       color: "#ffffff",
                       marginTop: slide.id === 3 ? "-20px" : "0"
                     }}
                   >
                     {slide.title}
                   </h1>

                  {/* Description */}
                  <p 
                    className="mb-8 leading-8"
                    style={{ 
                      fontSize: "20px",
                      fontFamily: "Open Sans, sans-serif",
                      color: "#ffffff",
                      maxWidth: slide.maxWidth,
                      lineHeight: "32px"
                    }}
                  >
                    {slide.description}
                  </p>

                  {/* Button */}
                  <a
                    href={slide.buttonLink}
                    target={slide.buttonLink.startsWith('http') ? '_blank' : '_self'}
                    rel={slide.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-block font-bold transition-all duration-300 hover:text-white"
                    style={{
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                      color: "#3740b0",
                      backgroundColor: "#ffffff",
                      padding: "17px 39px 22px 39px",
                      borderRadius: "30px",
                      textDecoration: "none",
                      cursor: "pointer"
                    }}
                                         onMouseEnter={(e) => {
                       (e.target as HTMLElement).style.backgroundColor = "#3740b0";
                       (e.target as HTMLElement).style.color = "#ffffff";
                     }}
                     onMouseLeave={(e) => {
                       (e.target as HTMLElement).style.backgroundColor = "#ffffff";
                       (e.target as HTMLElement).style.color = "#3740b0";
                     }}
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full transition-all duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <CaretLeft size={40} />
      </div>

      <div
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white p-3 rounded-full transition-all duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <CaretRight size={40} />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer relative ${
              index === currentSlide
                ? 'bg-gray-800 border-2 border-white'
                : 'bg-gray-500 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}