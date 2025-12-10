import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { HelpCircle, ClipboardList, AlertCircle, Info } from 'lucide-react';
import { useState } from 'react';

export function Patients() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const firstVisitInfo = [
    {
      title: 'Randevu Öncesi Hazırlık',
      items: [
        'Çocuğunuzun tüm tıbbi geçmişi, aşı kayıtları ve daha önce kullanılan ilaçlar listelenmelidir',
        'Varsa önceki tetkik sonuçları, laboratuvar raporları ve görüntüleme bulguları getirilmelidir',
        'Semptomların başlangıç tarihi, sıklığı, şiddeti ve tetikleyici faktörler not edilmelidir',
        'Beslenme alışkanlıkları, alerjiler ve aile öyküsü hakkında bilgi hazırlanmalıdır',
      ],
    },
    {
      title: 'Muayene Süreci',
      items: [
        'İlk değerlendirme ortalama 40-50 dakika sürmektedir',
        'Detaylı anamnez alımı ve sistematik fizik muayene gerçekleştirilir',
        'Tanısal plan ve gerekli tetkikler ayrıntılı olarak açıklanır',
        'Tüm sorularınız için yeterli zaman ayrılır, tıbbi terminoloji anlaşılır dille ifade edilir',
      ],
    },
    {
      title: 'Muayene Sonrası',
      items: [
        'Tanı, tedavi planı ve takip protokolü yazılı olarak sunulur',
        'İlaç dozları, kullanım şekli ve olası yan etkiler detaylandırılır',
        'Diyet önerileri ve yaşam tarzı modifikasyonları belirtilir',
        'Takip randevusu planlanır, acil durumlarda iletişim bilgileri paylaşılır',
      ],
    },
  ];

  const faqs = [
    {
      question: 'İlk muayenede hangi tetkikler planlanır?',
      answer: 'Tetkik planlaması, hastanın klinik tablosuna göre bireyselleştirilir. Gereksiz testlerden kaçınılarak hedef odaklı yaklaşım benimsenir. Rutin kan tetkikleri, dışkı analizleri, görüntüleme yöntemleri (ultrasonografi, endoskopi) ve spesifik immunolojik/alerjik testler, endikasyona göre uygulanır.',
    },
    {
      question: 'Endoskopik işlemler nasıl gerçekleştirilir?',
      answer: 'Endoskopik işlemler, pediyatrik anestezi uzmanı gözetiminde, çocuğun yaşına uygun sedasyon veya genel anestezi altında yapılır. İşlem öncesi detaylı bilgilendirme yapılır, ailelerin endişeleri giderilir. İşlem süresi ortalama 15-30 dakika olup, hastalar aynı gün taburcu edilir. Histopatolojik sonuçlar 5-7 iş günü içinde değerlendirilir.',
    },
    {
      question: 'Kronik hastalıkların takip protokolü nedir?',
      answer: 'Kronik hastalıklarda (örn. inflamatuar barsak hastalıkları) düzenli takip kritik öneme sahiptir. Hastalığın aktivitesine göre 3-6 ayda bir klinik ve laboratuvar kontrolleri planlanır. İlaç dozları hastalık seyrinde ayarlanır, büyüme ve gelişme parametreleri izlenir, komplikasyonlar erken tespit edilir.',
    },
    {
      question: 'Beslenme danışmanlığı nasıl sağlanır?',
      answer: 'Her hastanın beslenme ihtiyacı bireysel olarak değerlendirilir. Hastalığın tipine, yaşa, boy ve kilosuna göre özel beslenme planları oluşturulur. Gerektiğinde beslenme ve dietetik uzmanı ile konsülte edilir, aileler kapsamlı eğitim alır ve beslenme takibi yapılır.',
    },
    {
      question: 'Acil durumlarda nasıl iletişim kurulur?',
      answer: 'Acil durumlarda (şiddetli karın ağrısı, kusma, kanlı dışkılama, yüksek ateş) en yakın sağlık kuruluşunun acil servisine başvurulmalıdır. Ardından kliniğimizin iletişim hattından bilgilendirme yapılabilir. Acil olmayan sorular için randevu sistemimiz üzerinden iletişime geçilebilir.',
    },
  ];

  const importantNotes = [
    {
      icon: AlertCircle,
      title: 'Acil Başvuru Kriterleri',
      description: 'Şiddetli karın ağrısı, devam eden kusma, kanlı ishal, yüksek ateş veya bilinç değişiklikleri acil müdahale gerektirir',
    },
    {
      icon: Info,
      title: 'İlaç Uyumu',
      description: 'Reçete edilen ilaçlar belirlenen doz ve sürede kullanılmalı, hekim onayı olmadan kesilmemelidir',
    },
    {
      icon: ClipboardList,
      title: 'Düzenli Takip',
      description: 'Belirlenen kontrol randevuları düzenli olarak yapılmalı, kronik hastalıklarda takip sürekliliği sağlanmalıdır',
    },
  ];

  return (
    <section id="patients" className="py-24 bg-[#F7F9FC]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#2C5CEB]/10 rounded-full mb-6">
            <span className="text-sm text-[#2C5CEB]">Hastalar İçin</span>
          </div>
          <h2 className="mb-6">Hasta Bilgilendirme ve Rehberlik</h2>
          <p className="text-[#5F6B80] max-w-3xl mx-auto leading-relaxed">
            Kliniğimizde, bilgilendirilmiş ve sürece hazırlıklı ailelerin tedavi başarısını artırdığına 
            inanılmaktadır. Bu bölümde, muayene sürecine hazırlık, tedavi protokolleri ve sık sorulan 
            sorulara ilişkin kapsamlı bilgiler sunulmaktadır.
          </p>
        </motion.div>

        {/* First Visit Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-[#1A1D29] mb-10 text-center">İlk Muayene Süreci</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {firstVisitInfo.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E8ECF5] hover:border-[#2C5CEB]/30"
              >
                <h4 className="text-[#1A1D29] mb-6 pb-4 border-b border-[#E8ECF5]">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#5F6B80]">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#2C5CEB] rounded-full mt-2"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {importantNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative overflow-hidden bg-gradient-to-br from-[#2C5CEB] to-[#4A76F5] text-white p-8 rounded-2xl shadow-2xl"
              >
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <note.icon size={28} />
                  </div>
                  <h4 className="text-white mb-4">{note.title}</h4>
                  <p className="text-sm text-white/90 leading-relaxed">{note.description}</p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2C5CEB] to-[#4A76F5] rounded-2xl flex items-center justify-center shadow-lg">
              <HelpCircle className="text-white" size={28} />
            </div>
            <h3 className="text-[#1A1D29]">Sık Sorulan Sorular</h3>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E8ECF5] hover:border-[#2C5CEB]/30 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#F7F9FC] transition-colors"
                >
                  <span className="text-[#1A1D29] pr-4 leading-relaxed">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 text-[#2C5CEB] transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-[#5F6B80] leading-relaxed border-t border-[#E8ECF5] pt-6">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
