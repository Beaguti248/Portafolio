import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLang } from '../context/LangContext'

const navLinks = (t: ReturnType<typeof useLang>['t']) => [
  { href: '#about', label: t.nav.about },
  { href: '#skills', label: t.nav.skills },
  { href: '#portfolio', label: t.nav.portfolio },
  { href: '#experience', label: t.nav.experience },
  { href: '#education', label: t.nav.education },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: t.nav.contact },
]

export default function Navbar() {
  const { t, lang, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = navLinks(t)

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-md shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-xl text-blue-400 tracking-tight">
          BG
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-400 transition-colors"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            className="md:hidden text-slate-400"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
