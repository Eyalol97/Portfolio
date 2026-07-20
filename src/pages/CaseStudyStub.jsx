import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects.js'

export default function CaseStudyStub() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  return (
    <section className="container-page flex min-h-[70vh] flex-col items-start justify-center py-24">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900">
        <ArrowLeft size={15} />
        Back to home
      </Link>
      <p className="eyebrow mt-8 mb-3">Case Study — Coming in Phase 3</p>
      <h1 className="text-3xl font-semibold text-ink-900 sm:text-4xl">{project ? project.name : 'Case study'}</h1>
      <p className="mt-4 max-w-xl text-ink-500">This dedicated case study page is being built in the next phase.</p>
    </section>
  )
}
