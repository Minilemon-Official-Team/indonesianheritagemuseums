import { useEffect } from 'react';
import { Sparkles, Video, BookOpen } from 'lucide-react';

export default function EducationalSeries() {
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

  const educationalContent = [
    {
      id: 1,
      videoId: '7448941995302620424',
      title: 'Kain Batik Lasem',
      description: 'Kain Batik Lasem merupakan salah satu warisan budaya Indonesia yang khas, dengan motif yang mencerminkan perpaduan antara pengaruh Tiongkok dan Jawa. Keindahan warna dan detail pada setiap helai kainnya mengandung makna mendalam, menggambarkan sejarah dan kehidupan masyarakat Lasem. Batik Lasem bukan hanya sekadar seni tekstil, tetapi juga simbol kekayaan budaya yang terjaga hingga kini.',
 },
{
      id: 2,
      videoId: '7443747332908223762',
      title: 'Kain Batik 3 Negeri',
      description: 'Kain Batik 3 Negeri merupakan perpaduan indah antara budaya Lasem, Solo, dan Pekalongan yang tercermin dalam motif dan warnanya. Setiap helai kain batik ini menceritakan kisah sejarah panjang dan interaksi antar budaya yang membentuk identitas unik Indonesia. Keindahan serta kekayaan makna pada Batik 3 Negeri menjadikannya salah satu warisan budaya yang patut dihargai.',
 },
{
      id: 3,
      videoId: '7433366411155672340',
      title: 'Alat Tradisional Kapak Genggam',
      description: 'Kapak genggam adalah alat tradisional yang digunakan oleh suku-suku di Indonesia, terutama dalam kegiatan sehari-hari seperti bertani atau berburu. Dengan desain sederhana namun fungsional, kapak genggam biasanya terbuat dari batu atau logam yang dipasang pada pegangan kayu. Alat ini tidak hanya berfungsi sebagai alat kerja, tetapi juga sering menjadi simbol kekuatan dan keberanian dalam berbagai tradisi. Kapak genggam mencerminkan kearifan lokal yang diwariskan turun-temurun sebagai bagian dari kehidupan masyarakat adat Indonesia.',
 },
{
      id: 4,
      videoId: '7428542725932223751',
      title: 'Celengan Majapahit',
      description: 'Celengan Majapahit adalah barang peninggalan sejarah yang mencerminkan kebudayaan dan keahlian kerajinan pada masa Kerajaan Majapahit. Celengan ini umumnya terbuat dari bahan tanah liat dan memiliki bentuk yang unik, sering kali menggambarkan simbol-simbol kerajaan atau motif-motif tradisional yang mencerminkan status sosial dan kehidupan masyarakat pada masa itu. Selain berfungsi sebagai tempat penyimpanan uang, celengan Majapahit juga memiliki nilai historis yang tinggi, menggambarkan keindahan seni keramik dan kehidupan ekonomi di era kejayaan Majapahit.',
 },
{
      id: 5,
      videoId: '7376613909362494728',
      title: 'Mengenal Hewan Mitologi China: Naga',
      description: 'Naga dalam mitologi China adalah simbol kekuatan, keberuntungan, dan kebijaksanaan. Berbeda dengan naga dalam budaya Barat, naga China dianggap sebagai pelindung yang membawa berkah dan mengendalikan elemen air, seperti hujan. Dengan tubuh panjang dan kepala yang besar, naga ini juga melambangkan keharmonisan antara langit, bumi, dan manusia, serta sering dikaitkan dengan kekaisaran sebagai simbol kekuasaan dan kebijaksanaan.',
 },
{
      id: 6,
      videoId: '7370279059122638100',
      title: 'Perisai Talawang, Perisai Khas Suku Dayak',
      description: 'Perisai Talawang adalah salah satu benda pusaka yang mencerminkan kekuatan dan keberanian dalam budaya Indonesia. Dengan desain yang khas dan fungsinya sebagai pelindung dalam pertempuran, perisai ini tidak hanya digunakan sebagai alat untuk bertahan, tetapi juga melambangkan kehormatan dan semangat juang. Sebagai warisan budaya, Perisai Talawang menjadi simbol identitas dan kebanggaan masyarakat yang menjunjung tinggi nilai-nilai perjuangan dan keberanian dalam menghadapi tantangan.',
 },
{
      id: 7,
      videoId: '7357926838565358864',
      title: 'Topeng Monyet Jawa Barat',
      description: 'Topeng Monyet adalah salah satu jenis topeng tradisional dari Jawa Barat yang menggambarkan sosok monyet dengan ekspresi yang lucu dan energik. Topeng ini biasanya digunakan dalam pertunjukan seni, seperti tari atau teater rakyat, di mana penari atau pemain berperan sebagai monyet yang memiliki sifat cerdik dan humoris. Selain sebagai hiburan, topeng monyet juga memiliki nilai simbolis, menggambarkan kelincahan, kecerdikan, dan sifat-sifat tertentu yang dimiliki oleh monyet dalam kebudayaan Jawa Barat.',
 },
{
      id: 8,
      videoId: '7352105673892646162',
      title: 'Topeng Sidakarya Bali',
      description: 'Topeng Sidakarya adalah salah satu jenis topeng tradisional dari Bali yang digunakan dalam pertunjukan seni, terutama dalam tari topeng. Topeng ini biasanya menggambarkan tokoh yang memiliki karakter bijaksana dan penuh kehormatan, sering kali berperan sebagai seorang pemimpin atau tokoh spiritual. Ciri khas dari topeng ini adalah ekspresi wajah yang tenang dan serius, mencerminkan kebijaksanaan, yang mencerminkan nilai-nilai budaya Bali yang mengedepankan keseimbangan dan keharmonisan dalam kehidupan.',
 },
{
      id: 9,
      videoId: '7363234299383926033',
      title: 'Kisah Heroik Bujang Ganong',
      description: 'Bujang Ganong adalah salah satu bentuk kesenian tradisional dari Ponorogo, Jawa Timur, yang menggambarkan tokoh pahlawan dengan gerakan tari yang dinamis dan penuh semangat. Dalam pertunjukan, Bujang Ganong biasanya ditampilkan dengan kostum khas dan riasan wajah yang mencolok, menggambarkan keberanian dan kegagahan. Tokoh ini sering kali berperan sebagai simbol perjuangan melawan keburukan dan ketidakadilan, mengajarkan nilai-nilai keberanian dan pengorbanan dalam budaya Ponorogo.',
 },
{
      id: 10,
      videoId: '7348715959835708680',
      title: 'Keberagaman Tradisi Menyambut Ramadan di Indonesia',
      description: 'Setiap daerah di Indonesia punya cara unik menyambut Ramadan. Dari berbagi makanan di Jakarta, makan bersama di Jawa Barat, hingga ritual penyucian diri di Yogyakarta. Di Aceh, masyarakat memasak dan makan daging bersama, sementara di Sulawesi Barat menyalakan pelita tradisional.',
 },
{
      id: 11,
      videoId: '7484165354000764165',
      title: 'Asal-usul Kata "Puasa" di Nusantara',
      description: 'Istilah puasa berasal dari upavasa, tradisi Hindu-Buddha yang berarti menahan diri dan mendekatkan diri pada Sang Pencipta. Saat Islam masuk, istilah ini tetap digunakan karena sudah melekat di masyarakat, alih-alih mengganti dengan shaum atau siyam dari bahasa Arab.',
 },
  ];

  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#8C6B3E] text-white py-32 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <Video className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-6xl mb-6">
            Educational Series
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Jelajahi Kekayaan Budaya Indonesia Melalui Video Edukatif
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Educational series di Indonesian Heritage Museum adalah serangkaian video edukasi yang diunggah melalui media sosial, memberikan wawasan mendalam tentang kekayaan budaya Indonesia. Setiap video dirancang untuk mengajak penonton menjelajahi sejarah, seni, dan tradisi Indonesia dengan cara yang menarik dan mudah dipahami.
          </p>
          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Melalui format digital ini, museum memanfaatkan platform online untuk menyebarkan pengetahuan, memungkinkan lebih banyak orang untuk belajar tentang warisan budaya Indonesia di mana saja dan kapan saja.
          </p>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="bg-[#E7DED0] py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Video Edukatif</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Konten video berkualitas tinggi yang mudah dipahami dan menarik untuk semua usia
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Beragam Topik</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Dari tekstil tradisional hingga mitologi, mencakup berbagai aspek budaya Indonesia
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Akses Mudah</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                Belajar kapan saja dan di mana saja melalui platform media sosial
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="space-y-16">
          {educationalContent.map((content, index) => (
            <div
              key={content.id}
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
                <div className={`flex flex-col justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="inline-block">
                    <span className="inline-block px-3 py-1 bg-[#8C6B3E] text-white text-xs rounded-full mb-4">
                      {content.category}
                    </span>
                  </div>
                  <h3 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-6">
                    {content.title}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-[#2B2B2B] leading-relaxed">
                      {content.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-[#C8B9A6]">
                    <p className="text-sm text-[#5A5A5A]">
                      <span className="font-medium">Series:</span> Educational Content #{content.id}
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
            Ikuti Konten Edukatif Kami
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Dapatkan video edukatif terbaru dengan mengikuti akun TikTok kami @indonesianheritage
          </p>
          <a
            href="https://www.tiktok.com/@indonesianheritage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#8C6B3E] px-8 py-4 rounded font-['Cinzel'] hover:bg-[#F4EFE6] transition-all shadow-lg"
          >
            Kunjungi TikTok Kami
          </a>
        </div>
      </div>
    </div>
  );
}
