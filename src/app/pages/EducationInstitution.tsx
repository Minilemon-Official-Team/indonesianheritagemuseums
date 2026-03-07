import { useEffect } from 'react';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

export default function EducationInstitution() {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      title: 'Siswa SMK Antusias Belajar Sejarah di Indonesian Heritage Museum',
      description: 'Para siswa SMK menunjukkan antusiasme tinggi dalam mempelajari sejarah dan budaya Indonesia melalui koleksi museum yang lengkap dan metode pembelajaran yang interaktif.',
    },
    {
      id: 2,
      title: 'Kunjungan Edukatif SMP Membuka Wawasan Budaya Nusantara',
      description: 'Siswa-siswi SMP mendapatkan pengalaman edukatif yang berharga tentang keragaman budaya Indonesia dan nilai-nilai sejarah yang terkandung dalam setiap koleksi.',
    },
    {
      id: 3,
      title: 'Program Study Tour SD Memberikan Pembelajaran Bermakna',
      description: 'Anak-anak sekolah dasar belajar dengan cara yang menyenangkan tentang warisan budaya Indonesia, membuat pembelajaran sejarah menjadi lebih menarik dan mudah dipahami.',
    },
    {
      id: 4,
      title: 'Mahasiswa Universitas Meneliti Koleksi Bersejarah',
      description: 'Mahasiswa dari berbagai universitas memanfaatkan museum sebagai sumber penelitian untuk memahami lebih dalam tentang peradaban dan kebudayaan Indonesia.',
    },
    {
      id: 5,
      title: 'Guru-Guru Apresiasi Fasilitas Edukatif Museum',
      description: 'Para pendidik memberikan apresiasi tinggi terhadap fasilitas dan program edukatif museum yang mendukung pembelajaran sejarah dan budaya di luar kelas.',
    },
    {
      id: 6,
      title: 'Pesantren Belajar Sejarah Islam Nusantara',
      description: 'Santri dan pengajar pesantren mempelajari sejarah penyebaran Islam di Nusantara melalui artefak dan koleksi yang tersimpan di museum.',
    },
    {
      id: 7,
      title: 'Sekolah Internasional Kenalkan Budaya Indonesia',
      description: 'Siswa sekolah internasional mendapatkan kesempatan mengenal lebih dekat budaya Indonesia melalui tur edukatif yang dirancang khusus.',
    },
    {
      id: 8,
      title: 'TK dan PAUD Belajar Sambil Bermain',
      description: 'Anak-anak usia dini diperkenalkan dengan budaya Indonesia melalui metode pembelajaran yang menyenangkan dan sesuai dengan usia mereka.',
    },
    {
      id: 9,
      title: 'Kunjungan Sekolah Luar Negeri Kagum dengan Koleksi',
      description: 'Siswa dari luar negeri terkesan dengan kekayaan budaya Indonesia yang dipamerkan dan mendapatkan pemahaman baru tentang peradaban Nusantara.',
    },
    {
      id: 10,
      title: 'Program Magang Mahasiswa di Museum',
      description: 'Mahasiswa mendapatkan pengalaman praktis dalam bidang kurasi, preservasi, dan edukasi museum melalui program magang yang terstruktur.',
    },
    {
      id: 11,
      title: 'Seminar Pendidikan Sejarah untuk Guru',
      description: 'Museum menyelenggarakan seminar khusus untuk guru-guru sejarah, meningkatkan kapasitas pengajaran dengan pendekatan berbasis koleksi museum.',
    },
    {
      id: 12,
      title: 'Workshop Pembelajaran Interaktif untuk Siswa',
      description: 'Siswa mengikuti workshop interaktif yang menggabungkan teknologi augmented reality dengan pembelajaran sejarah tradisional.',
    },
    {
      id: 13,
      title: 'Kolaborasi Museum dengan Institusi Pendidikan',
      description: 'Museum menjalin kemitraan dengan berbagai institusi pendidikan untuk menciptakan program edukatif yang berkelanjutan.',
    },
    {
      id: 14,
      title: 'Kunjungan Rutin Sekolah Menjadi Tradisi Belajar',
      description: 'Banyak sekolah menjadikan kunjungan ke museum sebagai agenda rutin tahunan untuk memperkaya pembelajaran sejarah dan budaya.',
    },
    {
      id: 15,
      title: 'Siswa Berkebutuhan Khusus Mendapat Perhatian Spesial',
      description: 'Museum menyediakan program khusus dan aksesibilitas yang memadai untuk siswa berkebutuhan khusus, memastikan semua dapat belajar dengan nyaman.',
    },
    {
      id: 16,
      title: 'Program Field Trip Memperkaya Kurikulum Sekolah',
      description: 'Kunjungan field trip ke museum menjadi bagian integral dari kurikulum sekolah, memperkaya pembelajaran dengan pengalaman langsung.',
    },
    {
      id: 17,
      title: 'Kompetisi Pengetahuan Sejarah antar Sekolah',
      description: 'Museum menyelenggarakan kompetisi pengetahuan sejarah yang diikuti berbagai sekolah, meningkatkan minat siswa pada sejarah Indonesia.',
    },
    {
      id: 18,
      title: 'Pembelajaran Berbasis Proyek di Museum',
      description: 'Siswa mengerjakan proyek pembelajaran berbasis penelitian di museum, mengembangkan keterampilan riset dan analisis sejarah.',
    },
    {
      id: 19,
      title: 'Testimoni Kepala Sekolah tentang Nilai Edukatif',
      description: 'Para kepala sekolah memberikan testimoni positif tentang nilai edukatif yang tinggi dari program-program museum.',
    },
    {
      id: 20,
      title: 'Generasi Muda Cinta Budaya Indonesia',
      description: 'Melalui program edukatif museum, generasi muda semakin mencintai dan menghargai kekayaan budaya Indonesia.',
    },
  ];

  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#8C6B3E] text-white py-32 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6">
            Educational Institution
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Pengalaman Edukatif dari Institusi Pendidikan
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Indonesian Heritage Museum telah menjadi mitra edukatif bagi berbagai institusi pendidikan, dari tingkat PAUD hingga perguruan tinggi. Museum ini menyediakan program pembelajaran yang terstruktur dan interaktif, membantu siswa dan mahasiswa memahami sejarah dan budaya Indonesia dengan cara yang menarik dan mendalam.
          </p>
          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Dengan koleksi yang autentik dan metode pembelajaran yang inovatif, museum ini telah menjadi destinasi favorit untuk kegiatan study tour, field trip, dan program edukatif lainnya. Testimoni dari berbagai institusi menunjukkan dampak positif kunjungan museum terhadap pemahaman dan apresiasi siswa terhadap warisan budaya Indonesia.
          </p>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="bg-[#E7DED0] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Program Terstruktur</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Program edukatif yang disesuaikan dengan kurikulum dan kebutuhan setiap tingkat pendidikan
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Pembelajaran Aktif</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Metode pembelajaran interaktif yang melibatkan siswa secara aktif dalam eksplorasi budaya
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Kemitraan Edukatif</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Kolaborasi berkelanjutan dengan institusi pendidikan untuk program jangka panjang
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-[#E7DED0]'
              } rounded shadow-md overflow-hidden`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* TikTok Embed Placeholder */}
                <div className="bg-[#2B2B2B] rounded flex items-center justify-center min-h-[400px]">
                  <div className="text-center text-white p-8">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <p className="text-sm opacity-75">TikTok Video Placeholder</p>
                    <p className="text-xs opacity-50 mt-2">@indonesianheritage</p>
                    <p className="text-xs opacity-50 mt-1">Video #{testimonial.id}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-[#8C6B3E] font-medium mb-3">
                    Testimoni Institusi #{testimonial.id}
                  </div>
                  <h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-6">
                    {testimonial.title}
                  </h3>
                  <div className="border-l-4 border-[#8C6B3E] pl-6">
                    <p className="text-[#2B2B2B] leading-relaxed italic">
                      "{testimonial.description}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#8C6B3E] text-white py-16 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Cinzel'] text-3xl md:text-4xl mb-6">
            Ajak Institusi Anda Berkunjung
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Hubungi kami untuk mengatur program edukatif khusus untuk institusi pendidikan Anda
          </p>
          <a
            href="/visit"
            className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6] transition-all shadow-lg"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
