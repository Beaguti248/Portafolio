import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="experience" className="py-24 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          {t.experience.title}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-800" />

          <div className="space-y-10">
            {t.experience.jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Briefcase size={16} className="text-blue-400" />
                </div>

                <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white">{job.company}</h3>
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full shrink-0">
                      {job.year}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-blue-400 mb-2">{job.role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{job.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
