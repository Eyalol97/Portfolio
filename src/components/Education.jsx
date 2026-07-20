import { Briefcase, GraduationCap, Sparkles } from 'lucide-react'
import { formalEducation, productManagementCourse, uxSpecializations } from '../data/education.js'

const items = [
  {
    icon: Briefcase,
    label: 'Product Management',
    title: productManagementCourse.credential,
    institution: productManagementCourse.institution,
    detail: productManagementCourse.detail,
  },
  {
    icon: GraduationCap,
    label: 'Formal Education',
    title: formalEducation.credential,
    institution: formalEducation.institution,
    detail: formalEducation.detail,
  },
  {
    icon: Sparkles,
    label: 'UX Specializations',
    title: uxSpecializations[0].title,
    institution: uxSpecializations[0].provider,
    detail: uxSpecializations[0].detail,
  },
]

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-paper-300 py-24 sm:py-32">
      <div className="container-page">
        <p className="eyebrow mb-4 text-sm">Education & Continuous Learning</p>
        <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">My education background.</h2>
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {items.map(({ icon: Icon, label, title, institution, detail }) => (
            <div key={label} className="rounded-2xl border border-paper-300 bg-paper-50 p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-paper-300 bg-paper-100 text-rust-600">
                  <Icon size={18} />
                </span>
                <h3 className="eyebrow !text-ink-500">{label}</h3>
              </div>
              <p className="mt-6 text-lg font-medium leading-snug text-ink-900">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{institution}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
