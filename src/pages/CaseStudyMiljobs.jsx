import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Monitor,
  Smartphone,
  LayoutGrid,
  TextCursorInput,
  MousePointerClick,
  AlertCircle,
  CheckCircle,
} from 'lucide-react'
import {
  hero,
  challenge,
  persona,
  research,
  beforeAfter,
  blueprints,
  componentShowcase,
  solutionTable,
  validation,
  roadmap,
} from '../data/miljobsCaseStudy.js'

const componentIcons = [LayoutGrid, TextCursorInput, MousePointerClick]

function ImageFrame({ src, alt, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl border border-paper-300 bg-paper-200 p-6 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(38,37,34,0.14)]"
        loading="lazy"
      />
    </div>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-paper-300 bg-paper-50 p-7 sm:p-8">
      <div className="stat-mono text-4xl font-semibold sm:text-5xl">{value}</div>
      <div className="mt-2 max-w-[24ch] text-sm leading-relaxed text-ink-500">{label}</div>
    </div>
  )
}

function SectionHeading({ eyebrow, children }) {
  return (
    <>
      <p className="eyebrow mb-4 text-sm">{eyebrow}</p>
      <h2 className="text-2xl font-semibold leading-snug tracking-tight text-ink-900 sm:text-3xl">{children}</h2>
    </>
  )
}

export default function CaseStudyMiljobs() {
  return (
    <>
      <section className="pt-16 pb-10 sm:pt-20">
        <div className="container-page">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink-900"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
          <p className="eyebrow mb-4 mt-10 text-sm">{hero.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">{hero.title}</h1>
          <p className="mt-3 text-lg text-ink-500">{hero.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
            <span>{hero.role}</span>
            <span className="text-paper-400">·</span>
            <span>{hero.system}</span>
            <span className="text-paper-400">·</span>
            <span>{hero.tools}</span>
          </div>
        </div>
      </section>

      <section className="border-t border-paper-300 py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={challenge.eyebrow}>{challenge.heading}</SectionHeading>
            <p className="mt-5 text-base leading-relaxed text-ink-500">{challenge.body}</p>
            <p className="mt-4 rounded-lg border border-paper-300 bg-paper-100 px-4 py-3 text-sm leading-relaxed text-ink-700">
              {challenge.twist}
            </p>
          </div>
          <ImageFrame src={challenge.image} alt="Mil'jobs app dashboard" className="h-72 sm:h-96" />
        </div>
      </section>

      <section className="border-t border-paper-300 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow={persona.eyebrow}>{persona.heading}</SectionHeading>
          <div className="mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[280px_1fr]">
            <div className="rounded-2xl border border-paper-300 bg-paper-50 p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust-500/10 font-mono text-sm font-semibold text-rust-600">
                  {persona.name[0]}
                </span>
                <div>
                  <p className="text-base font-semibold text-ink-900">{persona.name}</p>
                  <p className="text-sm text-ink-500">{persona.role}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink-500">
                {persona.facts.map((fact) => (
                  <li key={fact} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rust-500" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center rounded-2xl border border-rust-500/30 bg-rust-500/[0.06] p-7 sm:p-10">
              <p className="stat-mono text-xl font-medium italic leading-snug sm:text-2xl">
                &ldquo;{persona.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-paper-300 py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <SectionHeading eyebrow={research.eyebrow}>{research.heading}</SectionHeading>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">{research.body}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700">{research.insight}</p>
          </div>
          <StatCard value={research.stat.value} label={research.stat.label} />
        </div>
      </section>

      <section className="border-t border-paper-300 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow={beforeAfter.eyebrow}>{beforeAfter.heading}</SectionHeading>
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-6">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rust-500/40 bg-rust-500/10 px-3 py-1">
                <AlertCircle size={14} className="text-rust-600" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-rust-600">The Problem</span>
              </div>
              <div className="rounded-2xl border border-paper-300 bg-paper-50 p-7 sm:p-8">
                <div className="flex items-center gap-2 text-ink-500">
                  <Monitor size={16} />
                  <span className="eyebrow !text-ink-500">{beforeAfter.before.label}</span>
                </div>
                <ol className="mt-5 space-y-3">
                  {beforeAfter.before.steps.map((step, i) => (
                    <li key={step} className="flex items-center gap-3 text-sm text-ink-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-paper-300 font-mono text-[11px] text-ink-500">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="flex items-center justify-center py-1 text-rust-500">
              <ArrowRight size={24} className="hidden lg:block" />
              <ArrowRight size={20} className="rotate-90 lg:hidden" />
            </div>

            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-600/40 bg-teal-600/10 px-3 py-1">
                <CheckCircle size={14} className="text-teal-600" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-600">The Solution</span>
              </div>
              <div className="rounded-2xl border border-teal-600/30 bg-teal-600/[0.06] p-7 sm:p-8">
                <div className="flex items-center gap-2 text-teal-700">
                  <Smartphone size={16} />
                  <span className="eyebrow !text-teal-700">{beforeAfter.after.label}</span>
                </div>
                <ol className="mt-5 space-y-3">
                  {beforeAfter.after.steps.map((step, i) => (
                    <li key={step} className="flex items-center gap-3 text-sm text-ink-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal-600/40 bg-teal-600/10 font-mono text-[11px] text-teal-600">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-paper-300 bg-paper-200/60 py-20 sm:py-28">
        <div className="container-page">
          <p className="eyebrow mb-4 text-sm">Product Solutions Blueprint</p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            From research to shipped interface.
          </h2>

          <div className="mt-16">
            <p className="eyebrow mb-6 text-xs">{blueprints.eyebrow}</p>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-paper-300 bg-paper-50 p-8 sm:p-10">
                <p className="text-lg font-semibold text-ink-900">{blueprints.paper.label}</p>
                <p className="mt-4 text-base leading-relaxed text-ink-500">{blueprints.paper.body}</p>
              </div>
              <div className="rounded-2xl border border-paper-300 bg-paper-50 p-8 sm:p-10">
                <p className="text-lg font-semibold text-ink-900">{blueprints.flow.label}</p>
                <p className="mt-4 text-base leading-relaxed text-ink-500">{blueprints.flow.body}</p>
                <ImageFrame src={blueprints.flow.image} alt="Job submission flow" className="mt-6 h-64" />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <p className="eyebrow mb-3 text-xs">{componentShowcase.eyebrow}</p>
            <h3 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
              {componentShowcase.heading}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-500">{componentShowcase.intro}</p>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {componentShowcase.components.map((c, i) => {
                const Icon = componentIcons[i]
                return (
                  <div key={c.title} className="flex flex-col rounded-2xl border border-paper-300 bg-paper-50 p-6 sm:p-7">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-paper-300 bg-paper-100 text-rust-600">
                        <Icon size={16} />
                      </span>
                      <span className="font-mono text-xs text-rust-600">{c.type}</span>
                    </div>
                    <p className="mt-3 text-lg font-semibold text-ink-900">{c.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">{c.body}</p>
                    <ImageFrame src={c.image} alt={c.title} className="mt-6 h-48" />
                    <div className="mt-6 border-t border-paper-300 pt-4">
                      <p className="text-xs font-semibold text-teal-700">{c.problemSolved}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-20">
            <SectionHeading eyebrow={solutionTable.eyebrow}>{solutionTable.heading}</SectionHeading>
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              {solutionTable.rows.map((row) => (
                <>
                  <div key={`problem-${row.painPoint}`} className="rounded-2xl border border-rust-500/30 bg-rust-500/[0.08] p-7 sm:p-8">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rust-500/20">
                        <AlertCircle size={18} className="text-rust-600" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-rust-600">Problem</span>
                    </div>
                    <p className="text-base leading-relaxed text-ink-900">{row.painPoint}</p>
                  </div>

                  <div className="flex items-center justify-center py-1 text-rust-500">
                    <ArrowRight size={24} className="hidden lg:block" />
                    <ArrowRight size={20} className="rotate-90 lg:hidden" />
                  </div>

                  <div key={`solution-${row.painPoint}`} className="rounded-2xl border border-teal-600/30 bg-teal-600/[0.08] p-7 sm:p-8">
                    <div className="mb-4 flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-600/20">
                        <CheckCircle size={18} className="text-teal-600" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">Solution</span>
                    </div>
                    <p className="text-base leading-relaxed text-ink-900">{row.implementation}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-paper-300 py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={validation.eyebrow}>{validation.heading}</SectionHeading>
            <p className="mt-5 text-base leading-relaxed text-ink-500">{validation.body}</p>
            <p className="mt-4 rounded-lg border border-rust-500/30 bg-rust-500/[0.08] px-4 py-3 text-sm leading-relaxed text-ink-700">
              {validation.iteration}
            </p>
            <div className="mt-6 max-w-xs">
              <StatCard value={validation.stat.value} label={validation.stat.label} />
            </div>
          </div>
          <ImageFrame src={validation.image} alt="Confirmation snackbar" className="h-72 sm:h-96" />
        </div>
      </section>

      <section className="border-t border-paper-300 py-16 sm:py-20">
        <div className="container-page">
          <div className="rounded-2xl border border-paper-300 bg-paper-50 p-8 sm:p-10">
            <SectionHeading eyebrow={roadmap.eyebrow}>{roadmap.heading}</SectionHeading>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">{roadmap.body}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-paper-300 py-16 sm:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink-900"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
          <Link
            to="/work/zoharim-7-0"
            className="inline-flex items-center gap-2 text-sm font-medium text-rust-600 transition-colors hover:text-rust-500"
          >
            Next case study: Zoharim 7.0
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
