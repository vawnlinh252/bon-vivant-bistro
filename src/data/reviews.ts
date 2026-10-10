import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'rev-1',
    authorName: 'Hoàng Lan & David Tran',
    authorRole: {
      vi: 'Kỷ niệm 5 năm ngày cưới',
      en: '5th Wedding Anniversary Celebration',
    },
    quote: {
      vi: 'Một buổi tối hoàn hảo tại Bon Vivant! Món Boeuf Bourguignon mềm tan đậm đà, rượu vang tuyệt hảo và không gian lãng mạn như đang ngồi giữa một góc phố Saint-Germain-des-Prés.',
      en: 'An unforgettable evening at Bon Vivant! The Boeuf Bourguignon melted in our mouths, the wine pairing was divine, and the ambiance transported us straight to a Saint-Germain bistro.',
    },
    rating: 5,
    date: 'Tháng 9, 2026',
  },
  {
    id: 'rev-2',
    authorName: 'Christophe Laurent',
    authorRole: {
      vi: 'Thực khách người Pháp sinh sống tại TP.HCM',
      en: 'French Expatriate in Ho Chi Minh City',
    },
    quote: {
      vi: 'Là người con lớn lên tại Lyon, tôi rất khắt khe với món Pháp tại châu Á. Nhưng Bon Vivant đã hoàn toàn thuyết phục tôi: súp hành tây gratinée thơm ngậy phô mai và ốc escargots chuẩn xác như mẹ tôi từng nấu.',
      en: 'Growing up in Lyon, I am very particular about French cuisine abroad. Bon Vivant completely won my heart: the French onion soup and escargots were authentically prepared just like back home.',
    },
    rating: 5,
    date: 'Tháng 8, 2026',
  },
  {
    id: 'rev-3',
    authorName: 'Minh Thảo',
    authorRole: {
      vi: 'Nhà báo Ẩm thực & Phong cách sống',
      en: 'Culinary & Lifestyle Journalist',
    },
    quote: {
      vi: 'Sự tao nhã không nằm ở vẻ ngoài xa hoa ồn ào mà ở từng chi tiết chăm chút: ánh đèn vàng dịu mắt, thái độ ân cần của nhân viên và đĩa bánh Crème Brûlée hoàn hảo.',
      en: 'True elegance lies in quiet refinement: the warm ambient lighting, attentive hospitality, and an immaculate Crème Brûlée that ends your night on a high note.',
    },
    rating: 5,
    date: 'Tháng 10, 2026',
  },
];
