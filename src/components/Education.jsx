import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  const { t } = useTranslation()
  const items = t('education.items', { returnObjects: true })
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-2">
            {t('education.subtitle')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('education.title')}</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-indigo-500/40 to-transparent" />

          <div className="space-y-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-0 w-12 h-12 rounded-xl flex items-center justify-center border-2 ${
                    item.current
                      ? 'bg-indigo-600 border-indigo-400 shadow-lg shadow-indigo-500/30'
                      : 'bg-gray-900 border-gray-700'
                  }`}
                >
                  <GraduationCap
                    size={20}
                    className={item.current ? 'text-white' : 'text-gray-500'}
                  />
                </div>

                <div
                  className={`bg-gray-900/60 border rounded-2xl p-5 ${
                    item.current ? 'border-indigo-500/40' : 'border-gray-800'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold">{item.degree}</h3>
                    {item.current && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-400/80 text-sm mb-1">{item.institution}</p>
                  <p className="text-gray-500 text-xs font-mono mb-3">{item.period}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
