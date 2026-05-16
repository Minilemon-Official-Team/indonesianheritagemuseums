import { useState } from 'react';
import { Cpu, Eye, Layers, Play, X } from 'lucide-react';

/* =========================
   CDN CONFIG
========================= */

const CDN_IMAGE_BASE = "https://res.cloudinary.com/dnbq1z8lx/image/upload/";
const CDN_VIDEO_BASE = "https://res.cloudinary.com/dnbq1z8lx/video/upload/";

type MediaType = "video" | "image";

interface ARItem {
  id: number;
  title: string;
  description: string;
  type: MediaType;
  image?: string;
  video?: string;
}

/* =========================
   MEDIA RESOLVER
========================= */

const getMedia = (item: ARItem) => {
  if (item.type === "video") {
    return item.video && item.video !== ""
      ? item.video
      : `${CDN_VIDEO_BASE}meta-museum/${item.id}.mp4`;
  }

  return item.image && item.image !== ""
    ? item.image
    : `${CDN_IMAGE_BASE}meta-museum/${item.id}.webp`;
};

/* =========================
   DATA
========================= */

const arItems: ARItem[] = [
  {
    id: 1,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935581/1_5_xkczqq.webp",
    title: "Keseruan Anak-Anak Menikmati Augmented Reality (AR)",
    description:
      "Anak-anak terlihat sangat menikmati pengalaman baru dengan augmented reality di Indonesian Heritage Museum.",
  },
  {
    id: 2,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935621/1_21_x5z5tw.webp",
    title: "Menghadirkan Sejarah yang Menarik untuk Anak-Anak dengan Augmented Reality",
    description:
      "Anak-anak bisa merasakan pengalaman yang berbeda saat sejarah Indonesia disajikan melalui augmented reality.",
  },
  {
    id: 3,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935583/1_20_nhtyjq.webp",
    title: "Keseruan Pengunjung Menikmati Augmented Reality",
    description:
      "Pengunjung merasakan pengalaman seru saat menikmati teknologi augmented reality.",
  },
  {
    id: 4,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_19_o1wmvk.webp",
    title: "Pengalaman Imersif Pengunjung dengan Augmented Reality",
    description:
      "Pengunjung bisa merasakan pengalaman yang mendalam dan seru saat menjelajahi berbagai koleksi melalui AR.",
  },
  {
    id: 5,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_11_x5l41i.webp",
    title: "Serunya Pengunjung Menjelajahi Dunia Wayang Melalui Augmented Reality",
    description:
      "Pengunjung merasakan pengalaman baru saat menjelajahi dunia wayang melalui augmented reality.",
  },
  {
    id: 6,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935581/1_10_h528jx.webp",
    title: "Menyusuri Jejak Sejarah Lewat Teknologi Augmented Reality",
    description:
      "Pengunjung diajak menyusuri jejak sejarah Indonesia dengan cara yang lebih interaktif melalui teknologi AR.",
  },
  {
    id: 7,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_1_h3nmiz.webp",
    title: "Koleksi Barang-Barang Perdagangan China di Nusantara Lewat Teknologi AR",
    description:
      "Melalui augmented reality, pengunjung dapat mempelajari lebih dalam tentang koleksi perdagangan China di Nusantara.",
  },
  {
    id: 8,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935818/1_22_vmdd5w.webp",
    title: "Melihat Sejarah secara Interaktif Lewat Augmented Reality",
    description:
      "Pengunjung dapat merasakan sejarah Indonesia secara langsung melalui teknologi AR.",
  },
  {
    id: 9,
    type: "video",
    video: "https://res.cloudinary.com/dnbq1z8lx/video/upload/v1772936681/1_5_nwd25c.mp4",
    title: "Keseruan Pengunjung Memperagakan Augmented Reality",
    description:
      "Pengunjung terlibat dalam pengalaman seru memperagakan augmented reality.",
  },
  {
    id: 10,
    type: "video",
    video: "https://res.cloudinary.com/dnbq1z8lx/video/upload/v1772936680/1_4_ggrktc.mp4",
    title: "Petualangan Interaktif Pengunjung dengan Augmented Reality",
    description:
      "Dengan augmented reality, pengunjung dapat merasakan pengalaman yang lebih hidup.",
  },
  {
    id: 11,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935583/1_20_nhtyjq.webp",
    title: "Teknologi Augmented Reality Menghidupkan Rumah Adat",
    description:
      "Teknologi AR memungkinkan pengunjung melihat rumah adat Nusantara dalam bentuk digital yang interaktif.",
  },
  {
    id: 12,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_19_o1wmvk.webp",
    title: "Menjelajahi Rumah Adat dengan Augmented Reality",
    description:
      "Teknologi AR menghadirkan pengalaman interaktif untuk mengeksplorasi rumah adat Nusantara.",
  },
  {
    id: 13,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_12_gjqzqc.webp",
    title: "Mengenal Artefak Nusantara dengan Teknologi AR",
    description:
      "Teknologi AR menghadirkan pengalaman interaktif dalam menjelajahi artefak bersejarah Nusantara.",
  },
  {
    id: 14,
    type: "image",
    image: "",
    title: "Menghidupkan Tokoh Bersejarah dengan AR",
    description:
      "Teknologi AR menghadirkan tokoh-tokoh bersejarah dalam bentuk digital yang interaktif.",
  },
  {
    id: 15,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_1_h3nmiz.webp",
    title: "Menghidupkan Kembali Kapal Ekspedisi Kuno dengan AR",
    description:
      "Dengan AR, pengunjung dapat melihat visualisasi kapal ekspedisi kuno.",
  },
  {
    id: 16,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_12_gjqzqc.webp",
    title: "Menghidupkan Peradaban Kuno dengan AR",
    description:
      "Teknologi AR menyajikan visualisasi dinamis yang menghidupkan kembali peradaban kuno.",
  },
  {
    id: 17,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_17_mjw7mx.webp",
    title: "Melihat Zaman Prasejarah dengan AR",
    description:
      "Augmented Reality membawa pengunjung menelusuri jejak manusia purba.",
  },
  {
    id: 18,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772936678/1_23_x5apvd.webp",
    title: "Menelusuri Artefak Kuno dengan AR",
    description:
      "Augmented Reality memungkinkan pengunjung mengeksplorasi artefak bersejarah secara detail.",
  },
  {
    id: 19,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772936678/1_24_jligfa.webp",
    title: "Melihat Peradaban Manusia Melayu Indonesia Lewat AR",
    description:
      "Visualisasi manusia Melayu Indonesia ditampilkan secara interaktif.",
  },
  {
    id: 20,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_27_jatoqa.webp",
    title: "Mengungkap Detail Artefak Kuno dengan AR",
    description:
      "Visualisasi AR memungkinkan pengunjung melihat artefak dari berbagai sisi.",
  },
  {
    id: 21,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935581/1_9_em7izc.webp",
    title: "Menelusuri Rumah Adat Indonesia dengan AR",
    description:
      "AR menghadirkan visualisasi rumah adat secara detail.",
  },
  {
    id: 22,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_4_pgei5n.webp",
    title: "Menjelajahi Koleksi Bersejarah dengan AR",
    description:
      "Pengunjung dapat mengeksplorasi koleksi budaya secara interaktif.",
  },
  {
    id: 23,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_3_a28egb.webp",
    title: "Menyelami Peradaban Masa Lalu dengan AR",
    description:
      "Teknologi AR membawa pengunjung menjelajahi kehidupan manusia purba.",
  },
  {
    id: 24,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772936678/1_25_lrhtfy.webp",
    title: "Menjelajahi Artefak Bersejarah Secara Interaktif",
    description:
      "Dengan teknologi AR, pengunjung dapat mengamati artefak kuno secara lebih dekat.",
  },
  {
    id: 25,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_3_a28egb.webp",
    title: "Mengungkap Peradaban Hindu di Nusantara dengan AR",
    description:
      "Pengunjung dapat melihat visualisasi bangunan kuno dari India.",
  },
  {
    id: 26,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_15_zp7mpa.webp",
    title: "Melihat Candi Prambanan Lebih Dekat dengan AR",
    description:
      "Teknologi AR memungkinkan pengunjung menjelajahi replika Candi Prambanan.",
  },
  {
    id: 27,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_18_ak4bbd.webp",
    title: "Visualisasi Panggung Wayang Potehi dengan AR",
    description:
      "AR menghadirkan replika digital panggung wayang potehi.",
  },
  {
    id: 28,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_16_jqglif.webp",
    title: "Menelusuri Jejak Arsitektur Kuno India dengan AR",
    description:
      "AR membantu pengunjung melihat visualisasi bangunan bersejarah.",
  },
  {
    id: 29,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935582/1_17_mjw7mx.webp",
    title: "Menelusuri Jejak Peradaban Kuno dengan AR",
    description:
      "AR membantu pengunjung melihat visualisasi situs bersejarah secara detail.",
  },
  {
    id: 30,
    type: "image",
    image: "https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772935580/1_2_zli449.webp",
    title: "Menjelajahi Warisan Budaya Indonesia dengan AR",
    description:
      "AR memungkinkan pengunjung melihat visualisasi bangunan dan artefak secara nyata.",
  },
];

