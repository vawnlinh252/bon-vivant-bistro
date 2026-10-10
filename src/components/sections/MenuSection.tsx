'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { menuCategories, menuItems } from '@/data/menu';
import { formatVnd } from '@/lib/utils';
import type { MenuCategoryId } from '@/types';

export const MenuSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>('appetizers');

  const filteredItems = menuItems.filter((item) => item.categoryId === activeCategory);

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-cream-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <p className="font-serif text-xs uppercase tracking-widest text-bordeaux">
            {t.menu.tag}
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso tracking-tight">
            {t.menu.title}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-3" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-espresso-muted leading-relaxed">
            {t.menu.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-14 border-b border-gold/20 pb-4">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-serif uppercase tracking-widest transition-colors duration-200 focus-visible:outline-none ${
                  isActive ? 'text-bordeaux font-semibold' : 'text-espresso-muted hover:text-espresso'
                }`}
              >
                {cat.title[language]}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-bordeaux"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-cream border border-gold/25 hover:border-gold/60 p-5 rounded-sm transition-all duration-300 shadow-soft-card flex flex-col justify-between"
              >
                <div>
                  {/* Dish Image */}
                  {item.imageUrl && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm mb-4 bg-cream-warm">
                      <Image
                        src={item.imageUrl}
                        alt={item.name[language]}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {item.badge && (
                        <div className="absolute top-2 left-2 bg-bordeaux/90 backdrop-blur-xs text-cream text-[10px] font-serif uppercase tracking-wider px-2 py-0.5 rounded-sm border border-gold/30">
                          {item.badge[language]}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Title & Price Header */}
                  <div className="flex items-start justify-between gap-2 border-b border-gold/20 pb-2 mb-2.5">
                    <h3 className="font-serif text-lg text-espresso group-hover:text-bordeaux transition-colors leading-snug">
                      {item.name[language]}
                    </h3>
                    <span className="font-serif text-base font-semibold text-bordeaux whitespace-nowrap">
                      {formatVnd(item.priceVnd)}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-espresso-muted leading-relaxed font-body">
                    {item.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
