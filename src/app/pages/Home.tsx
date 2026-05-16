import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useUiLang } from '../i18n';

const T = {
  id: {
    heroSubtitle: 'Temukan Kekayaan Warisan Budaya Indonesia',
    downloadAR: 'Unduh AR',
    autoGuide: 'Auto Guide',
    welcomeTitle: 'Selamat Datang di Indonesian Heritage Museum',
    welcomeText:
      'Indonesian Heritage Museum merupakan museum warisan budaya Indonesia yang mempunyai koleksi warisan budaya dari seluruh wilayah Indonesia, berdiri sejak tahun 2010, Indonesian heritage Museum juga merupakan pelopor museum berteknologi Augmented Reality di Indonesia, terdapat 17 zona yang mewakili wilayah di Indonesia, yang menyimpan benda benda bersejarah dari seluruh suku di tanah air.',
    arTitle: 'Augmented Reality',
    arText:
      'Silakan mengunduh aplikasi Augmented Reality di link berikut ini dari Google Playstore di Android anda, untuk mempermudah para pengunjung dalam melihat 3 Dimensi.',
    autoTitle: 'Auto Self Guided Tour',
    autoText:
      'Silahkan akses Auto Self Guided Tour untuk memudahkan para pengunjung dalam memahami narasi per zona, sembari bermain dan belajar di dalam Indonesian Heritage Museum.',
    text2a: 'Silakan kepada para pengunjung untuk dapat mengunduh aplikasi ',
    text2b: ' di Google Play Store dan juga ',
    text2c:
      ' yang dapat diakses melalui website untuk dapat memudahkan para pengunjung selama berada di Indonesian Heritage Museum.',
  },
  en: {
    heroSubtitle: 'Discover the Rich Cultural Legacy of Indonesia',
    downloadAR: 'Download AR',
    autoGuide: 'Auto Guide',
    welcomeTitle: 'Welcome to Indonesian Heritage Museum',
    welcomeText:
      "Indonesian Heritage Museum is a museum of Indonesian cultural heritage holding collections from all regions of Indonesia. Established in 2010, it is also a pioneer of Augmented Reality museum technology in Indonesia, with 17 zones representing Indonesia's regions and preserving historical objects from every ethnic group in the country.",
    arTitle: 'Augmented Reality',
    arText:
      'Download the Augmented Reality app from the link below on the Google Play Store on your Android device, to make it easier for visitors to view objects in 3D.',
    autoTitle: 'Auto Self Guided Tour',
    autoText:
      'Access the Auto Self Guided Tour to help visitors understand the narrative of each zone, while playing and learning inside Indonesian Heritage Museum.',
    text2a: 'Visitors are welcome to download the ',
    text2b: ' app on the Google Play Store and also the ',
    text2c:
      ' accessible through the website, to make their visit to Indonesian Heritage Museum more convenient.',
  },
  zh: {
    heroSubtitle: '探索印度尼西亚丰富的文化遗产',
    downloadAR: '下载 AR',
    autoGuide: '自助导览',
    welcomeTitle: '欢迎来到印度尼西亚遗产博物馆',
    welcomeText:
      '印度尼西亚遗产博物馆是一座收藏印尼各地文化遗产的博物馆，成立于 2010 年，也是印尼增强现实技术博物馆的先驱。馆内设有代表印尼各地区的 17 个展区，珍藏来自全国各民族的历史文物。',
    arTitle: 'Augmented Reality',
    arText:
      '请通过以下链接从安卓设备的 Google Play 商店下载增强现实应用程序，方便访客以三维方式观赏展品。',
    autoTitle: 'Auto Self Guided Tour',
    autoText:
      '使用自助导览功能，帮助访客理解每个展区的叙述，在印度尼西亚遗产博物馆中寓教于乐。',
    text2a: '欢迎访客下载 ',
    text2b: ' 应用程序（Google Play 商店），以及通过网站访问 ',
    text2c: '，让您在印度尼西亚遗产博物馆的参观更加便利。',
  },
};

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lang = useUiLang();
  const t = T[lang];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-[#F4EFE6]">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(140, 107, 62, 0.4), rgba(140, 107, 62, 0.6)), url('https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772931496/IHM2-768x432_w8r2nn.webp')`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="font-['Cinzel'] text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide">
            Indonesian Heritage Museum
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/visit"
              className="px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >{t.downloadAR}</Link>
            <Link
              to="/auto-guide"
              className="px-8 py-4 bg-white text-[#8C6B3E] rounded hover:bg-[#E7DED0] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.autoGuide}
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section
        id="welcome"
        className="fade-in-section py-20 md:py-28 px-4"
        style={{
          opacity: isVisible['welcome'] ? 1 : 0,
          transform: isVisible['welcome'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
              {t.welcomeTitle}
            </h2>
            <div className="w-24 h-1 bg-[#8C6B3E] mx-auto"></div>
          </div>
          <div className="text-center max-w-[900px] mx-auto">
            <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
              {t.welcomeText}
            </p>
          </div>
        </div>
      </section>

      {/* Two Feature Cards */}
      <section
        id="feature-cards"
        className="fade-in-section py-12 px-4"
        style={{
          opacity: isVisible['feature-cards'] ? 1 : 0,
          transform: isVisible['feature-cards'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* AR Card */}
            <div className="bg-white rounded shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-80 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772936678/1_23_x5apvd.webp"
                  alt="Augmented Reality"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-4">{t.arTitle}</h3>
                <p className="text-[#5A5A5A] text-lg leading-relaxed mb-6">
                  {t.arText}
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dtopeng.ihmarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D97234] text-white rounded hover:bg-[#C0611D] transition-all shadow-lg hover:shadow-xl"
                >
                  {t.arTitle}
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Auto Guide Card */}
            <div className="bg-white rounded shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-80 overflow-hidden">
                <img
                  src="/images/auto-tour.png"
                  alt="Auto Self Guided Tour"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-4">{t.autoTitle}</h3>
                <p className="text-[#5A5A5A] text-lg leading-relaxed mb-6">
                  {t.autoText}
                </p>
                <Link
                  to="/auto-guide"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#D97234] text-white rounded hover:bg-[#C0611D] transition-all shadow-lg hover:shadow-xl"
                >
                  {t.autoTitle}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image 1 */}
      <section
        id="image-1"
        className="fade-in-section py-12 px-4"
        style={{
          opacity: isVisible['image-1'] ? 1 : 0,
          transform: isVisible['image-1'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <img
            src="https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921565/IHM1-1024x576_1_yhi1lk.webp"
            alt="Pengunjung melihat koleksi topeng di dinding"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Text Section 1 */}
      <section
        id="text-1"
        className="fade-in-section py-16 px-4"
        style={{
          opacity: isVisible['text-1'] ? 1 : 0,
          transform: isVisible['text-1'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[#2B2B2B] text-xl leading-relaxed">
            {t.welcomeText}
          </p>
        </div>
      </section>

      {/* Full Width Image 2 */}
      <section
        id="image-2"
        className="fade-in-section py-12 px-4"
        style={{
          opacity: isVisible['image-2'] ? 1 : 0,
          transform: isVisible['image-2'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <img
            src="https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928951/1-649ec852e1a1676b31155872_y8trlr.webp"
            alt="Koleksi topeng emas di display"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Text Section 2 */}
      <section
        id="text-2"
        className="fade-in-section py-16 px-4 mb-12"
        style={{
          opacity: isVisible['text-2'] ? 1 : 0,
          transform: isVisible['text-2'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[#2B2B2B] text-xl leading-relaxed">
            {t.text2a}
            <span className="font-bold text-[#D97234]">Augmented Reality</span>
            {t.text2b}
            <span className="font-bold text-[#D97234]">Autoself Guided Tour</span>
            {t.text2c}
          </p>
        </div>
      </section>
    </div>
  );
}
