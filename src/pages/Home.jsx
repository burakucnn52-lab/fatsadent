import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {
  // Hizmetler
  const services = [
    { icon: '🦷', title: 'İmplant Tedavisi', desc: 'Kayıp dişleriniz için kalıcı çözüm' },
    { icon: '✨', title: 'Diş Beyazlatma', desc: 'Beyaz ve parlak gülüşler' },
    { icon: '👶', title: 'Çocuk Diş Sağlığı', desc: 'Çocuklarınıza özel tedavi' },
    { icon: '🔧', title: 'Ortodonti', desc: 'Düzgün ve estetik dişler' },
    { icon: '⚕️', title: 'Ağız Cerrahisi', desc: 'Uzman kadromuzla güvenli cerrahi' },
    { icon: '🌟', title: 'Estetik Diş Hekimliği', desc: 'Gülüşünüzü yenileyin' },
  ]

  // Neden Biz?
  const features = [
    { icon: '👨‍⚕️', title: 'Uzman Doktorlar', desc: 'Alanında uzman, deneyimli kadro' },
    { icon: '🏥', title: 'Modern Klinik', desc: 'Son teknoloji cihazlar ve steril ortam' },
    { icon: '💰', title: 'Uygun Fiyatlar', desc: 'Herkese uygun ödeme seçenekleri' },
    { icon: '📅', title: 'Kolay Randevu', desc: '7/24 online randevu sistemi' },
  ]

  // Yorumlar
  const testimonials = [
    {
      name: 'Ayşe D.',
      rating: 5,
      comment: 'Dr. Fatih Ayhan\'a implant tedavim için gittim. Çok profesyonel bir yaklaşımla karşılandım. Ekip harikaydı, tavsiye ederim!',
      initials: 'AD',
      color: 'from-pink-400 to-red-400',
    },
    {
      name: 'Mehmet K.',
      rating: 5,
      comment: 'Klinik çok modern, hijyen kurallarına dikkat ediyorlar. Diş beyazlatma yaptırdım, sonuç mükemmel!',
      initials: 'MK',
      color: 'from-blue-400 to-purple-400',
    },
    {
      name: 'Zeynep A.',
      rating: 5,
      comment: 'Çocuğumu Dr. Zeynep Kaya\'ya götürdüm. Çocuklarla iletişimi harika, kızım artık dişçiden korkmuyor!',
      initials: 'ZA',
      color: 'from-green-400 to-teal-400',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* 1. HERO BÖLÜMÜ */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Sol Taraf - Yazılar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="text-5xl md:text-6xl font-bold text-blue-800 mb-4"
            >
              🦷 Sağlıklı Gülüşler <br />
              <span className="text-cyan-600">Bizim İşimiz</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Modern teknoloji ve uzman kadromuzla, güvenli ve konforlu diş
              tedavisi hizmeti sunuyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <Link to="/appointment">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 transition cursor-pointer"
                >
                  📅 Randevu Al
                </motion.button>
              </Link>
              <Link to="/doctors">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-50 transition cursor-pointer border-2 border-blue-600"
                >
                  👨‍⚕️ Doktorlarımız
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Sağ Taraf - Görsel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800"
                alt="Diş Kliniği"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Şık dekoratif kart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-3xl">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-gray-800">10,000+</div>
                  <div className="text-sm text-gray-600">Mutlu Hasta</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. HİZMETLERİMİZ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              🌟 Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600">
              Modern diş hekimliğinin tüm olanaklarını sunuyoruz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEDEN BİZ? */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-100 to-cyan-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              💙 Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-xl text-gray-600">
              Farkımızı hissedeceksiniz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. İSTATİSTİKLER */}
      <section className="py-16 px-6 bg-blue-700">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { num: '10.000+', label: 'Mutlu Hasta' },
            { num: '15+', label: 'Uzman Doktor' },
            { num: '20+', label: 'Yıl Deneyim' },
            { num: '%98', label: 'Memnuniyet' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">{stat.num}</div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. HASTA YORUMLARI */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              💬 Hastalarımız Ne Diyor?
            </h2>
            <p className="text-xl text-gray-600">
              Gerçek hasta deneyimleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                {/* Yıldızlar */}
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Yorum */}
                <p className="text-gray-700 mb-6 italic">"{t.comment}"</p>

                {/* Kullanıcı */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{t.name}</div>
                    <div className="text-sm text-gray-500">Doğrulanmış Hasta</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RANDEVU ÇAĞRISI */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-600">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sağlıklı Gülüşünüz İçin Hemen Randevu Alın! 🦷
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Uzman kadromuz sizi bekliyor
          </p>
          <Link to="/appointment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold shadow-2xl hover:bg-blue-50 transition cursor-pointer"
            >
              📅 Randevu Al
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🦷 DentApp</h3>
            <p className="text-gray-400">
              Sağlıklı gülüşler için modern diş kliniği hizmeti.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">📞 İletişim</h4>
            <p className="text-gray-400">📱 0555 123 45 67</p>
            <p className="text-gray-400">📧 📧 info@fatsadent.com</p>
            <p className="text-gray-400">📍 İstanbul, Türkiye</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">🕐 Çalışma Saatleri</h4>
            <p className="text-gray-400">Pzt - Cum: 09:00 - 18:00</p>
            <p className="text-gray-400">Cmt: 09:00 - 14:00</p>
            <p className="text-gray-400">Paz: Kapalı</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          © 2026 FatsaDent. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  )
}

export default Home
