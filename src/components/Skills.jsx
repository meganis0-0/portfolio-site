import { useTranslation } from 'react-i18next'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CATEGORY_COLORS = [
  'from-indigo-500/10 to-indigo-500/5 border-indigo-500/20',
  'from-violet-500/10 to-violet-500/5 border-violet-500/20',
  'from-cyan-500/10 to-cyan-500/5 border-cyan-500/20',
  'from-emerald-500/10 to-emerald-500/5 border-emerald-500/20',
]

const CHIP_COLORS = [
  'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20',
  'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20',
  'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20',
  'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20',
]

export default function Skills() {
  const { t } = useTranslation()
  const categories = t('skills.categories', { returnObjects: true })
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-2">
            {t('skills.subtitle')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('skills.title')}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className={`bg-gradient-to-br ${CATEGORY_COLORS[ci % CATEGORY_COLORS.length]} border rounded-2xl p-6`}
            >
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors cursor-default ${CHIP_COLORS[ci % CHIP_COLORS.length]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
