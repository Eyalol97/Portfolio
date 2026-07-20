import { Download } from 'lucide-react'
import { cvUrl } from '../data/education.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="container-page relative">
        <p className="eyebrow mb-5 text-sm">Eyal Nahum</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
          Product Owner & Manager
        </h1>
        <p className="mt-7 max-w-xl text-base leading-loose text-ink-700 sm:text-lg">
          Product Manager who turns messy problems into simple solutions — grounded in UX, QA, technical understanding, and user research.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-paper-300 px-6 py-3 text-sm font-medium text-ink-700 transition-colors hover:border-paper-400 hover:bg-paper-50 hover:text-ink-900"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
