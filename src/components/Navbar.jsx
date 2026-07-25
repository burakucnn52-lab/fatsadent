import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Doktorlarımız', path: '/doctors' },
    { name: 'Randevu Al', path: '/appointment' },
    { name: 'İletişim', path: '/contact' },
  ]

  return (
    <>
      {/* Üst Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700">
            🦷 FatsaDent
          </Link>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Hamburger Buton (Mobil) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-blue-700 block"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-7 h-0.5 bg-blue-700 block"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-blue-700 block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobil Menü (Açılır) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-40 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-gray-700 hover:text-blue-600 transition font-medium block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Arka Plan Karartma (Menü açıkken) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
