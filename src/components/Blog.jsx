import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Calendar } from 'lucide-react'

const PLATFORM_COLORS = {
  Medium: 'bg-gray-800 text-gray-300 border-gray-700',
  Habr: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  Dev: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  default: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
}

export default function Blog() {
  const { t } = useTranslation()
  const items = t('blog.items', { returnObjects: true })
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="blog" className="py-24 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-2">
            {t('blog.subtitle')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('blog.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const platformColor =
              PLATFORM_COLORS[item.platform] || PLATFORM_COLORS.default

            return (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                {/* Platform + date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${platformColor}`}
                  >
                    {item.platform}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={12} />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-white font-semibold leading-snug mb-3 group-hover:text-indigo-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>

                <div className="flex items-center gap-1.5 text-indigo-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                  {t('blog.readMore')}
                  <ExternalLink size={14} />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
