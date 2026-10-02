import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import HeritageHero from '../components/HeritageHero';

const quietRouteHeroes = {
  '/news': {
    eyebrow: 'READING ROOM / 06',
    title: <>Stories from the<br /><em>living archive.</em></>,
    description: 'Follow new exhibitions, community moments, and the people keeping Indonesian heritage in motion.',
    image: '/images/news-7.jpg',
    meta: ['MUSEUM NEWS', 'FIELD NOTES', '2026'],
  },
  '/gallery': {
    eyebrow: 'VISUAL INDEX / 07',
    title: <>See the archipelago<br /><em>in fragments.</em></>,
    description: 'Browse the rooms, faces, objects, and gestures that make the museum feel alive beyond a single visit.',
    image: '/images/auto-tour.png',
    meta: ['VISUAL ARCHIVE', '17 ZONES', 'OBJECT LED'],
  },
  '/visit': {
    eyebrow: 'FIELD NOTE / 08',
    title: <>Plan your way<br /><em>into Indonesia.</em></>,
    description: 'Everything you need for a thoughtful visit to Indonesian Heritage Museum in Batu.',
    image: '/images/vip-19.jpg',
    meta: ['BATU, EAST JAVA', 'OPEN TODAY', 'PLAN A VISIT'],
  },
  '/event': {
    eyebrow: 'GATHERING / 09',
    title: <>The archive is<br /><em>still gathering.</em></>,
    description: 'Find exhibitions, workshops, and cultural programs that turn heritage into a shared experience.',
    image: '/images/event-4.jpg',
    meta: ['PROGRAMS', 'COMMUNITY', 'RESERVE'],
  },
  '/testimoni': {
    eyebrow: 'VISITOR VOICES / 10',
    title: <>What stays with<br /><em>you after.</em></>,
    description: 'Read reflections from families, students, and institutions who found their own route through the museum.',
    image: '/images/vip-18.jpg',
    meta: ['VISITOR NOTES', 'FAMILY', 'INSTITUTIONS'],
  },
  '/education': {
    eyebrow: 'LEARNING DESK / 11',
    title: <>Start with a<br /><em>question.</em></>,
    description: 'Choose an education route that gives students, families, and teachers a way into Indonesia\'s many stories.',
    image: '/images/zones/jateng.jpeg',
    meta: ['EDUCATION', 'FAMILY', 'SCHOOL VISITS'],
  },
  '/virtual-tour': {
    eyebrow: 'REMOTE ROOM / 12',
    title: <>Walk the museum<br /><em>from anywhere.</em></>,
    description: 'Step into selected rooms and historic sites through guided virtual experiences.',
    image: '/images/zones/austronesia.jpeg',
    meta: ['VIRTUAL TOUR', 'ROOMS', '360°'],
  },
} as const;

const ownHeroRoutes = ['/','/auto-guide','/meta-museum','/vip-guest','/education/general-family','/education/educational-institution','/education/educational-series'];

function routeHero(pathname: string) {
  if (pathname.startsWith('/news/')) return { ...quietRouteHeroes['/news'], eyebrow: 'READING ROOM / 06 · DETAIL' };
  if (pathname.startsWith('/virtual-tour-')) return { ...quietRouteHeroes['/virtual-tour'], eyebrow: 'REMOTE ROOM / 12 · DETAIL' };
  return quietRouteHeroes[pathname as keyof typeof quietRouteHeroes];
}

export default function Root() {
  const location = useLocation();
  const showQuietHero = !ownHeroRoutes.includes(location.pathname) && !location.pathname.startsWith('/object/');
  const hero = showQuietHero ? routeHero(location.pathname) : undefined;

  return (
    <div className="heritage-app min-h-screen flex flex-col" data-heritage-route={location.pathname}>
      <Header />
      <main className="heritage-main flex-1 pt-20">
        {hero && <HeritageHero {...hero} variant="archive" />}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
