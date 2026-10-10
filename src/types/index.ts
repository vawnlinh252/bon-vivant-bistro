export type Language = 'vi' | 'en';

export type MenuCategoryId = 'appetizers' | 'mains' | 'desserts' | 'wine';

export interface LocalizedString {
  vi: string;
  en: string;
}

export interface MenuItem {
  id: string;
  categoryId: MenuCategoryId;
  name: LocalizedString;
  description: LocalizedString;
  priceVnd: number;
  imageUrl?: string;
  badge?: LocalizedString;
  dietary?: ('vegetarian' | 'gluten-free' | 'contains-nuts' | 'alcohol')[];
  featured?: boolean;
}

export interface MenuCategory {
  id: MenuCategoryId;
  title: LocalizedString;
  description?: LocalizedString;
  order: number;
}

export interface ServiceShift {
  name: LocalizedString;
  open: string;
  close: string;
}

export interface DaySchedule {
  dayLabel: LocalizedString;
  shifts: ServiceShift[];
}

export interface RestaurantProfile {
  name: string;
  tagline: LocalizedString;
  storyTitle: LocalizedString;
  storyParagraphs: LocalizedString[];
  chefName: string;
  chefTitle: LocalizedString;
  chefBio: LocalizedString;
  chefImageUrl: string;
  address: {
    street: string;
    ward: string;
    district: string;
    city: string;
    fullFormatted: LocalizedString;
    mapEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  contact: {
    hotline: string;
    email: string;
    social: {
      facebook: string;
      instagram: string;
      zalo: string;
    };
  };
  schedules: DaySchedule[];
}

export type GalleryCategory = 'all' | 'culinary' | 'ambiance';

export interface GalleryItem {
  id: string;
  title: LocalizedString;
  category: 'culinary' | 'ambiance';
  imageUrl: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
}

export interface Testimonial {
  id: string;
  quote: LocalizedString;
  authorName: string;
  authorRole: LocalizedString;
  rating: number;
  avatarUrl?: string;
  date?: string;
}
