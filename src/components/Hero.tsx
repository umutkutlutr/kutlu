import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A2B6D] via-[#2C3E7A] to-[#2C5CEB]">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm text-white/90">Pediatrik Gastroenteroloji, Hepatoloji ve Beslenme</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white mb-6"
            >
              Prof. Dr. [İsim Soyisim]
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              <p className="text-xl text-white/90 leading-relaxed">
                Kliniğimizde, çocuk gastroenterolojisi alanında ülkemizin en deneyimli uzmanlarından Prof. Dr. [İsim Soyisim]'in 25 yılı aşkın akademik birikimi ve ekibimizin bütüncül yaklaşımı ile uluslararası standartlarda tanı ve tedavi hizmetleri sunulmaktadır.
              </p>
              <p className="text-lg text-white/80">
                Bilimsel hassasiyet, klinik mükemmellik ve hasta odaklı bakım anlayışımızla çocuklarınızın sindirim sistemi sağlığı için yanınızdayız.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToAbout}
                className="group px-8 py-4 bg-white text-[#2C5CEB] rounded-xl hover:bg-white/95 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Hakkımızda
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Randevu Talebi
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl text-white mb-1">25+</div>
                  <div className="text-sm text-white/70">Yıl Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-white mb-1">10,000+</div>
                  <div className="text-sm text-white/70">Başarılı Vaka</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-white mb-1">50+</div>
                  <div className="text-sm text-white/70">Bilimsel Yayın</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwY2xpbmljfGVufDF8fHx8MTc2NTEyOTg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pediatrik Gastroenteroloji Kliniği"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors z-10"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
