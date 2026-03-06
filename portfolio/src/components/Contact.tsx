import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Palette } from 'lucide-react'
import { useLang } from '../context/LangContext'

const contactItems = (t: ReturnType<typeof useLang>['t']) => [
  {
    icon: <Mail size={18} className="text-blue-400" />,
    label: t.contact.email,
    value: 'beaguti248@gmail.com',
    href: 'mailto:beaguti248@gmail.com',
  },
  {
    icon: <Phone size={18} className="text-blue-400" />,
    label: t.contact.phone,
    value: '603 396 423',
    href: 'tel:+34603396423',
  },
  {
    icon: <MapPin size={18} className="text-blue-400" />,
    label: t.contact.location,
    value: 'Barcelona, España',
    href: null,
  },
  {
    icon: <Github size={18} className="text-blue-400" />,
    label: t.contact.github,
    value: 'github.com/Beaguti248',
    href: 'https://github.com/Beaguti248',
  },
  {
    icon: <Palette size={18} className="text-blue-400" />,
    label: t.contact.artstation,
    value: 'artstation.com/crushhycrush24',
    href: 'https://www.artstation.com/crushhycrush24',
  },
]

export default function Contact() {
  const { t } = useLang()
  const items = contactItems(t)

  return (
    <section id="contact" className="py-24 px-4 bg-slate-950">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">{t.contact.title}</h2>
          <p className="text-slate-500">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid gap-3">
          {items.map((item, i) => {
            const inner = (
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-medium">{item.label}</p>
                  <p className="text-slate-200 font-medium text-sm">{item.value}</p>
                </div>
              </div>
            )

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-blue-500/40 transition-colors"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block hover:text-blue-400 transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
