'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { restaurantData } from '@/data/restaurant';
import { Award, Flame, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16 sm:mb-20">
          <p className="font-serif text-xs uppercase tracking-widest text-bordeaux">
            {t.about.tag}
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso tracking-tight">
            {t.about.title}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-3" />
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-espresso text-base sm:text-lg leading-relaxed font-body font-light"
          >
            <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
              {t.about.storyHeading}
            </h3>
            <p className="text-espresso-muted leading-relaxed">
              {t.about.storyP1}
            </p>
            <p className="text-espresso-muted leading-relaxed">
              {t.about.storyP2}
            </p>

            {/* Three Pillar Icons */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold/20 text-center">
              <div className="space-y-2">
                <Award className="w-6 h-6 mx-auto text-gold" />
                <span className="block text-xs font-serif uppercase tracking-wider text-espresso">
                  {language === 'vi' ? 'Nguyên bản' : 'Authenticity'}
                </span>
              </div>
              <div className="space-y-2">
                <Flame className="w-6 h-6 mx-auto text-bordeaux" />
                <span className="block text-xs font-serif uppercase tracking-wider text-espresso">
                  {language === 'vi' ? 'Kỹ nghệ Lyon' : 'Craftsmanship'}
                </span>
              </div>
              <div className="space-y-2">
                <Heart className="w-6 h-6 mx-auto text-gold" />
                <span className="block text-xs font-serif uppercase tracking-wider text-espresso">
                  {language === 'vi' ? 'Lòng hiếu khách' : 'Hospitality'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Chef Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative border border-gold/40 p-4 sm:p-6 bg-cream-warm/60 shadow-soft-card">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src={restaurantData.chefImageUrl}
                  alt={`Bếp trưởng ${restaurantData.chefName}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top filter contrast-[1.03]"
                />
              </div>

              <div className="pt-6 space-y-2 text-center sm:text-left">
                <span className="text-xs font-serif uppercase tracking-widest text-bordeaux font-medium">
                  {restaurantData.chefTitle[language]}
                </span>
                <h4 className="font-serif text-2xl text-espresso">
                  {restaurantData.chefName}
                </h4>
                <p className="text-xs sm:text-sm text-espresso-muted leading-relaxed font-body">
                  {restaurantData.chefBio[language]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
