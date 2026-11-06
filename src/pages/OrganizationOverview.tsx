import { CalendarDays, Eye, FlaskConical, GraduationCap, Target, Users } from 'lucide-react'
import PageMotion, { PageItem } from '../components/PageMotion'
import PageHeader from '../components/PageHeader'
import { glassCard, pageShell } from '../lib/ui'

// ─── Page content ──────────────────────────────────────────────────────────────
// Edit the text below to update the page. Items marked TODO are placeholders.

const intro =
  // TODO: replace with a short introduction to the organization
  'The Bicol University Chemical Science Society is a student organization for the advancement of chemical sciences. Add a short introduction about who you are and what you do here.'

const quickFacts = [
  { icon: CalendarDays, label: 'Founded', value: '2003' },
  { icon: GraduationCap, label: 'Home', value: 'Bicol University' },
  { icon: FlaskConical, label: 'Field', value: 'Chemical Sciences' },
  { icon: Users, label: 'Members', value: '—' } // TODO: member count
]

const missionVision = [
  {
    icon: Target,
    title: 'Mission',
    // TODO: replace with the official mission statement
    text: 'Add the organization’s official mission statement here.'
  },
  {
    icon: Eye,
    title: 'Vision',
    // TODO: replace with the official vision statement
    text: 'Add the organization’s official vision statement here.'
  }
]

// TODO: replace with the organization's core values / objectives
const coreValues = [
  { title: 'Core Value 1', text: 'Short description of this value or objective.' },
  { title: 'Core Value 2', text: 'Short description of this value or objective.' },
  { title: 'Core Value 3', text: 'Short description of this value or objective.' }
]

// ───────────────────────────────────────────────────────────────────────────────

export default function OrganizationOverview() {
  return (
    <PageMotion>
      <section className={pageShell}>
        <PageHeader eyebrow="Bicol University Chemical Science Society" title="Organization Overview" description={intro} />

        {/* Quick facts */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {quickFacts.map(({ icon: Icon, label, value }) => (
            <PageItem key={label} className={`${glassCard} p-5 sm:p-6`}>
              <Icon className="h-6 w-6 text-[#c68de5]" aria-hidden />
              <p className="mt-4 font-monda text-sm uppercase tracking-wider text-[#efe3f0]/60">{label}</p>
              <p className="mt-1 text-xl font-bold text-[#ead9ec] sm:text-2xl">{value}</p>
            </PageItem>
          ))}
        </div>

        {/* Mission & vision */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {missionVision.map(({ icon: Icon, title, text }) => (
            <PageItem key={title} className={`${glassCard} p-7 sm:p-8`}>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ad63cf]/25">
                  <Icon className="h-5 w-5 text-[#dba4eb]" aria-hidden />
                </span>
                <h2 className="text-2xl font-bold text-[#ead9ec]">{title}</h2>
              </div>
              <p className="mt-4 leading-relaxed text-[#efe3f0]/80">{text}</p>
            </PageItem>
          ))}
        </div>

        {/* Core values */}
        <PageItem>
          <h2 className="mt-16 text-3xl font-bold text-[#ead9ec]">Core Values</h2>
        </PageItem>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {coreValues.map(({ title, text }, i) => (
            <PageItem key={title} className={`${glassCard} p-7`}>
              <span className="font-monda text-sm text-[#c68de5]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-xl font-bold text-[#ead9ec]">{title}</h3>
              <p className="mt-3 leading-relaxed text-[#efe3f0]/80">{text}</p>
            </PageItem>
          ))}
        </div>
      </section>
    </PageMotion>
  )
}
