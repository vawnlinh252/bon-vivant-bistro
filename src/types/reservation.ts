import { z } from 'zod';

export const reservationFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Họ và tên cần tối thiểu 2 ký tự / Full name must be at least 2 characters' })
    .max(100, { message: 'Họ và tên quá dài / Full name is too long' }),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/, {
      message: 'Số điện thoại không hợp lệ (VD: 0912345678) / Invalid Vietnamese phone number',
    }),
  email: z
    .string()
    .trim()
    .email({ message: 'Địa chỉ email không hợp lệ / Invalid email address' }),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Vui lòng chọn ngày hợp lệ / Invalid date format' })
    .refine((val) => {
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, { message: 'Ngày đặt bàn không thể trong quá khứ / Reservation date cannot be in the past' }),
  time: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Vui lòng chọn giờ phục vụ / Invalid time format' }),
  partySize: z
    .number({ invalid_type_error: 'Vui lòng chọn số người / Please specify number of guests' })
    .int()
    .min(1, { message: 'Số người tối thiểu là 1 / Minimum 1 guest' })
    .max(20, { message: 'Nhóm trên 20 người vui lòng gọi hotline trực tiếp / Over 20 guests please call our hotline' }),
  specialNotes: z
    .string()
    .max(500, { message: 'Ghi chú tối đa 500 ký tự / Notes cannot exceed 500 characters' })
    .optional()
    .default(''),
});

export type ReservationFormData = z.infer<typeof reservationFormSchema>;

export interface ReservationApiResponse {
  success: boolean;
  message: string;
  bookingRef?: string;
  errors?: Record<string, string[]>;
}
