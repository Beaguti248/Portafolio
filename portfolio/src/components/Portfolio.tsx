import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useLang } from '../context/LangContext'

const artworks = [
  {
    title: 'Code Game',
    thumb: 'https://cdna.artstation.com/p/assets/video_clips/images/088/832/948/smaller_square/crushhy-thumb.jpg?1749299920',
    url: 'https://www.artstation.com/artwork/NqkaPb',
    tag: 'Game / Dev',
  },
  {
    title: 'Dragon',
    thumb: 'https://cdnb.artstation.com/p/assets/video_clips/images/088/767/815/smaller_square/crushhy-thumb.jpg?1749125597',
    url: 'https://www.artstation.com/artwork/x3yzLY',
    tag: '3D Model',
  },
  {
    title: 'Dragon Rigging',
    thumb: 'https://cdna.artstation.com/p/assets/video_clips/images/088/767/922/smaller_square/crushhy-thumb.jpg?1749125743',
    url: 'https://www.artstation.com/artwork/x3yzL2',
    tag: 'Rigging',
  },
  {
    title: 'Dragon WireFrame',
    thumb: 'https://cdna.artstation.com/p/assets/video_clips/images/088/767/994/smaller_square/crushhy-thumb.jpg?1749125846',
    url: 'https://www.artstation.com/artwork/8BalDn',
    tag: 'WireFrame',
  },
  {
    title: 'Rabbit Walk',
    thumb: 'https://cdna.artstation.com/p/assets/video_clips/images/088/764/920/smaller_square/crushhy-thumb.jpg?1749119991',
    url: 'https://www.artstation.com/artwork/mALqW8',
    tag: 'Animation',
  },
  {
    title: 'Rabbit',
    thumb: 'https://cdna.artstation.com/p/assets/covers/images/088/764/568/smaller_square/crushhy-crushhy-untitled.jpg?1749119248',
    url: 'https://www.artstation.com/artwork/3Eko1B',
    tag: '3D Model',
  },
  {
    title: 'Emo Rabbit',
    thumb: 'https://cdna.artstation.com/p/assets/video_clips/images/088/830/750/smaller_square/crushhy-thumb.jpg?1749292243',
    url: 'https://www.artstation.com/artwork/2BzkQY',
    tag: 'Character',
  },
  {
    title: 'Strong Rabbit Girl',
    thumb: 'https://cdna.artstation.com/p/assets/video_clips/images/088/830/716/smaller_square/crushhy-thumb.jpg?1749292158',
    url: 'https://www.artstation.com/artwork/Nqkaeq',
    tag: 'Character',
  },
  {
    title: 'Grandmother Rabbit',
    thumb: 'https://cdna.artstation.com/p/assets/video_clips/images/088/831/128/smaller_square/crushhy-thumb.jpg?1749293589',
    url: 'https://www.artstation.com/artwork/XJ0PEn',
    tag: 'Character',
  },
]

export default function Portfolio() {
  const { t } = useLang()

  return (
    <section id="portfolio" className="py-24 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">{t.portfolio.title}</h2>
          <p className="text-slate-500">{t.portfolio.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {artworks.map((art, i) => (
            <motion.a
              key={art.title}
              href={art.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-800"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={art.thumb}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div className="text-white w-full">
                  <p className="font-semibold text-sm leading-tight">{art.title}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-slate-400">{art.tag}</span>
                    <ExternalLink size={13} />
                  </div>
                </div>
              </div>
              <div className="p-2 md:hidden">
                <p className="text-xs font-medium text-slate-400 truncate">{art.title}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.artstation.com/crushhycrush24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25"
          >
            {t.portfolio.viewAll}
            <ExternalLink size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
