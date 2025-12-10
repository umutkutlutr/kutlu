import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Activity, Droplets, AlertCircle, Stethoscope, ClipboardCheck, Microscope } from 'lucide-react';

export function Expertise() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const expertiseAreas = [
    {
      icon: Activity,
      title: 'Fonksiyonel Gastrointestinal Hastalıklar',
      description: 'Kronik karın ağrısı, irritabl barsak sendromu, fonksiyonel dispepsi ve motilite bozukluklarının multidisipliner tanı ve tedavisi',
    },
    {
      icon: Droplets,
      title: 'Gastroözofageal Reflü Hastalığı',
      description: 'İnfant ve çocukluk çağı GÖRH tanısında pH-metri ve impedans temelli kanıta dayalı yaklaşımlar',
    },
    {
      icon: AlertCircle,
      title: 'Gıda Allerjisi ve İntolerans',
      description: 'İmmünolojik testleme, eliminasyon diyetleri ve oral gıda provokasyonu ile kesin tanı protokolleri',
    },
    {
      icon: Stethoscope,
      title: 'İnflamatuar Barsak Hastalıkları',
      description: 'Crohn hastalığı ve ülseratif kolit; biyolojik ajanlar ve immünomodülatör tedavi yönetimi',
    },
    {
      icon: ClipboardCheck,
      title: 'Büyüme ve Beslenme Bozuklukları',
      description: 'Malnütrisyon, gelişme geriliği ve malabsorbsiyon sendromlarında kapsamlı beslenme rehabilitasyonu',
    },
    {
      icon: Microscope,
      title: 'Pediatrik Hepatoloji',
      description: 'Karaciğer fonksiyon bozuklukları, metabolik karaciğer hastalıkları ve kronik hepatit yönetimi',
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#2C5CEB]/10 rounded-full mb-6">
            <span className="text-sm text-[#2C5CEB]">Uzmanlık Alanları</span>
          </div>
          <h2 className="mb-6">Kapsamlı Klinik Uzmanlık</h2>
          <p className="text-[#5F6B80] max-w-3xl mx-auto leading-relaxed">
            Kliniğimiz, pediatrik gastroenteroloji, hepatoloji ve beslenme alt dallarının tamamında 
            uluslararası kılavuzlara uygun, kanıta dayalı tanı ve tedavi protokolleri uygulamaktadır. 
            Her hasta için bireyselleştirilmiş tedavi planları oluşturulmaktadır.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-gradient-to-br from-white to-[#F7F9FC] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8ECF5] hover:border-[#2C5CEB]/30 premium-card"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2C5CEB] to-[#4A76F5] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <area.icon className="text-white" size={28} />
              </div>
              <h4 className="mb-4 text-[#1A1D29]">{area.title}</h4>
              <p className="text-[#5F6B80] leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional info banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#2C5CEB] to-[#4A76F5] text-white p-10 rounded-3xl shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-white mb-4">Multidisipliner Yaklaşım</h3>
            <p className="text-white/90 leading-relaxed">
              Merkezimizde, gerekli görülen vakalarda pediatrik cerrahi, radyoloji, beslenme ve dietetik, 
              patoloji, genetik ve çocuk psikiyatrisi uzmanları ile koordineli çalışılarak hastalarımıza 
              bütüncül bakım modeli sunulmaktadır.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
