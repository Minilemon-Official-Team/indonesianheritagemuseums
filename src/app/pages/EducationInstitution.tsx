import { useEffect } from 'react';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

export default function EducationInstitution() {
  useEffect(() => {
  if (!window.tiktokEmbedLoaded) {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    window.tiktokEmbedLoaded = true;
  } else {
    if (window.tiktokEmbedLoad) {
      window.tiktokEmbedLoad();
    }
  }
}, []);

  const testimonials = [
    {
      id: 1,
      videoId: '7462238543105035536',
      title: 'Inilah Kesan Kepala Sekolah setelah Mengunjungi Indonesian Heritage Museum',
      description: 'Kepala Sekolah dari salah satu SMP Negeri Wonogiri mengatakan bahwa Indonesian Heritage Museum merupakan tempat yang sangat bermanfaat untuk menambah wawasan tentang budaya dan sejarah bangsa. Selain itu, museum ini juga dapat menumbuhkan rasa cinta tanah air pada generasi muda.',
     },
    {
          id: 2,
          videoId: '7456718063233158418',
          title: 'Pengalaman Berkesan Guru MTs Asal Malang di Indonesian Heritage Museum',
          description: 'Indonesian Heritage Museum, dengan koleksi yang sangat lengkap, dinilai oleh guru sebagai tempat belajar yang ideal untuk memperluas pengetahuan anak-anak.',
     },
    {
          id: 3,
          videoId: '7455641795221818642',
          title: 'Kesan dan Pesan Mahasiswi UGM Setelah Mengunjungi Indonesian Heritage Museum',
          description: 'Mahasiswi UGM ini menyampaikan kesannya setelah mengunjungi Indonesian Heritage Museum, di mana ia merasa terkesan dengan banyaknya pengetahuan yang didapatkan. Ia juga berpesan agar lebih banyak masyarakat memanfaatkan museum ini untuk menambah wawasan tentang sejarah dan budaya Indonesia.',
     },
    {
          id: 4,
          videoId: '7454081256171572486',
          title: 'Cerita Guru SMA di Sumenep: Pengalaman Berkesan di Museum Warisan Indonesia',
          description: 'Dalam video ini, Guru asal SMA di Sumenep menyebutkan bahwa Indonesian Heritage Museum merupakan tempat yang luar biasa karena mampu menyajikan kekayaan budaya Indonesia dengan sangat baik dan menarik.',
     },
    {
          id: 5,
          videoId: '7446342608315583752',
          title: 'Petualangan Seru Adik Kelas 6 SD di Indonesian Heritage Museum',
          description: 'Menurutnya bahwa sejarah yang diceritakan di Indonesian Heritage Museum sangat menarik, karena dijelaskan dengan cara yang penuh detail dan menyenangkan.',
     },
    {
          id: 6,
          videoId: '7438555262203546887',
          title: 'Pengalaman Edukatif SD asal Pasuruan di Indonesian Heritage Museum',
          description: 'Indonesian Heritage Museum memiliki koleksi budaya yang sangat beragam, mulai dari Papua, Kalimantan, hingga berbagai daerah lainnya di Indonesia. Museum ini juga menyimpan artefak-artefak bersejarah yang menggambarkan kekayaan dan keberagaman budaya nusantara.',
     },
    {
          id: 7,
          videoId: '7416667601687809298',
          title: 'Cerita Seru SMP dari Wonogiri saat Mengunjungi Indonesian Heritage Museum',
          description: 'Indonesian Heritage Museum memiliki berbagai koleksi menarik tentang sejarah dan budaya Indonesia yang dapat memperluas wawasan, terutama bagi para pelajar. Selain itu, pelayanan yang ramah dan sangat baik membuat kunjungan menjadi nyaman selama berada di museum.',
     },
    {
          id: 8,
          videoId: '7412573976636968208',
          title: 'Kesan Kunjungan dari SMP asal Mojokertoo di Indonesian Heritage Museum',
          description: 'Meskipun tidak mengunjungi daerahnya secara langsung, para siswa mendapatkan banyak pengalaman edukasi yang berharga tentang sejarah, budaya, dan adat istiadat dari berbagai daerah di Indonesia. Koleksi yang ada di Indonesian Heritage Museum memberikan wawasan mendalam yang memperkaya pengetahuan mereka tentang keberagaman nusantara.',
     },
    {
          id: 9,
          videoId: '7389969800685948180',
          title: 'Pengalaman Belajar Sejarah dari MTs asal Tuban di Indonesian Heritage Museum',
          description: 'Pengalaman kunjungan MTs Tuban di Indonesian Heritage Museum sangat bagus, di mana mereka dapat melihat berbagai artefak peninggalan sejarah yang mengedukasi. Koleksi artefak tersebut memberikan wawasan mendalam tentang sejarah dan budaya Indonesia, yang sangat bermanfaat untuk pembelajaran.',
     },
    {
          id: 10,
          videoId: '7388458706545020161',
          title: 'Kesan Edukatif Study Tour di Indonesian Heritage Museum',
          description: 'Kunjungan ke Indonesian Heritage Museum sangat mengesankan, karena anak-anak dapat memperoleh wawasan yang mendalam tentang sejarah, tradisi adat, dan budaya nusantara. Museum ini memberikan pengalaman belajar yang menyenangkan dan memperkaya pengetahuan tentang kekayaan budaya Indonesia.',
     },
    {
          id: 11,
          videoId: '7384394681901141266',
          title: 'Pengalaman Seru dan Edukatif bagi Siswa di Indonesian Heritage Museum',
          description: 'Museum ini memungkinkan siswa untuk melihat langsung berbagai budaya dan sejarah Indonesia. Koleksi barang peninggalan yang beragam menambah wawasan sekaligus memberikan pengalaman belajar yang menyenangkan.',
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
                <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="rounded overflow-hidden flex justify-center">
                  <blockquote
                    className="tiktok-embed"
                    cite={`https://www.tiktok.com/@indonesianheritage/video/${testimonial.videoId}`}
                    data-video-id={testimonial.videoId}
                    style={{ maxWidth: "605px", minWidth: "325px" }}
                  >
                    <section></section>
                  </blockquote>
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
