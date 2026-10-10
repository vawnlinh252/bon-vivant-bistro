import type { Metadata } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-playfair',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bon Vivant Bistro | Ẩm Thực Pháp Cổ Điển Tại TP. Hồ Chí Minh',
  description:
    'Nhà hàng Pháp cổ điển Bon Vivant Bistro tại Quận 1, TP.HCM. Trải nghiệm ẩm thực Paris đích thực, thực đơn chọn lọc, hầm rượu vang và đặt bàn trực tuyến tiện lợi.',
  keywords: [
    'Bon Vivant Bistro',
    'nhà hàng Pháp',
    'bistro Pháp Sài Gòn',
    'French restaurant Saigon',
    'đặt bàn nhà hàng Pháp',
    'ẩm thực Pháp Quận 1',
  ],
  openGraph: {
    title: 'Bon Vivant Bistro | Hương Vị Paris Giữa Lòng Sài Gòn',
    description:
      'Nơi ẩm thực cổ điển Pháp thăng hoa trong không gian bistro ấm cúng, sang trọng và tràn đầy phong vị cuộc sống.',
    url: 'https://bonvivantbistro.vn',
    siteName: 'Bon Vivant Bistro',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Bon Vivant Bistro',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '48 Lê Thánh Tôn',
      addressLocality: 'Bến Nghé, Quận 1',
      addressRegion: 'TP. Hồ Chí Minh',
      addressCountry: 'VN',
    },
    servesCuisine: 'French',
    priceRange: '$$$',
    telephone: '+842838228998',
    url: 'https://bonvivantbistro.vn',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '11:30',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '18:00',
        closes: '22:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '11:00',
        closes: '23:00',
      },
    ],
  };

  return (
    <html lang="vi" className={`${playfair.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-espresso antialiased selection:bg-gold/30 selection:text-bordeaux">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
