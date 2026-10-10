'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Gradient Overlay for Contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=85&w=1920"
          alt="Không gian bistro Pháp Bon Vivant"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.45] scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-espresso/60" />
      </div>

      {/* Decorative Gold Frame Border */}
      <div className="absolute inset-4 sm:inset-8 border border-gold/25 pointer-events-none z-10 hidden sm:block" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-cream space-y-6 pt-16 sm:pt-0">
        {/* Subtitle / Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-center space-x-3"
        >
          <span className="h-[1px] w-8 sm:w-12 bg-gold/60" />
          <p className="font-body italic text-gold text-sm sm:text-base tracking-widest uppercase">
            {t.hero.subtitle}
          </p>
          <span className="h-[1px] w-8 sm:w-12 bg-gold/60" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-none text-cream"
        >
          {t.hero.title}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-cream-warm/90 font-body leading-relaxed font-light"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollToSection('reservation')}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-lg shadow-bordeaux/40 border border-gold/40"
          >
            {t.hero.bookTable}
          </Button>

          <Button
            onClick={() => scrollToSection('menu')}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-cream border-gold/70 hover:bg-gold hover:text-espresso"
          >
            {t.hero.viewMenu}
          </Button>
        </motion.div>
      </div>

      {/* Smooth scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gold/80 hover:text-gold transition-colors p-2 focus:outline-none"
        aria-label="Cuộn xuống"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </header>
  );
};
