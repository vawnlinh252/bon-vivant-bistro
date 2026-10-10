# Quickstart Validation Guide: Bon Vivant Bistro Landing Page

**Feature**: `001-bon-vivant-landing`  
**Date**: 2026-10-11  

This guide provides step-by-step instructions for running and validating the Bon Vivant Bistro landing page end-to-end against all acceptance scenarios defined in [spec.md](./spec.md).

---

## 1. Prerequisites & Environment

- **Node.js**: `v20.x` or higher (`node -v`)
- **Package Manager**: `npm` (v10+)
- **Environment Variables**: Create `.env.local` in the project root:
  ```bash
  RESEND_API_KEY=re_123456789_placeholder  # Optional for local test; fallback logs to console
  RESERVATION_NOTIFICATION_EMAIL=host@bonvivantbistro.vn
  NEXT_PUBLIC_SITE_URL=http://localhost:3000
  ```

---

## 2. Installation & Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start Next.js development server
npm run dev

# 3. Open browser
# Navigate to: http://localhost:3000
```

---

## 3. End-to-End Validation Scenarios

### Scenario 1: Hero Section & Reservation Booking Flow (Priority: P1)
1. **Load Page**: Navigate to `http://localhost:3000`.
   - *Expected*: Full-screen Hero displays brand title "Bon Vivant Bistro", tagline in Playfair Display serif, ambient background imagery, and prominent "Đặt bàn" button.
2. **Click "Đặt bàn" CTA**:
   - *Expected*: Page smoothly scrolls directly to `#reservation` section.
3. **Submit Valid Booking**:
   - Enter name: "Trần Minh", Phone: "0912345678", Email: "minh@example.com", Date: Tomorrow, Time: "19:30", Party: 2.
   - Click "Xác nhận đặt bàn".
   - *Expected*: Button displays spinner, then a modal/card confirms receipt with summary and notice that staff will contact in 15–30 minutes.
4. **Validation Test (Invalid inputs)**:
   - Clear phone number or choose yesterday's date.
   - Click "Xác nhận đặt bàn".
   - *Expected*: Form stays on page, inputs highlighted in red with descriptive bilingual error messages; no submission sent.

### Scenario 2: Featured Menu Filtering & Story (Priority: P1)
1. **Navigate to Menu**: Click "Thực đơn" in the sticky navbar.
   - *Expected*: Smooth scroll to `#menu`. Four category tabs visible: "Khai vị" (Appetizers), "Món chính" (Mains), "Tráng miệng" (Desserts), "Rượu vang" (Wine).
2. **Switch Category Tabs**: Click "Món chính", then "Tráng miệng".
   - *Expected*: Framer Motion animates active tab indicator. Menu grid smoothly transitions to show dishes matching the selected category with title, description, and price in VND.
3. **Inspect Story**: Scroll to `#about`.
   - *Expected*: Chef's photo, background story, and French culinary philosophy render cleanly.

### Scenario 3: Bilingual Switcher (VI / EN) (Priority: P2)
1. **Toggle Language**: In the top sticky navbar, click the language switch button ("EN").
   - *Expected*:
     - Current scroll position is completely preserved.
     - All section titles, buttons ("Book a Table"), menu categories ("Appetizers", "Mains"), form labels, and footer copy immediately translate to English.
     - Language indicator updates to active state.
2. **Toggle back to "VI"**:
   - *Expected*: Content returns to Vietnamese immediately.

### Scenario 4: Gallery & Reviews (Priority: P3)
1. **Gallery Grid**: Scroll to `#gallery`.
   - *Expected*: Curated photography of French bistro dishes and dining ambiance loads with crisp resolution and no layout shift.
2. **Testimonials**: Scroll to `#reviews`.
   - *Expected*: Quotes, 5-star ratings, and customer profiles display in a clean testimonial card layout.

### Scenario 5: API Route Direct Test
Verify the reservation API endpoint directly using PowerShell:

```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/reservation" -Method POST -Headers @{ "Content-Type" = "application/json" } -Body '{"fullName":"Marie Dupont","phoneNumber":"0987654321","email":"marie@example.com","date":"2026-10-20","time":"19:00","partySize":2,"specialNotes":"Vegetarian preference"}'
```
- *Expected response*:
  ```json
  {
    "success": true,
    "message": "Yêu cầu đặt bàn đã được tiếp nhận. Đội ngũ lễ tân sẽ liên hệ trong 15-30 phút.",
    "bookingRef": "..."
  }
  ```

---

## 4. Quality & Build Verification

```bash
# 1. TypeScript Strict Verification (Zero any)
npx tsc --noEmit

# 2. Next.js Linting
npm run lint

# 3. Production Build
npm run build
```
- *Expected*: Build completes with zero errors; static pages pre-rendered, route handler compiled as dynamic server endpoint.