/* =========================
   COMPONENT
========================= */

export default function MetaMuseum() {
  const [selected, setSelected] = useState<ARItem | null>(null);

  return (
    <div className="bg-[#F4EFE6] min-h-screen">

      {/* HERO */}
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

      {/* INTRO */}
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <div className="bg-white rounded shadow-md p-8 md:p-12">
          <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
            Indonesian Heritage Museum menggabungkan teknologi augmented reality
            untuk memberikan pengalaman baru dalam menjelajahi kekayaan budaya Indonesia.
          </p>

          <p className="text-[#2B2B2B] text-lg leading-relaxed">
            Teknologi ini membawa sejarah dan budaya Indonesia lebih dekat
            kepada pengunjung dengan cara yang menyenangkan.
          </p>
        </div>
      </div>

      {/* FEATURE */}
      <div className="bg-[#E7DED0] py-16 px-4">

        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded shadow-md p-8 text-center">
            <Cpu className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Teknologi AR</h3>
            <p>Augmented Reality yang canggih menghidupkan koleksi museum.</p>
          </div>

          <div className="bg-white rounded shadow-md p-8 text-center">
            <Eye className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" />
            <h3 className="font-['Cinzel'] text-xl mb-3">Pengalaman Imersif</h3>
            <p>Setiap artefak dan situs bersejarah dihidupkan kembali.</p>
          </div>

          <div className="bg-white rounded shadow-md p-8 text-center">
            <Layers className="w-10 h-10 mx-auto mb-4 text-[#8C6B3E]" />
            <h3 className="font-['Cinzel'] text-xl mb-3">30 Konten AR</h3>
            <p>Koleksi lengkap 30 konten AR yang mengeksplorasi budaya Nusantara.</p>
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">

        <div className="text-center mb-12">
          <h2 className="font-['Cinzel'] text-3xl md:text-4xl text-[#2B2B2B] mb-4">
            Galeri Augmented Reality
          </h2>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {arItems.map((item) => {
            const media = getMedia(item);

            return (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className="group text-left bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden bg-[#E7DED0]">
                  {item.type === "video" ? (
                    <>
                      <video
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                      >
                        <source src={`${media}#t=0.5`} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                          <Play className="w-6 h-6 text-[#8C6B3E] ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={media}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  )}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#8C6B3E] text-white text-xs rounded-full">
                    {item.type === "video" ? "Video" : `AR #${item.id}`}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}

        </div>

      </div>

      {/* LIGHTBOX */}
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
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.type === "video" ? (
              <video
                className="w-full max-h-[70vh] rounded-lg shadow-2xl bg-black"
                controls
                autoPlay
                playsInline
              >
                <source src={getMedia(selected)} type="video/mp4" />
              </video>
            ) : (
              <img
                src={getMedia(selected)}
                alt={selected.title}
                className="w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            )}
            <div className="mt-6 text-center text-white">
              <span className="inline-block px-4 py-1.5 bg-[#8C6B3E] rounded-full text-sm mb-3">
                Konten AR #{selected.id}
              </span>
              <h3 className="font-['Cinzel'] text-2xl md:text-3xl mb-3">
                {selected.title}
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
