import { useState } from 'react';
import { X, Crown } from 'lucide-react';
import { useUiLang, UiLang } from '../i18n';

interface Tri {
  id: string;
  en: string;
  zh: string;
}

type CatKey = 'official' | 'figure' | 'institution';

interface VIPGuest {
  id: number;
  name: Tri;
  role: Tri;
  category: CatKey;
  image: string;
  description: Tri;
}

const UI = {
  id: {
    title: 'Tamu VIP',
    intro:
      'Dokumentasi kunjungan tamu istimewa — para pejabat, diplomat, tokoh, dan seniman yang pernah hadir di Indonesian Heritage Museum.',
    all: 'Semua',
  },
  en: {
    title: 'VIP Guest',
    intro:
      'A record of distinguished visits — the officials, diplomats, public figures, and artists who have visited Indonesian Heritage Museum.',
    all: 'All',
  },
  zh: {
    title: '贵宾',
    intro:
      '尊贵访客来访记录 — 曾莅临印度尼西亚遗产博物馆的官员、外交使节、名人及艺术家。',
    all: '全部',
  },
};

const CATEGORIES: Record<CatKey, Tri> = {
  official: {
    id: 'Pejabat & Diplomat',
    en: 'Officials & Diplomats',
    zh: '官员与外交使节',
  },
  figure: {
    id: 'Tokoh & Seniman',
    en: 'Public Figures & Artists',
    zh: '名人与艺术家',
  },
  institution: {
    id: 'Institusi & Lainnya',
    en: 'Institutions & Others',
    zh: '机构及其他',
  },
};

const tri = (id: string, en: string, zh: string): Tri => ({ id, en, zh });
const visitDesc = (subjectId: string, subjectEn: string, subjectZh: string): Tri => ({
  id: `Kunjungan ${subjectId} ke Indonesian Heritage Museum.`,
  en: `Visit by ${subjectEn} to Indonesian Heritage Museum.`,
  zh: `${subjectZh}莅临印度尼西亚遗产博物馆。`,
});

