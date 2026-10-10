import type { MenuCategory, MenuItem } from '@/types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'appetizers',
    title: { vi: 'Khai Vị', en: 'Appetizers' },
    description: {
      vi: 'Khởi đầu bữa tiệc với các phong vị tinh tế kích thích vị giác',
      en: 'Awaken your palate with delicate, refined Parisian beginnings',
    },
    order: 1,
  },
  {
    id: 'mains',
    title: { vi: 'Món Chính', en: 'Main Courses' },
    description: {
      vi: 'Đỉnh cao kỹ nghệ nấu chậm, bơ thơm và gia vị thảo mộc nước Pháp',
      en: 'The pinnacle of French slow-cooking, aromatic herbs, and rich sauces',
    },
    order: 2,
  },
  {
    id: 'desserts',
    title: { vi: 'Tráng Miệng', en: 'Desserts' },
    description: {
      vi: 'Vị ngọt thanh tao hoàn thiện hành trình ẩm thực',
      en: 'Sublime artisanal pastries to conclude your dining journey',
    },
    order: 3,
  },
  {
    id: 'wine',
    title: { vi: 'Rượu Vang Tuyển Chọn', en: 'Wine List' },
    description: {
      vi: 'Tuyển tập các niên vụ rượu vang xuất sắc từ Bordeaux, Bourgogne và thung lũng Rhône',
      en: 'Curated vintages from iconic vineyards across Bordeaux, Burgundy, and the Rhône Valley',
    },
    order: 4,
  },
];

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 'soup-oignon',
    categoryId: 'appetizers',
    name: { vi: 'Súp Hành Tây Kiểu Pháp', en: 'French Onion Soup Gratinée' },
    description: {
      vi: 'Hành tây caramen nấu chậm 8 tiếng trong nước dùng bò đậm đà, phủ bánh mì baguette nướng phô mai Gruyère vàng ruộm.',
      en: 'Slow-caramelized onions in rich beef bone broth, topped with crusty baguette and melted Gruyère cheese.',
    },
    priceVnd: 220000,
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    badge: { vi: 'Món truyền thống', en: 'Classic Heritage' },
    featured: true,
  },
  {
    id: 'escargots-bourgogne',
    categoryId: 'appetizers',
    name: { vi: 'Ốc Kiểu Bourgogne', en: 'Escargots de Bourgogne' },
    description: {
      vi: 'Ốc Pháp đút lò với bơ tỏi, ngò tây tươi và chút vang trắng vùng Bourgogne thơm lừng.',
      en: 'Wild French snails baked in garlic-herb butter, shallots, and Burgundy white wine.',
    },
    priceVnd: 280000,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    badge: { vi: 'Đặc trưng Paris', en: 'Signature' },
    featured: true,
  },
  {
    id: 'foie-gras-poele',
    categoryId: 'appetizers',
    name: { vi: 'Gan Ngỗng Áp Chảo', en: 'Pan-Seared Duck Foie Gras' },
    description: {
      vi: 'Gan ngỗng Pháp áp chảo vàng óng, mứt sung tươi caramen và bánh mì hoa cúc brioche nướng giòn.',
      en: 'Pan-seared French foie gras served with spiced fig compote and toasted house brioche.',
    },
    priceVnd: 420000,
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    badge: { vi: 'Tuyệt tác của Bếp', en: "Chef's Creation" },
  },

  // Mains
  {
    id: 'boeuf-bourguignon',
    categoryId: 'mains',
    name: { vi: 'Bò Hầm Vang Đỏ Bourgogne', en: 'Boeuf Bourguignon' },
    description: {
      vi: 'Thịt bò Úc thượng hạng hầm chậm 12 giờ với rượu vang đỏ Pinot Noir, cà rốt non, nấm mỡ và thịt muối xông khói.',
      en: 'Prime beef braised for 12 hours in Pinot Noir red wine, glazed baby carrots, button mushrooms, and bacon lardons.',
    },
    priceVnd: 480000,
    imageUrl: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=800',
    badge: { vi: 'Món đặc trưng nhất', en: 'Signature Must-Try' },
    featured: true,
  },
  {
    id: 'canard-a-lorange',
    categoryId: 'mains',
    name: { vi: 'Ức Vịt Sốt Cam & Mật Ong Rừng', en: 'Canard à l’Orange' },
    description: {
      vi: 'Ức vịt nướng áp chảo da giòn rụm, thịt hồng mọng nước, sốt cam bưởi thanh tao và khoai tây nghiền bơ thơm.',
      en: 'Crispy skin duck breast, served tender pink with a zesty citrus-honey reduction and velvety potato purée.',
    },
    priceVnd: 450000,
    imageUrl: 'https://images.unsplash.com/photo-1514944298352-f41712a43926?auto=format&fit=crop&q=80&w=800',
    badge: { vi: 'Yêu thích nhất', en: 'Bistro Favorite' },
  },
  {
    id: 'saumon-beurre-blanc',
    categoryId: 'mains',
    name: { vi: 'Cá Hồi Áp Chảo Sốt Bơ Trắng', en: 'Pan-Seared Salmon Beurre Blanc' },
    description: {
      vi: 'Cá hồi tươi áp chảo xém da, sốt bơ trắng Beurre Blanc truyền thống vùng Loire, kèm măng tây xanh nướng.',
      en: 'Crispy skin Atlantic salmon with a classic Loire Valley white wine butter sauce and grilled tender asparagus.',
    },
    priceVnd: 420000,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
  },

  // Desserts
  {
    id: 'creme-brulee',
    categoryId: 'desserts',
    name: { vi: 'Kem Cháy Crème Brûlée Vani Madagascar', en: 'Madagascar Vanilla Crème Brûlée' },
    description: {
      vi: 'Lớp kem trứng mềm mịn thơm nồng hạt vani Madagascar tự nhiên, phủ lớp đường caramel giòn tan đập nhẹ bằng thìa.',
      en: 'Silky rich egg custard infused with pure Madagascar vanilla beans, topped with a crisp caramelized sugar crust.',
    },
    priceVnd: 180000,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    badge: { vi: 'Món tráng miệng vàng', en: 'All-Time Favorite' },
    featured: true,
  },
  {
    id: 'tarte-tatin',
    categoryId: 'desserts',
    name: { vi: 'Bánh Táo Ngược Tarte Tatin', en: 'Traditional Tarte Tatin' },
    description: {
      vi: 'Bánh táo nướng ngược kiểu Pháp caramen hóa đậm đà bơ hạt phỉ, ăn kèm một viên kem vani Pháp mát lạnh.',
      en: 'Upside-down caramelized apple tart with puff pastry crust, paired with a scoop of artisanal French vanilla bean ice cream.',
    },
    priceVnd: 190000,
    imageUrl: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'mousse-chocolat',
    categoryId: 'desserts',
    name: { vi: 'Mousse Sôcôla Đen 70% Valrhona', en: 'Valrhona 70% Dark Chocolate Mousse' },
    description: {
      vi: 'Mousse sôcôla đen thượng hạng béo mịn tan ngay trong miệng, điểm xuyết muối biển Guérande và dâu tây tươi.',
      en: 'Decadent French Valrhona dark chocolate mousse with a whisper of Guérande sea salt flakes and fresh berries.',
    },
    priceVnd: 210000,
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800',
  },

  // Wine
  {
    id: 'chateau-margaux-reserve',
    categoryId: 'wine',
    name: { vi: 'Château Margaux Cru Bourgeois', en: 'Château Margaux Cru Bourgeois' },
    description: {
      vi: 'Vang đỏ Bordeaux hảo hạng, hương thơm nồng nàn của mận đen, gỗ sồi cháy và vị chát mượt mà quý tộc.',
      en: 'Prestigious Bordeaux red vintage with velvety tannins, dark berries, and subtle nuances of toasted French oak.',
    },
    priceVnd: 1850000,
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    badge: { vi: 'Tuyển chọn Sommelier', en: "Sommelier's Pick" },
    featured: true,
  },
  {
    id: 'chablis-premier-cru',
    categoryId: 'wine',
    name: { vi: 'Chablis Premier Cru Domaine', en: 'Chablis Premier Cru Domaine' },
    description: {
      vi: 'Vang trắng thanh khiết vùng Bourgogne, khoáng chất sống động cùng hương táo xanh và hoa trắng dịu dàng.',
      en: 'Crisp Burgundy Chardonnay featuring striking mineral notes, green apple freshness, and delicate white blossoms.',
    },
    priceVnd: 1650000,
    imageUrl: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'veuve-clicquot-champagne',
    categoryId: 'wine',
    name: { vi: 'Champagne Veuve Clicquot Brut', en: 'Champagne Veuve Clicquot Yellow Label' },
    description: {
      vi: 'Champagne danh tiếng với bọt tăm li ti quý phái, hương bánh mì nướng bơ ngậy và trái cây mùa hè rạng rỡ.',
      en: 'Iconic French Champagne offering fine bubbles, luminous fruit flavors, and an elegant brioche finish.',
    },
    priceVnd: 2400000,
    imageUrl: 'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&q=80&w=800',
    badge: { vi: 'Kỷ niệm & Dạ tiệc', en: 'Celebration' },
  },
];
