import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <p className="text-xs font-serif uppercase tracking-widest text-bordeaux">
          404 • Page Introuvable
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-espresso tracking-tight">
          Trang Không Tồn Tại
        </h1>
        <div className="w-16 h-[1px] bg-gold mx-auto my-3" />
        <p className="text-sm text-espresso-muted leading-relaxed font-body">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển dời. Mời bạn quay trở lại trang chủ của Bon Vivant Bistro.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center font-serif tracking-wider text-xs uppercase px-6 py-3 bg-bordeaux text-cream hover:bg-bordeaux-hover rounded-sm transition-colors border border-gold/40"
          >
            Quay Về Trang Chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
