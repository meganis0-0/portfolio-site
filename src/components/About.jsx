import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function SectionWrapper({ children, id }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const { t } = useTranslation()
  const bio = t('about.bio', { returnObjects: true })
  const facts = t('about.facts', { returnObjects: true })

  return (
    <SectionWrapper id="about">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-indigo-500/30">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900/50 to-violet-900/50 flex items-center justify-center">
                    <span className="text-8xl select-none">👨‍💻</span>
                  </div>
                </div>
                {/* Decorative border offset */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-indigo-500/20 -z-10" />
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-2">
                {t('about.subtitle')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {t('about.title')}
              </h2>

              <div className="space-y-4 mb-8">
                {bio.map((paragraph, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Facts grid */}
              <div className="grid grid-cols-2 gap-3">
                {facts.map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-gray-900/60 border border-gray-800 rounded-xl px-4 py-3"
                  >
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-sm text-gray-200 font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  )
}
