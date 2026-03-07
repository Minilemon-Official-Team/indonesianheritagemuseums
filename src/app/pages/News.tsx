import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'New Exhibition: Treasures of Majapahit Opens March 2026',
    date: 'March 1, 2026',
    category: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1759104049717-b2a185621890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBleGhpYml0aW9uJTIwb3BlbmluZyUyMGV2ZW50fGVufDF8fHx8MTc3MjQ4MzkwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Our newest exhibition showcases rare artifacts from the Majapahit Empire, including ceremonial objects, royal regalia, and daily life items from the 13th to 15th centuries.',
  },
  {
    id: 2,
    title: 'Archaeological Discovery at Candi Jago Site',
    date: 'February 15, 2026',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1769163192915-22f131e2fe16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoYWVvbG9naWNhbCUyMGRpc2NvdmVyeSUyMGFydGlmYWN0c3xlbnwxfHx8fDE3NzI0ODM5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Recent excavations near Candi Jago have uncovered a collection of bronze artifacts and stone inscriptions providing new insights into 13th-century Javanese religious practices.',
  },
  {
    id: 3,
    title: 'Traditional Batik Workshop Series Returns',
    date: 'February 10, 2026',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1588031541743-53f89fc03f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHdvcmtzaG9wJTIwZWR1Y2F0aW9uJTIwbXVzZXVtfGVufDF8fHx8MTc3MjQ4MzkwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Join us for our popular batik workshop series where master artisans teach traditional Indonesian fabric dyeing techniques. Registration now open for March sessions.',
  },
  {
    id: 4,
    title: 'Conservation Project Updates Stone Reliefs',
    date: 'January 28, 2026',
    category: 'Conservation',
    image: 'https://images.unsplash.com/photo-1763586261426-212e60d2959f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMHByZXNlcnZhdGlvbiUyMHJlc3RvcmF0aW9ufGVufDF8fHx8MTc3MjQ4MzkwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Our conservation team has completed restoration work on several important stone relief panels, revealing previously obscured details of ancient Javanese artistry.',
  },
  {
    id: 5,
    title: 'Lecture Series: Ancient Indonesian Trade Networks',
    date: 'January 20, 2026',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1747674148491-51f8a5c723db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBsZWN0dXJlJTIwc3BlYWtlciUyMGF1ZGllbmNlfGVufDF8fHx8MTc3MjQ4MzkwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Renowned historian Dr. Siti Rahayu presents a three-part lecture series exploring how ancient Indonesian kingdoms connected with global maritime trade routes.',
  },
  {
    id: 6,
    title: 'Special Exhibition: Contemporary Interpretations',
    date: 'January 15, 2026',
    category: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1766890410688-77af00a1dc41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFydCUyMGV4aGliaXRpb24lMjBkaXNwbGF5fGVufDF8fHx8MTc3MjQ4MzkwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Modern Indonesian artists respond to traditional heritage in a thought-provoking exhibition that bridges past and present through contemporary artistic practices.',
  },
  {
    id: 7,
    title: 'Museum Celebrates 25th Anniversary',
    date: 'December 20, 2025',
    category: 'Announcement',
    image: 'https://images.unsplash.com/photo-1759104049717-b2a185621890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBleGhpYml0aW9uJTIwb3BlbmluZyUyMGV2ZW50fGVufDF8fHx8MTc3MjQ4MzkwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'The Indonesian Heritage Museum marks 25 years of cultural preservation and education with special events, exhibitions, and free admission throughout December.',
  },
  {
    id: 8,
    title: 'Digital Archive Project Launches Online',
    date: 'December 10, 2025',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1769163192915-22f131e2fe16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoYWVvbG9naWNhbCUyMGRpc2NvdmVyeSUyMGFydGlmYWN0c3xlbnwxfHx8fDE3NzI0ODM5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Explore over 10,000 digitized artifacts, manuscripts, and photographs through our new online archive platform, making Indonesian heritage accessible worldwide.',
  },
  {
    id: 9,
    title: 'School Partnership Program Expands',
    date: 'November 25, 2025',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1588031541743-53f89fc03f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHdvcmtzaG9wJTIwZWR1Y2F0aW9uJTIwbXVzZXVtfGVufDF8fHx8MTc3MjQ4MzkwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    excerpt: 'Our education program now partners with 50 schools across East Java, providing curriculum-aligned museum visits and hands-on cultural learning experiences.',
  },
];

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Exhibition: 'bg-[#8C6B3E]',
      Research: 'bg-[#A47E4F]',
      Education: 'bg-[#8C6B3E]',
      Conservation: 'bg-[#A47E4F]',
      Event: 'bg-[#8C6B3E]',
      Announcement: 'bg-[#A47E4F]',
      Technology: 'bg-[#8C6B3E]',
    };
    return colors[category] || 'bg-[#8C6B3E]';
  };

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Museum News & Updates
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest exhibitions, events, research discoveries, and programs at the Indonesian Heritage Museum
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 ${getCategoryColor(article.category)} text-white text-xs rounded-full`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[#8C6B3E] text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h2 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-[#5A5A5A] text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded border border-[#C8B9A6] text-[#8C6B3E] hover:bg-[#E7DED0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded ${
                    currentPage === page
                      ? 'bg-[#8C6B3E] text-white'
                      : 'bg-white border border-[#C8B9A6] text-[#2B2B2B] hover:bg-[#E7DED0]'
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded border border-[#C8B9A6] text-[#8C6B3E] hover:bg-[#E7DED0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
