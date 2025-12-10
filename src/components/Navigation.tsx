import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'expertise', label: 'Uzmanlık Alanları' },
    { id: 'treatments', label: 'Tanı & Tedaviler' },
    { id: 'academic', label: 'Akademik & Yayınlar' },
    { id: 'patients', label: 'Hastalar İçin' },
    { id: 'contact', label: 'Randevu & İletişim' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-xl transition-all duration-300 ${
              isScrolled ? 'text-[#2C5CEB]' : 'text-white'
            }`}
          >
            <span className="font-semibold">Prof. Dr. [İsim Soyisim]</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'text-[#2C5CEB] bg-[#2C5CEB]/10'
                      : 'text-white bg-white/20'
                    : isScrolled
                    ? 'text-[#5F6B80] hover:text-[#2C5CEB] hover:bg-[#2C5CEB]/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-[#1A1D29] hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-2xl border border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-[#2C5CEB] bg-[#2C5CEB]/10 border-l-4 border-[#2C5CEB]'
                    : 'text-[#5F6B80] hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
