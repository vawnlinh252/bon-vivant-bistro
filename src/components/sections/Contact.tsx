'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { restaurantData } from '@/data/restaurant';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 sm:mb-20">
          <p className="font-serif text-xs uppercase tracking-widest text-bordeaux">
            {t.contact.tag}
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso tracking-tight">
            {t.contact.title}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Information Column */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4 p-5 bg-cream-warm border border-gold/25 rounded-sm">
              <MapPin className="w-5 h-5 text-bordeaux mt-1 flex-shrink-0" />
              <div className="space-y-1">
                <h3 className="font-serif text-base text-espresso font-semibold uppercase tracking-wider">
                  {t.contact.addressTitle}
                </h3>
                <p className="text-sm text-espresso-muted leading-relaxed">
                  {restaurantData.address.fullFormatted[language]}
                </p>
                <a
                  href={restaurantData.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-bordeaux hover:underline pt-2 font-medium"
                >
                  {t.contact.directionsBtn}
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Service Hours */}
            <div className="p-5 bg-cream-warm border border-gold/25 rounded-sm space-y-3">
              <div className="flex items-center space-x-3 text-espresso">
                <Clock className="w-5 h-5 text-bordeaux" />
                <h3 className="font-serif text-base font-semibold uppercase tracking-wider">
                  {t.contact.hoursTitle}
                </h3>
              </div>
              <div className="space-y-3 pt-2 divide-y divide-gold/15">
                {restaurantData.schedules.map((schedule, idx) => (
                  <div key={idx} className="pt-2 first:pt-0">
                    <span className="block text-xs font-serif uppercase tracking-wider text-bordeaux font-medium mb-1">
                      {schedule.dayLabel[language]}
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-espresso-muted">
                      {schedule.shifts.map((shift, sIdx) => (
                        <div key={sIdx}>
                          <span className="block font-medium text-espresso">{shift.name[language]}</span>
                          <span>{shift.open} – {shift.close}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-cream-warm border border-gold/25 rounded-sm flex items-start space-x-3">
                <Phone className="w-5 h-5 text-bordeaux mt-0.5" />
                <div>
                  <h4 className="text-xs font-serif uppercase tracking-wider text-espresso font-semibold">
                    {t.contact.hotlineTitle}
                  </h4>
                  <a
                    href={`tel:${restaurantData.contact.hotline.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-bordeaux hover:underline mt-1 block"
                  >
                    {restaurantData.contact.hotline}
                  </a>
                </div>
              </div>

              <div className="p-5 bg-cream-warm border border-gold/25 rounded-sm flex items-start space-x-3">
                <Mail className="w-5 h-5 text-bordeaux mt-0.5" />
                <div>
                  <h4 className="text-xs font-serif uppercase tracking-wider text-espresso font-semibold">
                    {t.contact.emailTitle}
                  </h4>
                  <a
                    href={`mailto:${restaurantData.contact.email}`}
                    className="text-sm text-espresso-muted hover:text-bordeaux mt-1 block break-all"
                  >
                    {restaurantData.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-full min-h-[360px] border border-gold/30 rounded-sm overflow-hidden shadow-soft-card">
            <iframe
              src={restaurantData.address.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vị trí Bon Vivant Bistro trên bản đồ"
              className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
