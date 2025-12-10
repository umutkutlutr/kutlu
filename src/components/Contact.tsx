import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 (212) 555 12 34',
      link: 'tel:+902125551234',
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'randevu@klinik.com',
      link: 'mailto:randevu@klinik.com',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Nişantaşı Mahallesi, İstanbul',
      link: null,
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cuma: 09:00 - 18:00',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#1A2B6D] via-[#2C3E7A] to-[#2C5CEB] text-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <span className="text-sm text-white/90">Randevu & İletişim</span>
          </div>
          <h2 className="mb-6 text-white">İletişim Bilgileri</h2>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
            Randevu talepleriniz ve sorularınız için aşağıdaki iletişim kanallarından kliniğimize 
            ulaşabilirsiniz. Ekibimiz, en kısa sürede değerlendirme yaparak size geri dönüş sağlayacaktır.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 premium-card"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <info.icon size={28} />
              </div>
              <h5 className="text-white mb-3">{info.title}</h5>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-white/80 hover:text-white transition-colors leading-relaxed"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-white/80 leading-relaxed">{info.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Appointment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 shadow-2xl">
            <div className="text-center">
              <h3 className="text-white mb-6">Randevu Talebi</h3>
              <p className="text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                Çocuğunuzun sağlığı ile ilgili değerlendirme ve tedavi süreci için randevu talebinde 
                bulunabilirsiniz. Ekibimiz, talebinizi en kısa sürede inceleyerek size uygun randevu 
                saatleri sunacaktır.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:+902125551234"
                  className="group px-8 py-4 bg-white text-[#2C5CEB] rounded-xl hover:bg-white/95 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <Phone size={20} />
                    Hemen Ara
                  </span>
                </a>
                <a
                  href="mailto:randevu@klinik.com"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Mail size={20} />
                    E-posta Gönder
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h4 className="text-white mb-4">Randevu Hakkında</h4>
            <p className="text-white/70 leading-relaxed">
              Randevu sistemimiz, her hastaya yeterli muayene süresi ayrılmasını sağlamak üzere 
              planlanmaktadır. İlk muayene randevuları genellikle 45-60 dakika olarak ayrılmakta, 
              böylece kapsamlı değerlendirme ve bilgilendirme yapılabilmektedir. Acil durumlar için 
              aynı gün randevu talepleri değerlendirilmektedir.
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20 pt-8 border-t border-white/20"
        >
          <p className="text-white/60 text-sm leading-relaxed">
            &copy; 2024 Prof. Dr. [İsim Soyisim] - Pediatrik Gastroenteroloji, Hepatoloji ve Beslenme Kliniği
          </p>
          <p className="text-white/50 text-xs mt-2">
            Tüm hakları saklıdır. Bu web sitesinde yer alan bilgiler genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
