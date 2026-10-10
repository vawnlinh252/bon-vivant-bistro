'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { galleryItems } from '@/data/gallery';
import type { GalleryCategory } from '@/types';

export const Gallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-cream-warm">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <p className="font-serif text-xs uppercase tracking-widest text-bordeaux">
            {t.gallery.tag}
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso tracking-tight">
            {t.gallery.title}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-3" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-espresso-muted leading-relaxed">
            {t.gallery.description}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-12">
          {(['all', 'culinary', 'ambiance'] as GalleryCategory[]).map((filter) => {
            const label =
              filter === 'all'
                ? t.gallery.filterAll
                : filter === 'culinary'
                ? t.gallery.filterCulinary
                : t.gallery.filterAmbiance;

            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2 text-xs font-serif uppercase tracking-widest transition-all rounded-sm border ${
                  isActive
                    ? 'bg-bordeaux text-cream border-bordeaux shadow-sm'
                    : 'bg-cream text-espresso border-gold/30 hover:border-gold'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden bg-cream border border-gold/30 p-2 rounded-sm shadow-soft-card"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs">
                  <Image
                    src={item.imageUrl}
                    alt={item.title[language]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-xs sm:text-sm font-serif text-cream italic tracking-wide">
                      {item.title[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