const guests: VIPGuest[] = [
  {
    id: 1,
    name: tri('Duta Besar Thailand', 'Ambassador of Thailand', '泰国大使'),
    role: tri('Diplomat', 'Diplomat', '外交使节'),
    category: 'official',
    image: '/images/vip-1.jpg',
    description: visitDesc('Duta Besar Thailand', 'the Ambassador of Thailand', '泰国大使'),
  },
  {
    id: 2,
    name: tri('Perdana Menteri Thailand', 'Prime Minister of Thailand', '泰国总理'),
    role: tri('Kepala Pemerintahan', 'Head of Government', '政府首脑'),
    category: 'official',
    image: '/images/vip-2.png',
    description: visitDesc(
      'Perdana Menteri Thailand',
      'the Prime Minister of Thailand',
      '泰国总理',
    ),
  },
  {
    id: 3,
    name: tri('Fadli Zon', 'Fadli Zon', 'Fadli Zon'),
    role: tri('Menteri Kebudayaan RI', 'Minister of Culture of Indonesia', '印尼文化部长'),
    category: 'official',
    image: '/images/vip-3.jpg',
    description: visitDesc('Fadli Zon', 'Fadli Zon', 'Fadli Zon'),
  },
  {
    id: 4,
    name: tri(
      'Fadli Zon di Indonesian Heritage Museum',
      'Fadli Zon at Indonesian Heritage Museum',
      'Fadli Zon 莅临遗产博物馆',
    ),
    role: tri(
      'Menteri Kebudayaan RI (2025)',
      'Minister of Culture of Indonesia (2025)',
      '印尼文化部长（2025）',
    ),
    category: 'official',
    image: '/images/vip-4.jpg',
    description: tri(
      'Kunjungan Menteri Kebudayaan Fadli Zon ke Indonesian Heritage Museum pada tahun 2025.',
      'Visit by Minister of Culture Fadli Zon to Indonesian Heritage Museum in 2025.',
      '文化部长 Fadli Zon 于 2025 年莅临印度尼西亚遗产博物馆。',
    ),
  },
  {
    id: 5,
    name: tri('Ibu Ani Yudhoyono', 'Mrs. Ani Yudhoyono', 'Ani Yudhoyono 女士'),
    role: tri('Ibu Negara ke-6 RI', '6th First Lady of Indonesia', '印尼第六任第一夫人'),
    category: 'official',
    image: '/images/vip-5.jpg',
    description: visitDesc('Ibu Ani Yudhoyono', 'Mrs. Ani Yudhoyono', 'Ani Yudhoyono 女士'),
  },
  {
    id: 6,
    name: tri('Jero Wacik', 'Jero Wacik', 'Jero Wacik'),
    role: tri(
      'Mantan Menteri Kebudayaan & Pariwisata',
      'Former Minister of Culture & Tourism',
      '前文化与旅游部长',
    ),
    category: 'official',
    image: '/images/vip-6.jpg',
    description: visitDesc('Bapak Jero Wacik', 'Mr. Jero Wacik', 'Jero Wacik 先生'),
  },
  {
    id: 7,
    name: tri('Sapta Nirwandar', 'Sapta Nirwandar', 'Sapta Nirwandar'),
    role: tri(
      'Tokoh Pariwisata Nasional',
      'National Tourism Figure',
      '国家旅游界人士',
    ),
    category: 'official',
    image: '/images/vip-7.jpg',
    description: visitDesc('Bapak Sapta Nirwandar', 'Mr. Sapta Nirwandar', 'Sapta Nirwandar 先生'),
  },
  {
    id: 8,
    name: tri('Gusmardi Bustami', 'Gusmardi Bustami', 'Gusmardi Bustami'),
    role: tri('Tokoh', 'Public Figure', '知名人士'),
    category: 'official',
    image: '/images/vip-8.jpg',
    description: visitDesc('Bapak Gusmardi Bustami', 'Mr. Gusmardi Bustami', 'Gusmardi Bustami 先生'),
  },
  {
    id: 9,
    name: tri('Bupati Hulu', 'Regent of Hulu', 'Hulu 县长'),
    role: tri('Kepala Daerah', 'Regional Head', '地方首长'),
    category: 'official',
    image: '/images/vip-9.jpg',
    description: visitDesc(
      'Bupati Hulu beserta rombongan',
      'the Regent of Hulu and delegation',
      'Hulu 县长及随行人员',
    ),
  },
  {
    id: 10,
    name: tri('Ibu Boediono', 'Mrs. Boediono', 'Boediono 女士'),
    role: tri('Tamu Kehormatan', 'Honoured Guest', '贵宾'),
    category: 'official',
    image: '/images/vip-10.jpg',
    description: visitDesc('Ibu Boediono', 'Mrs. Boediono', 'Boediono 女士'),
  },
  {
    id: 11,
    name: tri('Ibu Miranda Gultom', 'Mrs. Miranda Gultom', 'Miranda Gultom 女士'),
    role: tri('Tamu Kehormatan', 'Honoured Guest', '贵宾'),
    category: 'official',
    image: '/images/vip-11.jpg',
    description: visitDesc('Ibu Miranda Gultom', 'Mrs. Miranda Gultom', 'Miranda Gultom 女士'),
  },
  {
    id: 12,
    name: tri('Ari Lasso', 'Ari Lasso', 'Ari Lasso'),
    role: tri('Penyanyi', 'Singer', '歌手'),
    category: 'figure',
    image: '/images/news-1.jpg',
    description: visitDesc('penyanyi ternama Ari Lasso', 'renowned singer Ari Lasso', '著名歌手 Ari Lasso'),
  },
  {
    id: 13,
    name: tri('Cak Kandar', 'Cak Kandar', 'Cak Kandar'),
    role: tri('Seniman & Pelukis', 'Artist & Painter', '艺术家与画家'),
    category: 'figure',
    image: '/images/vip-13.jpg',
    description: visitDesc(
      'seniman dan pelukis Cak Kandar',
      'artist and painter Cak Kandar',
      '艺术家及画家 Cak Kandar',
    ),
  },
  {
    id: 14,
    name: tri('Ibu Dewi Motik', 'Mrs. Dewi Motik', 'Dewi Motik 女士'),
    role: tri('Tokoh Masyarakat', 'Community Figure', '社会知名人士'),
    category: 'figure',
    image: '/images/vip-14.jpg',
    description: visitDesc(
      'tokoh masyarakat Ibu Dewi Motik',
      'community figure Mrs. Dewi Motik',
      '社会知名人士 Dewi Motik 女士',
    ),
  },
  {
    id: 15,
    name: tri('Ibu Atalia Praratya', 'Mrs. Atalia Praratya', 'Atalia Praratya 女士'),
    role: tri('Tamu Kehormatan', 'Honoured Guest', '贵宾'),
    category: 'figure',
    image: '/images/vip-15.jpeg',
    description: tri(
      'Kunjungan Ibu Atalia Praratya ke History of Sundaland Museum.',
      'Visit by Mrs. Atalia Praratya to the History of Sundaland Museum.',
      'Atalia Praratya 女士莅临巽他古陆历史博物馆。',
    ),
  },
  {
    id: 16,
    name: tri('ESSEC University', 'ESSEC University', 'ESSEC 大学'),
    role: tri('Delegasi Akademik', 'Academic Delegation', '学术代表团'),
    category: 'institution',
    image: '/images/vip-16.jpg',
    description: visitDesc(
      'delegasi akademik ESSEC University',
      'the ESSEC University academic delegation',
      'ESSEC 大学学术代表团',
    ),
  },
  {
    id: 17,
    name: tri('ISI Bali', 'ISI Bali', '巴厘艺术学院'),
    role: tri(
      'Institut Seni Indonesia Bali',
      'Indonesian Institute of the Arts, Bali',
      '印度尼西亚巴厘艺术学院',
    ),
    category: 'institution',
    image: '/images/vip-17.jpg',
    description: visitDesc(
      'rombongan Institut Seni Indonesia (ISI) Bali',
      'the Indonesian Institute of the Arts (ISI) Bali delegation',
      '印度尼西亚巴厘艺术学院（ISI）代表团',
    ),
  },
  {
    id: 18,
    name: tri('Founder Panorama Tour', 'Founder of Panorama Tour', 'Panorama Tour 创始人'),
    role: tri('Tokoh Pariwisata', 'Tourism Figure', '旅游界人士'),
    category: 'institution',
    image: '/images/vip-18.jpg',
    description: visitDesc(
      'Founder Panorama Tour',
      'the Founder of Panorama Tour',
      'Panorama Tour 创始人',
    ),
  },
  {
    id: 19,
    name: tri('Ibu Okka', 'Mrs. Okka', 'Okka 女士'),
    role: tri('Tamu Kehormatan', 'Honoured Guest', '贵宾'),
    category: 'institution',
    image: '/images/vip-19.jpg',
    description: visitDesc('Ibu Okka', 'Mrs. Okka', 'Okka 女士'),
  },
  {
    id: 20,
    name: tri('WNCH', 'WNCH', 'WNCH'),
    role: tri('Tamu Kehormatan', 'Honoured Guest', '贵宾'),
    category: 'institution',
    image: '/images/vip-20.jpg',
    description: visitDesc('tamu kehormatan WNCH', 'honoured guest WNCH', '贵宾 WNCH'),
  },
];

