'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '@/context/LanguageContext';
import type { ReservationFormData } from '@/types/reservation';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingRef?: string;
  data?: ReservationFormData;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, bookingRef, data }) => {
  const { t, language } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso/60 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-cream border border-gold/40 shadow-2xl p-6 sm:p-8 rounded-sm z-10 text-center"
          >
            {/* Close icon */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-espresso-muted hover:text-espresso p-1 transition-colors"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success icon */}
            <div className="mx-auto w-14 h-14 rounded-full bg-cream-warm flex items-center justify-center mb-4 border border-gold/40">
              <CheckCircle2 className="w-8 h-8 text-bordeaux" />
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl text-espresso mb-2">
              {t.reservation.modal.title}
            </h3>

            {bookingRef && (
              <div className="inline-block px-3 py-1 bg-cream-warm border border-gold/30 rounded text-xs font-mono text-bordeaux font-semibold mb-4 tracking-wider">
                MÃ ĐẶT BÀN: {bookingRef}
              </div>
            )}

            <p className="text-sm text-espresso-muted leading-relaxed mb-6">
              {t.reservation.modal.message}
            </p>

            {/* Summary Details Box */}
            {data && (
              <div className="bg-cream-warm/70 border border-gold/20 rounded p-4 text-left text-xs space-y-2 mb-6">
                <div className="font-serif font-bold text-espresso tracking-wide uppercase text-[11px] border-b border-gold/20 pb-1 mb-2">
                  {t.reservation.modal.summaryHeading}
                </div>
                <div className="flex justify-between">
                  <span className="text-espresso-muted">{t.reservation.form.fullName}:</span>
                  <span className="font-semibold text-espresso">{data.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-espresso-muted">{t.reservation.form.phone}:</span>
                  <span className="font-semibold text-espresso">{data.phoneNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-espresso-muted">{t.reservation.form.date} & {t.reservation.form.time}:</span>
                  <span className="font-semibold text-espresso">{data.date} • {data.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-espresso-muted">{t.reservation.form.partySize}:</span>
                  <span className="font-semibold text-bordeaux">
                    {data.partySize >= 11
                      ? language === 'vi'
                        ? '10+ người (Liên hệ trực tiếp)'
                        : '10+ Guests (Direct contact)'
                      : language === 'vi'
                      ? `${data.partySize} người`
                      : `${data.partySize} ${data.partySize === 1 ? 'Guest' : 'Guests'}`}
                  </span>
                </div>
                {data.specialNotes && (
                  <div className="pt-1 border-t border-gold/10">
                    <span className="text-espresso-muted block mb-0.5">{t.reservation.form.notes}:</span>
                    <span className="italic text-espresso">{data.specialNotes}</span>
                  </div>
                )}
              </div>
            )}

            {/* Notice Callout */}
            <div className="p-3 bg-bordeaux/5 border-l-2 border-bordeaux rounded-r text-xs text-espresso text-left mb-6">
              {t.reservation.modal.notice}
            </div>

            <Button onClick={onClose} variant="primary" className="w-full">
              {t.reservation.modal.closeBtn}
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
