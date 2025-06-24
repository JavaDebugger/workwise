import React, { useState, useEffect, Suspense, Component as ReactComponent } from 'react'; // Added Suspense and Component for ErrorBoundary
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, ChevronRight, Eye, Heart, MessageCircle, Calendar, User, Tag, BookOpen, TrendingUp, Clock, ArrowRight, Search, Filter, AlertTriangle } from 'lucide-react'; // Added AlertTriangle for ErrorBoundary

// --- MOCK DATA ---
// It's good practice to move this to a separate file (e.g., data/mockData.js) in a real project
const heroBlogs = [
  { id: 1, title: "Top 10 In-Demand Skills for 2025", excerpt: "Discover the essential skills that will make you stand out in South Africa's competitive job market.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop", author: "Sarah Johnson", date: "2024-06-20", category: "Career Tips", views: 2100, likes: 89, comments: 34 },
  { id: 2, title: "Remote Work Revolution in South Africa", excerpt: "How the remote work trend is reshaping the South African employment landscape.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop", author: "Michael Chen", date: "2024-06-18", category: "Work Culture", views: 1850, likes: 76, comments: 28 },
  { id: 3, title: "Tech Industry Growth Opportunities", excerpt: "Exploring the booming tech sector and emerging opportunities for South African professionals.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop", author: "Lisa Williams", date: "2024-06-15", category: "Tech Updates", views: 3200, likes: 142, comments: 67 }
];

