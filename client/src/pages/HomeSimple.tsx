import React, { useRef, useEffect, useState, MouseEvent, FormEvent } from 'react';
import CustomHelmet from '@/components/CustomHelmet';
import CategoriesSection from '@/components/CategoriesSection';
import CompaniesSection from '@/components/CompaniesSection';
import CtaSection from '@/components/CtaSection';

interface Particle {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  fontSize: number;
  color: string;
  text: string;
}

interface Mouse {
  x: number | null;
  y: number | null;
}

interface SearchIconProps {
  className?: string;
}

const SearchIcon: React.FC<SearchIconProps> = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const HomeSimple: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const mousePositionRef = useRef<Mouse>({ x: null, y: null });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles = particlesRef.current;

    // Check for user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.font = `16px 'Inter', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('Welcome to WorkWise.SA', canvas.width / 2, canvas.height / 2);
      return;
    }

    const jobCategories = [
      'Cashier',
      'General Worker',
      'Security',
      'Petrol Attendant',
      'Domestic Worker',
      'Cleaner',
      'Landscaping',
      'Driver',
      'Call Center',
      'Warehouse',
      'Retail',
      'Receptionist',
      'Artisan',
      'Plumber',
    ];

    let canvasWidth = canvas.offsetWidth;
    let canvasHeight = canvas.offsetHeight;

    const resizeCanvas = () => {
      canvasWidth = canvas.offsetWidth;
      canvasHeight = canvas.offsetHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(jobCategories.length * 2, 24);

      for (let i = 0; i < particleCount; i++) {
        const jobText = jobCategories[i % jobCategories.length];
        particles.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          text: jobText,
          fontSize: Math.random() * 6 + 12,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.3,
          color: Math.random() > 0.5 ? '#FED7AA' : '#FFFFFF',
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.globalAlpha = (1 - distance / 150) * 0.1;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      particles.forEach(p => {
        const mouse = mousePositionRef.current;
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mouseDistance = Math.hypot(mdx, mdy);

          if (mouseDistance < 200) {
            const force = (200 - mouseDistance) / 200;
            const angle = Math.atan2(mdy, mdx);
            p.x += Math.cos(angle) * force * 1.5;
            p.y += Math.sin(angle) * force * 1.5;
            p.opacity = Math.min(0.9, p.opacity + force * 0.2);
            p.fontSize = Math.min(22, p.fontSize + force * 2);
          }
        }

        p.opacity = Math.max(0.3, p.opacity - 0.01);
        p.fontSize = Math.max(12, p.fontSize - 0.1);

        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        const padding = 50;
        if (p.x < padding || p.x > canvasWidth - padding) p.speedX *= -1;
        if (p.y < padding || p.y > canvasHeight - padding) p.speedY *= -1;

        p.x = Math.max(padding, Math.min(canvasWidth - padding, p.x));
        p.y = Math.max(padding, Math.min(canvasHeight - padding, p.y));

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.font = `600 ${p.fontSize}px 'Inter', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillText(p.text, 0, 0);
        ctx.shadowBlur = 15;
        ctx.globalAlpha = p.opacity * 0.5;
        ctx.fillText(p.text, 0, 0);

        ctx.restore();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mousePositionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mousePositionRef.current = { x: null, y: null };
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
    }
  };

  return (
    <>
      <CustomHelmet
        title="WorkWise SA - Find Essential Jobs in South Africa"
        description="Find cashier, general worker, security, petrol attendant, domestic worker, cleaner, and landscaping jobs across South Africa."
      />

      <main className="flex-grow">
        <section
          className="relative bg-gradient-to-br from-[#1a365d] via-[#2a4365] to-[#2d3748] overflow-hidden min-h-screen flex items-center justify-center font-sans"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 1 }}
          />

          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/5 to-orange-900/10 motion-safe:animate-pulse"
            style={{ zIndex: 2 }}
          />

          <div className="container mx-auto px-4 py-16 relative z-10 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
                <div className="relative group w-32 h-32 md:w-40 md:h-40">
                  <img
                    src="/android-chrome-512x512.png"
                    alt="WorkWise SA Logo"
                    className="w-full h-full object-cover rounded-full drop-shadow-2xl filter group-hover:drop-shadow-[0_0_25px_rgba(251,191,36,0.4)] transition-all duration-300"
                  />
                  <div
                    className="absolute inset-0 rounded-full border-2 border-yellow-400/30 motion-safe:animate-spin"
                    style={{ animationDuration: '8s' }}
                  />
                  <div
                    className="absolute inset-2 rounded-full border border-orange-400/20 motion-safe:animate-spin"
                    style={{ animationDuration: '6s', animationDirection: 'reverse' }}
                  />
                </div>
                <div className="text-yellow-300 text-center font-bold mt-4 text-xl md:text-2xl tracking-wide drop-shadow-lg">
                  WORK<span className="text-white">WISE.SA</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl mb-4">
                Find Your Next Opportunity
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light text-white/80 mb-10 max-w-3xl mx-auto">
                Connecting South Africa's workforce with thousands of jobs in retail, security,
                driving, and more.
              </p>

              <form onSubmit={handleSearch} className="relative group w-full max-w-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-500 motion-safe:animate-pulse" />
                <div className="relative bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-2xl border border-white/20">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-grow relative">
                      <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 z-10" />
                      <input
                        type="text"
                        placeholder="e.g., 'Cashier in Cape Town'"
                        className="w-full pl-11 pr-3 py-3 rounded-lg border-transparent focus:border-transparent text-lg focus:ring-2 focus:ring-yellow-400/80 bg-white/80 backdrop-blur-sm transition-all duration-300"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-semibold py-3 px-8 text-lg rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 flex items-center justify-center gap-2"
                    >
                      Search
                      <SearchIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </form>

              <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 text-white">
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">10,000+</div>
                  <div className="text-sm uppercase tracking-wider text-white/70">Active Jobs</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">500+</div>
                  <div className="text-sm uppercase tracking-wider text-white/70">Companies</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">50,000+</div>
                  <div className="text-sm uppercase tracking-wider text-white/70">Job Seekers</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CategoriesSection />
        <CompaniesSection />
        <CtaSection />
      </main>
    </>
  );
};

export default HomeSimple;
