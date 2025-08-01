'use client';

import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
}

function Counter({ end, duration = 2000, label }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <div className="text-center">
      <div 
        className="text-white font-bold"
        style={{ fontSize: "40px", fontStyle: "normal" }}
      >
        {count.toLocaleString()}
      </div>
      <div 
        className="text-white"
        style={{ 
          fontSize: "18px", 
          fontStyle: "normal", 
          textTransform: "none" 
        }}
      >
        {label}
      </div>
    </div>
  )
}

export default function AboutStastic() {
  const { t } = useTranslation()

  return (
    <div 
        className="mx-auto"
        style={{ 
          margin: "64px auto 64px auto",
          padding: "85px 0px 45px 0px",
          maxWidth: "1280px",
          backgroundColor: "#1a3385",
          boxShadow: "0 0 74px rgba(20, 20, 20, 0.07)"
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Counter 1 */}
            <div style={{ padding: "0px 0px 0px 15px" }}>
              <Counter 
                end={30} 
                label={t("year-indexing")}
              />
            </div>

            {/* Counter 2 */}
            <div>
              <Counter 
                end={30762} 
                label={t("vietnam-international")}
              />
            </div>

            {/* Counter 3 */}
            <div>
              <Counter 
                end={10} 
                label={t("indexes-categories")}
              />
            </div>

            {/* Counter 4 */}
            <div>
              <Counter 
                end={5} 
                label={t("continents")}
              />
            </div>

            {/* Counter 5 */}
            <div style={{ padding: "0px 15px 0px 0px" }}>
              <Counter 
                end={97} 
                label={t("countries")}
              />
            </div>
          </div>
        </div>
      </div>
  );
}