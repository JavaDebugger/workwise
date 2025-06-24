import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [, navigate] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/jobs?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <section className="relative bg-[#2A4365] overflow-hidden">
      {/* Background pattern - more visible texture */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.25\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo and Title Section */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-10">
            <div className="mb-6 md:mb-0 md:mr-10">
              <img
                src="/images/hero-logo.png"
                alt="WorkWise SA Hard Hat Logo"
                className="w-32 h-32 md:w-48 md:h-48"
              />
              <div className="text-yellow-300 text-center font-bold mt-2 text-xl md:text-2xl">WORK<span className="text-white">WISE.SA</span></div>
            </div>
            <div className="text-center md:text-left md:self-end">
              <div className="text-yellow-300 font-bold text-2xl md:text-3xl lg:text-4xl mb-3">FIND THAT NEEDED JOB</div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                IN SOUTH<br />AFRICA
              </h1>
            </div>
          </div>

          {/* Enhanced Search Box */}
          <div className="bg-white p-3 rounded-lg shadow-lg mx-auto w-full max-w-2xl mt-4">
            <form onSubmit={handleSearch}>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-grow">
                  <div className="relative">
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search for jobs..."
                      className="w-full pl-10 pr-3 py-3 rounded-md border-0 shadow-none text-lg focus-visible:ring-0"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:w-auto w-full">
                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-3 px-8 text-lg"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
