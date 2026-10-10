import { NextResponse } from 'next/server';
import { reservationFormSchema, type ReservationApiResponse } from '@/types/reservation';
import { sendReservationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate payload against Zod schema
    const validationResult = reservationFormSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string[]> = {};
      validationResult.error.errors.forEach((err) => {
        const path = err.path.join('.');
        if (!fieldErrors[path]) {
          fieldErrors[path] = [];
        }
        fieldErrors[path].push(err.message);
      });

      return NextResponse.json<ReservationApiResponse>(
        {
          success: false,
          message: 'Dữ liệu đặt bàn không hợp lệ / Invalid reservation data',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Generate booking reference code
    const timestamp = Date.now().toString().slice(-4);
    const dateFormatted = data.date.replace(/-/g, '');
    const bookingRef = `BV-${dateFormatted}-${timestamp}`;

    // 3. Dispatch email notification via Resend
    const emailResult = await sendReservationEmail(data, bookingRef);

    if (!emailResult.success) {
      console.warn('Email dispatch warning:', emailResult.error);
      // We still acknowledge the booking to the customer so they are not stranded
    }

    return NextResponse.json<ReservationApiResponse>({
      success: true,
      message: 'Yêu cầu đặt bàn đã được tiếp nhận thành công. Lễ tân sẽ liên hệ trong 15-30 phút.',
      bookingRef,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    console.error('Reservation API error:', message);

    return NextResponse.json<ReservationApiResponse>(
      {
        success: false,
        message: 'Không thể xử lý yêu cầu lúc này. Quý khách vui lòng liên hệ hotline 028 3822 8998.',
      },
      { status: 500 }
    );
  }
}
