'use client';

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
                label="Years of Indexing experience"
              />
            </div>

            {/* Counter 2 */}
            <div>
              <Counter 
                end={30762} 
                label="Vietnam and International Indexes"
              />
            </div>

            {/* Counter 3 */}
            <div>
              <Counter 
                end={10} 
                label="Indexes Categories"
              />
            </div>

            {/* Counter 4 */}
            <div>
              <Counter 
                end={5} 
                label="Continents"
              />
            </div>

            {/* Counter 5 */}
            <div style={{ padding: "0px 15px 0px 0px" }}>
              <Counter 
                end={97} 
                label="Countries"
              />
            </div>
          </div>
        </div>
      </div>
  );
}