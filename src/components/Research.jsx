import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Link, BookOpen, GraduationCap, Monitor } from 'lucide-react'

const TYPE_CONFIG = {
  journal: { icon: BookOpen, label: 'Journal', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
  conference: { icon: Monitor, label: 'Conference', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
  thesis: { icon: GraduationCap, label: 'Thesis', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
}

export default function Research() {
  const { t } = useTranslation()
  const items = t('research.items', { returnObjects: true })
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="research" className="py-24 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-2">
            {t('research.subtitle')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('research.title')}</h2>
        </motion.div>

        <div className="space-y-5">
          {items.map((item, i) => {
            const config = TYPE_CONFIG[item.type] || TYPE_CONFIG.journal
            const Icon = config.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Type badge */}
                  <div className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium w-fit ${config.color}`}>
                    <Icon size={13} />
                    {config.label}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <h3 className="text-white font-semibold leading-snug group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-gray-500 text-sm font-mono flex-shrink-0">{item.year}</span>
                    </div>

                    <p className="text-indigo-400/70 text-sm mb-2">{item.venue}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

                    {/* Links */}
                    <div className="flex gap-3">
                      {item.pdf && (
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-1.5 rounded-full transition-colors"
                        >
                          <FileText size={13} />
                          {t('research.pdf')}
                        </a>
                      )}
                      {item.doi && (
                        <a
                          href={item.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-3 py-1.5 rounded-full transition-colors"
                        >
                          <Link size={13} />
                          {t('research.doi')}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
