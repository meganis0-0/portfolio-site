import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon } from './icons'

const ICON_MAP = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  telegram: TelegramIcon,
}

const LINK_STYLES = {
  github: 'hover:bg-gray-800 hover:border-gray-600 hover:text-white',
  linkedin: 'hover:bg-blue-600/10 hover:border-blue-500/50 hover:text-blue-400',
  email: 'hover:bg-indigo-600/10 hover:border-indigo-500/50 hover:text-indigo-400',
  telegram: 'hover:bg-cyan-600/10 hover:border-cyan-500/50 hover:text-cyan-400',
}

export default function Contact() {
  const { t } = useTranslation()
  const links = t('contact.links', { returnObjects: true })
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-2">
            {t('contact.subtitle')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t('contact.title')}</h2>
          <p className="text-gray-400 leading-relaxed mb-12 max-w-md mx-auto">
            {t('contact.description')}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {links.map((link, i) => {
              const Icon = ICON_MAP[link.type] || Mail
              const hoverStyle = LINK_STYLES[link.type] || LINK_STYLES.email

              return (
                <motion.a
                  key={link.type}
                  href={link.url}
                  target={link.type !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full border border-gray-800 text-gray-400 transition-all ${hoverStyle} hover:-translate-y-0.5`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-600 text-sm font-mono">
          &lt;/portfolio&gt; · Built with React + Vite · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
