import { Cpu, Eye, Layers } from 'lucide-react';

const arItems = [
  {
    id: 1,
    title: 'Keseruan Anak-Anak Menikmati Augmented Reality (AR)',
    description:
      'Anak-anak terlihat sangat menikmati pengalaman baru dengan augmented reality di Indonesian Heritage Museum, menjelajahi sejarah Indonesia dengan cara yang lebih menyenangkan. Teknologi AR membawa anak-anak lebih dekat dengan koleksi museum, membuat pembelajaran jadi lebih interaktif dan penuh petualangan.',
  },
  {
    id: 2,
    title: 'Menghadirkan Sejarah yang Menarik untuk Anak-Anak dengan Augmented Reality',
    description:
      'Anak-anak bisa merasakan pengalaman yang berbeda saat sejarah Indonesia disajikan melalui augmented reality di museum ini. Dengan teknologi AR, mereka dapat berinteraksi langsung dengan berbagai elemen sejarah yang membuat pembelajaran jadi lebih menarik dan menyenangkan.',
  },
  {
    id: 3,
    title: 'Keseruan Pengunjung Menikmati Augmented Reality',
    description:
      'Pengunjung merasakan pengalaman seru saat menikmati teknologi augmented reality di Indonesian Heritage Museum, membawa mereka lebih dekat dengan kekayaan budaya Indonesia. Dengan interaksi yang imersif, AR memperkaya kunjungan mereka dan membuat setiap momen lebih menarik dan penuh pengetahuan.',
  },
  {
    id: 4,
    title: 'Pengalaman Imersif Pengunjung dengan Augmented Reality',
    description:
      'Pengunjung bisa merasakan pengalaman yang mendalam dan seru saat menjelajahi berbagai koleksi melalui teknologi augmented reality di museum ini. AR memberikan cara baru untuk belajar, menghidupkan sejarah dengan visual yang membuat setiap detail terasa lebih nyata dan menarik.',
  },
  {
    id: 5,
    title: 'Serunya Pengunjung Menjelajahi Dunia Wayang Melalui Augmented Reality',
    description:
      'Pengunjung merasakan pengalaman baru saat menjelajahi dunia wayang melalui augmented reality di Indonesian Heritage Museum. Teknologi ini memberikan perspektif yang berbeda, memungkinkan mereka melihat detail wayang dengan cara yang lebih imersif dan menarik.',
  },
  {
    id: 6,
    title: 'Menyusuri Jejak Sejarah Lewat Teknologi Augmented Reality',
    description:
      'Pengunjung diajak menyusuri jejak sejarah Indonesia dengan cara yang lebih interaktif melalui teknologi augmented reality di Indonesian Heritage Museum. AR memungkinkan mereka untuk melihat dan memahami setiap detail koleksi sejarah dengan cara yang lebih hidup dan mendalam.',
  },
  {
    id: 7,
    title: 'Koleksi Barang-Barang Perdagangan China di Nusantara Lewat Teknologi Augmented Reality (AR)',
    description:
      'Melalui augmented reality, pengunjung dapat mempelajari lebih dalam tentang koleksi barang-barang perdagangan China yang masuk ke Nusantara. Teknologi ini memberikan pengalaman visual yang menarik, membawa sejarah perdagangan tersebut ke dalam kehidupan nyata.',
  },
  {
    id: 8,
    title: 'Melihat Sejarah secara Interaktif Lewat Augmented Reality',
    description:
      'Pengunjung dapat merasakan sejarah Indonesia secara langsung melalui teknologi augmented reality. AR memberikan cara baru untuk memahami koleksi, menjadikannya lebih mudah diakses dan lebih menarik dengan tampilan yang lebih interaktif.',
  },
  {
    id: 9,
    title: 'Keseruan Pengunjung Memperagakan Augmented Reality',
    description:
      'Pengunjung terlibat dalam pengalaman seru memperagakan augmented reality di Indonesian Heritage Museum, menjelajahi budaya Indonesia dengan cara yang lebih interaktif. Teknologi ini memberi mereka kesempatan untuk merasakan seni dan sejarah secara langsung, menjadikan setiap kunjungan lebih menarik.',
  },
  {
    id: 10,
    title: 'Petualangan Interaktif Pengunjung dengan Augmented Reality',
    description:
      'Dengan augmented reality, pengunjung dapat merasakan pengalaman yang lebih hidup saat berinteraksi dengan koleksi di Indonesian Heritage Museum. Teknologi ini menciptakan petualangan baru yang membuat setiap objek terasa lebih dekat dan menarik untuk dijelajahi.',
  },
  {
    id: 11,
    title: 'Teknologi Augmented Reality Menghidupkan Rumah Adat',
    description:
      'Teknologi Augmented Reality (AR) di Indonesian Heritage Museum memungkinkan pengunjung melihat rumah adat Nusantara dalam bentuk digital yang interaktif. Dengan AR, mereka bisa mengeksplorasi struktur bangunan, material khas, dan filosofi budaya di balik setiap desain rumah adat.',
  },
  {
    id: 12,
    title: 'Menjelajahi Rumah Adat dengan Augmented Reality',
    description:
      'Teknologi Augmented Reality (AR) di Indonesian Heritage Museum menghadirkan pengalaman interaktif untuk mengeksplorasi rumah adat Nusantara. Pengunjung dapat melihat struktur bangunan secara virtual, memahami material yang digunakan, serta menggali makna budaya di balik desainnya.',
  },
  {
    id: 13,
    title: 'Mengenal Artefak Nusantara dengan Teknologi Augmented Reality',
    description:
      'Teknologi Augmented Reality (AR) di Indonesian Heritage Museum menghadirkan pengalaman interaktif dalam menjelajahi artefak bersejarah Nusantara. Pengunjung dapat melihat artefak dalam bentuk digital, memahami detail ukiran, bahan, dan makna budaya yang tersembunyi di balik setiap benda.',
  },
  {
    id: 14,
    title: 'Menghidupkan Tokoh Bersejarah dengan Augmented Reality',
    description:
      'Teknologi Augmented Reality (AR) di Indonesian Heritage Museum menghadirkan tokoh-tokoh bersejarah dalam bentuk digital yang interaktif. Pengunjung dapat melihat visualisasi 3D serta memahami peran penting yang mereka mainkan dalam sejarah Nusantara.',
  },
  {
    id: 15,
    title: 'Menghidupkan Kembali Kapal Ekspedisi Kuno dengan Augmented Reality',
    description:
      'Menggunakan teknologi Augmented Reality (AR), pengunjung dapat merasakan pengalaman visualisasi kapal ekspedisi kuno yang menjelajahi perairan Indonesia. Selain itu, mereka juga dapat mengeksplorasi desain kapal ekspedisi kuno dan melihat struktur yang digunakan untuk melintasi perairan Nusantara pada masa itu.',
  },
  {
    id: 16,
    title: 'Menghidupkan Peradaban Kuno dengan Teknologi Augmented Reality',
    description:
      'Teknologi AR menyajikan visualisasi dinamis yang menghidupkan kembali jejak peradaban kuno. Pengunjung dapat menyaksikan bagaimana artefak dan bangunan bersejarah tampil dalam bentuk aslinya.',
  },
  {
    id: 17,
    title: 'Melihat Zaman Prasejarah dengan Augmented Reality',
    description:
      'Augmented Reality membawa pengunjung menelusuri jejak manusia purba, memperlihatkan peninggalan bersejarah seperti alat-alat batu. Pengalaman ini menghidupkan masa lalu dengan cara yang seru dan imersif.',
  },
  {
    id: 18,
    title: 'Menelusuri Artefak Kuno dengan Augmented Reality',
    description:
      'Augmented Reality memungkinkan pengunjung mengeksplorasi artefak bersejarah secara detail, mengungkap bentuk asli dan kegunaannya di masa lampau. Teknologi ini membuat proses belajar menjadi lebih seru dan mendalam.',
  },
  {
    id: 19,
    title: 'Melihat Peradaban Manusia Melayu Indonesia Lewat Augmented Reality',
    description:
      'Pengunjung dapat menyelami sejarah melalui visualisasi manusia Melayu Indonesia yang ditampilkan secara interaktif. Detail visual yang kaya menghadirkan pengalaman yang membawa pengunjung lebih dekat ke masa lalu.',
  },
  {
    id: 20,
    title: 'Mengungkap Detail Artefak Kuno dengan Augmented Reality',
    description:
      'Visualisasi Augmented Reality memungkinkan pengunjung melihat artefak bersejarah dari berbagai sisi dan mengungkap detailnya secara langsung. Pengalaman ini memperkaya pemahaman tentang warisan budaya Indonesia.',
  },
  {
    id: 21,
    title: 'Menelusuri Rumah Adat Indonesia dengan Augmented Reality',
    description:
      'Teknologi AR menghadirkan visualisasi rumah adat secara detail, memperlihatkan struktur bangunan, material, dan filosofi di balik setiap elemen. Pengalaman ini membawa warisan arsitektur tradisional lebih dekat dan terasa nyata.',
  },
  {
    id: 22,
    title: 'Menjelajahi Koleksi Bersejarah dengan Teknologi Augmented Reality',
    description:
      'Pengunjung dapat mengeksplorasi koleksi budaya secara interaktif, mengamati detail artistik dan mendalami cerita di balik setiap artefak. Pengalaman ini membuat perjalanan mengenal warisan budaya menjadi lebih hidup dan berkesan.',
  },
  {
    id: 23,
    title: 'Menyelami Peradaban Masa Lalu dengan Teknologi Augmented Reality',
    description:
      'Teknologi AR membawa pengunjung menjelajahi kehidupan manusia purba secara visual dan interaktif. Setiap artefak dan situs bersejarah dihidupkan kembali, menghadirkan pengalaman belajar yang lebih seru dan berkesan.',
  },
  {
    id: 24,
    title: 'Menjelajahi Artefak Bersejarah Secara Interaktif di Indonesian Heritage Museum',
    description:
      'Dengan teknologi AR, pengunjung dapat mengamati artefak kuno secara lebih dekat, mengeksplorasi detail bentuk dan makna simboliknya. Pengalaman ini menghadirkan cara baru untuk memahami dan mengapresiasi warisan budaya.',
  },
  {
    id: 25,
    title: 'Mengungkap Peradaban Hindu di Nusantara dengan Teknologi Augmented Reality',
    description:
      'Dengan teknologi AR, pengunjung dapat melihat visualisasi bangunan kuno dari India serta menjelajahi bentuk dan desain arsitektur yang membawa pengaruh besar ke Nusantara.',
  },
  {
    id: 26,
    title: 'Melihat Candi Prambanan Lebih Dekat dengan Augmented Reality',
    description:
      'Di Indonesian Heritage Museum, teknologi Augmented Reality memungkinkan pengunjung menjelajahi replika Candi Prambanan dalam bentuk 3D yang interaktif. Pengalaman ini memberikan wawasan lebih mendalam mengenai sejarah dan keunikan arsitektur candi secara virtual.',
  },
  {
    id: 27,
    title: 'Visualisasi Panggung Wayang Potehi dengan Augmented Reality',
    description:
      'Teknologi AR menghadirkan replika digital panggung wayang potehi. Pengunjung dapat menjelajahi detail arsitektur panggung secara imersif dan memperkaya pemahaman tentang warisan budaya Tionghoa di Indonesia.',
  },
  {
    id: 28,
    title: 'Menelusuri Jejak Arsitektur Kuno India dengan Augmented Reality',
    description:
      'Teknologi AR membantu pengunjung melihat visualisasi bangunan bersejarah secara lebih nyata. Pengalaman ini memperlihatkan detail arsitektur yang mencerminkan kejayaan dan kearifan lokal peradaban India.',
  },
  {
    id: 29,
    title: 'Menelusuri Jejak Peradaban Kuno dengan Augmented Reality',
    description:
      'Teknologi AR membantu pengunjung melihat visualisasi situs bersejarah secara detail dan memperkenalkan perkembangan kehidupan masyarakat di masa lampau.',
  },
  {
    id: 30,
    title: 'Menjelajahi Warisan Budaya Indonesia dengan Augmented Reality',
    description:
      'Teknologi AR memungkinkan pengunjung melihat visualisasi bangunan, artefak, dan situs bersejarah secara lebih nyata. Pengalaman ini membuat proses belajar tentang warisan budaya Indonesia menjadi lebih menarik dan interaktif.',
  },
];

