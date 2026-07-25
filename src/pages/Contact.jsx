import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 pt-24 pb-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-blue-800 text-center mb-4">
          📞 İletişim
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Bize ulaşın
        </p>

        <div className="text-center text-gray-500">
          <p>İletişim bilgileri burada olacak...</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact