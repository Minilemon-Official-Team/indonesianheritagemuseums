import { useState } from 'react';
import { X, Crown } from 'lucide-react';

interface VIPGuest {
  id: number;
  name: string;
  role: string;
  category: string;
  image: string;
  description: string;
}

const placeholders = [
  '/images/news-1.jpg',
  '/images/news-2.jpg',
  '/images/news-3.webp',
  '/images/news-4.jpg',
  '/images/news-5.jpg',
  '/images/news-6.webp',
  '/images/news-7.jpg',
  '/images/auto-tour.png',
];

const ph = (i: number) => placeholders[i % placeholders.length];

const guests: VIPGuest[] = [
  {
    id: 1,
    name: 'Duta Besar Thailand',
    role: 'Diplomat',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-1.jpg',
    description: 'Kunjungan kehormatan Duta Besar Thailand ke Indonesian Heritage Museum.',
  },
  {
    id: 2,
    name: 'Perdana Menteri Thailand',
    role: 'Kepala Pemerintahan',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-2.png',
    description: 'Kunjungan Perdana Menteri Thailand dalam rangka mengenal warisan budaya Nusantara.',
  },
  {
    id: 3,
    name: 'Fadli Zon',
    role: 'Menteri Kebudayaan RI',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-3.jpg',
    description: 'Kunjungan Menteri Kebudayaan Republik Indonesia, Fadli Zon, ke Indonesian Heritage Museum.',
  },
  {
    id: 4,
    name: 'Fadli Zon di Indonesian Heritage Museum',
    role: 'Menteri Kebudayaan RI (2025)',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-4.jpg',
    description: 'Kunjungan Menteri Kebudayaan Fadli Zon ke Indonesian Heritage Museum pada tahun 2025.',
  },
  {
    id: 5,
    name: 'Ibu Ani Yudhoyono',
    role: 'Ibu Negara ke-6 RI',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-5.jpg',
    description: 'Kunjungan kehormatan Ibu Ani Yudhoyono ke Indonesian Heritage Museum.',
  },
  {
    id: 6,
    name: 'Jero Wacik',
    role: 'Mantan Menteri Kebudayaan & Pariwisata',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-6.jpg',
    description: 'Kunjungan Bapak Jero Wacik, mantan Menteri Kebudayaan dan Pariwisata RI.',
  },
  {
    id: 7,
    name: 'Sapta Nirwandar',
    role: 'Tokoh Pariwisata Nasional',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-7.jpg',
    description: 'Kunjungan Bapak Sapta Nirwandar, tokoh pariwisata nasional, ke Indonesian Heritage Museum.',
  },
  {
    id: 8,
    name: 'Gusmardi Bustami',
    role: 'Tokoh',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-8.jpg',
    description: 'Kunjungan kehormatan Bapak Gusmardi Bustami ke Indonesian Heritage Museum.',
  },
  {
    id: 9,
    name: 'Bupati Hulu',
    role: 'Kepala Daerah',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-9.jpg',
    description: 'Kunjungan Bupati Hulu beserta rombongan ke Indonesian Heritage Museum.',
  },
  {
    id: 10,
    name: 'Ibu Boediono',
    role: 'Tamu Kehormatan',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-10.jpg',
    description: 'Kunjungan kehormatan Ibu Boediono ke Indonesian Heritage Museum.',
  },
  {
    id: 11,
    name: 'Ibu Miranda Gultom',
    role: 'Tamu Kehormatan',
    category: 'Pejabat & Diplomat',
    image: '/images/vip-11.jpg',
    description: 'Kunjungan kehormatan Ibu Miranda Gultom ke Indonesian Heritage Museum.',
  },
  {
    id: 12,
    name: 'Ari Lasso',
    role: 'Penyanyi',
    category: 'Tokoh & Seniman',
    image: ph(11),
    description: 'Kunjungan penyanyi ternama Ari Lasso ke Indonesian Heritage Museum.',
  },
  {
    id: 13,
    name: 'Cak Kandar',
    role: 'Seniman & Pelukis',
    category: 'Tokoh & Seniman',
    image: '/images/vip-13.jpg',
    description: 'Kunjungan seniman dan pelukis Cak Kandar ke Indonesian Heritage Museum.',
  },
  {
    id: 14,
    name: 'Ibu Dewi Motik',
    role: 'Tokoh Masyarakat',
    category: 'Tokoh & Seniman',
    image: '/images/vip-14.jpg',
    description: 'Kunjungan tokoh masyarakat Ibu Dewi Motik ke Indonesian Heritage Museum.',
  },
  {
    id: 15,
    name: 'Ibu Atalia Praratya',
    role: 'Tamu Kehormatan',
    category: 'Tokoh & Seniman',
    image: '/images/vip-15.jpeg',
    description: 'Kunjungan Ibu Atalia Praratya ke History of Sundaland Museum.',
  },
  {
    id: 16,
    name: 'ESSEC University',
    role: 'Delegasi Akademik',
    category: 'Institusi & Lainnya',
    image: '/images/vip-16.jpg',
    description: 'Kunjungan delegasi akademik ESSEC University ke Indonesian Heritage Museum.',
  },
  {
    id: 17,
    name: 'ISI Bali',
    role: 'Institut Seni Indonesia Bali',
    category: 'Institusi & Lainnya',
    image: '/images/vip-17.jpg',
    description: 'Kunjungan rombongan Institut Seni Indonesia (ISI) Bali ke Indonesian Heritage Museum.',
  },
  {
    id: 18,
    name: 'Founder Panorama Tour',
    role: 'Tokoh Pariwisata',
    category: 'Institusi & Lainnya',
    image: '/images/vip-18.jpg',
    description: 'Kunjungan Founder Panorama Tour ke Indonesian Heritage Museum.',
  },
  {
    id: 19,
    name: 'Ibu Okka',
    role: 'Tamu Kehormatan',
    category: 'Institusi & Lainnya',
    image: '/images/vip-19.jpg',
    description: 'Kunjungan kehormatan Ibu Okka ke Indonesian Heritage Museum.',
  },
  {
    id: 20,
    name: 'WNCH',
    role: 'Tamu Kehormatan',
    category: 'Institusi & Lainnya',
    image: '/images/vip-20.jpg',
    description: 'Kunjungan tamu kehormatan WNCH ke Indonesian Heritage Museum.',
  },
];

