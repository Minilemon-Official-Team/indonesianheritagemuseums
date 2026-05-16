import { Link } from 'react-router-dom';
import { MapPin, Phone, Facebook, Instagram, Youtube } from 'lucide-react';
import { useUiLang } from '../i18n';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const T = {
  id: {
    about:
      'Melestarikan dan merayakan kekayaan warisan budaya Indonesia melalui pameran terkurasi dan program edukasi.',
    quickLinks: 'Tautan Cepat',
    contactUs: 'Hubungi Kami',
    home: 'Beranda',
    autoGuide: 'Auto Guide',
    virtualTour: 'Tur Virtual',
    news: 'Berita',
    gallery: 'Galeri',
    visit: 'Kunjungan',
    meta: 'Meta Museum',
    eduFamily: 'Edukasi & Keluarga',
    testimoni: 'Testimoni',
    rights: '© 2026 Indonesian Heritage Museum | Kebijakan Privasi IHM AR',
  },
  en: {
    about:
      "Preserving and celebrating Indonesia's rich cultural heritage through curated exhibitions and educational programs.",
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    home: 'Home',
    autoGuide: 'Auto Guide',
    virtualTour: 'Virtual Tour',
    news: 'News',
    gallery: 'Gallery',
    visit: 'Visit',
    meta: 'Meta Museum',
    eduFamily: 'Education & Family',
    testimoni: 'Testimonials',
    rights: '© 2026 Indonesian Heritage Museum | Privacy Policy IHM AR',
  },
  zh: {
    about:
      '通过精心策划的展览和教育项目，保护并弘扬印度尼西亚丰富的文化遗产。',
    quickLinks: '快速链接',
    contactUs: '联系我们',
    home: '首页',
    autoGuide: '自助导览',
    virtualTour: '虚拟游览',
    news: '新闻',
    gallery: '展廊',
    visit: '参观',
    meta: '元宇宙博物馆',
    eduFamily: '教育与家庭',
    testimoni: '游客评价',
    rights: '© 2026 印度尼西亚遗产博物馆 | IHM AR 隐私政策',
  },
};

export default function Footer() {
  const lang = useUiLang();
  const t = T[lang];

  return (
    <footer className="bg-[#E7DED0] border-t border-[#C8B9A6]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-4">Indonesian Heritage Museum</h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              {t.about}
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/indonesianheritagemu" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#8C6B3E] flex items-center justify-center text-white hover:bg-[#6F532F] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/indonesianheritagemuseum" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#8C6B3E] flex items-center justify-center text-white hover:bg-[#6F532F] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@indonesianheritagemuseum" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#8C6B3E] flex items-center justify-center text-white hover:bg-[#6F532F] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/auto-guide" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  {t.autoGuide}
                </Link>
              </li>
              <li>
                <Link to="/virtual-tour" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  {t.virtualTour}
                </Link>
              </li>
              <li>
                <Link to="/news" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  {t.news}
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  {t.gallery}
                </Link>
              </li>
              <li>
                <Link to="/visit" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  {t.visit}
                </Link>
              </li>
              <li>
                <Link to="/meta-museum" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  {t.meta}
                </Link>
              </li>
              <li>
                <Link to="/education" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  {t.eduFamily}
                </Link>
              </li>
              <li>
                <Link to="/testimoni" onClick={scrollToTop} className="text-[#5A5A5A] text-sm hover:text-[#8C6B3E] transition-colors">
                  {t.testimoni}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs - Removed */}
          <div className="hidden lg:block">
            {/* Empty column for spacing */}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-4">{t.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#5A5A5A] text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#8C6B3E]" />
                <span>Jl. Kartika No.2, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65315</span>
              </li>
              <li className="flex items-center gap-3 text-[#5A5A5A] text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#8C6B3E]" />
                <span>+62 857-4840-5800</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C8B9A6] mt-12 pt-8 text-center">
          <p className="text-[#5A5A5A] text-sm">
            {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
