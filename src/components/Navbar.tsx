import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img 
                src="logo.png" 
                alt="Terra Sentinel Logo" 
                className="h-16 w-auto object-contain"
              />
              <div className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                TERRA<span className="text-emerald-500">SENTINEL</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Process', 'Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-500/20">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-slate-900' : 'text-white'}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['Home', 'Services', 'Process', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-emerald-500 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-emerald-500 text-white px-5 py-3 rounded-xl font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
