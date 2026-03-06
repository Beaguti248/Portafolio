import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="py-8 px-4 bg-slate-950 border-t border-slate-800 text-center">
      <p className="text-slate-600 text-sm">{t.footer.made}</p>
    </footer>
  )
}
