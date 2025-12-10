import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { FileText, Microscope, Pill, HeartPulse } from 'lucide-react';

export function Treatments() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const treatments = [
    {
      icon: FileText,
      title: 'Kanıta Dayalı Tanı Algoritmaları',
      description: 'Kapsamlı anamnez, sistematik fizik muayene ve hedef odaklı laboratuvar incelemeleri ile hassas tanı süreci',
      details: [
        'Detaylı klinik değerlendirme ve aile hikayesi analizi',
        'Risk faktörü bazlı tetkik planlaması',
        'Biyokimyasal, immunolojik ve mikrobiyolojik incelemeler',
        'Sonuç yorumlama ve hasta-aile bilgilendirme',
      ],
    },
    {
      icon: Microscope,
      title: 'Pediatrik Endoskopi ve İleri Görüntüleme',
      description: 'Deneyimli ekip ve modern teknoloji ile güvenli, etkili endoskopik tanı ve tedavi işlemleri',
      details: [
        'Üst gastrointestinal sistem endoskopisi (EGD)',
        'Alt gastrointestinal sistem endoskopisi (kolonoskopi)',
        'Biyopsi örneklemesi ve histopatolojik korelasyon',
        'Terapötik endoskopik uygulamalar',
      ],
    },
    {
      icon: Pill,
      title: 'Kişiselleştirilmiş Farmakoterapi',
      description: 'Güncel bilimsel literatür ve kılavuzlar ışığında hastaya özgü medikal tedavi planlaması',
      details: [
        'Yaş, ağırlık ve klinik duruma göre doz optimizasyonu',
        'Beslenme destek protokolleri ve diyet düzenlemeleri',
        'Düzenli klinik ve laboratuvar takibi ile etkinlik izlemi',
        'Aile eğitimi, uyum danışmanlığı ve yan etki yönetimi',
      ],
    },
    {
      icon: HeartPulse,
      title: 'Entegre Multidisipliner Bakım',
      description: 'Cerrahi, beslenme, psikoloji ve genetik uzmanlıklarının entegre edildiği bütüncül tedavi yaklaşımı',
      details: [
        'Pediatrik cerrahi ile operatif tedavi koordinasyonu',
        'Diyetisyen desteği ile nutrisyonel rehabilitasyon',
        'Çocuk psikiyatrisi konsültasyonu ve aile danışmanlığı',
        'Genetik testleme ve moleküler tanı süreçleri',
      ],
    },
  ];

  return (
    <section id="treatments" className="py-24 bg-[#F7F9FC]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#2C5CEB]/10 rounded-full mb-6">
            <span className="text-sm text-[#2C5CEB]">Tanı & Tedaviler</span>
          </div>
          <h2 className="mb-6">Bilimsel Hassasiyet, Klinik Mükemmellik</h2>
          <p className="text-[#5F6B80] max-w-3xl mx-auto leading-relaxed">
            Merkezimizde uygulanan her tanı ve tedavi süreci, uluslararası pediatrik gastroenteroloji 
            kılavuzlarına uygun olarak, hastanın bireysel özellikleri dikkate alınarak planlanmaktadır. 
            Bilimsel veriler ve klinik deneyim harmanlanarak optimal sonuçlar hedeflenmektedir.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8ECF5] hover:border-[#2C5CEB]/30"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#2C5CEB] to-[#4A76F5] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <treatment.icon className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#1A1D29] mb-3">{treatment.title}</h4>
                  <p className="text-[#5F6B80] mb-6 leading-relaxed">{treatment.description}</p>
                  <ul className="space-y-3">
                    {treatment.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#5F6B80]">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#2C5CEB] rounded-full mt-2"></span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Transparency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#2C5CEB] to-[#4A76F5] text-white p-10 rounded-3xl shadow-2xl"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white mb-4">Şeffaf Tedavi Süreci ve Aile Katılımı</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Kliniğimizde, tanı ve tedavi sürecinin her aşaması ailelerle paylaşılmakta, tıbbi terminoloji 
                  anlaşılır bir dille açıklanmakta ve kararlar ortak görüş ile alınmaktadır. Bilimsel veriler 
                  ışığında sunulan tedavi seçenekleri, risk-fayda analizleri ile detaylandırılır.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Hasta ve aile memnuniyeti, tedavinin başarısı kadar önemlidir. Ekibimiz, her aşamada iletişime 
                  açık, sorulara yanıt veren ve desteğini esirgemeyen bir yaklaşım benimsemektedir.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
