import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const languages = [
  { code: 'ID', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'JP', name: 'Japanese', flag: '🇯🇵' },
  { code: 'KR', name: 'Korean', flag: '🇰🇷' },
  { code: 'CN', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
  { code: 'FR', name: 'French', flag: '🇫🇷' },
  { code: 'DE', name: 'German', flag: '🇩🇪' },
  { code: 'IT', name: 'Italian', flag: '🇮🇹' },
  { code: 'NL', name: 'Dutch', flag: '🇳🇱' },
  { code: 'RU', name: 'Russian', flag: '🇷🇺' },
  { code: 'AR', name: 'Arabic', flag: '🇸🇦' },
];

interface ObjectItem {
  id: number;
  name: string;
  description: string;
}

interface Zone {
  name: string;
  objects: ObjectItem[];
}

// Data koleksi museum - 44 benda dalam 10 zona
const museumData: Zone[] = [
  {
    name: 'AUSTRONESIA',
    objects: [
      {
        id: 1,
        name: 'Kapak Corong',
        description: 'Kapak corong merupakan kapak yang digunakan oleh masyarakat zaman dahulu untuk bercocok tanam, bentuk yang menyerupai cangkul kuno dapat membantu masyarakat untuk mengolah tanah yang subur agar menghasilkan berbagai macam bahan makanan, khususnya umbi umbian. Kapak corong ini berasal dari kebudayan dongson di Vietnam utara dan ditemukan di daerah pedalaman jawa.',
      },
      {
        id: 2,
        name: 'Gelang Kuno',
        description: 'Masyarakat lampau menggunakan aksesoris gelang selain untuk keindahan juga digunakan sebagai penanda status sosial di masyarakat. Gelang kuno batu yang besar dan berat menunjukan status sosial di masyarakat yang tinggi. Arti dari gelang kuno yang digunakan masyarakat selain untuk menunjukan status sosial juga dipakai untuk mengartikan pemakai tidak perlu bersusah payah melakukan aktifitas sebagaimana masyarakat biasa karna memakai benda berat dan dipastikan mereka mempunyai pelayan.',
      },
      {
        id: 3,
        name: 'Patung Kepala',
        description: 'Patung kepala merupakan Patung kuno berbentuk kepala manusia yang digunakan masyarakat animisme dinamisme sebagai alat ritual memuja roh nenek moyang. Karna bentuk kepala dengan mata dan bibir yang terbentuk alami maka masyarakat menganggap bahwa patung kepala ini juga jelmaan roh nenek moyang mereka, patung ini ditemukan di pesisir pulau jawa.',
      },
      {
        id: 4,
        name: 'Figur Suku Tua',
        description: 'Figur suku tua ini adalah gambaran dari suku suku tua pada masa lampau yang telah hilang dari peradaban. Pada zaman dahulu ada lebih banyak suku suku lain lagi yang berbeda dari masa sekarang tetapi tidak dapat bertahan karna gempuran perang antar suku dan lain hal, suku suku yang hidup di masa Austronesia sudah memiliki peradaban seni yang tinggi dan cakap dalam pertanian dan banyak hal.',
      },
      {
        id: 5,
        name: 'Kapak Candrasa',
        description: 'Kapak Candrasa atau yang sering juga disebut dengan kapak sepatu merupakan kapak yang digunakan untuk keperluan ritual adat masyarakat animisme dinamisme, yakni masyarakat yang masih belum mengenal agama dan masih dengan sistem kepercayaan kepada roh nenek moyang. Kapak ini terbuat dari perunggu dan berasal dari kebudayaan dongson di Vietnam utara, yang mana kebudayaan itu adalah cikal bakal terciptanya berbagai suku di Indonesia.',
      },
    ],
  },
  {
    name: 'MAJAPAHIT',
    objects: [
      {
        id: 6,
        name: 'Figur Terakota',
        description: 'Figur Terakota yang diabadikan di jaman kerajaan Majapahit, terakota adalah tanah liat yang dibakar dan dibentuk berbagai macam alat yang berfungsi dalam kehidupan sehari hari dan juga dibentuk menyerupai wajah para tokoh tersohor di jaman kerajaan tersebut.',
      },
      {
        id: 7,
        name: 'Candi Bajang Ratu Terakota',
        description: 'Candi bajang ratu terletak di daerah Trowulan mojokerto. Gerbang bajang ratu merupakan gerbang masuk menuju kerajaan Majapahit. Kerajaan yang berjaya pada abad 13 dibawah kepemimpinan Hayam Wuruk dan Mahapatih Gajahmada. Sampai detik ini salah satu peninggalan istana kerjaan Majapahit yang masih tersisa adalah gerbang bajang ratu yang menjadi destinasi wisata pula.',
      },
      {
        id: 8,
        name: 'Celengan Kuno',
        description: 'Celengan kuno berbentuk babi gemuk yang ditemukan di sekitar Trowulan mojokerto, celengan ini digunakan sebagai pembawa berkah bagi penghuni rumah, celengan Terakota ini juga digunakan sebagai soufenir ketika mengunjungi kerabat jauh.',
      },
      {
        id: 9,
        name: 'Cermin Puteri Tembaga',
        description: 'Cermin puteri yang terbuat dari tembaga ini digunakan oleh para anggota keluarga kerajaan untuk berias diri, kualitas tembaga yang digunakan adalah yang terbaik sehingga dapat memberi pantulan yang terbaik pula. Biasanya cermin puteri juga menjadi hadiah untuk istana yang memiliki Puteri atau selir kerajaaan yang cantik dan suka berias.',
      },
      {
        id: 10,
        name: 'Cetakan Emas',
        description: 'Cetakan emas digunakan masyarakat zaman majapahit untuk mencetak cairan emas yang berfungsi sebagai alat tukar dalam jual beli, besarnya emas pun di sesuaikan dengan jumlah negosiasi antar pedagang atau dapat pula dijadikan segabai hadiah.',
      },
    ],
  },
  {
    name: 'JAWA TIMUR',
    objects: [
      {
        id: 11,
        name: 'Tempat Obat Berundak',
        description: 'Tempat obat ini digunakan tabib untuk membawa obat menuju rumah pasien, laci yang tersedia merupakan tingkatan harga dan khasiat obat yang akan digunakan oleh para tabib untuk mengobati pasien, obat yang digunakan biasanya terdiri dari obat herbal dari berbagai macam tumbuhan.',
      },
      {
        id: 12,
        name: 'Miniatur Karapan Sapi',
        description: 'Karapan sapi merupakan kebudayan asli tanah air Indonesia yang berasal dari Madura, pada awal ceritanya karapan sapi digunakan untuk menghibur pangeran yang sedang patah hati tetapi kemudian menjadi kebudayaan yang begitu dicintai masyarakat Madura.',
      },
      {
        id: 13,
        name: 'Loro Blonyo Probolinggo',
        description: 'Loro blonyo adalah simbol kebahagiaan rumah tangga, patung pasangan suami istri ini mengartikan tentang kehidupan rumah tangga suami istri yang samawa dan bahagia, Patung loro blonyo diambil dari bahasa Jawa Loro dan Blonyo atau dua orang yang dirias karna akan menjadi pengantin.',
      },
      {
        id: 14,
        name: 'Hiasan Sampiran Tirai',
        description: 'Hiasan Sampiran Tirai berbentuk peri laut adalah benda warisan budaya dari Jawa timur yang berfungsi untuk menahan bambu yang menjadi Sampiran kain tirai nya, hiasan ini mengartikan tentang keberkahan dan kebahagiaan di dalam rumah.',
      },
    ],
  },
  {
    name: 'JAWA TENGAH',
    objects: [
      {
        id: 15,
        name: 'Genteng Wuwungan',
        description: 'Genteng Wuwungan merupakan simbolisasi rumah yang diberkati pada zaman Jawa kuno, rumah yang diatas genteng nya terdapat wuwungan / hiasan dipercaya membawa kebahagiaan bagi penghuni rumah, wuwungan ibu melambangkan betapa penting sosok ibu yang mengayomi keluarga.',
      },
      {
        id: 16,
        name: 'Tombak',
        description: 'Tombak keraton pada zaman dahulu digunakan untuk berperang dan senjata prajurit yang membela keraton, dan menjaga keamanan seluruh wilayah kekeratonan solo, akan tetapi pada masa kini tombak keraton dijadikan penanda status kerabat keraton, dapat ditemukan di kediaman ruang tamu kerabat keraton.',
      },
      {
        id: 17,
        name: 'Topeng Drama',
        description: 'Topeng drama kontemporer awal di kehidupan modern masyarakat yang menggambarkan bibir tebal yakni para elite pemerintah yang hanya memberikan janji manis kepada rakyatnya. Pertunjukan drama biasanya dilakukan oleh para pemuda persis seperti demontrasi yang dilakukan mahasiswa saat ini.',
      },
      {
        id: 18,
        name: 'Topeng Harimau',
        description: 'Topeng ini menggambarkan tentang singo barong dan harimau ganas yang dibawa oleh raja klono sewandono dalam rangka mengahadapi musuh yang menghalangi nya untuk mendapatkan Dewi songgolangit sebagai istri.',
      },
      {
        id: 19,
        name: 'Tempat Sirih',
        description: 'Tempat sirih adalah wadah sirih masyarakat Jawa kuno, bentuk setiap daerah berbeda, warna emas yang ada menggambarkan keindahan dan keagungan, sirih digunakan sebagai obat dan juga kesehatan gigi.',
      },
    ],
  },
  {
    name: 'JAWA BARAT',
    objects: [
      {
        id: 20,
        name: 'Dadu Judi',
        description: 'Dadu Judi digunakan masyarakat peranakan Jawa Cina untuk berjudi dan meramal nasib perdagangan, jumlah hewan dan warna melambangkan arti dari berbagai hal buruk dan baik yang akan terjadi, bentuk yang besar memudahkan ketika dimainkan, serta meminimalisir kesalahan mengartikan tanda dari dadu.',
      },
      {
        id: 21,
        name: 'Blawong',
        description: 'Blawong adalah tempat untuk menggantung keris dengan ornamen yang mengandung arti tertentu, biasanya blawong dijadikan oleh oleh dari kerajaan atau daerah tertentu kepada kerajaan yang akan dikunjungi, dan menggabungkan dari dua kebudayaan kerajaan tersebut, seperti Blawong dari kebudayaan Cina dan Jawa barat terlihat dari adanya gambar kilin dan wayang.',
      },
      {
        id: 22,
        name: 'Kaca Rias Keraton',
        description: 'Kaca rias ini merupakan milik dari keraton Jawa barat yang digunakan oleh permaisuri nya / anggota keluarga perempuan untuk menyimpan riasan dan hadiah serta perhiasan mereka, ukiran indah melambangkan bahwa benda ini tidak dapat dimiliki oleh sembarangan orang.',
      },
      {
        id: 23,
        name: 'Topeng Buto Terong',
        description: 'Topeng ini adalah topeng yang menceritakan tokoh buto (raksasa) yang digunakan dalam pertunjukan tradisional Jawa Barat.',
      },
    ],
  },
  {
    name: 'SULAWESI',
    objects: [
      {
        id: 24,
        name: 'Tedong Bonga',
        description: 'Tedong bonga adalah tanduk kerbau bule, kerbau putih khas Sulawesi yang berharga fantastis / mahal yang digunakan masyarakat suku Toraja untuk upacara ritual pemakaman, banyaknya tanduk menggambarkan tentang kekayaan keluarga yang ditunjukan pada tongkonan di depan rumah. Harga satu kerbau seharga 500 juta hingga 1 milyar rupiah.',
      },
      {
        id: 25,
        name: 'Koin Syilling Yassin',
        description: 'Koin Syilling Yassin merupakan koin kuno yang digunakan sebagai alat tukar di wilayah Sulawesi.',
      },
      {
        id: 26,
        name: 'Patung Penjaga Desa',
        description: 'Patung ini dibuat menggunakan kayu Ulin tua yang kuat, digunakan sebagai patung penjaga desa dari mara bahaya serta pelindung penduduk desa dari bencana dan sebagainya, bentuk kayu yang bercabang cabang menunjukkan kekuatan.',
      },
      {
        id: 27,
        name: 'Kursi Kepala Suku',
        description: 'Kursi kepala suku berbentuk kura kura yang mengartikan umur panjang dan keberkahan, bentuk kursi mengidentifikasi para kepala suku agar tidak lalai dan bijaksana dalam memimpin.',
      },
    ],
  },
  {
    name: 'KALIMANTAN',
    objects: [
      {
        id: 28,
        name: 'Sapundu',
        description: 'Sapundu adalah alat menggantung hewan hasil buruan para pria Dayak, sapundu digunakan untuk meniriskan darah hewan ataupun merayakan kesuksesan berburu dengan menampilkan hewan buruan di depan umum ketika hendak dimasak menjadi santapan bersama.',
      },
      {
        id: 29,
        name: 'Patung Kewenak',
        description: 'Patung ini menceritakan kegiatan sehari hari yang digambarkan oleh patung yang dipahat tanpa sambungan, patung kewenak dipahat dengan satu kayu pohon sehingga rata rata patung berbentuk tinggi, manfaat patung yakni seperti foto, mengabadikan momen.',
      },
    ],
  },
  {
    name: 'PAPUA',
    objects: [
      {
        id: 30,
        name: 'Perisai Asmat',
        description: 'Perisai Asmat merupakan perisai tradisional suku Asmat dari Papua yang digunakan untuk perlindungan dalam peperangan dan juga sebagai simbol status sosial.',
      },
      {
        id: 31,
        name: 'Patung Asmat',
        description: 'Patung khas suku Asmat yang memiliki nilai seni tinggi dan digunakan dalam berbagai ritual adat.',
      },
    ],
  },
  {
    name: 'WAYANG',
    objects: [
      {
        id: 32,
        name: 'Wayang Golek',
        description: 'Wayang Golek adalah wayang tiga dimensi yang terbuat dari kayu, berasal dari Jawa Barat dan digunakan untuk pertunjukan cerita pewayangan.',
      },
      {
        id: 33,
        name: 'Wayang Kulit',
        description: 'Wayang kulit adalah seni tradisional Indonesia yang terutama berkembang di Jawa Tengah dan Jawa Timur. Wayang berasal dari kata "Ma Hyang" yang artinya menuju kepada roh spiritual, dewa, atau Tuhan Yang Maha Esa. Ada juga yang mengartikan wayang adalah istilah bahasa Jawa yang bermakna "bayangan", hal ini disebabkan karena penonton juga bisa menonton wayang dari belakang kelir atau hanya bayangannya saja.',
      },
      {
        id: 34,
        name: 'Wayang Pegunungan',
        description: 'Wayang sadat, wayang maupun gunungan tidak diajarkan ke kanan dan ke kiri (seperti wayang purwo, tetapi cukup ditumpuk dalam kotak). Gunungan wayang sadat ditengahnya tergambar sebuah masjid Demak dan bertuliskan kalimat syahadat.',
      },
      {
        id: 35,
        name: 'Wayang Potehi',
        description: 'Wayang Potehi adalah wayang boneka tangan yang berasal dari Tiongkok dan berkembang di Indonesia, terutama di kalangan masyarakat Tionghoa.',
      },
    ],
  },
  {
    name: 'CHENGHO',
    objects: [
      {
        id: 36,
        name: 'Siapakah Laksamana Chengho?',
        description: 'Laksamana Chengho adalah pelaut dan penjelajah Tiongkok yang terkenal melakukan ekspedisi maritim ke berbagai wilayah termasuk Indonesia.',
      },
      {
        id: 37,
        name: 'Batik Tiga Negeri',
        description: 'Warna merah dari batik tiga negeri ini dipengaruhi oleh masyarakat Tionghoa dulu. Yang memiliki simbol kebahagiaan karena sering dipakai dalam acara-acara pernikahan. Kemudian, warna biru datang dari orang-orang Belanda, pengaruh dari bangsa Eropa. Sedangkan warna cokelat soga identik dengan budaya Jawa.',
      },
      {
        id: 38,
        name: 'Loro Blonyo Jogja',
        description: 'Loro Blonyo versi Jogja yang menggambarkan pasangan pengantin Jawa dalam busana tradisional Yogyakarta.',
      },
      {
        id: 39,
        name: 'Parang Klitik',
        description: 'Parang Klitik adalah pola parang dengan stilasi yang halus. ukurannya pun lebih kecil dan juga menggambarkan citra feminin. Motif ini melambangkan kelemah-lembutan, perilaku halus dan bijaksana. Biasa digunakan oleh para puteri raja.',
      },
      {
        id: 40,
        name: 'Batik Cap',
        description: 'Batik Cap adalah batik yang dibuat menggunakan cap tembaga untuk mencetak motif pada kain, berbeda dengan batik tulis yang dibuat dengan canting.',
      },
      {
        id: 41,
        name: 'Batik',
        description: 'Batik (là rǎn 蜡染) adalah sebuah teknik pencelupan dengan lilin yang digunakan pada bahan dasar tekstil. Batik Cina biasa disebut dengan (là rǎn 蜡染). Para penemu menunjukkan bahwa batik merupakan originalitas dari leluhur Cina, warna merah masih merupakan ciri khas utama dari batik yang berasal dari Cina.',
      },
      {
        id: 42,
        name: 'Patung Naga',
        description: 'Patung Naga yang dibuat menggunakan kayu Quan Zhi, kayu kokoh dari Cina yang berusia ratusan tahun, patung naga ini dahulu diletakkan di altar teras klenteng, menceritakan tentang naga yang terbang diatas awan.',
      },
      {
        id: 43,
        name: 'Keramik Cina',
        description: 'Keramik Cina kuno yang memiliki nilai sejarah tinggi, menunjukkan hubungan perdagangan antara Tiongkok dan Indonesia.',
      },
    ],
  },
];

// Zona terakhir - PENUTUP
const closingZone: Zone = {
  name: 'PENUTUP',
  objects: [
    {
      id: 44,
      name: 'Dewa Ganesha',
      description: 'Dewa Ganesha atau sering juga disebut dengan Ganapati atau Winayaka ini merupakan Dewa yang perwujudannya campuran antara hewan gajah dan manusia. Seperti diketahui kalau Ganesha ini merupakan Dewa yang memiliki kepala gajah dan bertubuh manusia.',
    },
  ],
};

export default function AutoGuide() {
  const [selectedLanguage, setSelectedLanguage] = useState('ID');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll untuk back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function untuk mendapatkan deskripsi berdasarkan bahasa
  const getDescription = (description: string, lang: string) => {
    if (lang === 'ID') {
      return description;
    }
    // Placeholder untuk bahasa lain - nanti bisa diisi manual
    return `[${lang} Translation - To be filled] ${description}`;
  };

  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#8C6B3E] text-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl mb-4">
            Auto Guide Indonesia
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Jelajahi 44 koleksi warisan budaya Indonesia dalam 10 zona dengan panduan audio multi-bahasa
          </p>
        </div>
      </div>

      {/* Language Selector */}
      <div id="language-selector" className="sticky top-20 z-40 bg-white shadow-md py-4 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-[#2B2B2B] font-medium">Pilih Bahasa:</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`px-4 py-2 rounded border transition-all ${
                    selectedLanguage === lang.code
                      ? 'bg-[#8C6B3E] text-white border-[#8C6B3E]'
                      : 'bg-white text-[#2B2B2B] border-[#C8B9A6] hover:border-[#8C6B3E]'
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  <span className="text-sm">{lang.code}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed left-4 bottom-6 z-40 bg-[#8C6B3E] text-white p-2 rounded shadow-lg hover:bg-[#6F532F] transition-all opacity-70 hover:opacity-100"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Content - All Zones */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Render semua zona */}
        {museumData.map((zone, zoneIndex) => (
          <section key={zoneIndex} className="mb-16">
            {/* Zone Title */}
            <div className="mb-8">
              <h2 className="font-['Cinzel'] text-3xl md:text-4xl text-[#8C6B3E] mb-3">
                {zone.name}
              </h2>
              <div className="w-16 h-1 bg-[#8C6B3E]"></div>
            </div>

            {/* Objects Grid */}
            <div className="space-y-12">
              {zone.objects.map((object) => (
                <div
                  key={object.id}
                  className="bg-white rounded shadow-md overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    {/* Image Section */}
                    <div className="bg-[#E7DED0] rounded flex items-center justify-center min-h-[300px]">
                      <div className="text-center p-8">
                        <div className="text-[#8C6B3E] mb-4">
                          <svg
                            className="w-16 h-16 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-[#5A5A5A]">
                          [Image Placeholder]
                          <br />
                          <span className="text-xs">ID: {object.id}</span>
                        </p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center">
                      {/* Object Number */}
                      <div className="text-sm text-[#8C6B3E] font-medium mb-2">
                        Objek #{object.id}
                      </div>

                      {/* Object Name */}
                      <h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-4">
                        {object.name}
                      </h3>

                      {/* Audio Player Placeholder */}
                      <div className="mb-4">
                        <div className="bg-[#F4EFE6] rounded p-4 border border-[#C8B9A6]">
                          <div className="flex items-center gap-3">
                            <button className="w-10 h-10 rounded-full bg-[#8C6B3E] text-white flex items-center justify-center hover:bg-[#6F532F] transition-all">
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                            <div className="flex-1">
                              <div className="text-xs text-[#5A5A5A] mb-1">
                                Audio Guide - {selectedLanguage}
                              </div>
                              <div className="bg-[#C8B9A6] h-1 rounded-full">
                                <div className="bg-[#8C6B3E] h-1 rounded-full w-0"></div>
                              </div>
                            </div>
                            <span className="text-xs text-[#5A5A5A]">0:00</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="text-[#2B2B2B] leading-relaxed">
                        {getDescription(object.description, selectedLanguage)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Zona Penutup */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="font-['Cinzel'] text-3xl md:text-4xl text-[#8C6B3E] mb-3">
              {closingZone.name}
            </h2>
            <div className="w-16 h-1 bg-[#8C6B3E]"></div>
          </div>

          <div className="space-y-12">
            {closingZone.objects.map((object) => (
              <div
                key={object.id}
                className="bg-white rounded shadow-md overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="bg-[#E7DED0] rounded flex items-center justify-center min-h-[300px]">
                    <div className="text-center p-8">
                      <div className="text-[#8C6B3E] mb-4">
                        <svg
                          className="w-16 h-16 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-[#5A5A5A]">
                        [Image Placeholder]
                        <br />
                        <span className="text-xs">ID: {object.id}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="text-sm text-[#8C6B3E] font-medium mb-2">
                      Objek #{object.id}
                    </div>
                    <h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-4">
                      {object.name}
                    </h3>

                    <div className="mb-4">
                      <div className="bg-[#F4EFE6] rounded p-4 border border-[#C8B9A6]">
                        <div className="flex items-center gap-3">
                          <button className="w-10 h-10 rounded-full bg-[#8C6B3E] text-white flex items-center justify-center hover:bg-[#6F532F] transition-all">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                          <div className="flex-1">
                            <div className="text-xs text-[#5A5A5A] mb-1">
                              Audio Guide - {selectedLanguage}
                            </div>
                            <div className="bg-[#C8B9A6] h-1 rounded-full">
                              <div className="bg-[#8C6B3E] h-1 rounded-full w-0"></div>
                            </div>
                          </div>
                          <span className="text-xs text-[#5A5A5A]">0:00</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[#2B2B2B] leading-relaxed">
                      {getDescription(object.description, selectedLanguage)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
