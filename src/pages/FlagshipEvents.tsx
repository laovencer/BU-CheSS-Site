import { CalendarDays, FlaskConical, Microscope, Trophy } from 'lucide-react'
import PageMotion, { PageItem } from '../components/PageMotion'
import PageHeader from '../components/PageHeader'
import { glassCard, pageShell, PARTNER_FORM_URL } from '../lib/ui'

// ─── Page content ──────────────────────────────────────────────────────────────
// Edit the list below to update the page. Items marked TODO are placeholders.

// TODO: replace with the organization's actual flagship events
const events = [
  {
    icon: FlaskConical,
    title: 'Flagship Event 1',
    schedule: 'Month / Semester',
    tag: 'Annual',
    description: 'Short description of the event: what it is, who it is for, and what participants can expect.'
  },
  {
    icon: Trophy,
    title: 'Flagship Event 2',
    schedule: 'Month / Semester',
    tag: 'Competition',
    description: 'Short description of the event: what it is, who it is for, and what participants can expect.'
  },
  {
    icon: Microscope,
    title: 'Flagship Event 3',
    schedule: 'Month / Semester',
    tag: 'Outreach',
    description: 'Short description of the event: what it is, who it is for, and what participants can expect.'
  }
]

// ───────────────────────────────────────────────────────────────────────────────

export default function FlagshipEvents() {
  return (
    <PageMotion>
      <section className={pageShell}>
        <PageHeader
          eyebrow="What we do"
          title="Flagship Events"
          description="The signature activities of the Bicol University Chemical Science Society, held for the advancement of chemical sciences."
        />

        {/* Event cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map(({ icon: Icon, title, schedule, tag, description }) => (
            <PageItem key={title} className={`${glassCard} flex flex-col p-7`}>
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ad63cf]/25">
                  <Icon className="h-6 w-6 text-[#dba4eb]" aria-hidden />
                </span>
                <span className="rounded-full border border-[#c68de5]/40 px-3 py-1 font-monda text-xs uppercase tracking-wider text-[#dba4eb]">
                  {tag}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-bold text-[#ead9ec]">{title}</h2>

              <p className="mt-2 flex items-center gap-2 font-monda text-sm text-[#efe3f0]/60">
                <CalendarDays className="h-4 w-4" aria-hidden />
                {schedule}
              </p>

              <p className="mt-4 flex-1 leading-relaxed text-[#efe3f0]/80">{description}</p>
            </PageItem>
          ))}
        </div>

        {/* Call to action */}
        <PageItem className={`${glassCard} mt-12 flex flex-col items-start gap-5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8`}>
          <div>
            <h2 className="text-2xl font-bold text-[#ead9ec]">Want to be part of our next event?</h2>
            <p className="mt-2 text-[#efe3f0]/80">We welcome sponsors, partners, and collaborators.</p>
          </div>
          <a
            href={PARTNER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[#ad63cf] px-7 py-2.5 font-bold text-[#f8eafa] shadow-lg shadow-purple-950/30 transition hover:bg-[#bd75dc] focus:outline-none focus:ring-2 focus:ring-[#dba4eb] focus:ring-offset-2 focus:ring-offset-[#0c0618]"
          >
            Partner with us
          </a>
        </PageItem>
      </section>
    </PageMotion>
  )
}
