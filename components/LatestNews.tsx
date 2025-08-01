// components/LatestNews.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  image?: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "26/09/2024",
    title: "VN may be upgraded to emerging market in 2022: VNDirect Securities",
    link: "/vn-may-be-upgraded-to-emerging-market-in-2022-vndirect-securities/"
  },
  {
    id: 2,
    date: "13/12/2023",
    title: "IFRC/Beq Holdings launches a new Sentiment Indexes Series",
    image: "https://ccpi.vn/wp-content/uploads/2023/12/4760477-e1702444953982.jpg",
    link: "/ifrc-beq-holdings-launches-a-new-sentiment-indexes-series/"
  },
  {
    id: 3,
    date: "13/12/2023",
    title: "Value of Assets Managed by Hedge Funds in 2023",
    image: "https://ccpi.vn/wp-content/uploads/2023/12/z4969892875709_24d5271535d088451f78e6535ce0acbd-e1702445300324.jpg",
    link: "/value-of-assets-managed-by-hedge-funds-in-2023/"
  },
  {
    id: 4,
    date: "13/12/2023",
    title: "Vietnam eyes emerging stock market status by 2025",
    image: "https://ccpi.vn/wp-content/uploads/2023/12/1393720-scaled-e1702445457955.jpg",
    link: "/vietnam-eyes-emerging-stock-market-status-by-2025/"
  },
  {
    id: 5,
    date: "13/12/2023",
    title: "Global Assets under Management set to rise to $145.4 trillion by 2025",
    image: "https://ccpi.vn/wp-content/uploads/2023/12/3734633-e1702445597190.jpg",
    link: "/global-assets-under-management-set-to-rise-to-145-4-trillion-by-2025/"
  }
];

export function LatestNews() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = 3; // 5 slides for each news item

  const handleBulletClick = (index: number) => {
    setCurrentSlide(index);
  };



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
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides, isHovered]);

  return (
    <section className="bg-white">
      {/* Title Section */}
      <div style={{ margin: "0px 0px 0px 0px", padding: "95px 0px 0px 0px" }}>
        <div className="container mx-auto px-6">
          <div className="text-center" style={{ paddingBottom: "25px" }}>
            <h3 
              className="font-semibold text-center"
              style={{ 
                fontSize: "44px", 
                fontWeight: "600", 
                letterSpacing: "0px", 
                textTransform: "none", 
                color: "#262626" 
              }}
            >
              {t("latest-news")}
            </h3>
            <Link 
              href="/news" 
              className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
              style={{ fontSize: "14px", color: "#254099" }}
            >
                {t("read-all-news")}
            </Link>
          </div>
          
          {/* Blue Divider */}
          <div className="flex justify-center" style={{ marginBottom: "42px" }}>
            <div 
              className="h-1"
              style={{ 
                width: "54px", 
                backgroundColor: "#254099", 
                height: "4px" 
              }}
            />
          </div>
        </div>
      </div>

             {/* News Carousel Section */}
       <div style={{ padding: "0px 0px 30px 0px" }}>
         <div className="container mx-auto px-6">
           <div 
             style={{ paddingBottom: "60px" }}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
           >
             {/* News Items Slider */}
             <div className="relative overflow-hidden">
               <div 
                 className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * (100/3)}%)` }}
               >
                 {newsItems.map((item) => (
                   <div key={item.id} className="w-full md:w-1/3 flex-shrink-0 px-3">
                     <Card 
                       className="overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-none h-[500px] flex flex-col p-0 border-none"
                       style={{ 
                         boxShadow: "0 0 30px rgba(10, 10, 10, 0.07)",
                         border: "none"
                       }}
                     >
                       {item.image && (
                         <div className="relative overflow-hidden">
                           <Image
                             src={item.image}
                             alt={item.title}
                             width={400}
                             height={241}
                             className="w-full h-[241px] object-cover transition-transform duration-300 hover:scale-105 block"
                           />
                         </div>
                       )}
                       
                       <CardContent className="p-6 flex-1 flex flex-col justify-between">
                         <div>
                           <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                             <i className="icon_clock_alt"></i>
                             <span>{item.date}</span>
                           </div>
                           
                           <h3 
                             className="mb-4 leading-6"
                             style={{
                               fontSize: "18px",
                               fontStyle: "normal",
                               fontWeight: "600",
                               letterSpacing: "0px"
                             }}
                           >
                             <Link 
                               href={item.link}
                               className="text-gray-900 hover:text-blue-600 transition-colors duration-300"
                             >
                               {item.title}
                             </Link>
                           </h3>
                         </div>
                         
                         <Button
                           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-none mt-auto"
                           style={{ backgroundColor: "#254099", width: "128px", height: "40px" }}
                           asChild
                         >
                           <Link href={item.link}>{t("read-more")}</Link>
                         </Button>
                       </CardContent>
                     </Card>
                   </div>
                 ))}
                 
                 {/* Duplicate first few cards for seamless loop */}
                 {newsItems.slice(0, 3).map((item) => (
                   <div key={`duplicate-${item.id}`} className="w-full md:w-1/3 flex-shrink-0 px-3">
                     <Card 
                       className="overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-none h-[500px] flex flex-col p-0 border-none"
                       style={{ 
                         border: "none"
                       }}
                     >
                       {item.image && (
                         <div className="relative overflow-hidden">
                           <Image
                             src={item.image}
                             alt={item.title}
                             width={400}
                             height={241}
                             className="w-full h-[241px] object-cover transition-transform duration-300 hover:scale-105 block"
                           />
                         </div>
                       )}
                       
                       <CardContent className="p-6 flex-1 flex flex-col justify-between">
                         <div>
                           <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                             <i className="icon_clock_alt"></i>
                             <span>{item.date}</span>
                           </div>
                           
                           <h3 
                             className="mb-4 leading-6"
                             style={{
                               fontSize: "18px",
                               fontStyle: "normal",
                               fontWeight: "600",
                               letterSpacing: "0px"
                             }}
                           >
                             <Link 
                               href={item.link}
                               className="text-gray-900 hover:text-blue-600 transition-colors duration-300"
                             >
                               {item.title}
                             </Link>
                           </h3>
                         </div>
                         
                                                    <Button
                             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-none mt-auto"
                             style={{ backgroundColor: "#254099", width: "128px", height: "40px" }}
                             asChild
                           >
                             <Link href={item.link}>{t("read-more")}</Link>
                           </Button>
                       </CardContent>
                     </Card>
                   </div>
                 ))}
               </div>
             </div>

                         {/* Bullet Navigation */}
             <div className="flex justify-center mt-8 space-x-2">
               {Array.from({ length: totalSlides }).map((_, index) => (
                 <button
                   key={index}
                   onClick={() => handleBulletClick(index)}
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
      </div>
    </section>
  );
}