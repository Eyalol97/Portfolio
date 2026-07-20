import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={project.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-paper-300 bg-paper-50 transition-all duration-300 hover:-translate-y-1 hover:border-rust-400 hover:shadow-soft"
    >
      <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-paper-300 bg-paper-200 p-6 sm:h-64 sm:p-8">
        <img
          src={project.image}
          alt={project.name}
          className="h-full max-h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(38,37,34,0.14)] transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-5 top-5 rounded-full border border-paper-300 bg-paper-50/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-500 backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-ink-900 sm:text-2xl">{project.name}</h3>
        <p className="mt-3 text-base font-medium leading-snug text-ink-700">{project.headline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">{project.teaser}</p>
        <div
          className={`mt-6 grid gap-3 border-t border-paper-300 pt-5 ${
            project.stats.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
          }`}
        >
          {project.stats.map((stat) =>
            typeof stat === 'string' ? (
              <div
                key={stat}
                className="flex items-center justify-center rounded-lg border border-paper-300 bg-paper-100 px-3 py-2.5 text-center text-sm font-medium leading-snug text-ink-700"
              >
                {stat}
              </div>
            ) : (
              <div key={stat.label}>
                <div className="stat-mono text-lg font-semibold sm:text-xl">{stat.value}</div>
                <div className="mt-0.5 text-[11px] leading-tight text-ink-500">{stat.label}</div>
              </div>
            )
          )}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-paper-300 px-2.5 py-1 text-[11px] text-ink-500">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-paper-300 pt-5 text-sm">
          <span className="text-ink-500">{project.role}</span>
          <span className="inline-flex items-center gap-1 font-medium text-rust-600 transition-transform group-hover:translate-x-0.5">
            Read the case study
            <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  )
}
