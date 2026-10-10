import type { RestaurantProfile } from '@/types';

export const restaurantData: RestaurantProfile = {
  name: 'Bon Vivant Bistro',
  tagline: {
    vi: 'Nghệ thuật ẩm thực Pháp cổ điển giữa lòng Sài Gòn',
    en: 'Classic French bistro artistry in the heart of Saigon',
  },
  storyTitle: {
    vi: 'Hơi Thở Nước Pháp Trong Từng Món Ăn',
    en: 'The French Spirit in Every Dish',
  },
  storyParagraphs: [
    {
      vi: 'Được khai sinh từ tình yêu thuần khiết dành cho ẩm thực bistro cổ điển của Paris, Bon Vivant Bistro là điểm hẹn dành cho những tâm hồn trân quý nghệ thuật ẩm thực tinh tế, ấm áp và không phô trương.',
      en: 'Born from a pure devotion to the classic bistros of Paris, Bon Vivant Bistro is a welcoming haven for connoisseurs of refined, comforting, and unpretentious French dining.',
    },
    {
      vi: 'Chúng tôi tin rằng bữa ăn ngon không chỉ là thức ăn trên đĩa, mà là sự hòa quyện giữa tiếng cụng ly vang đỏ, ánh nến lung linh và những cuộc trò chuyện bất tận cùng người thương.',
      en: 'We believe that a memorable meal is more than what is on the plate—it is the clinking of wine glasses, the flicker of candlelight, and timeless conversations with those you cherish.',
    },
  ],
  chefName: 'Jean-Luc Moreau',
  chefTitle: {
    vi: 'Bếp Trưởng Điều Hành',
    en: 'Executive Chef',
  },
  chefBio: {
    vi: 'Với hơn 18 năm kinh nghiệm tại các nhà hàng danh tiếng tại Lyon và Paris, Chef Jean-Luc mang đến Sài Gòn kỹ nghệ chế biến điêu luyện cùng sự tôn kính sâu sắc đối với nguyên liệu bản địa và hương vị nguyên bản của ẩm thực Pháp.',
    en: 'With over 18 years of culinary mastery honed in renowned Parisian and Lyonnais kitchens, Chef Jean-Luc blends authentic techniques with fresh local produce to deliver classic French flavors with modern grace.',
  },
  chefImageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
  address: {
    street: '48 Lê Thánh Tôn',
    ward: 'Phường Bến Nghé',
    district: 'Quận 1',
    city: 'Thành phố Hồ Chí Minh',
    fullFormatted: {
      vi: '48 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
      en: '48 Le Thanh Ton, Ben Nghe Ward, District 1, Ho Chi Minh City',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4478330756787!2d106.70042457586884!3d10.777085759182396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4682490b07%3A0x6bfa9f1c79a962a9!2zNDggTMOqIFRow6FuaCBUw7RuLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2svn!4v1710000000000!5m2!1svi!2svn',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=48+Le+Thanh+Ton+District+1+Ho+Chi+Minh+City',
  },
  contact: {
    hotline: '028 3822 8998',
    email: 'bonjour@bonvivantbistro.vn',
    social: {
      facebook: 'https://facebook.com/bonvivantbistrosaigon',
      instagram: 'https://instagram.com/bonvivantbistro',
      zalo: 'https://zalo.me/02838228998',
    },
  },
  schedules: [
    {
      dayLabel: {
        vi: 'Thứ Hai – Thứ Sáu',
        en: 'Monday – Friday',
      },
      shifts: [
        {
          name: { vi: 'Bữa trưa', en: 'Lunch' },
          open: '11:30',
          close: '14:30',
        },
        {
          name: { vi: 'Bữa tối', en: 'Dinner' },
          open: '18:00',
          close: '22:30',
        },
      ],
    },
    {
      dayLabel: {
        vi: 'Thứ Bảy & Chủ Nhật',
        en: 'Saturday & Sunday',
      },
      shifts: [
        {
          name: { vi: 'Bữa trưa & Brunch', en: 'Lunch & Brunch' },
          open: '11:00',
          close: '15:00',
        },
        {
          name: { vi: 'Bữa tối', en: 'Dinner' },
          open: '17:30',
          close: '23:00',
        },
      ],
    },
  ],
};
