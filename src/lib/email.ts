import { Resend } from 'resend';
import type { ReservationFormData } from '@/types/reservation';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendReservationEmail(
  data: ReservationFormData,
  bookingRef: string
): Promise<{ success: boolean; error?: string }> {
  const recipient = process.env.RESERVATION_NOTIFICATION_EMAIL || 'host@bonvivantbistro.vn';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: 'Georgia', serif; background-color: #FDFBF7; color: #2A1A1D; padding: 24px; margin: 0; }
          .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #B8975A; padding: 32px; border-radius: 4px; }
          .header { text-align: center; border-bottom: 1px solid #F5EFE4; padding-bottom: 20px; }
          .title { color: #6B1E2E; font-size: 24px; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
          .badge { display: inline-block; background: #6B1E2E; color: #FDFBF7; padding: 4px 12px; font-size: 12px; margin-top: 8px; border-radius: 2px; }
          .content { margin-top: 24px; line-height: 1.6; }
          .item { margin-bottom: 12px; font-size: 15px; }
          .label { color: #6B5A5D; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; }
          .val { font-weight: bold; color: #2A1A1D; font-size: 16px; }
          .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #F5EFE4; text-align: center; font-size: 12px; color: #6B5A5D; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">Bon Vivant Bistro</h1>
            <div class="badge">YÊU CẦU ĐẶT BÀN MỚI #${bookingRef}</div>
          </div>
          <div class="content">
            <div class="item">
              <div class="label">Khách hàng</div>
              <div class="val">${data.fullName}</div>
            </div>
            <div class="item">
              <div class="label">Số điện thoại liên hệ</div>
              <div class="val">${data.phoneNumber}</div>
            </div>
            <div class="item">
              <div class="label">Email</div>
              <div class="val">${data.email}</div>
            </div>
            <div class="item">
              <div class="label">Thời gian dùng bữa</div>
              <div class="val">${data.date} lúc ${data.time}</div>
            </div>
            <div class="item">
              <div class="label">Số lượng người</div>
              <div class="val">${data.partySize >= 11 ? '10+ người (Liên hệ trực tiếp nhà hàng)' : `${data.partySize} người`}</div>
            </div>
            ${
              data.specialNotes
                ? `
            <div class="item">
              <div class="label">Ghi chú đặc biệt</div>
              <div class="val">${data.specialNotes}</div>
            </div>
            `
                : ''
            }
          </div>
          <div class="footer">
            Vui lòng gọi điện hoặc gửi SMS xác nhận cho khách hàng trong vòng 15-30 phút.<br />
            Bon Vivant Bistro • 48 Lê Thánh Tôn, Bến Nghé, Quận 1, TP.HCM
          </div>
        </div>
      </body>
    </html>
  `;

  if (!resend) {
    console.log('[Resend Mock Mode] RESEND_API_KEY is not set. Simulated email dispatch:');
    console.log({ to: recipient, bookingRef, data });
    return { success: true };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Bon Vivant Bistro <reservations@bonvivantbistro.vn>',
      to: [recipient],
      subject: `[Đặt Bàn Mới #${bookingRef}] ${data.fullName} - ${data.partySize >= 11 ? '10+ người' : `${data.partySize} người`} (${data.date} ${data.time})`,
      html: htmlContent,
    });

    if (error) {
      console.error('[Resend Error]', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown email dispatch error';
    console.error('[Resend Exception]', message);
    return { success: false, error: message };
  }
}
