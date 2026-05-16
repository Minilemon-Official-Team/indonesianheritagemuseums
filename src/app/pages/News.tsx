import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useUiLang } from '../i18n';

const UI = {
  id: {
    title: 'Berita & Pembaruan Museum',
    intro:
      'Ikuti informasi terbaru seputar pameran, acara, temuan riset, dan program di Indonesian Heritage Museum.',
    readMore: 'Baca artikel lengkap',
  },
  en: {
    title: 'Museum News & Updates',
    intro:
      'Stay informed about the latest exhibitions, events, research discoveries, and programs at the Indonesian Heritage Museum.',
    readMore: 'Read full article',
  },
  zh: {
    title: '博物馆新闻与动态',
    intro:
      '及时了解印度尼西亚遗产博物馆最新的展览、活动、研究发现及项目。',
    readMore: '阅读全文',
  },
};

interface NewsArticle {
  id: number;
  title: string;
  date?: string;
  category: string;
  image: string;
  excerpt: string;
  link?: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: 'Fadli Zon Apresiasi Indonesian Heritage Museum, Warisan Budaya Indonesia Terjaga',
    date: '2025',
    category: 'Event',
    image: '/images/news-1.jpg',
    excerpt: 'Menteri Kebudayaan Republik Indonesia, Fadli Zon, memberikan apresiasi terhadap Indonesian Heritage Museum sebagai upaya menjaga dan melestarikan warisan budaya Indonesia agar tetap terjaga untuk generasi mendatang.',
    link: 'https://surabaya.inews.id/read/584126/fadli-zon-apresiasi-indonesian-heritage-museum-warisan-budaya-indonesia-terjaga',
  },
  {
    id: 2,
    title: 'Menteri Kebudayaan Fadli Zon Apresiasi Keberadaan Indonesian Heritage Museum',
    date: '2025',
    category: 'Event',
    image: '/images/news-2.jpg',
    excerpt: 'Menteri Kebudayaan Fadli Zon mengapresiasi keberadaan Indonesian Heritage Museum yang dinilai berperan penting sebagai wahana edukasi dan pelestarian kekayaan budaya Nusantara.',
    link: 'https://timesindonesia.co.id/indonesia-positif/535781/menteri-kebudayaan-fadli-zon-apresiasi-keberadaan-indonesian-heritage-museum',
  },
  {
    id: 3,
    title: 'Kunjungan Menteri Kebudayaan Fadli Zon ke Indonesia Heritage Museum dan Museum Tubuh – Jatim Park 1',
    date: '2025',
    category: 'Event',
    image: '/images/news-3.webp',
    excerpt: 'Menteri Kebudayaan Republik Indonesia, Fadli Zon, melakukan kunjungan ke Indonesia Heritage Museum dan Museum Tubuh di Jatim Park 1. Kunjungan ini menjadi bentuk apresiasi terhadap upaya pelestarian dan edukasi warisan budaya Nusantara.',
    link: 'https://jtp.id/kunjungan-menteri-kebudayaan-fadli-zon-ke-indonesia-heritage-museum-dan-museum-tubuh-jatim-park-1/',
  },
  {
    id: 4,
    title: 'Jatim Park 1: Kunjungan Menteri Kebudayaan Republik Indonesia Fadli Zon ke Indonesia Heritage Museum dan The Bagong Adventure Museum Tubuh',
    date: '2025',
    category: 'Event',
    image: '/images/news-4.jpg',
    excerpt: 'Liputan kunjungan Menteri Kebudayaan RI Fadli Zon ke Indonesia Heritage Museum dan The Bagong Adventure Museum Tubuh di Jatim Park 1, menyoroti peran kedua museum sebagai wahana edukasi budaya dan ilmu pengetahuan.',
    link: 'https://jtp.id/jatimpark1/jatim-park-1-kunjungan-menteri-kebudayaan-republik-indonesia-fadli-zon-ke-indonesia-heritage-museum-dan-the-bagong-adventure-museum-tubuh/',
  },
  {
    id: 5,
    title: "Indonesian Heritage Museum showcases archipelago's past",
    date: 'January 12, 2018',
    category: 'Exhibition',
    image: '/images/news-5.jpg',
    excerpt: "The Jakarta Post features the Indonesian Heritage Museum in Batu, East Java, highlighting how its extensive collection of artifacts presents the rich and diverse history of the Indonesian archipelago.",
    link: 'https://www.thejakartapost.com/life/2018/01/12/indonesian-heritage-museum-showcases-archipelagos-past.html',
  },
  {
    id: 6,
    title: 'Indonesian Heritage Museum Dilengkapi Augmented Reality',
    date: '2018',
    category: 'Technology',
    image: '/images/news-6.webp',
    excerpt: 'Indonesian Heritage Museum menghadirkan teknologi Augmented Reality untuk memperkaya pengalaman pengunjung, memungkinkan koleksi museum dieksplorasi secara lebih interaktif dan modern.',
    link: 'https://timesindonesia.co.id/wisata/161572/indonesian-heritage-museum-dilengkapi-augmented-reality',
  },
  {
    id: 7,
    title: 'Menelusuri 17 Zona Budaya di Indonesian Heritage Museum di Kota Batu, Jejak Peradaban Nusantara dari Zaman Batu hingga Peranakan',
    date: '2024',
    category: 'Education',
    image: '/images/news-7.jpg',
    excerpt: 'Jawa Pos mengajak pembaca menelusuri 17 zona budaya di Indonesian Heritage Museum, Kota Batu, yang merekam jejak peradaban Nusantara mulai dari zaman batu hingga era Peranakan.',
    link: 'https://www.jawapos.com/travelling/015910015/menelusuri-17-zona-budaya-di-indonesian-heritage-museum-di-kota-batu-jejak-peradaban-nusantara-dari-zaman-batu-hingga-peranakan',
  },
  {
    id: 8,
    title: 'Semangat Eksplor Indonesian Heritage Museum di Jatim Park 1 Sangat Luar Biasa, Pelajar Pancasila Wajib Datang!',
    category: 'Exhibition',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928714/screenshot-20201113-133811-gallery-6479bdd708a8b552583a76e3_l427th.webp',
    excerpt: 'Keindahan taman rekreasi Jatim Park 1 di Kota Batu, Jawa Timur, tidak terlepas dari keberadaan Indonesian Heritage Museum (IHM) sebagai wahana edukasi yang multikultur. Sebagai tempat hiburan terbaik suasana Jatim Park 1 sangat meriah dengan berbagai atraksi permainan, bahkan dikelilingi sejumlah wahana edukasi di dalam ruangan. Salah satunya Indonesian Heritage Museum yang menampilkan ribuan benda koleksi bersejarah dari seluruh penjuru Indonesia.  ',
  },
  {
    id: 9,
    title: 'Kajian Indonesian Heritage Museum : Sejarah Wayang Potehi',
    category: 'Research',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928951/1-649ec852e1a1676b31155872_y8trlr.webp',
    excerpt: 'Potehi berasal dari kata pou 布 (kain), te 袋 (kantong) dan hi 戯 (wayang). Wayang Potehi adalah wayang boneka yang terbuat dari kain. Sang dalang akan memasukkan tangan mereka ke dalam kain tersebut dan memainkannya layaknya wayang jenis lain. Kesenian ini sudah berumur sekitar 3.000 tahun dan berasal dari Tiongkok.',
  },
  {
    id: 10,
    title: 'Kajian Indonesian Heritage Museum: Topeng Jawa Timur',
    category: 'Education',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928712/1-649e9c984addee76a0426332_xdh14w.webp',
    excerpt: 'Topeng adalah benda yang dipakai di atas wajah. Biasanya topeng dipakai untuk mengiringi musik kesenian daerah. Topeng di kesenian daerah umumnya untuk menghormati sesembahan atau memperjelas watak dalam mengiringi kesenian. Bentuk topeng bermacam-macam ada yang menggambarkan watak marah, ada yang menggambarkan lembut, dan adapula yang menggambarkan kebijaksanaan.',
  },
  {
    id: 11,
    title: 'Mewujudkan 4 Motivasi Kunjungan Indonesian Heritage Museum yang Historikal',
    category: 'Conservation',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928712/ihmm3-64c8e1a108a8b564d002cda2_nyjcff.webp',
    excerpt: 'Kunjungan Indonesian Heritage Museum (IHM) di Jatim Park 1 sebagai pusat edukasi telah mewarnai wawasan nusantara bangsa kita. Seluruh pengunjung terutama usia anak-anak diajakserta berkenalan pada ribuan benda koleksi dari berbagai penjuru Nusantara. Disini pula motivasi anak dan remaja untuk memandang kekayaan artefak bangsanya terus bertumbuh seiring bimbingan guru hingga orangtua untuk berkunjung ke museum.',
  },
  {
    id: 12,
    title: 'Misteri Cucuran Darah di Balik Patung Letti 2000 Tahun yang Lalu, di Museum Indonesian Heritage',
    category: 'Announcement',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926890/5_r19bii.webp',
    excerpt: 'Indonesian Heritage Museum (IHM) di Jatim Park 1 memang memiliki keragaman artefak langka dari Sabang hingga Merauke. Namun salah satu artefak yang paling misterius adalah patung letti dari Kepulauan Yene, Maluku, Nusa Tenggara Timur. ',
  },
  {
    id: 13,
    title: 'New Indonesian Heritage Museum JTP 1 with ASG Tour Technology (English Ver.)',
    category: 'Exhibition',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928713/Patung-Loro-Blonyo-dari-Jawa-Tengah-dipercaya-sebagai-patung-keberuntungan-1024x683-1_n1fmdr.webp',
    excerpt: 'Batu, SERU.co.id – Entering the Eid holiday, Jawa Timur Park (JTP) Group again adds services to its loyal visitors. Along with the increasingly vibrant digitalization era, JTP Group management has also adapted by making new breakthroughs. Visitors can still enjoy all facilities practically digitally.',
  },
];