export default function MetaMuseum() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#8C6B3E] text-white py-32 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <Cpu className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6">
            Meta Museum
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Augmented Reality — Menjelajahi Warisan Budaya Indonesia Secara Interaktif
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Indonesian Heritage Museum menggabungkan teknologi augmented reality untuk memberikan pengalaman baru dalam menjelajahi kekayaan budaya Indonesia. Dengan AR, pengunjung dapat melihat koleksi museum secara lebih interaktif dan hidup.
          </p>
          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Teknologi ini membawa sejarah dan budaya Indonesia lebih dekat kepada pengunjung dengan cara yang menyenangkan.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="bg-[#E7DED0] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Teknologi AR</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Augmented Reality yang canggih menghidupkan koleksi museum dalam pengalaman visual 3D interaktif
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Pengalaman Imersif</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Setiap artefak dan situs bersejarah dihidupkan kembali dengan cara yang mendalam dan mengagumkan
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">30 Konten AR</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Koleksi lengkap 30 video AR yang mengeksplorasi berbagai aspek warisan budaya Nusantara
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AR Video Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="space-y-16">
          {arItems.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-[#E7DED0]'
              } rounded shadow-md overflow-hidden`}
            >
              <div className={`grid md:grid-cols-2 gap-8 p-8 ${index % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                {/* Video Placeholder */}
                <div className="bg-[#1a1a1a] rounded overflow-hidden flex items-center justify-center min-h-[340px] relative">
                  {/* Placeholder UI — replace src with actual video path when available */}
                  <video
                    className="w-full h-full object-cover absolute inset-0"
                    controls
                    preload="none"
                    poster=""
                    /* Replace the src below with the actual internal video URL for item #{item.id} */
                    src={`/videos/meta-museum-ar-${item.id}.mp4`}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {/* Overlay shown when no video is loaded */}
                  <div className="relative z-10 text-center text-white p-8 pointer-events-none">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 opacity-40"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <p className="text-sm opacity-60">Video AR #{item.id}</p>
                    <p className="text-xs opacity-40 mt-1">Indonesian Heritage Museum</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-[#8C6B3E] font-medium mb-3">
                    Konten AR #{item.id}
                  </div>
                  <h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-6">
                    {item.title}
                  </h3>
                  <div className="border-l-4 border-[#8C6B3E] pl-6">
                    <p className="text-[#2B2B2B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Section */}
      <div className="max-w-[900px] mx-auto px-4 pb-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-6 text-center">Penutup</h2>
          <div className="w-16 h-1 bg-[#8C6B3E] mx-auto mb-8"></div>
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-4 text-center">
            Augmented Reality di museum ini memperkaya pengalaman belajar dan membuat setiap kunjungan menjadi lebih menarik. Pengunjung dapat merasakan cara baru untuk memahami sejarah secara lebih imersif.
          </p>
          <p className="text-[#5A5A5A] text-lg leading-relaxed text-center">
            Teknologi ini membawa museum ke dalam dunia digital yang semakin mudah dijangkau.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#8C6B3E] text-white py-16 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Cinzel'] text-3xl md:text-4xl mb-6">
            Rasakan Pengalaman AR Secara Langsung
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Kunjungi Indonesian Heritage Museum dan jelajahi koleksi warisan budaya melalui teknologi Augmented Reality
          </p>
          <a
            href="/visit"
            className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6] transition-all shadow-lg"
          >
            Rencanakan Kunjungan Anda
          </a>
        </div>
      </div>
    </div>
  );
}
