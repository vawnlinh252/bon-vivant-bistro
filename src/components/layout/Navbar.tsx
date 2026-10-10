'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.menu, id: 'menu' },
    { label: t.nav.gallery, id: 'gallery' },
    { label: t.nav.reviews, id: 'reviews' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-gold/30 shadow-sm py-3.5'
            : 'bg-gradient-to-b from-espresso/80 to-transparent py-5 text-cream'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center space-x-2 text-left focus:outline-none group"
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-wide transition-colors ${
                isScrolled ? 'text-espresso group-hover:text-bordeaux' : 'text-cream'
              }`}
            >
              Bon Vivant <span className="text-gold italic font-body font-normal">Bistro</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-xs font-serif uppercase tracking-widest transition-colors py-1 hover:text-bordeaux ${
                  isScrolled ? 'text-espresso' : 'text-cream/90 hover:text-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Controls: Language Switcher & Reservation CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Language Toggle */}
            <div
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-sm border text-xs font-serif tracking-wider ${
                isScrolled
                  ? 'border-gold/30 bg-cream-warm text-espresso'
                  : 'border-white/30 bg-black/20 text-cream'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-gold mr-1" />
              <button
                onClick={() => setLanguage('vi')}
                className={`px-1.5 py-0.5 transition-colors ${
                  language === 'vi' ? 'font-bold text-bordeaux' : 'opacity-70 hover:opacity-100'
                }`}
              >
                VI
              </button>
              <span className="opacity-40">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 transition-colors ${
                  language === 'en' ? 'font-bold text-bordeaux' : 'opacity-70 hover:opacity-100'
                }`}
              >
                EN
              </button>
            </div>

            {/* Quick Reservation Button */}
            <Button
              onClick={() => scrollTo('reservation')}
              variant="primary"
              size="sm"
              className="text-xs"
            >
              {t.nav.bookTable}
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              className={`p-1.5 text-xs font-serif uppercase tracking-wider rounded border ${
                isScrolled
                  ? 'border-gold/40 text-espresso'
                  : 'border-white/40 text-cream'
              }`}
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded focus:outline-none ${
                isScrolled ? 'text-espresso' : 'text-cream'
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-cream pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left py-3 border-b border-gold/15 font-serif text-lg text-espresso hover:text-bordeaux"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-8 space-y-4 text-center">
              <Button
                onClick={() => scrollTo('reservation')}
                variant="primary"
                size="lg"
                className="w-full"
              >
                {t.nav.bookTable}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
