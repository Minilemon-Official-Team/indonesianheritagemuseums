import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Stone Temple Guardian',
    category: 'Sculpture',
    image: 'https://images.unsplash.com/photo-1704447840243-a0d84a38198b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdGVtcGxlJTIwc3RvbmUlMjBzY3VscHR1cmV8ZW58MXx8fHwxNzcyNDgzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ancient stone guardian statue from Majapahit temple complex',
  },
  {
    id: 2,
    title: 'Traditional Ceramics',
    category: 'Pottery',
    image: 'https://images.unsplash.com/photo-1719139830243-766eb3837646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwSmF2YSUyMHBvdHRlcnklMjBjZXJhbWljc3xlbnwxfHx8fDE3NzI0ODM5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Collection of ancient Javanese pottery and ceramic vessels',
  },
  {
    id: 3,
    title: 'Batik Heritage',
    category: 'Textiles',
    image: 'https://images.unsplash.com/photo-1761516659497-8478e39d2b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwYmF0aWslMjB0ZXh0aWxlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzI0ODM5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Traditional Indonesian batik textile with intricate patterns',
  },
  {
    id: 4,
    title: 'Temple Relief Carving',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1766843685626-eb30e8bc6560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjByZWxpZWYlMjBjYXJ2aW5nfGVufDF8fHx8MTc3MjQ4Mzk1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Detailed stone relief from ancient Javanese temple',
  },
  {
    id: 5,
    title: 'Ceremonial Mask',
    category: 'Artifacts',
    image: 'https://images.unsplash.com/photo-1760133453014-c8df5dcc0007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEluZG9uZXNpYW4lMjB3b29kZW4lMjBtYXNrfGVufDF8fHx8MTc3MjQ4Mzk1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Traditional wooden mask used in ceremonial performances',
  },
  {
    id: 6,
    title: 'Ancient Manuscript',
    category: 'Documents',
    image: 'https://images.unsplash.com/photo-1765557276218-9fd78c54a475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWFudXNjcmlwdCUyMGhpc3RvcmljYWwlMjBkb2N1bWVudHxlbnwxfHx8fDE3NzI0ODM5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Historical manuscript with royal inscriptions',
  },
  {
    id: 7,
    title: 'Bronze Statue',
    category: 'Sculpture',
    image: 'https://images.unsplash.com/photo-1768030048003-ed05a8e21fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9uemUlMjBzdGF0dWUlMjBBc2lhbiUyMGhlcml0YWdlfGVufDF8fHx8MTc3MjQ4Mzk1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ancient bronze statue from Singhasari period',
  },
  {
    id: 8,
    title: 'Ceremonial Objects',
    category: 'Artifacts',
    image: 'https://images.unsplash.com/photo-1766415007411-f0754ef21609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNlcmVtb25pYWwlMjBvYmplY3QlMjBhcnRpZmFjdHxlbnwxfHx8fDE3NzI0ODM5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Royal ceremonial objects from Majapahit era',
  },
  {
    id: 9,
    title: 'Stone Inscription',
    category: 'Documents',
    image: 'https://images.unsplash.com/photo-1759234183701-efad4f40a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGluc2NyaXB0aW9uJTIwYW5jaWVudCUyMHRleHR8ZW58MXx8fHwxNzcyNDgzOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ancient stone inscription with historical text',
  },
  {
    id: 10,
    title: 'Temple Guardian Pair',
    category: 'Sculpture',
    image: 'https://images.unsplash.com/photo-1704447840243-a0d84a38198b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdGVtcGxlJTIwc3RvbmUlMjBzY3VscHR1cmV8ZW58MXx8fHwxNzcyNDgzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pair of temple guardian statues from East Java',
  },
  {
    id: 11,
    title: 'Traditional Pottery',
    category: 'Pottery',
    image: 'https://images.unsplash.com/photo-1719139830243-766eb3837646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwSmF2YSUyMHBvdHRlcnklMjBjZXJhbWljc3xlbnwxfHx8fDE3NzI0ODM5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Traditional Javanese pottery vessels',
  },
  {
    id: 12,
    title: 'Textile Patterns',
    category: 'Textiles',
    image: 'https://images.unsplash.com/photo-1761516659497-8478e39d2b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwYmF0aWslMjB0ZXh0aWxlJTIwcGF0dGVybnxlbnwxfHx8fDE3NzI0ODM5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Intricate batik patterns from various regions',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Sculpture', 'Pottery', 'Textiles', 'Architecture', 'Artifacts', 'Documents'];

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Browse our collection of artifacts, artworks, and historical treasures from Indonesian heritage
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded transition-all ${
                filter === category
                  ? 'bg-[#8C6B3E] text-white shadow-lg'
                  : 'bg-white text-[#2B2B2B] border border-[#C8B9A6] hover:bg-[#E7DED0]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="24px">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-[#8C6B3E] text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-['Cinzel'] text-xl mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-white text-center">
                <span className="inline-block px-4 py-2 bg-[#8C6B3E] rounded-full text-sm mb-3">
                  {selectedImage.category}
                </span>
                <h2 className="font-['Cinzel'] text-3xl mb-2">{selectedImage.title}</h2>
                <p className="text-white/80 text-lg">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
