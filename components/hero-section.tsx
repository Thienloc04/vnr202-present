'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(/hero-war.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/80 to-primary" />

      {/* Parallax Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div 
          className="translate-y-0 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="max-w-4xl px-4 text-center">
            <div className="mb-8 inline-block border-2 border-secondary px-4 py-2">
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4 text-balance leading-tight">
                CUỘC CHIẾN
              </h1>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance leading-tight">
              Của Riêng Ai?
            </h2>

            <div className="mb-12 h-1 w-24 bg-secondary mx-auto" />

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Kháng chiến chống Mỹ (1954 - 1975)<br/>
              Góc nhìn thời đại và đường lối của Đảng Cộng sản Việt Nam
            </p>

            {/* Call to action */}
            <div className="flex flex-col items-center gap-4 pt-8">
              <p className="text-sm uppercase tracking-widest text-gray-300">Khám phá sự thật lịch sử</p>
              <div className="animate-bounce">
                <ChevronDown className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Split screen visual indicators */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent z-20" />
    </section>
  );
}
