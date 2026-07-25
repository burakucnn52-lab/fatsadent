import { motion } from 'framer-motion'

function DoctorCard({ doctor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Fotoğraf Yerine - Renkli Arka Plan + Baş Harfler */}
      <div
        className="h-64 flex items-center justify-center relative overflow-hidden"
        style={{ background: doctor.bgColor }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
          className="w-32 h-32 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/50"
        >
          <span className="text-5xl font-bold text-white">
            {doctor.initials}
          </span>
        </motion.div>

        {/* Sağ üstte puan */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
          <span className="text-yellow-500">⭐</span>
          <span className="font-bold text-gray-800">{doctor.rating}</span>
        </div>
      </div>

      {/* Bilgiler */}
      <div className="p-6">
        {/* İsim ve Uzmanlık */}
        <h3 className="text-2xl font-bold text-gray-800 mb-1">
          {doctor.name}
        </h3>
        <p className="text-blue-600 font-semibold mb-4">{doctor.specialty}</p>

        {/* İstatistikler */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-blue-700">
              {doctor.experience}
            </div>
            <div className="text-xs text-gray-600">Yıl Deneyim</div>
          </div>
          <div className="bg-cyan-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-cyan-700">
              {doctor.patients}+
            </div>
            <div className="text-xs text-gray-600">Hasta</div>
          </div>
        </div>

        {/* En yakın müsait */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600">🕐</span>
            <span className="text-gray-700">En yakın müsait:</span>
            <span className="font-semibold text-green-700">
              {doctor.nextAvailable}
            </span>
          </div>
        </div>

        {/* Çalışma günleri */}
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <span>📅</span>
          <span>{doctor.workDays}</span>
        </div>

        {/* Uzmanlık etiketleri */}
        <div className="flex flex-wrap gap-2 mb-4">
          {doctor.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Randevu Butonu */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition cursor-pointer"
        >
          Randevu Al
        </motion.button>
      </div>
    </motion.div>
  )
}

export default DoctorCard