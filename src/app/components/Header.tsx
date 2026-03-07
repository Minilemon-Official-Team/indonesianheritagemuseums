import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState('EN');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const languages = ['EN', 'ID', 'JP', 'KR', 'CN', 'ES', 'FR', 'DE', 'IT', 'NL', 'RU', 'AR'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F4EFE6] shadow-md' : 'bg-[#F4EFE6]/95'
      }`}
      style={{ borderBottom: '1px solid #C8B9A6' }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-[#8C6B3E] flex items-center justify-center text-white font-['Cinzel'] text-xl transition-transform group-hover:scale-105">
              IHM
            </div>
            <div className="hidden md:block">
              <div className="font-['Cinzel'] text-lg text-[#2B2B2B] leading-tight">Indonesian Heritage</div>
              <div className="font-['Cinzel'] text-sm text-[#5A5A5A]">Museum</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/auto-guide"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              Auto Guide
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            {/* Virtual Tour Dropdown */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown('virtual-tour')}
              >
                Virtual Tour
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'virtual-tour' && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded border border-[#C8B9A6] py-2"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to="/virtual-tour"
                    className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#E7DED0] transition-colors"
                  >
                    Virtual Tour Overview
                  </Link>
                  <Link
                    to="/virtual-tour-ihm"
                    className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#E7DED0] transition-colors"
                  >
                    Virtual Tour - IHM
                  </Link>
                  <Link
                    to="/virtual-tour-candi-jago"
                    className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#E7DED0] transition-colors"
                  >
                    Virtual Tour - Candi Jago
                  </Link>
                  <Link
                    to="/virtual-tour-candi-kidal"
                    className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#E7DED0] transition-colors"
                  >
                    Virtual Tour - Candi Kidal
                  </Link>
                  <Link
                    to="/virtual-tour-ihm-2023"
                    className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#E7DED0] transition-colors"
                  >
                    Virtual Tour - IHM 2023
                  </Link>
                  <Link
                    to="/virtual-tour-candi-jago-2023"
                    className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#E7DED0] transition-colors"
                  >
                    Virtual Tour - Candi Jago 2023
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/news"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              News
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/gallery"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/visit"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              Visit
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/meta-museum"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              Meta Museum
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/testimoni"
              className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors relative group"
            >
              Testimoni
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C6B3E] transition-all group-hover:w-full"></span>
            </Link>

            {/* Education & Family Dropdown */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-[#2B2B2B] font-['Cinzel'] text-sm hover:text-[#8C6B3E] transition-colors flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown('education')}
              >
                Education & Family
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'education' && (
                <div
                  className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded border border-[#C8B9A6] py-2"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to="/education/general-family"
                    className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#E7DED0] transition-colors"
                  >
                    General/Family
                  </Link>
                  <Link
                    to="/education/educational-institution"
                    className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#E7DED0] transition-colors"
                  >
                    Educational Institution
                  </Link>
                  <Link
                    to="/education/educational-series"
                    className="block px-4 py-2 text-[#2B2B2B] hover:bg-[#E7DED0] transition-colors"
                  >
                    Educational Series
                  </Link>
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative group ml-2">
              <button className="px-3 py-2 text-[#8C6B3E] border border-[#8C6B3E] rounded hover:bg-[#8C6B3E] hover:text-white transition-all flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {language}
              </button>
              <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded border border-[#C8B9A6] py-2 hidden group-hover:block">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="block w-full text-left px-4 py-2 text-[#2B2B2B] hover:bg-[#E7DED0] transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#8C6B3E] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#C8B9A6]">
            <Link to="/" className="block py-2 text-[#2B2B2B] font-['Cinzel']">
              Home
            </Link>
            <Link to="/auto-guide" className="block py-2 text-[#2B2B2B] font-['Cinzel']">
              Auto Guide
            </Link>
            
            <div>
              <button
                onClick={() => toggleDropdown('virtual-tour-mobile')}
                className="w-full flex items-center justify-between py-2 text-[#2B2B2B] font-['Cinzel']"
              >
                Virtual Tour
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'virtual-tour-mobile' && (
                <div className="pl-4 space-y-2">
                  <Link to="/virtual-tour" className="block py-1 text-[#5A5A5A]">
                    Virtual Tour Overview
                  </Link>
                  <Link to="/virtual-tour-ihm" className="block py-1 text-[#5A5A5A]">
                    Virtual Tour - IHM
                  </Link>
                  <Link to="/virtual-tour-candi-jago" className="block py-1 text-[#5A5A5A]">
                    Virtual Tour - Candi Jago
                  </Link>
                  <Link to="/virtual-tour-candi-kidal" className="block py-1 text-[#5A5A5A]">
                    Virtual Tour - Candi Kidal
                  </Link>
                  <Link to="/virtual-tour-ihm-2023" className="block py-1 text-[#5A5A5A]">
                    Virtual Tour - IHM 2023
                  </Link>
                  <Link to="/virtual-tour-candi-jago-2023" className="block py-1 text-[#5A5A5A]">
                    Virtual Tour - Candi Jago 2023
                  </Link>
                </div>
              )}
            </div>

            <Link to="/news" className="block py-2 text-[#2B2B2B] font-['Cinzel']">
              News
            </Link>
            <Link to="/gallery" className="block py-2 text-[#2B2B2B] font-['Cinzel']">
              Gallery
            </Link>
            <Link to="/visit" className="block py-2 text-[#2B2B2B] font-['Cinzel']">
              Visit
            </Link>
            <Link to="/meta-museum" className="block py-2 text-[#2B2B2B] font-['Cinzel']">
              Meta Museum
            </Link>
            <Link to="/testimoni" className="block py-2 text-[#2B2B2B] font-['Cinzel']">
              Testimoni
            </Link>
            
            <div>
              <button
                onClick={() => toggleDropdown('education-mobile')}
                className="w-full flex items-center justify-between py-2 text-[#2B2B2B] font-['Cinzel']"
              >
                Education & Family
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'education-mobile' && (
                <div className="pl-4 space-y-2">
                  <Link to="/education/general-family" className="block py-1 text-[#5A5A5A]">
                    General/Family
                  </Link>
                  <Link to="/education/educational-institution" className="block py-1 text-[#5A5A5A]">
                    Educational Institution
                  </Link>
                  <Link to="/education/educational-series" className="block py-1 text-[#5A5A5A]">
                    Educational Series
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#C8B9A6] mt-4">
              <div className="flex items-center gap-2 text-[#8C6B3E]">
                <Globe className="w-4 h-4" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-transparent border border-[#8C6B3E] rounded px-2 py-1"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
