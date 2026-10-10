'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reservationFormSchema, type ReservationFormData } from '@/types/reservation';
import { useLanguage } from '@/context/LanguageContext';
import { Input, Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Calendar, Clock, Users, UtensilsCrossed, AlertCircle, Phone } from 'lucide-react';

export const Reservation: React.FC = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [bookingRef, setBookingRef] = useState<string | undefined>(undefined);
  const [confirmedData, setConfirmedData] = useState<ReservationFormData | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Default date = tomorrow in YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationFormSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      date: defaultDate,
      time: '19:00',
      partySize: 2,
      specialNotes: '',
    },
  });

  const selectedPartySize = watch('partySize');

  const partySizeOptions = [
    ...Array.from({ length: 10 }, (_, i) => {
      const count = i + 1;
      return {
        value: count,
        label:
          language === 'vi'
            ? `${count} người`
            : count === 1
            ? '1 Guest'
            : `${count} Guests`,
      };
    }),
    {
      value: 11,
      label:
        language === 'vi'
          ? '10+ người (liên hệ trực tiếp nhà hàng)'
          : '10+ Guests (contact restaurant directly)',
    },
  ];

  const timeOptions = [
    { value: '11:30', label: '11:30 (Trưa / Lunch)' },
    { value: '12:00', label: '12:00 (Trưa / Lunch)' },
    { value: '12:30', label: '12:30 (Trưa / Lunch)' },
    { value: '13:00', label: '13:00 (Trưa / Lunch)' },
    { value: '13:30', label: '13:30 (Trưa / Lunch)' },
    { value: '18:00', label: '18:00 (Tối / Dinner)' },
    { value: '18:30', label: '18:30 (Tối / Dinner)' },
    { value: '19:00', label: '19:00 (Tối / Dinner)' },
    { value: '19:30', label: '19:30 (Tối / Dinner)' },
    { value: '20:00', label: '20:00 (Tối / Dinner)' },
    { value: '20:30', label: '20:30 (Tối / Dinner)' },
    { value: '21:00', label: '21:00 (Tối / Dinner)' },
  ];

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setBookingRef(result.bookingRef);
        setConfirmedData(data);
        setIsModalOpen(true);
        reset();
      } else {
        setSubmitError(result.message || 'Không thể xử lý yêu cầu đặt bàn. Vui lòng thử lại.');
      }
    } catch (err: unknown) {
      console.error('Reservation error:', err);
      setSubmitError('Lỗi kết nối tới máy chủ. Quý khách vui lòng gọi trực tiếp hotline 028 3822 8998.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservation" className="relative py-24 sm:py-32 bg-cream-warm border-y border-gold/20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-bordeaux text-xs font-serif uppercase tracking-widest">
            <UtensilsCrossed className="w-3.5 h-3.5 text-gold" />
            <span>{t.reservation.tag}</span>
            <UtensilsCrossed className="w-3.5 h-3.5 text-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso tracking-tight">
            {t.reservation.title}
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto my-3" />
          <p className="max-w-xl mx-auto text-sm sm:text-base text-espresso-muted leading-relaxed">
            {t.reservation.description}
          </p>
        </div>

        {/* Reservation Form Card */}
        <div className="bg-cream border border-gold/30 shadow-soft-card p-6 sm:p-10 md:p-12 rounded-sm relative">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {submitError && (
              <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded-r flex items-start space-x-3 text-red-800 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
                <p>{submitError}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <Input
                label={t.reservation.form.fullName}
                placeholder={t.reservation.form.fullNamePlaceholder}
                error={errors.fullName?.message}
                {...register('fullName')}
              />

              {/* Phone Number */}
              <Input
                label={t.reservation.form.phone}
                placeholder={t.reservation.form.phonePlaceholder}
                error={errors.phoneNumber?.message}
                {...register('phoneNumber')}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Email */}
              <div className="sm:col-span-3">
                <Input
                  label={t.reservation.form.email}
                  type="email"
                  placeholder={t.reservation.form.emailPlaceholder}
                  error={errors.email?.message}
                  {...register('email')}
                />
              </div>

              {/* Date */}
              <div>
                <Input
                  label={t.reservation.form.date}
                  type="date"
                  error={errors.date?.message}
                  {...register('date')}
                />
              </div>

              {/* Time */}
              <div>
                <Select
                  label={t.reservation.form.time}
                  options={timeOptions}
                  error={errors.time?.message}
                  {...register('time')}
                />
              </div>

              {/* Party Size */}
              <div>
                <Select
                  label={t.reservation.form.partySize}
                  options={partySizeOptions}
                  error={errors.partySize?.message}
                  {...register('partySize', { valueAsNumber: true })}
                />
              </div>
            </div>

            {/* 10+ Guests Direct Contact Callout */}
            {selectedPartySize >= 11 && (
              <div className="p-3.5 bg-bordeaux/5 border border-gold/40 rounded-sm text-xs text-espresso flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-bordeaux flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed text-left">
                  <span className="font-semibold text-bordeaux font-serif">
                    {language === 'vi' ? 'Tiệc nhóm & sự kiện trên 10 người:' : 'Group dining over 10 guests:'}
                  </span>{' '}
                  {language === 'vi'
                    ? 'Để nhà hàng sắp xếp không gian riêng hoặc chuẩn bị thực đơn tiệc chu đáo nhất, quý khách có thể gửi form này hoặc liên hệ hotline trực tiếp: '
                    : 'To arrange a private room or set tasting menu, you may submit this form or call our hotline directly: '}
                  <a href="tel:02838228998" className="font-bold underline text-bordeaux font-mono">
                    028 3822 8998
                  </a>
                  .
                </div>
              </div>
            )}

            {/* Special Notes */}
            <div className="space-y-1.5 text-left">
              <label
                htmlFor="specialNotes"
                className="block text-xs font-serif uppercase tracking-wider text-espresso"
              >
                {t.reservation.form.notes}
              </label>
              <textarea
                id="specialNotes"
                rows={3}
                placeholder={t.reservation.form.notesPlaceholder}
                className="w-full px-4 py-3 bg-cream border border-gold/30 hover:border-gold/60 focus:border-gold focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold text-espresso text-sm rounded-sm transition-colors placeholder:text-espresso-muted/60"
                {...register('specialNotes')}
              />
              {errors.specialNotes?.message && (
                <p className="text-xs text-red-700 tracking-wide">{errors.specialNotes.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full sm:w-80 shadow-md hover:shadow-subtle-gold"
              >
                {isSubmitting ? t.reservation.form.submitting : t.reservation.form.submitBtn}
              </Button>
              <p className="text-xs text-espresso-muted mt-3">
                Hotline hỗ trợ tức thì: <a href="tel:02838228998" className="text-bordeaux font-semibold underline underline-offset-2">028 3822 8998</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingRef={bookingRef}
        data={confirmedData}
      />
    </section>
  );
};
