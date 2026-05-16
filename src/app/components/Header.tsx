import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useTranslationContext } from "../context/TranslationContext";
import { useUiLang, UI_LANGUAGES } from "../i18n";

const NAV = {
  id: {
    home: "Beranda",
    autoGuide: "Auto Guide",
    news: "Berita",
    event: "Acara",
    gallery: "Galeri",
    vip: "Tamu VIP",
    visit: "Kunjungan",
    meta: "Meta Museum",
    testimoni: "Testimoni",
    eduFamily: "Edukasi & Keluarga",
    generalFamily: "Umum / Keluarga",
    eduInstitution: "Institusi Pendidikan",
    eduSeries: "Seri Edukasi",
    virtualTour: "Tur Virtual",
    vtOverview: "Ringkasan Tur Virtual",
    austronesia: "Austronesia",
    language: "Bahasa",
  },
  en: {
    home: "Home",
    autoGuide: "Auto Guide",
    news: "News",
    event: "Event",
    gallery: "Gallery",
    vip: "VIP Guest",
    visit: "Visit",
    meta: "Meta Museum",
    testimoni: "Testimonials",
    eduFamily: "Education & Family",
    generalFamily: "General / Family",
    eduInstitution: "Educational Institution",
    eduSeries: "Educational Series",
    virtualTour: "Virtual Tour",
    vtOverview: "Virtual Tour Overview",
    austronesia: "Austronesia",
    language: "Language",
  },
  zh: {
    home: "首页",
    autoGuide: "自助导览",
    news: "新闻",
    event: "活动",
    gallery: "展廊",
    vip: "贵宾",
    visit: "参观",
    meta: "元宇宙博物馆",
    testimoni: "游客评价",
    eduFamily: "教育与家庭",
    generalFamily: "大众 / 家庭",
    eduInstitution: "教育机构",
    eduSeries: "教育系列",
    virtualTour: "虚拟游览",
    vtOverview: "虚拟游览概览",
    austronesia: "南岛文化",
    language: "语言",
  },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { currentLang, setLanguage } = useTranslationContext();
  const lang = useUiLang();
  const t = NAV[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const currentLabel =
    UI_LANGUAGES.find((l) => l.code === lang)?.label ?? "ID";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F4EFE6] shadow-md" : "bg-[#F4EFE6]/95"
      }`}
      style={{ borderBottom: "1px solid #C8B9A6" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772934955/Logo_mkvfjb.webp"
                alt="Indonesian Heritage Museum Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            <div className="hidden md:block">
              <div className="font-['Cinzel'] text-lg text-[#2B2B2B] leading-tight">
                Indonesian Heritage
              </div>
              <div className="font-['Cinzel'] text-sm text-[#5A5A5A]">
                Museum
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              {t.home}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/auto-guide"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              {t.autoGuide}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/news"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors"
            >
              {t.news}
            </Link>

            <Link
              to="/event"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors"
            >
              {t.event}
            </Link>

            <Link
              to="/gallery"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E]"
            >
              {t.gallery}
            </Link>

            <Link
              to="/vip-guest"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E]"
            >
              {t.vip}
            </Link>

            <Link
              to="/visit"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E]"
            >
              {t.visit}
            </Link>

            <Link
              to="/meta-museum"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E]"
            >
              {t.meta}
            </Link>

            <Link
              to="/testimoni"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E]"
            >
              {t.testimoni}
            </Link>

            {/* Education Dropdown */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown("education")}
              >
                {t.eduFamily}
                <ChevronDown className="w-4 h-4" />
              </button>

              {openDropdown === "education" && (
                <div
                  className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded border border-[#C8B9A6] py-2"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to="/education/general-family"
                    className="block px-4 py-2 hover:bg-[#E7DED0]"
                  >
                    {t.generalFamily}
                  </Link>

                  <Link
                    to="/education/educational-institution"
                    className="block px-4 py-2 hover:bg-[#E7DED0]"
                  >
                    {t.eduInstitution}
                  </Link>

                  <Link
                    to="/education/educational-series"
                    className="block px-4 py-2 hover:bg-[#E7DED0]"
                  >
                    {t.eduSeries}
                  </Link>
                </div>
              )}
            </div>

            {/* Language */}
            <div className="relative group ml-2">
              <button className="px-3 py-2 text-[#8C6B3E] border border-[#8C6B3E] rounded hover:bg-[#8C6B3E] hover:text-white flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {currentLabel}
              </button>

              <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded border border-[#C8B9A6] py-2 hidden group-hover:block">
                {UI_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`block w-full text-left px-4 py-2 hover:bg-[#E7DED0] ${
                      currentLang === l.code ? "text-[#8C6B3E] font-medium" : ""
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-[#8C6B3E] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F4EFE6] border-t border-[#C8B9A6]">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            <Link
              to="/"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              {t.home}
            </Link>

            <Link
              to="/auto-guide"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              {t.autoGuide}
            </Link>

            <Link
              to="/news"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              {t.news}
            </Link>

            <Link
              to="/event"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              {t.event}
            </Link>

            <Link
              to="/gallery"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              {t.gallery}
            </Link>

            <Link
              to="/vip-guest"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              {t.vip}
            </Link>

            <Link
              to="/visit"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              {t.visit}
            </Link>

            <Link
              to="/meta-museum"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              {t.meta}
            </Link>

            <Link
              to="/testimoni"
              className="px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:text-[#8C6B3E] hover:bg-[#E7DED0] rounded"
            >
              {t.testimoni}
            </Link>

            {/* Education Mobile */}
            <div className="space-y-1">
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-[#2B2B2B] font-['Cinzel'] text-base hover:bg-[#E7DED0] rounded"
                onClick={() => toggleDropdown("education-mobile")}
              >
                <span>{t.eduFamily}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openDropdown === "education-mobile" ? "rotate-180" : ""}`}
                />
              </button>

              {openDropdown === "education-mobile" && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/education/general-family"
                    className="block px-4 py-2 text-[#5A5A5A] hover:bg-[#E7DED0] rounded"
                  >
                    {t.generalFamily}
                  </Link>
                  <Link
                    to="/education/educational-institution"
                    className="block px-4 py-2 text-[#5A5A5A] hover:bg-[#E7DED0] rounded"
                  >
                    {t.eduInstitution}
                  </Link>
                  <Link
                    to="/education/educational-series"
                    className="block px-4 py-2 text-[#5A5A5A] hover:bg-[#E7DED0] rounded"
                  >
                    {t.eduSeries}
                  </Link>
                </div>
              )}
            </div>

            {/* Language Selector Mobile */}
            <div className="pt-2 border-t border-[#C8B9A6]">
              <div className="px-4 py-2 text-[#8C6B3E] font-['Cinzel'] text-sm">
                {t.language}
              </div>
              <div className="flex flex-wrap gap-2 px-4">
                {UI_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-3 py-2 text-sm font-['Cinzel'] rounded border ${
                      currentLang === l.code
                        ? "bg-[#8C6B3E] text-white border-[#8C6B3E]"
                        : "text-[#5A5A5A] border-[#C8B9A6] hover:bg-[#E7DED0]"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
