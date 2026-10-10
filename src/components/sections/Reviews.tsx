'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { testimonials } from '@/data/reviews';
import { Star, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 sm:mb-20">
          <p className="font-serif text-xs uppercase tracking-widest text-bordeaux">
            {t.reviews.tag}
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso tracking-tight">
            {t.reviews.title}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-3" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-espresso-muted leading-relaxed">
            {t.reviews.description}
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-cream-warm/70 border border-gold/30 hover:border-gold/60 p-6 sm:p-8 rounded-sm transition-all duration-300 shadow-soft-card flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1 text-gold">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold/30" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-espresso leading-relaxed italic font-body">
                  &ldquo;{review.quote[language]}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 border-t border-gold/20 mt-6">
                <h4 className="font-serif text-base font-semibold text-espresso">
                  {review.authorName}
                </h4>
                <p className="text-xs text-bordeaux font-serif uppercase tracking-wider mt-0.5">
                  {review.authorRole[language]}
                </p>
                {review.date && (
                  <span className="text-[11px] text-espresso-muted/70 block mt-1">
                    {review.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
