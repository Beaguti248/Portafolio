import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function FAQ() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">{t.faq.title}</h2>
          <p className="text-slate-500">{t.faq.subtitle}</p>
        </motion.div>

        <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {t.faq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-800 transition-colors"
              >
                <span
                  itemProp="name"
                  className="font-medium text-slate-100 text-sm sm:text-base leading-snug"
                >
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-blue-400"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      itemProp="text"
                      className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-4"
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
