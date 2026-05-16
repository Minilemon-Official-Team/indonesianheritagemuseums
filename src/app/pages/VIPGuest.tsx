import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X, ZoomIn } from 'lucide-react';

interface VIPVisit {
  id: number;
  name: string;
  occasion: string;
  date: string;
  image: string;
  description: string;
}

const vipVisits: VIPVisit[] = [
  {
    id: 1,
    name: 'Kunjungan Delegasi Pendidikan',
    occasion: 'Kunjungan Resmi',
    date: 'March 2026',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928714/screenshot-20201113-133811-gallery-6479bdd708a8b552583a76e3_l427th.webp',
    description: 'Kunjungan delegasi pendidikan untuk meninjau program edukasi budaya di Indonesian Heritage Museum.',
  },
  {
    id: 2,
    name: 'Tamu Kehormatan Festival Budaya',
    occasion: 'Kegiatan Khusus',
    date: 'February 2026',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928951/1-649ec852e1a1676b31155872_y8trlr.webp',
    description: 'Tamu kehormatan menghadiri pembukaan festival budaya yang diselenggarakan oleh museum.',
  },
  {
    id: 3,
    name: 'Kunjungan Tokoh Pelestari Budaya',
    occasion: 'Kunjungan Resmi',
    date: 'January 2026',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928712/1-649e9c984addee76a0426332_xdh14w.webp',
    description: 'Tokoh pelestari budaya berkunjung untuk berdiskusi mengenai upaya konservasi warisan Nusantara.',
  },
  {
    id: 4,
    name: 'Rombongan Mitra Institusi',
    occasion: 'Kerja Sama',
    date: 'December 2025',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928712/ihmm3-64c8e1a108a8b564d002cda2_nyjcff.webp',
    description: 'Rombongan mitra institusi melakukan kunjungan dalam rangka penjajakan kerja sama program edukasi.',
  },
  {
    id: 5,
    name: 'Tamu VIP Peresmian Pameran',
    occasion: 'Kegiatan Khusus',
    date: 'November 2025',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772928713/Patung-Loro-Blonyo-dari-Jawa-Tengah-dipercaya-sebagai-patung-keberuntungan-1024x683-1_n1fmdr.webp',
    description: 'Tamu VIP menghadiri peresmian pameran koleksi terbaru Indonesian Heritage Museum.',
  },
  {
    id: 6,
    name: 'Kunjungan Komunitas Sejarah',
    occasion: 'Kunjungan Resmi',
    date: 'October 2025',
    image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772926892/7_vpirjo.webp',
    description: 'Komunitas sejarah berkunjung untuk mempelajari koleksi naskah dan artefak bersejarah museum.',
  },
];

export default function VIPGuest() {
  const [selectedVisit, setSelectedVisit] = useState<VIPVisit | null>(null);

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            VIP Guest
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Dokumentasi foto kunjungan tamu istimewa (VIP) di Indonesian
            Heritage Museum, baik dalam kunjungan resmi maupun pada
            kegiatan-kegiatan tertentu yang diselenggarakan museum.
          </p>
        </div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="24px">
          {vipVisits.map((visit) => (
            <div
              key={visit.id}
              className="group relative overflow-hidden rounded shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedVisit(visit)}
            >
              <img
                src={visit.image}
                alt={visit.name}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-[#8C6B3E] text-xs rounded-full mb-2">
                    {visit.occasion}
                  </span>
                  <h3 className="font-['Cinzel'] text-xl mb-1">{visit.name}</h3>
                  <p className="text-sm text-white/90">{visit.date}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Lightbox Modal */}
        {selectedVisit && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedVisit(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedVisit(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedVisit.image}
                alt={selectedVisit.name}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-white text-center">
                <span className="inline-block px-4 py-2 bg-[#8C6B3E] rounded-full text-sm mb-3">
                  {selectedVisit.occasion}
                </span>
                <h2 className="font-['Cinzel'] text-3xl mb-2">
                  {selectedVisit.name}
                </h2>
                <p className="text-white/70 mb-2">{selectedVisit.date}</p>
                <p className="text-white/80 text-lg">
                  {selectedVisit.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
