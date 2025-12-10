import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Award, Users, TrendingUp, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const stats = [
    { icon: Award, value: '25+', label: 'Yıl Klinik Deneyim', sublabel: 'Pediatrik Gastroenteroloji' },
    { icon: Users, value: '10,000+', label: 'Başarılı Vaka', sublabel: 'Tanı ve Tedavi' },
    { icon: TrendingUp, value: '%98', label: 'Hasta Memnuniyeti', sublabel: 'Klinik Başarı Oranı' },
    { icon: BookOpen, value: '50+', label: 'Bilimsel Yayın', sublabel: 'Uluslararası Dergilerde' },
  ];

  return (
    <section id="about" className="py-24 bg-[#F7F9FC]" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwY2xpbmljfGVufDF8fHx8MTc2NTEyOTg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Prof. Dr. - Pediatrik Gastroenteroloji Uzmanı"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B6D]/30 to-transparent"></div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#2C5CEB]/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-block px-4 py-2 bg-[#2C5CEB]/10 rounded-full mb-6">
                <span className="text-sm text-[#2C5CEB]">Hakkımızda</span>
              </div>
              <h2 className="mb-6">Türkiye'nin Referans Pediatrik Gastroenteroloji Merkezi</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 mb-8"
            >
              <p className="text-[#5F6B80] leading-relaxed">
                Prof. Dr. [İsim Soyisim], çocuk gastroenterolojisi ve hepatoloji alanında 25 yılı aşkın süre boyunca yürüttüğü klinik ve akademik çalışmaları ile Türkiye'de referans gösterilen uzmanlardan biridir. Kliniğimiz, Prof. Dr. [İsim Soyisim]'in öncülüğünde tanı, tedavi, endoskopi ve multidisipliner bakım süreçlerinde uluslararası standartları uygulamaktadır.
              </p>
              <p className="text-[#5F6B80] leading-relaxed">
                Boston Children's Hospital başta olmak üzere dünyanın önde gelen pediatrik gastroenteroloji merkezlerinde edinilen bilgi birikimi, sürekli güncellenen bilimsel literatür takibi ve binlerce vakanın tanı-tedavi deneyimi ile ekibimiz, çocuklarınıza en üst düzeyde tıbbi bakım sunma taahhüdündedir.
              </p>
              <p className="text-[#5F6B80] leading-relaxed">
                Merkezimizde, kanıta dayalı tıp prensipleri ışığında, her hastaya özel tedavi protokolleri oluşturulmakta; ailelere bilgilendirme, eğitim ve sürekli destek sağlanmaktadır.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8ECF5] hover:border-[#2C5CEB]/20 premium-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#2C5CEB]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2C5CEB]/20 transition-colors">
                      <stat.icon className="text-[#2C5CEB]" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-2xl text-[#1A1D29] mb-1">{stat.value}</div>
                      <div className="text-sm text-[#1A1D29] mb-0.5">{stat.label}</div>
                      <div className="text-xs text-[#5F6B80]">{stat.sublabel}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
