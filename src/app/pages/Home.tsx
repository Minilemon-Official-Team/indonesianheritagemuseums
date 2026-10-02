import { ArrowRight, ExternalLink, Map, Play, ScanLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeritageHero from '../components/HeritageHero';
import { useUiLang } from '../i18n';

const T = {
  id: {
    heroSubtitle: 'Temukan kekayaan warisan budaya Indonesia melalui 17 zona cerita dan pengalaman digital.',
    downloadAR: 'Unduh AR',
    autoGuide: 'Buka Auto Guide',
    welcomeTitle: 'Satu museum. Banyak pintu masuk.',
    welcomeText: 'Indonesian Heritage Museum menyimpan warisan budaya dari seluruh wilayah Indonesia. Datang untuk melihat koleksi, tinggal untuk menemukan hubungan antara benda, manusia, dan tempat.',
    arTitle: 'Lihat lapisan digital',
    arText: 'Buka objek tiga dimensi melalui aplikasi Augmented Reality resmi museum.',
    autoTitle: 'Mulai dari satu zona',
    autoText: 'Ikuti narasi per wilayah dengan Auto Self Guided Tour sebelum atau sesudah kunjungan.',
    archiveTitle: 'Jejak yang saling terhubung',
    archiveText: 'Dari Austronesia sampai Jawa, setiap ruang adalah potongan dari peta budaya yang lebih luas.',
    explore: 'Jelajahi koleksi',
    visit: 'Rencanakan kunjungan',
  },
  en: {
    heroSubtitle: 'Discover Indonesia\'s cultural heritage through 17 story zones and digital experiences.',
    downloadAR: 'Download AR',
    autoGuide: 'Open Auto Guide',
    welcomeTitle: 'One museum. Many ways in.',
    welcomeText: 'Indonesian Heritage Museum holds cultural stories from across Indonesia. Come for the objects, stay for the relationships between people, places, and memory.',
    arTitle: 'See the digital layer',
    arText: 'Open selected objects in three dimensions through the museum\'s official Augmented Reality app.',
    autoTitle: 'Start with one zone',
    autoText: 'Follow a regional narrative with the Auto Self Guided Tour before or after your visit.',
    archiveTitle: 'Traces that connect',
    archiveText: 'From Austronesia to Java, every room is a fragment of a larger cultural map.',
    explore: 'Explore the collection',
    visit: 'Plan your visit',
  },
  zh: {
    heroSubtitle: '通过17个故事展区和数字体验，探索印度尼西亚丰富的文化遗产。',
    downloadAR: '下载 AR',
    autoGuide: '打开自助导览',
    welcomeTitle: '一座博物馆，多种进入方式。',
    welcomeText: '印度尼西亚遗产博物馆收藏来自印度尼西亚各地的文化故事。为了文物而来，也为了人与地方之间的联系而停留。',
    arTitle: '查看数字层',
    arText: '通过博物馆官方增强现实应用，以三维方式查看精选展品。',
    autoTitle: '从一个展区开始',
    autoText: '在参观前后使用自助导览，沿着地区叙事继续探索。',
    archiveTitle: '彼此相连的足迹',
    archiveText: '从南岛文化到爪哇，每个展厅都是更大文化地图的一角。',
    explore: '探索收藏',
    visit: '计划参观',
  },
};

export default function Home() {
  const lang = useUiLang();
  const t = T[lang];

  return (
    <div className="heritage-home">
      <HeritageHero
        eyebrow="INDONESIAN HERITAGE MUSEUM / 01"
        title={<><span>Indonesian Heritage</span><em>Museum</em></>}
        description={t.heroSubtitle}
        video="/videos/heritage-banner.mp4"
        poster="/images/zones/austronesia.jpeg"
        meta={['17 STORY ZONES', 'AR + AUTO GUIDE', 'EST. 2010']}
        variant="atlas"
        actions={<>
          <a className="heritage-button heritage-button--solid" href="https://play.google.com/store/apps/details?id=com.dtopeng.ihmarr" target="_blank" rel="noopener noreferrer">{t.downloadAR}<ExternalLink size={16} aria-hidden="true" /></a>
          <Link className="heritage-button heritage-button--line" to="/auto-guide">{t.autoGuide}<ArrowRight size={16} aria-hidden="true" /></Link>
        </>}
      />

      <section className="heritage-stat-band" aria-label="Museum highlights">
        <div><strong>17</strong><span>story zones</span></div>
        <div><strong>AR</strong><span>see objects move</span></div>
        <div><strong>2010</strong><span>opened the archive</span></div>
        <Link to="/visit" className="heritage-stat-link">{t.visit}<ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="heritage-home-intro heritage-section" aria-labelledby="heritage-welcome-title">
        <div className="heritage-section-kicker">A MAP OF MANY HOMES</div>
        <div className="heritage-intro-grid">
          <h2 id="heritage-welcome-title">{t.welcomeTitle}</h2>
          <div>
            <p className="heritage-lede">{t.welcomeText}</p>
            <Link to="/gallery" className="heritage-text-link">{t.explore}<ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="heritage-feature-rail heritage-section" aria-label="Museum digital experiences">
        <div className="heritage-section-heading">
          <div><span className="heritage-section-kicker">CHOOSE YOUR LAYER</span><h2>Look closer. Go further.</h2></div>
          <span className="heritage-section-note">01 — 02</span>
        </div>
        <div className="heritage-feature-grid">
          <article className="heritage-feature-card heritage-feature-card--ar">
            <div className="heritage-feature-image"><img src="/images/zones/autoguide-image-(10).jpeg" alt="Visitors exploring a heritage display with a phone" loading="lazy" /><span className="heritage-feature-tag"><ScanLine size={15} aria-hidden="true" /> DIGITAL LAYER</span></div>
            <div className="heritage-feature-copy"><h3>{t.arTitle}</h3><p>{t.arText}</p><a className="heritage-text-link" href="https://play.google.com/store/apps/details?id=com.dtopeng.ihmarr" target="_blank" rel="noopener noreferrer">{t.downloadAR}<ExternalLink size={16} aria-hidden="true" /></a></div>
          </article>
          <article className="heritage-feature-card heritage-feature-card--guide">
            <div className="heritage-feature-image"><img src="/images/auto-tour.png" alt="Auto Guide museum route" loading="lazy" /><span className="heritage-feature-tag"><Map size={15} aria-hidden="true" /> REGIONAL ROUTES</span></div>
            <div className="heritage-feature-copy"><h3>{t.autoTitle}</h3><p>{t.autoText}</p><Link className="heritage-text-link" to="/auto-guide">{t.autoGuide}<ArrowRight size={16} aria-hidden="true" /></Link></div>
          </article>
        </div>
      </section>

      <section className="heritage-archive-slice heritage-section">
        <div className="heritage-archive-image"><img src="/images/zones/austronesia.jpeg" alt="Austronesia gallery at Indonesian Heritage Museum" loading="lazy" /><span>FIELD NOTE / 02</span></div>
        <div className="heritage-archive-copy"><span className="heritage-section-kicker">THE LIVING ARCHIVE</span><h2>{t.archiveTitle}</h2><p>{t.archiveText}</p><div className="heritage-route-pills"><span>AUSTRONESIA</span><span>NUSANTARA</span><span>JAWA</span></div><Link to="/auto-guide" className="heritage-button heritage-button--dark">{t.explore}<ArrowRight size={16} aria-hidden="true" /></Link></div>
      </section>

      <section className="heritage-film-strip" aria-label="Museum story">
        <div className="heritage-film-strip-copy"><Play size={18} aria-hidden="true" /><span>THE ARCHIVE MOVES</span><p>Every object carries a route. Follow it.</p></div>
        <img src="/images/zones/majapahit.jpeg" alt="Majapahit heritage display" loading="lazy" />
        <img src="/images/zones/jatim.jpeg" alt="East Java heritage display" loading="lazy" />
        <img src="/images/zones/jateng.jpeg" alt="Central Java heritage display" loading="lazy" />
      </section>
    </div>
  );
}