const popularPosts = [
  { id: 4, title: "CV Writing Secrets", excerpt: "Master the art of creating CVs that get noticed by recruiters.", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=400&fit=crop", author: "John Smith", date: "2024-06-10", category: "Career Tips", views: 4500, likes: 203, comments: 89, backContent: { summary: "A comprehensive guide covering modern CV writing techniques, ATS optimization, and industry-specific tips.", tags: ["CV", "Career", "Job Search", "Tips"] } },
  { id: 5, title: "Interview Preparation Guide", excerpt: "Ace your next interview with these proven strategies and techniques.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop", author: "Emma Davis", date: "2024-06-08", category: "Career Tips", views: 3800, likes: 156, comments: 72, backContent: { summary: "From research techniques to body language tips, everything you need to succeed in your next interview.", tags: ["Interview", "Career", "Preparation", "Success"] } },
  { id: 6, title: "Salary Negotiation Tips", excerpt: "Learn how to negotiate your worth and secure better compensation packages.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop", author: "David Wilson", date: "2024-06-05", category: "Career Tips", views: 2900, likes: 134, comments: 45, backContent: { summary: "Strategic approaches to salary negotiation, market research, and effective communication techniques.", tags: ["Salary", "Negotiation", "Career", "Finance"] } }
];

const allLatestPostsData = [ // Renamed to avoid conflict later
  { id: 7, title: "Digital Marketing Careers in Cape Town", excerpt: "Exploring the growing digital marketing sector and available opportunities in the Mother City.", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&h=400&fit=crop", author: "Rachel Green", date: "2024-06-12", category: "Industry Insights", views: 1200, likes: 67, comments: 23 },
  { id: 8, title: "Networking in the Digital Age", excerpt: "How to build meaningful professional connections online and offline.", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop", author: "Tom Anderson", date: "2024-06-11", category: "Career Tips", views: 980, likes: 45, comments: 19 },
  { id: 9, title: "Upskilling for Career Growth", excerpt: "The importance of continuous learning and skill development in today's job market.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop", author: "Sarah Johnson", date: "2024-06-09", category: "Professional Development", views: 1500, likes: 78, comments: 34 },
  { id: 10, title: "Work-Life Balance Strategies", excerpt: "Practical tips for maintaining a healthy balance between work and personal life.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop", author: "Lisa Williams", date: "2024-06-07", category: "Work Culture", views: 2100, likes: 98, comments: 56 }
];

// --- ERROR BOUNDARY COMPONENT ---
class ErrorBoundary extends ReactComponent {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ errorInfo });
    // You could log this to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    const { hasError } = this.state as any;
    if (hasError) {
      return (
        <div className="p-4 my-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <div className="flex items-center">
            <AlertTriangle className="mr-2" size={24} />
            <h3 className="font-bold">Oops! Something went wrong.</h3>
          </div>
          <p className="mt-2 text-sm">
            {(this.props as any).message || "We encountered an issue displaying this section. Please try again later."}
          </p>
          {process.env.NODE_ENV === 'development' && (this.state as any).error && (
            <details className="mt-2 text-xs">
              <summary>Error Details (Development Only)</summary>
              <pre className="mt-1 p-2 bg-red-50 rounded text-red-600 overflow-auto">
                {(this.state as any).error.toString()}
                {(this.state as any).errorInfo && (this.state as any).errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }
    return (this.props as any).children;
  }
}

// --- UI COMPONENTS ---

const HeroCarousel = ({ posts }: { posts: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || posts.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [posts.length, isAutoPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % posts.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length);

  if (!posts || posts.length === 0) {
    return <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12 group flex items-center justify-center bg-gray-200 text-gray-500">No hero posts available.</div>;
  }

  return (
    <div
      className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12 group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{ backgroundImage: `url(${post.image})`, transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)' }}
            aria-label={post.title} // Accessibility for background image
            role="img" // Accessibility for background image
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl text-white">
                <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm font-medium mb-4">{post.category}</span>
                <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight">{post.title}</h1>
                <p className="text-lg lg:text-xl mb-6 text-gray-200 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mb-6 text-sm text-gray-300">
                  <span className="flex items-center gap-2"><User size={16} />{post.author}</span>
                  <span className="flex items-center gap-2"><Calendar size={16} />{new Date(post.date).toLocaleDateString()}</span>
                  <span className="flex items-center gap-2"><Eye size={16} />{post.views.toLocaleString()}</span>
                </div>
                <a // Changed to <a> for semantic navigation
                  href={`/blog/${post.id}`} // Example link, adjust as needed
                  className="group/btn px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:gap-3"
                >
                  Read Full Article
                  <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
      ><ChevronLeft size={24} /></button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
      ><ChevronRight size={24} /></button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
          />
        ))}
      </div>
    </div>
  );
};

const FlipCard = ({ post }: { post: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const checkMobile = () => {
      // Consider 'pointer: coarse' for touch, but 'ontouchstart' is a common fallback
      setIsMobile(mediaQuery.matches || 'ontouchstart' in window);
    };
    checkMobile();
    mediaQuery.addEventListener('change', checkMobile);
    return () => mediaQuery.removeEventListener('change', checkMobile);
  }, []);

  const handleInteraction = (e: any) => {
    // Prevent event bubbling if necessary, e.g., if card itself is a link
    // e.stopPropagation(); 
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="group perspective-1000 h-80 cursor-pointer"
      onMouseEnter={() => !isMobile && setIsFlipped(true)}
      onMouseLeave={() => !isMobile && setIsFlipped(false)}
      onClick={handleInteraction}
      role="button" // Make it keyboard accessible if it's interactive
      tabIndex={0}  // Make it focusable
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleInteraction(e); }}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden bg-white border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
          {isMobile && (
            <div className="absolute top-3 right-3 z-10" aria-hidden="true">
              <div className="w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary rounded-full border-dashed animate-spin-slow" />
              </div>
            </div>
          )}
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">Trending</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2 text-foreground line-clamp-2">{post.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><Eye size={12} />{post.views.toLocaleString()}</span>
                <span className="flex items-center gap-1"><Heart size={12} />{post.likes}</span>
                <span className="flex items-center gap-1"><MessageCircle size={12} />{post.comments}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white p-6 flex flex-col justify-between">
          {isMobile && (
            <div className="absolute top-3 right-3 z-10" aria-hidden="true">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✕</span>
              </div>
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold mb-3">{post.title}</h3>
            <p className="text-sm mb-4 text-white/90 leading-relaxed line-clamp-3">{post.backContent.summary}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.backContent.tags.map((tag: string, index: number) => (
                <span key={index} className="px-2 py-1 bg-white/20 text-xs rounded-full">{tag}</span>
              ))}
            </div>
          </div>
          <a // Changed to <a> for semantic navigation
            href={`/blog/${post.id}`} // Example link
            className="w-full py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300 flex items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()} // Prevent card flip if link is clicked
          >
            Read More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ post, index }: { post: any; index: number }) => {
  return (
    <div
      className="group bg-white rounded-xl overflow-hidden border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-500 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">{post.category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">{post.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground"><User size={12} /><span>{post.author}</span></div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground"><Calendar size={12} /><span>{new Date(post.date).toLocaleDateString()}</span></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Eye size={12} />{post.views.toLocaleString()}</span>
            <span className="flex items-center gap-1"><Heart size={12} />{post.likes}</span>
          </div>
          <a // Changed to <a> for semantic navigation
            href={`/blog/${post.id}`} // Example link
            className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-1 group/btn"
          >
            Read More <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const SearchAndFilter = ({ onSearchChange, onCategoryChange, currentCategory, currentSearchTerm }: {
  onSearchChange: (term: string) => void;
  onCategoryChange: (category: string) => void;
  currentCategory: string;
  currentSearchTerm: string;
}) => {
  const categories = ['All', 'Career Tips', 'Work Culture', 'Tech Updates', 'Industry Insights', 'Professional Development']; // Could be derived from data
  return (
    <div className="mb-12 space-y-6">
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <input
          type="search" // Use type="search" for better semantics and potential clear button by browser
          placeholder="Search articles..."
          value={currentSearchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            aria-pressed={currentCategory === category} // Accessibility
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentCategory === category
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- LOADING SPINNER FOR SUSPENSE FALLBACK ---
const LoadingSpinner = ({ text = "Loading..." }: { text?: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[200px] text-muted-foreground my-8">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
    <p>{text}</p>
  </div>
);

// --- ORIGINAL SECTION COMPONENTS (for lazy loading) ---

const OriginalPopularPostsSection = ({ posts }: { posts: any[] }) => {
  if (!posts || posts.length === 0) {
    return (
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="text-accent" size={28} />
          <h2 className="text-3xl font-bold text-foreground">Popular Now</h2>
        </div>
        <p className="text-muted-foreground">No popular posts to display at the moment.</p>
      </section>
    );
  }
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <TrendingUp className="text-accent" size={28} />
        <h2 className="text-3xl font-bold text-foreground">Popular Now</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <FlipCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

const OriginalLatestArticlesSection = ({ posts }: { posts: any[] }) => {
  const [visiblePostsCount, setVisiblePostsCount] = useState(4);
  const loadMorePosts = () => {
    setVisiblePostsCount(prev => Math.min(prev + 4, posts.length));
  };

  const currentVisiblePosts = posts.slice(0, visiblePostsCount);

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Clock className="text-primary" size={28} />
        <h2 className="text-3xl font-bold text-foreground">Latest Articles</h2>
      </div>
      {posts.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">No articles match your current filter. Try adjusting your search.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentVisiblePosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
          {visiblePostsCount < posts.length && (
            <div className="text-center">
              <button
                onClick={loadMorePosts}
                className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-primary/25"
              >
                Load More Articles ({posts.length - visiblePostsCount} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

const OriginalNewsletterCTA = () => (
  <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold mb-4">Stay Updated with WorkWise</h3>
      <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
        Get the latest career insights, job market trends, and professional development tips delivered straight to your inbox every week.
      </p>
      <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); /* Add actual submission logic */ }}>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email for newsletter"
            required
            className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button type="submit" className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
);

// --- LAZY-LOADED COMPONENTS ---
// In a real project, these would be imported from separate files:
// const LazyHeroCarousel = React.lazy(() => import('./components/HeroCarousel'));
// const LazyPopularPostsSection = React.lazy(() => import('./components/PopularPostsSection'));
// etc.

const LazyHeroCarousel = React.lazy(() => Promise.resolve({ default: HeroCarousel }));
const LazyPopularPostsSection = React.lazy(() => Promise.resolve({ default: OriginalPopularPostsSection }));
const LazySearchAndFilter = React.lazy(() => Promise.resolve({ default: SearchAndFilter }));
const LazyLatestArticlesSection = React.lazy(() => Promise.resolve({ default: OriginalLatestArticlesSection }));
const LazyNewsletterCTA = React.lazy(() => Promise.resolve({ default: OriginalNewsletterCTA }));


// --- MAIN PAGE COMPONENT ---
const BlogWise: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredLatestPosts, setFilteredLatestPosts] = useState(allLatestPostsData);

  useEffect(() => {
    let posts = allLatestPostsData;
    if (selectedCategory !== 'All') {
      posts = posts.filter(post => post.category === selectedCategory);
    }
    if (searchTerm) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredLatestPosts(posts);
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog Wise - WorkWise SA</title>
        <meta name="description" content="Explore the latest job market trends, career advice, and industry insights on WorkWise SA's Blog Wise." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Static content like breadcrumbs and header load immediately */}
        <div className="container mx-auto px-4 pt-8">
          <nav aria-label="breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <span className="text-foreground font-medium" aria-current="page">Blog Wise</span>
          </nav>
        </div>

        <div className="container mx-auto px-4 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="text-primary" size={32} />
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground">Blog Wise</h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay informed with the latest job market trends, career advice, and industry insights tailored for the South African professional landscape.
            </p>
          </div>
        </div>

        {/* Sections with dynamic content are lazy-loaded */}
        <div className="container mx-auto px-4">
          <ErrorBoundary message="Could not load featured articles.">
            <Suspense fallback={<LoadingSpinner text="Loading Featured Articles..." />}>
              <LazyHeroCarousel posts={heroBlogs} />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary message="Could not load popular posts.">
            <Suspense fallback={<LoadingSpinner text="Loading Popular Posts..." />}>
              <LazyPopularPostsSection posts={popularPosts} />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary message="Could not load search and filter options.">
            <Suspense fallback={<LoadingSpinner text="Loading Filters..." />}>
              <LazySearchAndFilter
                onSearchChange={setSearchTerm}
                onCategoryChange={setSelectedCategory}
                currentCategory={selectedCategory}
                currentSearchTerm={searchTerm}
              />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary message="Could not load latest articles.">
            <Suspense fallback={<LoadingSpinner text="Loading Latest Articles..." />}>
              <LazyLatestArticlesSection posts={filteredLatestPosts} />
            </Suspense>
          </ErrorBoundary>
        </div>
        
        <ErrorBoundary message="Could not load newsletter section.">
          <Suspense fallback={
            <div className="h-64 bg-primary/10 flex items-center justify-center">
              <LoadingSpinner text="Loading Newsletter..." />
            </div>
          }>
            <LazyNewsletterCTA />
          </Suspense>
        </ErrorBoundary>

        <style jsx>{`
          .perspective-1000 { perspective: 1000px; }
          .transform-style-preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; opacity: 0; }
          .animate-spin-slow { animation: spin 3s linear infinite; }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </>
  );
};

export default BlogWise;
