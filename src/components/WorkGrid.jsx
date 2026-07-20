import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function WorkGrid() {
  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-sm">Selected Work</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            A few things I've worked on.
          </h2>
          <p className="mt-4 text-base leading-loose text-ink-700">Product work as a problem-solving exercise.</p>
          <p className="mt-1.5 text-base leading-loose text-ink-700">
            Each of these started with something that wasn't working — and this is how I worked through it.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
