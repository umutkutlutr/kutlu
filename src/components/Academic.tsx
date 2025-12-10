import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GraduationCap, BookOpen, Globe, Award, TrendingUp } from 'lucide-react';

export function Academic() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const education = [
    {
      year: '1995-2001',
      title: 'İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi',
      description: 'Tıp Doktoru',
    },
    {
      year: '2001-2005',
      title: 'Hacettepe Üniversitesi Tıp Fakültesi',
      description: 'Çocuk Sağlığı ve Hastalıkları Uzmanlık Eğitimi',
    },
    {
      year: '2005-2008',
      title: 'Ankara Üniversitesi Tıp Fakültesi',
      description: 'Pediatrik Gastroenteroloji, Hepatoloji ve Beslenme Yan Dal Uzmanlığı',
    },
    {
      year: '2009',
      title: "Boston Children's Hospital, Harvard Medical School",
      description: 'İnflamatuar Barsak Hastalıkları ve İleri Endoskopi Fellowship (ABD)',
    },
  ];

  const publications = [
    {
      category: 'SCI/SCI-E Makaleler',
      count: '50+',
      description: 'Uluslararası hakemli dergilerde yayınlanmış araştırma makaleleri',
    },
    {
      category: 'Kongre Bildirileri',
      count: '75+',
      description: 'Ulusal ve uluslararası bilimsel kongrelerde sözlü ve poster sunumlar',
    },
    {
      category: 'Kitap Bölümleri',
      count: '12',
      description: 'Pediatrik gastroenteroloji alanında editörlü kitaplarda yazarlık',
    },
  ];

  const memberships = [
    'Türk Pediatrik Gastroenteroloji, Hepatoloji ve Beslenme Derneği (TP-GHB) - Yönetim Kurulu Üyesi',
    'European Society for Paediatric Gastroenterology, Hepatology and Nutrition (ESPGHAN)',
    'North American Society for Pediatric Gastroenterology, Hepatology and Nutrition (NASPGHAN)',
    'Türk Pediatri Kurumu',
    'World Gastroenterology Organisation (WGO)',
  ];

  return (
    <section id="academic" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#2C5CEB]/10 rounded-full mb-6">
            <span className="text-sm text-[#2C5CEB]">Akademik & Yayınlar</span>
          </div>
          <h2 className="mb-6">Akademik Birikim ve Bilimsel Katkılar</h2>
          <p className="text-[#5F6B80] max-w-3xl mx-auto leading-relaxed">
            Kliniğimizin akademik omurgası, sürekli güncellenen bilimsel literatür takibi, araştırma 
            faaliyetleri ve ulusal-uluslararası bilimsel platformlarda aktif katılım ile güçlendirilmektedir. 
            Bilimsel gelişmelerin klinik pratiğe entegrasyonu temel prensiplerimizdendir.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2C5CEB] to-[#4A76F5] rounded-2xl flex items-center justify-center shadow-lg">
              <GraduationCap className="text-white" size={28} />
            </div>
            <h3 className="text-[#1A1D29]">Eğitim ve Uzmanlık Geçmişi</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative bg-gradient-to-br from-white to-[#F7F9FC] p-6 rounded-2xl border-l-4 border-[#2C5CEB] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-sm text-[#2C5CEB] mb-3">{item.year}</div>
                <h5 className="text-[#1A1D29] mb-2 leading-snug">{item.title}</h5>
                <p className="text-[#5F6B80]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2C5CEB] to-[#4A76F5] rounded-2xl flex items-center justify-center shadow-lg">
              <BookOpen className="text-white" size={28} />
            </div>
            <h3 className="text-[#1A1D29]">Bilimsel Yayınlar ve Araştırmalar</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative overflow-hidden bg-gradient-to-br from-[#2C5CEB] to-[#4A76F5] text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 premium-card"
              >
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <TrendingUp size={32} />
                  </div>
                  <div className="text-4xl mb-3">{pub.count}</div>
                  <h4 className="text-white mb-3">{pub.category}</h4>
                  <p className="text-sm text-white/80 leading-relaxed">{pub.description}</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2C5CEB] to-[#4A76F5] rounded-2xl flex items-center justify-center shadow-lg">
              <Globe className="text-white" size={28} />
            </div>
            <h3 className="text-[#1A1D29]">Profesyonel Dernekler ve Üyelikler</h3>
          </div>
          <div className="bg-gradient-to-br from-[#F7F9FC] to-white p-8 rounded-3xl shadow-lg border border-[#E8ECF5]">
            <div className="grid md:grid-cols-2 gap-4">
              {memberships.map((membership, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                  className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#E8ECF5] hover:border-[#2C5CEB]/30"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2C5CEB]/10 rounded-xl flex items-center justify-center">
                    <Award className="text-[#2C5CEB]" size={20} />
                  </div>
                  <span className="text-[#5F6B80] leading-relaxed">{membership}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Academic Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-[#2C5CEB] to-[#4A76F5] text-white p-10 rounded-3xl shadow-2xl"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-white mb-4">Sürekli Eğitim ve Bilimsel Gelişim</h3>
                <p className="text-white/90 leading-relaxed">
                  Merkezimizin temel felsefelerinden biri, sürekli öğrenme ve bilimsel gelişmeleri takip etme ilkesidir. 
                  Uluslararası kongrelere düzenli katılım, güncel literatürün sistematik incelenmesi ve klinik deneyimlerin 
                  bilimsel platformlarda paylaşılması ile ekibimizin bilgi birikimi devamlı güncellenmektedir. Bu yaklaşım, 
                  hastalarımıza sunduğumuz bakımın kalitesini doğrudan yükseltmektedir.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
