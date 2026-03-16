import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES } from '../constants';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src={HERO_SLIDES[currentSlide].image} 
            alt={HERO_SLIDES[currentSlide].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                  Terra Sentinel Intelligence
                </span>
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                  {HERO_SLIDES[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
                  {HERO_SLIDES[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group">
                    Explore Solutions <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all">
                    Our Projects
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <button onClick={prevSlide} className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all rounded-full ${currentSlide === idx ? 'w-8 bg-emerald-500' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