const categories = ['Semua', 'Pejabat & Diplomat', 'Tokoh & Seniman', 'Institusi & Lainnya'];

export default function VIPGuest() {
  const [selected, setSelected] = useState<VIPGuest | null>(null);
  const [filter, setFilter] = useState('Semua');

  const filtered =
    filter === 'Semua' ? guests : guests.filter((g) => g.category === filter);

  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      {/* HERO */}
      <div className="relative bg-[#8C6B3E] text-white py-28 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6">VIP Guest</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Dokumentasi kunjungan tamu istimewa &mdash; para pejabat, diplomat,
            tokoh, dan seniman yang pernah hadir di Indonesian Heritage Museum.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-16">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full transition-all ${
                filter === cat
                  ? 'bg-[#8C6B3E] text-white shadow-lg'
                  : 'bg-white text-[#2B2B2B] border border-[#C8B9A6] hover:bg-[#E7DED0]'
              }`}
            >
              {cat}
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
                  alt={guest.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-inset ring-[#8C6B3E]/40 transition-all"></div>
              </div>
              <div className="p-4 border-t-2 border-[#8C6B3E]">
                <h3 className="font-['Cinzel'] text-base text-[#2B2B2B] leading-snug line-clamp-2">
                  {guest.name}
                </h3>
                <p className="text-[#8C6B3E] text-sm mt-1">{guest.role}</p>
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
              alt={selected.name}
              className="w-full max-h-[65vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <span className="inline-block px-4 py-1.5 bg-[#8C6B3E] rounded-full text-sm mb-3">
                {selected.category}
              </span>
              <h3 className="font-['Cinzel'] text-2xl md:text-3xl mb-1">
                {selected.name}
              </h3>
              <p className="text-[#E7DED0] mb-3">{selected.role}</p>
              <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
