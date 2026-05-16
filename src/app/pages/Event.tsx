import { MapPin } from 'lucide-react';

interface MuseumEvent {
  id: number;
  title: string;
  year: string;
  location: string;
  image: string;
  description: string;
}

const events: MuseumEvent[] = [
  {
    id: 1,
    title: "d'Topeng Bp Reno – Sebagai Pembicara Museum",
    year: '2017',
    location: 'Indonesian Heritage Museum',
    image: '/images/event-1.png',
    description:
      'Pendiri d’Topeng Kingdom tampil sebagai pembicara dalam forum permuseuman, berbagi wawasan mengenai pengelolaan, kurasi, dan pelestarian koleksi warisan budaya Nusantara.',
  },
  {
    id: 2,
    title: 'Dtopeng Kingdom Event – Gong Xi Fat Cai',
    year: '',
    location: 'Indonesian Heritage Museum',
    image: '/images/event-2.jpg',
    description:
      'Perayaan Tahun Baru Imlek di lingkungan museum, menghadirkan nuansa budaya Tionghoa-Indonesia melalui dekorasi, pertunjukan, dan kegiatan bertema Peranakan.',
  },
  {
    id: 3,
    title: 'Dtopeng Kingdom Event – Grand City Surabaya',
    year: '',
    location: 'Grand City, Surabaya',
    image: '/images/event-3.jpg',
    description:
      'Partisipasi d’Topeng Kingdom dalam kegiatan pameran di Grand City Surabaya, memperkenalkan koleksi topeng dan artefak budaya kepada masyarakat kota.',
  },
  {
    id: 4,
    title: 'Dtopeng Kingdom Event – KTT ASEAN Summit Bali',
    year: '',
    location: 'Bali',
    image: '/images/event-4.jpg',
    description:
      'd’Topeng Kingdom turut hadir menampilkan kekayaan budaya Indonesia pada rangkaian KTT ASEAN Summit di Bali, memperkenalkan warisan Nusantara di panggung internasional.',
  },
  {
    id: 5,
    title: 'Dtopeng Kingdom Event – LSCAC',
    year: '',
    location: 'Indonesian Heritage Museum',
    image: '/images/event-5.jpg',
    description:
      'Keikutsertaan museum dalam konferensi LSCAC (Language, Society and Culture in Asian Contexts), mempertemukan budaya dan akademisi dalam diskusi lintas negara.',
  },
  {
    id: 6,
    title: 'Dtopeng Kingdom Event – Museum 10 November Surabaya',
    year: '',
    location: 'Museum 10 November, Surabaya',
    image: '/images/event-6.jpg',
    description:
      'Kolaborasi dan kegiatan bersama Museum 10 November Surabaya dalam rangka memperkuat jejaring permuseuman dan edukasi sejarah perjuangan bangsa.',
  },
  {
    id: 7,
    title: 'Dtopeng Kingdom Event – Museum Expo 2015',
    year: '2015',
    location: 'Indonesia',
    image: '/images/event-7.jpg',
    description:
      'Partisipasi d’Topeng Kingdom dalam Museum Expo 2015, ajang pameran bersama museum-museum di Indonesia untuk memperkenalkan koleksi unggulan kepada publik.',
  },
  {
    id: 8,
    title: 'Dtopeng Kingdom Event – Pameran LKS',
    year: '',
    location: 'Indonesian Heritage Museum',
    image: '/images/event-8.jpg',
    description:
      'd’Topeng Kingdom dalam ajang Pameran LKS (Lomba Kompetensi Siswa), mendukung kegiatan edukatif dan kreativitas pelajar melalui pengenalan warisan budaya.',
  },
  {
    id: 9,
    title: 'JB School Bali',
    year: '',
    location: 'Bali',
    image: '/images/event-9.jpg',
    description:
      'Program edukatif bersama JB School Bali, mengajak pelajar mengenal lebih dekat koleksi budaya dan sejarah Nusantara melalui kunjungan dan kegiatan interaktif.',
  },
  {
    id: 10,
    title: 'Dtopeng Kingdom Event – WNCH',
    year: '',
    location: 'Indonesian Heritage Museum',
    image: '/images/event-10.jpg',
    description:
      'Keikutsertaan d’Topeng Kingdom dalam kegiatan WNCH, memperkenalkan kekayaan koleksi dan warisan budaya Nusantara kepada para peserta dan pengunjung.',
  },
];

export default function Event() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Museum Events
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Jejak kegiatan dan acara yang diikuti maupun diselenggarakan oleh
            Indonesian Heritage Museum bersama d&rsquo;Topeng Kingdom, dari
            pameran hingga kolaborasi budaya di berbagai daerah.
          </p>
        </div>

        {/* Events list */}
        <div className="space-y-16">
          {events.map((event, index) => (
            <article
              key={event.id}
              className={`flex flex-col ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {event.year && (
                    <span className="absolute top-4 left-4 px-4 py-1.5 bg-[#8C6B3E] text-white font-['Cinzel'] text-sm rounded-full shadow">
                      {event.year}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 text-[#8C6B3E] text-sm mb-3">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{event.location}</span>
                </div>
                <h2 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-4 leading-snug">
                  {event.title}
                </h2>
                <div className="w-16 h-0.5 bg-[#C8B9A6] mb-4"></div>
                <p className="text-[#5A5A5A] leading-relaxed">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
