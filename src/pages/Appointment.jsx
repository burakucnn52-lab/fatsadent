import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Appointment() {
  const [step, setStep] = useState(1)
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    note: '',
  })

  // Doktorlar
  const doctors = [
    { id: 1, name: 'Dr. Fatih AYHAN', specialty: 'Ağız ve Diş Cerrahisi', initials: 'FA', color: 'from-blue-500 to-purple-600' },
    { id: 2, name: 'Dr. Abdullah MORÇİÇEK', specialty: 'Ortodonti Uzmanı', initials: 'AM', color: 'from-cyan-500 to-blue-500' },
    { id: 3, name: 'Dr. Zeynep KAYA', specialty: 'Çocuk Diş Hekimi', initials: 'ZK', color: 'from-pink-500 to-purple-500' },
  ]

  // Sonraki 7 gün
  const getDates = () => {
    const dates = []
    const dayNames = ['Paz', 'Pzt', 'Sal', 'Çrş', 'Prş', 'Cum', 'Cmt']
    const monthNames = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
    
    for (let i = 0; i < 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      dates.push({
        day: dayNames[date.getDay()],
        date: date.getDate(),
        month: monthNames[date.getMonth()],
        label: i === 0 ? 'Bugün' : i === 1 ? 'Yarın' : dayNames[date.getDay()],
        full: `${date.getDate()} ${monthNames[date.getMonth()]}`,
      })
    }
    return dates
  }

  const dates = getDates()

  // Saatler
  const times = [
    '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30',
  ]

  // Bir sonraki adıma geç
  const nextStep = () => {
    if (step < 5) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    setStep(5)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
            📅 Randevu Al
          </h1>
          <p className="text-lg text-gray-600">
            Sağlıklı gülüşünüz için birkaç adım kaldı
          </p>
        </motion.div>

        {/* İlerleme Çubuğu */}
        {step < 5 && (
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {['Doktor', 'Tarih', 'Saat', 'Bilgiler'].map((label, i) => (
                <div key={i} className="flex-1 text-center">
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold transition-all ${
                    step > i + 1 ? 'bg-green-500 text-white' :
                    step === i + 1 ? 'bg-blue-600 text-white scale-110' :
                    'bg-gray-300 text-gray-500'
                  }`}>
                    {step > i + 1 ? '✓' : i + 1}
                  </div>
                  <div className={`text-sm mt-2 ${step === i + 1 ? 'font-bold text-blue-600' : 'text-gray-500'}`}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: '0%' }}
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        )}

        {/* Ana İçerik - Adım Adım */}
        <div className="bg-white rounded-3xl shadow-xl p-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {/* ADIM 1: DOKTOR SEÇ */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  👨‍⚕️ Doktorunuzu Seçin
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {doctors.map((doctor) => (
                    <motion.div
                      key={doctor.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedDoctor(doctor)}
                      className={`cursor-pointer rounded-2xl overflow-hidden border-4 transition-all ${
                        selectedDoctor?.id === doctor.id
                          ? 'border-blue-500 shadow-lg'
                          : 'border-transparent hover:border-blue-200'
                      }`}
                    >
                      <div className={`bg-gradient-to-br ${doctor.color} h-32 flex items-center justify-center`}>
                        <div className="w-20 h-20 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-3xl font-bold text-white border-4 border-white/50">
                          {doctor.initials}
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <div className="font-bold text-gray-800">{doctor.name}</div>
                        <div className="text-sm text-blue-600">{doctor.specialty}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ADIM 2: TARİH SEÇ */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  📅 Tarih Seçin
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                  {dates.map((date, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedDate(date)}
                      className={`cursor-pointer rounded-2xl p-4 text-center border-2 transition-all ${
                        selectedDate?.date === date.date
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                          : 'bg-gray-50 border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-xs font-medium mb-1">{date.label}</div>
                      <div className="text-2xl font-bold">{date.date}</div>
                      <div className="text-xs mt-1">{date.month}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ADIM 3: SAAT SEÇ */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  ⏰ Saat Seçin
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {times.map((time, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTime(time)}
                      className={`cursor-pointer rounded-xl py-4 text-center font-bold border-2 transition-all ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                          : 'bg-gray-50 border-gray-200 hover:border-blue-300 text-gray-700'
                      }`}
                    >
                      {time}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ADIM 4: BİLGİLERİ DOLDUR */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  📝 Bilgilerinizi Girin
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="0555 123 45 67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Not (isteğe bağlı)
                    </label>
                    <textarea
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="Belirtmek istediğiniz bir şey var mı?"
                      rows="3"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ADIM 5: BAŞARILI */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-6xl"
                >
                  ✓
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl font-bold text-gray-800 mb-4"
                >
                  Randevunuz Alındı! 🎉
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-blue-50 rounded-2xl p-6 max-w-md mx-auto mb-6"
                >
                  <div className="text-left space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Doktor:</span>
                      <span className="font-bold text-gray-800">{selectedDoctor?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tarih:</span>
                      <span className="font-bold text-gray-800">{selectedDate?.full}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saat:</span>
                      <span className="font-bold text-gray-800">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ad Soyad:</span>
                      <span className="font-bold text-gray-800">{formData.name}</span>
                    </div>
                  </div>
                </motion.div>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setStep(1)
                    setSelectedDoctor(null)
                    setSelectedDate(null)
                    setSelectedTime(null)
                    setFormData({ name: '', phone: '', email: '', note: '' })
                  }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition cursor-pointer"
                >
                  Yeni Randevu Al
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Alt Butonlar */}
        {step < 5 && (
          <div className="flex justify-between mt-6">
            <motion.button
              whileHover={{ scale: step > 1 ? 1.05 : 1 }}
              whileTap={{ scale: step > 1 ? 0.95 : 1 }}
              onClick={prevStep}
              disabled={step === 1}
              className={`px-6 py-3 rounded-xl font-semibold transition ${
                step === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-blue-600 shadow-md hover:bg-gray-50 cursor-pointer'
              }`}
            >
              ← Geri
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={step === 4 ? handleSubmit : nextStep}
              disabled={
                (step === 1 && !selectedDoctor) ||
                (step === 2 && !selectedDate) ||
                (step === 3 && !selectedTime) ||
                (step === 4 && (!formData.name || !formData.phone))
              }
              className={`px-8 py-3 rounded-xl font-semibold transition ${
                (step === 1 && !selectedDoctor) ||
                (step === 2 && !selectedDate) ||
                (step === 3 && !selectedTime) ||
                (step === 4 && (!formData.name || !formData.phone))
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white shadow-lg hover:bg-blue-700 cursor-pointer'
              }`}
            >
              {step === 4 ? '✓ Randevuyu Onayla' : 'Devam →'}
            </motion.button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Appointment