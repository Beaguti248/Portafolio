import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'

const skillData = {
  threeD: ['Blender', 'Maya', 'Unity', 'Rigging', 'Animación', 'Texturizado'],
  dev: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'C#'],
  tools: ['LibreOffice', 'VirtualBox', 'NetBeans', 'Visual Studio', 'Git'],
  db: ['MySQL', 'Oracle'],
}

const colors: Record<string, string> = {
  threeD: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  dev: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  tools: 'bg-slate-700 text-slate-300 border-slate-600',
  db: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
}

export default function Skills() {
  const { t } = useLang()
  const cats = t.skills.categories

  return (
    <section id="skills" className="py-24 px-4 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          {t.skills.title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {(Object.entries(skillData) as [keyof typeof skillData, string[]][]).map(([cat, skills], ci) => (
            <motion.div
              key={cat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={ci}
              variants={fadeUp}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800"
            >
              <h3 className="font-semibold text-slate-500 mb-4 text-xs uppercase tracking-widest">
                {cats[cat as keyof typeof cats]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + i * 0.04 }}
                    className={`px-3 py-1 rounded-lg text-sm font-medium border ${colors[cat]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
