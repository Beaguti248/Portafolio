import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang, type Translations } from '../i18n/translations'

interface LangContextType {
  lang: Lang
  t: Translations
  toggle: () => void
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const t = translations[lang]
  const toggle = () => setLang(l => (l === 'es' ? 'en' : 'es'))

  return <LangContext.Provider value={{ lang, t, toggle }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
