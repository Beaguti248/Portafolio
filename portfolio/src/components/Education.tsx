import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function Education() {
  const { t } = useLang()

  return (
    <section id="education" className="py-24 px-4 bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          {t.education.title}
        </motion.h2>

        <div className="space-y-4">
          {t.education.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 bg-slate-800/50 rounded-2xl p-5 border border-slate-800"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-blue-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <h3 className="font-semibold text-slate-100 text-sm leading-snug">{item.title}</h3>
                  <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full shrink-0">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">{item.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