export default function News() {
  const lang = useUiLang();
  const ui = UI[lang];
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Exhibition: 'bg-[#8C6B3E]',
      Research: 'bg-[#A47E4F]',
      Education: 'bg-[#8C6B3E]',
      Conservation: 'bg-[#A47E4F]',
      Event: 'bg-[#8C6B3E]',
      Announcement: 'bg-[#A47E4F]',
      Technology: 'bg-[#8C6B3E]',
    };
    return colors[category] || 'bg-[#8C6B3E]';
  };

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            {ui.title}
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            {ui.intro}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article) => {
            const cardClass =
              'block bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2';
            const content = (
              <>
                <div className="h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 ${getCategoryColor(article.category)} text-white text-xs rounded-full`}>
                      {article.category}
                    </span>
                    {article.date && (
                      <div className="flex items-center gap-1 text-[#8C6B3E] text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    )}
                  </div>
                  <h2 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  {article.link && (
                    <div className="mt-4 flex items-center gap-1 text-[#8C6B3E] text-sm font-medium">
                      <span>{ui.readMore}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </>
            );

            return article.link ? (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {content}
              </a>
            ) : (
              <article key={article.id} className={cardClass}>
                {content}
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded border border-[#C8B9A6] text-[#8C6B3E] hover:bg-[#E7DED0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded ${
                    currentPage === page
                      ? 'bg-[#8C6B3E] text-white'
                      : 'bg-white border border-[#C8B9A6] text-[#2B2B2B] hover:bg-[#E7DED0]'
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded border border-[#C8B9A6] text-[#8C6B3E] hover:bg-[#E7DED0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