export default function VIPGuest() {
  const lang: UiLang = useUiLang();
  const ui = UI[lang];
  const [selected, setSelected] = useState<VIPGuest | null>(null);
  const [filter, setFilter] = useState<'all' | CatKey>('all');

  const filterButtons: Array<{ key: 'all' | CatKey; label: string }> = [
    { key: 'all', label: ui.all },
    { key: 'official', label: CATEGORIES.official[lang] },
    { key: 'figure', label: CATEGORIES.figure[lang] },
    { key: 'institution', label: CATEGORIES.institution[lang] },
  ];

  const filtered =
    filter === 'all' ? guests : guests.filter((g) => g.category === filter);

  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      {/* HERO */}
      <div className="relative bg-[#8C6B3E] text-white py-28 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6">{ui.title}</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">{ui.intro}</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-16">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterButtons.map((b) => (
            <button
              key={b.key}
              onClick={() => setFilter(b.key)}
              className={`px-6 py-3 rounded-full transition-all ${
                filter === b.key
                  ? 'bg-[#8C6B3E] text-white shadow-lg'
                  : 'bg-white text-[#2B2B2B] border border-[#C8B9A6] hover:bg-[#E7DED0]'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((guest) => (
            <button
              key={guest.id}
              onClick={() => setSelected(guest)}
              className="group text-left bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-[#E7DED0]">
                <img
                  src={guest.image}
                  alt={guest.name[lang]}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-inset ring-[#8C6B3E]/40 transition-all"></div>
              </div>
              <div className="p-4 border-t-2 border-[#8C6B3E]">
                <h3 className="font-['Cinzel'] text-base text-[#2B2B2B] leading-snug line-clamp-2">
                  {guest.name[lang]}
                </h3>
                <p className="text-[#8C6B3E] text-sm mt-1">{guest.role[lang]}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selected.image}
              alt={selected.name[lang]}
              className="w-full max-h-[65vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <span className="inline-block px-4 py-1.5 bg-[#8C6B3E] rounded-full text-sm mb-3">
                {CATEGORIES[selected.category][lang]}
              </span>
              <h3 className="font-['Cinzel'] text-2xl md:text-3xl mb-1">
                {selected.name[lang]}
              </h3>
              <p className="text-[#E7DED0] mb-3">{selected.role[lang]}</p>
              <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
                {selected.description[lang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
