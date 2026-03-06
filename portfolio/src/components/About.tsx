import { motion } from 'framer-motion'
import { MapPin, Sparkles } from 'lucide-react'
import { useLang } from '../context/LangContext'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
}

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-24 px-4 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          {t.about.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="flex justify-center"
          >
            <div className="w-52 h-52 rounded-2xl border border-blue-500/20 shadow-xl shadow-blue-500/10 overflow-hidden">
              <img
                src="/avatar.png"
                alt="Beatriz Gutiérrez"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              id="about-description"
              className="text-slate-400 text-lg leading-relaxed"
            >
              {t.about.description}
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-2"
            >
              {t.about.traits.map(trait => (
                <span
                  key={trait}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 border border-slate-700 rounded-lg text-sm font-medium"
                >
                  <Sparkles size={13} className="text-blue-400" />
                  {trait}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeUp}
              className="space-y-2 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-blue-400 shrink-0" />
                {t.about.location}
              </div>

              <div className="mt-4">
                <p className="font-semibold text-slate-200 mb-2">{t.about.languages}</p>
                <ul className="space-y-1">
                  <li>{t.about.lang.es}</li>
                  <li>{t.about.lang.en}</li>
                  <li>{t.about.lang.fr}</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
