import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = ['about', 'skills', 'projects', 'research', 'education', 'blog', 'contact']

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-indigo-400 font-bold text-lg tracking-tight hover:text-indigo-300 transition-colors"
        >
          &lt;YN /&gt;
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-sm text-gray-400 hover:text-indigo-400 transition-colors capitalize"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-700 text-gray-400 hover:border-indigo-500 hover:text-indigo-400 transition-all"
          >
            {i18n.language === 'en' ? 'RU' : 'EN'}
          </button>
          <a
            href="/portfolio/cv.pdf"
            download
            className="flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            <Download size={14} />
            {t('nav.downloadCV')}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-700 text-gray-400"
          >
            {i18n.language === 'en' ? 'RU' : 'EN'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="text-left text-gray-300 hover:text-indigo-400 transition-colors py-1"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
              <a
                href="/portfolio/cv.pdf"
                download
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white w-fit transition-colors mt-2"
              >
                <Download size={14} />
                {t('nav.downloadCV')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
