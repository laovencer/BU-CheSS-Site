import { User } from 'lucide-react'
import PageMotion, { PageItem } from '../components/PageMotion'
import PageHeader from '../components/PageHeader'
import { glassCard, pageShell } from '../lib/ui'

// ─── Page content ──────────────────────────────────────────────────────────────
// Edit the lists below to update the page. Items marked TODO are placeholders.
// To show a photo, import it at the top (e.g. `import juan from '../assets/images/officers/juan.jpg'`)
// and set `photo: juan` on that person.

type Person = {
  name: string
  position: string
  detail?: string // e.g. program and year level, or department
  photo?: string
}

// TODO: replace with the organization's adviser(s)
const advisers: Person[] = [{ name: 'Adviser Name', position: 'Organization Adviser', detail: 'Department' }]

// TODO: replace with the current executive board
const executiveBoard: Person[] = [
  { name: 'Officer Name', position: 'President', detail: 'Program, Year Level' },
  { name: 'Officer Name', position: 'Vice President – Internal', detail: 'Program, Year Level' },
  { name: 'Officer Name', position: 'Vice President – External', detail: 'Program, Year Level' },
  { name: 'Officer Name', position: 'Secretary', detail: 'Program, Year Level' },
  { name: 'Officer Name', position: 'Treasurer', detail: 'Program, Year Level' },
  { name: 'Officer Name', position: 'Auditor', detail: 'Program, Year Level' },
  { name: 'Officer Name', position: 'Public Relations Officer', detail: 'Program, Year Level' }
]

// TODO: replace with the actual committees and their heads
const committeeHeads: Person[] = [
  { name: 'Member Name', position: 'Committee Head – Committee 1', detail: 'Program, Year Level' },
  { name: 'Member Name', position: 'Committee Head – Committee 2', detail: 'Program, Year Level' },
  { name: 'Member Name', position: 'Committee Head – Committee 3', detail: 'Program, Year Level' },
  { name: 'Member Name', position: 'Committee Head – Committee 4', detail: 'Program, Year Level' }
]

// TODO: update to the current academic year
const academicYear = 'A.Y. 20XX – 20XX'

// ───────────────────────────────────────────────────────────────────────────────

const sections = [
  { title: 'Adviser', people: advisers },
  { title: 'Executive Board', people: executiveBoard },
  { title: 'Committee Heads', people: committeeHeads }
]

export default function Directory() {
  return (
    <PageMotion>
      <section className={pageShell}>
        <PageHeader
          eyebrow={`Officers · ${academicYear}`}
          title="Directory"
          description="Meet the people leading the Bicol University Chemical Science Society."
        />

        {sections.map(({ title, people }) => (
          <div key={title} className="mt-14">
            <PageItem>
              <h2 className="text-2xl font-bold text-[#ead9ec] sm:text-3xl">{title}</h2>
            </PageItem>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {people.map((person, i) => (
                <PersonCard key={`${person.position}-${i}`} person={person} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageMotion>
  )
}

function PersonCard({ person }: { person: Person }) {
  const { name, position, detail, photo } = person

  return (
    <PageItem className={`${glassCard} flex flex-col items-center p-6 text-center`}>
      {/* Photo, or a placeholder avatar until one is added */}
      <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-full border border-white/15 bg-[#ad63cf]/20">
        {photo ? (
          <img src={photo} alt={name} className="h-full w-full object-cover" />
        ) : (
          <User className="h-10 w-10 text-[#dba4eb]/70" aria-hidden />
        )}
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#ead9ec]">{name}</h3>
      <p className="mt-1 font-monda text-sm text-[#c68de5]">{position}</p>
      {detail && <p className="mt-2 text-sm text-[#efe3f0]/60">{detail}</p>}
    </PageItem>
  )
}
