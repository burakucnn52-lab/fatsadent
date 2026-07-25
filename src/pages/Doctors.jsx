import { motion } from 'framer-motion'
import DoctorCard from '../components/DoctorCard'

function Doctors() {
  const doctors = [
    {
      name: 'Dr. Fatih AYHAN',
      initials: 'FA',
      specialty: 'Ağız ve Diş Cerrahisi',
      experience: 12,
      patients: 2400,
      rating: 4.9,
      reviews: 156,
      nextAvailable: 'Yarın 14:30',
      workDays: 'Pzt, Çrş, Cum',
      tags: ['İmplant', '20\'lik Diş', 'Cerrahi'],
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      name: 'Dr. Abdullah MORÇİÇEK',
      initials: 'AM',
      specialty: 'Ortodonti Uzmanı',
      experience: 10,
      patients: 1800,
      rating: 4.8,
      reviews: 123,
      nextAvailable: 'Bugün 16:00',
      workDays: 'Sal, Prş, Cmt',
      tags: ['Ortodonti', 'Şeffaf Plak', 'Tel Tedavisi'],
      bgColor: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
    },
    {
      name: 'Dr. Zeynep KAYA',
      initials: 'ZK',
      specialty: 'Çocuk Diş Hekimi',
      experience: 8,
      patients: 1500,
      rating: 5.0,
      reviews: 98,
      nextAvailable: '2 gün sonra 10:00',
      workDays: 'Pzt - Cum',
      tags: ['Çocuk Diş', 'Koruyucu Tedavi'],
      bgColor: 'linear-gradient(135deg, #FF6B9D 0%, #C56CD6 100%)',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-blue-800 mb-4">
            👨‍⚕️ Doktorlarımız
          </h1>
          <p className="text-xl text-gray-600">
            Alanında uzman diş hekimlerimizle tanışın
          </p>
        </motion.div>

        {/* İstatistik Şeridi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-blue-600">15+</div>
            <div className="text-gray-600 mt-1">Uzman Doktor</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-blue-600">10K+</div>
            <div className="text-gray-600 mt-1">Mutlu Hasta</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-blue-600">20+</div>
            <div className="text-gray-600 mt-1">Yıllık Tecrübe</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-blue-600">%98</div>
            <div className="text-gray-600 mt-1">Memnuniyet</div>
          </div>
        </motion.div>

        {/* Doktor Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors