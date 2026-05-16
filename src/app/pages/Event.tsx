import { MapPin } from 'lucide-react';
import { useUiLang } from '../i18n';

interface Tri {
  id: string;
  en: string;
  zh: string;
}

interface MuseumEvent {
  id: number;
  title: Tri;
  year: string;
  location: Tri;
  image: string;
  description: Tri;
}

const UI = {
  id: {
    title: 'Acara Museum',
    intro:
      'Jejak kegiatan dan acara yang diikuti maupun diselenggarakan oleh Indonesian Heritage Museum bersama d’Topeng Kingdom, dari pameran hingga kolaborasi budaya di berbagai daerah.',
  },
  en: {
    title: 'Museum Events',
    intro:
      'A trail of activities and events joined or held by Indonesian Heritage Museum together with d’Topeng Kingdom, from exhibitions to cultural collaborations across various regions.',
  },
  zh: {
    title: '博物馆活动',
    intro:
      '印度尼西亚遗产博物馆与 d’Topeng Kingdom 共同参与及举办的活动足迹，涵盖展览以及在各地的文化合作。',
  },
};

const events: MuseumEvent[] = [
  {
    id: 1,
    title: {
      id: "d'Topeng Bp Reno – Sebagai Pembicara Museum",
      en: "d'Topeng Mr. Reno – As a Museum Speaker",
      zh: 'd’Topeng Reno 先生 — 博物馆主讲嘉宾',
    },
    year: '2017',
    location: {
      id: 'Indonesian Heritage Museum',
      en: 'Indonesian Heritage Museum',
      zh: '印度尼西亚遗产博物馆',
    },
    image: '/images/event-1.png',
    description: {
      id: 'Pendiri d’Topeng Kingdom tampil sebagai pembicara dalam forum permuseuman, berbagi wawasan mengenai pengelolaan, kurasi, dan pelestarian koleksi warisan budaya Nusantara.',
      en: 'The founder of d’Topeng Kingdom appeared as a speaker at a museum forum, sharing insights on the management, curation, and preservation of the archipelago’s cultural heritage collections.',
      zh: 'd’Topeng Kingdom 创始人作为主讲嘉宾出席博物馆论坛，分享有关群岛文化遗产藏品管理、策展与保护的见解。',
    },
  },
  {
    id: 2,
    title: {
      id: 'Dtopeng Kingdom Event – Gong Xi Fat Cai',
      en: 'Dtopeng Kingdom Event – Gong Xi Fat Cai',
      zh: 'Dtopeng Kingdom 活动 — 恭喜发财',
    },
    year: '',
    location: {
      id: 'Indonesian Heritage Museum',
      en: 'Indonesian Heritage Museum',
      zh: '印度尼西亚遗产博物馆',
    },
    image: '/images/event-2.jpg',
    description: {
      id: 'Perayaan Tahun Baru Imlek di lingkungan museum, menghadirkan nuansa budaya Tionghoa-Indonesia melalui dekorasi, pertunjukan, dan kegiatan bertema Peranakan.',
      en: 'A Lunar New Year celebration at the museum, presenting Chinese-Indonesian cultural nuances through decorations, performances, and Peranakan-themed activities.',
      zh: '博物馆内举办的农历新年庆祝活动，通过装饰、表演及土生华人主题活动呈现华印文化韵味。',
    },
  },
  {
    id: 3,
    title: {
      id: 'Dtopeng Kingdom Event – Grand City Surabaya',
      en: 'Dtopeng Kingdom Event – Grand City Surabaya',
      zh: 'Dtopeng Kingdom 活动 — 泗水 Grand City',
    },
    year: '',
    location: {
      id: 'Grand City, Surabaya',
      en: 'Grand City, Surabaya',
      zh: '泗水 Grand City',
    },
    image: '/images/event-3.jpg',
    description: {
      id: 'Partisipasi d’Topeng Kingdom dalam kegiatan pameran di Grand City Surabaya, memperkenalkan koleksi topeng dan artefak budaya kepada masyarakat kota.',
      en: 'd’Topeng Kingdom’s participation in an exhibition at Grand City Surabaya, introducing its mask collection and cultural artefacts to the city’s public.',
      zh: 'd’Topeng Kingdom 参与泗水 Grand City 的展览活动，向城市民众介绍其面具藏品与文化文物。',
    },
  },
  {
    id: 4,
    title: {
      id: 'Dtopeng Kingdom Event – KTT ASEAN Summit Bali',
      en: 'Dtopeng Kingdom Event – ASEAN Summit Bali',
      zh: 'Dtopeng Kingdom 活动 — 巴厘岛东盟峰会',
    },
    year: '',
    location: { id: 'Bali', en: 'Bali', zh: '巴厘岛' },
    image: '/images/event-4.jpg',
    description: {
      id: 'd’Topeng Kingdom turut hadir menampilkan kekayaan budaya Indonesia pada rangkaian KTT ASEAN Summit di Bali, memperkenalkan warisan Nusantara di panggung internasional.',
      en: 'd’Topeng Kingdom took part in showcasing Indonesia’s cultural wealth during the ASEAN Summit in Bali, introducing the archipelago’s heritage on an international stage.',
      zh: 'd’Topeng Kingdom 参与巴厘岛东盟峰会系列活动，展示印尼丰富的文化，在国际舞台上介绍群岛遗产。',
    },
  },
  {
    id: 5,
    title: {
      id: 'Dtopeng Kingdom Event – LSCAC',
      en: 'Dtopeng Kingdom Event – LSCAC',
      zh: 'Dtopeng Kingdom 活动 — LSCAC',
    },
    year: '',
    location: {
      id: 'Indonesian Heritage Museum',
      en: 'Indonesian Heritage Museum',
      zh: '印度尼西亚遗产博物馆',
    },
    image: '/images/event-5.jpg',
    description: {
      id: 'Keikutsertaan museum dalam konferensi LSCAC (Language, Society and Culture in Asian Contexts), mempertemukan budaya dan akademisi dalam diskusi lintas negara.',
      en: 'The museum’s participation in the LSCAC conference (Language, Society and Culture in Asian Contexts), bringing together culture and academics in cross-country discussions.',
      zh: '博物馆参与 LSCAC（亚洲语境中的语言、社会与文化）会议，让文化与学术界在跨国讨论中相聚。',
    },
  },
  {
    id: 6,
    title: {
      id: 'Dtopeng Kingdom Event – Museum 10 November Surabaya',
      en: 'Dtopeng Kingdom Event – Museum 10 November Surabaya',
      zh: 'Dtopeng Kingdom 活动 — 泗水11月10日博物馆',
    },
    year: '',
    location: {
      id: 'Museum 10 November, Surabaya',
      en: 'Museum 10 November, Surabaya',
      zh: '泗水11月10日博物馆',
    },
    image: '/images/event-6.jpg',
    description: {
      id: 'Kolaborasi dan kegiatan bersama Museum 10 November Surabaya dalam rangka memperkuat jejaring permuseuman dan edukasi sejarah perjuangan bangsa.',
      en: 'Collaboration and joint activities with Museum 10 November Surabaya to strengthen museum networks and education on the nation’s history of struggle.',
      zh: '与泗水11月10日博物馆开展合作与联合活动，以加强博物馆网络及民族奋斗史教育。',
    },
  },
  {
    id: 7,
    title: {
      id: 'Dtopeng Kingdom Event – Museum Expo 2015',
      en: 'Dtopeng Kingdom Event – Museum Expo 2015',
      zh: 'Dtopeng Kingdom 活动 — 2015 博物馆博览会',
    },
    year: '2015',
    location: { id: 'Indonesia', en: 'Indonesia', zh: '印度尼西亚' },
    image: '/images/event-7.jpg',
    description: {
      id: 'Partisipasi d’Topeng Kingdom dalam Museum Expo 2015, ajang pameran bersama museum-museum di Indonesia untuk memperkenalkan koleksi unggulan kepada publik.',
      en: 'd’Topeng Kingdom’s participation in Museum Expo 2015, a joint exhibition of museums across Indonesia to introduce their finest collections to the public.',
      zh: 'd’Topeng Kingdom 参与 2015 博物馆博览会，这是印尼各博物馆联合举办的展览，向公众介绍各馆的精品藏品。',
    },
  },
  {
    id: 8,
    title: {
      id: 'Dtopeng Kingdom Event – Pameran LKS',
      en: 'Dtopeng Kingdom Event – LKS Exhibition',
      zh: 'Dtopeng Kingdom 活动 — LKS 展览',
    },
    year: '',
    location: {
      id: 'Indonesian Heritage Museum',
      en: 'Indonesian Heritage Museum',
      zh: '印度尼西亚遗产博物馆',
    },
    image: '/images/event-8.jpg',
    description: {
      id: 'd’Topeng Kingdom dalam ajang Pameran LKS (Lomba Kompetensi Siswa), mendukung kegiatan edukatif dan kreativitas pelajar melalui pengenalan warisan budaya.',
      en: 'd’Topeng Kingdom at the LKS Exhibition (Student Competency Competition), supporting educational activities and student creativity through the introduction of cultural heritage.',
      zh: 'd’Topeng Kingdom 参与 LKS 展览（学生技能竞赛），通过介绍文化遗产支持教育活动与学生创造力。',
    },
  },
  {
    id: 9,
    title: {
      id: 'JB School Bali',
      en: 'JB School Bali',
      zh: '巴厘岛 JB 学校',
    },
    year: '',
    location: { id: 'Bali', en: 'Bali', zh: '巴厘岛' },
    image: '/images/event-9.jpg',
    description: {
      id: 'Program edukatif bersama JB School Bali, mengajak pelajar mengenal lebih dekat koleksi budaya dan sejarah Nusantara melalui kunjungan dan kegiatan interaktif.',
      en: 'An educational program with JB School Bali, inviting students to get closer to the archipelago’s cultural and historical collections through visits and interactive activities.',
      zh: '与巴厘岛 JB 学校合作的教育项目，通过参观及互动活动让学生更深入地认识群岛的文化与历史藏品。',
    },
  },
  {
    id: 10,
    title: {
      id: 'Dtopeng Kingdom Event – WNCH',
      en: 'Dtopeng Kingdom Event – WNCH',
      zh: 'Dtopeng Kingdom 活动 — WNCH',
    },
    year: '',
    location: {
      id: 'Indonesian Heritage Museum',
      en: 'Indonesian Heritage Museum',
      zh: '印度尼西亚遗产博物馆',
    },
    image: '/images/event-10.jpg',
    description: {
      id: 'Keikutsertaan d’Topeng Kingdom dalam kegiatan WNCH, memperkenalkan kekayaan koleksi dan warisan budaya Nusantara kepada para peserta dan pengunjung.',
      en: 'd’Topeng Kingdom’s participation in the WNCH event, introducing the richness of its collections and the archipelago’s cultural heritage to participants and visitors.',
      zh: 'd’Topeng Kingdom 参与 WNCH 活动，向参与者与访客介绍其丰富的藏品及群岛文化遗产。',
    },
  },
];

export default function Event() {
  const lang = useUiLang();
  const ui = UI[lang];

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            {ui.title}
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            {ui.intro}
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
                    alt={event.title[lang]}
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
                  <span>{event.location[lang]}</span>
                </div>
                <h2 className="font-['Cinzel'] text-2xl md:text-3xl text-[#2B2B2B] mb-4 leading-snug">
                  {event.title[lang]}
                </h2>
                <div className="w-16 h-0.5 bg-[#C8B9A6] mb-4"></div>
                <p className="text-[#5A5A5A] leading-relaxed">
                  {event.description[lang]}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
