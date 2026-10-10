'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { restaurantData } from '@/data/restaurant';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-espresso text-cream py-16 sm:py-20 border-t border-gold/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-wide text-cream">
              Bon Vivant <span className="text-gold italic font-body font-normal">Bistro</span>
            </h3>
            <p className="text-xs sm:text-sm text-cream-warm/70 leading-relaxed font-body">
              {t.footer.tagline}
            </p>
            <div className="pt-2 flex items-center space-x-4 text-xs font-serif uppercase tracking-widest text-gold">
              <a
                href={restaurantData.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
              <span>•</span>
              <a
                href={restaurantData.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href={restaurantData.contact.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Zalo
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest text-gold font-semibold">
              {language === 'vi' ? 'Điều Hướng' : 'Navigation'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-serif uppercase tracking-wider text-cream-warm/80">
              <button onClick={() => scrollTo('hero')} className="text-left hover:text-gold py-1">
                {t.nav.home}
              </button>
              <button onClick={() => scrollTo('about')} className="text-left hover:text-gold py-1">
                {t.nav.about}
              </button>
              <button onClick={() => scrollTo('menu')} className="text-left hover:text-gold py-1">
                {t.nav.menu}
              </button>
              <button onClick={() => scrollTo('gallery')} className="text-left hover:text-gold py-1">
                {t.nav.gallery}
              </button>
              <button onClick={() => scrollTo('reviews')} className="text-left hover:text-gold py-1">
                {t.nav.reviews}
              </button>
              <button onClick={() => scrollTo('reservation')} className="text-left hover:text-gold py-1">
                {t.nav.bookTable}
              </button>
              <button onClick={() => scrollTo('contact')} className="text-left hover:text-gold py-1">
                {t.nav.contact}
              </button>
            </div>
          </div>

          {/* Location & Hours Recap */}
          <div className="space-y-4 text-xs sm:text-sm text-cream-warm/70">
            <h4 className="font-serif text-sm uppercase tracking-widest text-gold font-semibold">
              {t.footer.contactHeading}
            </h4>
            <p className="leading-relaxed">
              {restaurantData.address.fullFormatted[language]}
            </p>
            <p className="font-mono text-gold font-medium">
              Hotline: {restaurantData.contact.hotline}
            </p>
            <p>
              {restaurantData.contact.email}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-cream-warm/50 font-body">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
