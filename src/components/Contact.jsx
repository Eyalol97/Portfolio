import { Mail, Linkedin, Download } from 'lucide-react'
import { cvUrl } from '../data/education.js'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-paper-300 py-24 sm:py-32">
      <div className="container-page">
        <div className="rounded-2xl border border-paper-300 bg-paper-50 p-10 sm:p-14">
          <p className="eyebrow mb-4 text-sm">Got a challenge?</p>
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Let's talk about your product.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:nahumeyal20@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-rust-600 px-6 py-3 text-sm font-semibold text-paper-50 transition-colors hover:bg-rust-500"
            >
              <Mail size={15} />
              nahumeyal20@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/eyal-pm/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper-300 px-6 py-3 text-sm font-medium text-ink-700 transition-colors hover:border-paper-400 hover:text-ink-900"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-paper-300 px-6 py-3 text-sm font-medium text-ink-700 transition-colors hover:border-paper-400 hover:text-ink-900"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
