import { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

type EventStatus = 'Upcoming' | 'Ongoing' | 'Past';

interface MuseumEvent {
  id: number;
  title: string;
  status: EventStatus;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
}

const events: MuseumEvent[] = [
  {
    id: 1,
    title: 'Pameran Warisan Nusantara',
    status: 'Upcoming',
    date: 'June 12, 2026',
    time: '09:00 - 17:00 WIB',
    location: 'Indonesian Heritage Museum, Jatim Park 1',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928714/screenshot-20201113-133811-gallery-6479bdd708a8b552583a76e3_l427th.webp',
    description: 'Pameran khusus yang menampilkan koleksi artefak pilihan dari berbagai daerah di Indonesia, lengkap dengan pemandu interaktif dan sesi diskusi budaya bersama kurator museum.',
  },
  {
    id: 2,
    title: 'Workshop Membatik untuk Keluarga',
    status: 'Upcoming',
    date: 'May 31, 2026',
    time: '10:00 - 13:00 WIB',
    location: 'Education Hall, Indonesian Heritage Museum',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928712/1-649e9c984addee76a0426332_xdh14w.webp',
    description: 'Kegiatan edukatif bagi pengunjung keluarga untuk mengenal teknik membatik tradisional secara langsung, dibimbing oleh pengrajin batik berpengalaman.',
  },
  {
    id: 3,
    title: 'Pertunjukan Wayang Potehi',
    status: 'Ongoing',
    date: 'May 10 - 20, 2026',
    time: '14:00 - 16:00 WIB',
    location: 'Indonesian Heritage Museum, Jatim Park 1',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928951/1-649ec852e1a1676b31155872_y8trlr.webp',
    description: 'Pementasan wayang potehi yang menampilkan kesenian tradisional peranakan Tionghoa-Indonesia, sebuah pertunjukan budaya yang telah berumur ribuan tahun.',
  },
  {
    id: 4,
    title: 'Festival Edukasi Budaya Pelajar',
    status: 'Past',
    date: 'March 1, 2026',
    time: '08:00 - 15:00 WIB',
    location: 'Jatim Park 1, Kota Batu',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928712/ihmm3-64c8e1a108a8b564d002cda2_nyjcff.webp',
    description: 'Festival yang diikuti oleh ratusan pelajar untuk mengeksplorasi koleksi museum, dengan rangkaian kuis budaya, tur berpemandu, dan kegiatan kreatif bertema warisan Nusantara.',
  },
  {
    id: 5,
    title: 'Kajian Topeng Jawa Timur',
    status: 'Past',
    date: 'February 10, 2026',
    time: '13:00 - 15:00 WIB',
    location: 'Indonesian Heritage Museum, Jatim Park 1',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928712/1-649e9c984addee76a0426332_xdh14w.webp',
    description: 'Diskusi dan kajian mendalam mengenai ragam topeng Jawa Timur, makna filosofis, serta perannya dalam kesenian dan upacara adat masyarakat.',
  },
];

const statusColor: Record<EventStatus, string> = {
  Upcoming: 'bg-[#8C6B3E]',
  Ongoing: 'bg-[#A47E4F]',
  Past: 'bg-[#5A5A5A]',
};

export default function Event() {
  const [filter, setFilter] = useState<'All' | EventStatus>('All');

  const filters: Array<'All' | EventStatus> = ['All', 'Upcoming', 'Ongoing', 'Past'];

  const filteredEvents =
    filter === 'All' ? events : events.filter((e) => e.status === filter);

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Museum Events
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Temukan berbagai kegiatan dan acara yang diikuti maupun
            diselenggarakan sendiri oleh Indonesian Heritage Museum, mulai dari
            pameran, workshop, hingga pertunjukan budaya.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded transition-all ${
                filter === f
                  ? 'bg-[#8C6B3E] text-white shadow-lg'
                  : 'bg-white text-[#2B2B2B] border border-[#C8B9A6] hover:bg-[#E7DED0]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <p className="text-center text-[#5A5A5A]">
            Tidak ada acara pada kategori ini.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 ${statusColor[event.status]} text-white text-xs rounded-full`}
                  >
                    {event.status}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3 line-clamp-2">
                    {event.title}
                  </h2>
                  <div className="space-y-2 mb-4 text-sm text-[#8C6B3E]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
