import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { useUiLang } from '../i18n';

const T = {
  id: {
    notFound: 'Halaman Tidak Ditemukan',
    desc: 'Halaman yang Anda cari tidak ada atau telah dipindahkan. Mari kembali menjelajahi warisan budaya Indonesia.',
    returnHome: 'Kembali ke Beranda',
    browseGallery: 'Lihat Galeri',
    popular: 'Halaman Populer',
    virtualTour: 'Tur Virtual',
    visit: 'Kunjungan',
    news: 'Berita',
    education: 'Edukasi',
  },
  en: {
    notFound: 'Page Not Found',
    desc: "The page you're looking for doesn't exist or has been moved. Let's get you back to exploring Indonesian heritage.",
    returnHome: 'Return Home',
    browseGallery: 'Browse Gallery',
    popular: 'Popular Pages',
    virtualTour: 'Virtual Tour',
    visit: 'Visit',
    news: 'News',
    education: 'Education',
  },
  zh: {
    notFound: '页面未找到',
    desc: '您查找的页面不存在或已被移动。让我们回到探索印尼遗产之旅。',
    returnHome: '返回首页',
    browseGallery: '浏览展廊',
    popular: '热门页面',
    virtualTour: '虚拟游览',
    visit: '参观',
    news: '新闻',
    education: '教育',
  },
};

export default function NotFound() {
  const t = T[useUiLang()];

  return (
    <div className="bg-[#F4EFE6] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="font-['Cinzel'] text-9xl text-[#8C6B3E] mb-4">404</h1>
          <h2 className="font-['Cinzel'] text-3xl md:text-4xl text-[#2B2B2B] mb-4">
            {t.notFound}
          </h2>
          <p className="text-[#5A5A5A] text-lg mb-8">{t.desc}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            {t.returnHome}
          </Link>
          <Link
            to="/gallery"
            className="px-8 py-4 bg-white border-2 border-[#8C6B3E] text-[#8C6B3E] rounded hover:bg-[#E7DED0] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            {t.browseGallery}
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-4">{t.popular}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/virtual-tour" className="text-[#8C6B3E] hover:text-[#6F532F] transition-colors">
              {t.virtualTour}
            </Link>
            <Link to="/visit" className="text-[#8C6B3E] hover:text-[#6F532F] transition-colors">
              {t.visit}
            </Link>
            <Link to="/news" className="text-[#8C6B3E] hover:text-[#6F532F] transition-colors">
              {t.news}
            </Link>
            <Link to="/education" className="text-[#8C6B3E] hover:text-[#6F532F] transition-colors">
              {t.education}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
