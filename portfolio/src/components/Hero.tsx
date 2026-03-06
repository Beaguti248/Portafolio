import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import { useLang } from '../context/LangContext'

const roles = {
  es: ['Desarrolladora Web', 'Artista 3D', 'Técnica en Microinformática'],
  en: ['Web Developer', '3D Artist', 'IT Technician'],
}

export default function Hero() {
  const { t, lang } = useLang()

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 }}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-24 rounded-full border-2 border-blue-500/40 shadow-lg shadow-blue-500/20 overflow-hidden">
            <img src="/avatar.png" alt="Beatriz Gutiérrez" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.p
          id="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-blue-400 font-medium mb-2"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl font-bold text-white mb-4"
        >
          {t.hero.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {roles[lang].map(role => (
            <span
              key={role}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium"
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          id="hero-description"
          className="text-slate-400 text-lg max-w-xl mx-auto mb-10"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25"
          >
            {t.hero.cta}
          </a>
          <a
            href="/bea_curri.pdf"
            download="Beatriz_Gutierrez_CV.pdf"
            className="px-6 py-3 border border-slate-600 text-slate-300 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <Download size={16} />
            {t.hero.cv}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-slate-600"
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}
