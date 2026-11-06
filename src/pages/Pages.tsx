import { ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import PageMotion, { PageItem } from '../components/PageMotion'
import PageHeader from '../components/PageHeader'
import { glassCard, pageShell } from '../lib/ui'

// ─── Page content ──────────────────────────────────────────────────────────────
// The organization's official social media pages. Items marked TODO are placeholders.

type SocialPage = {
  icon: ComponentType<{ className?: string }>
  platform: string
  handle: string
  url: string
  description: string
}

const socialPages: SocialPage[] = [
  {
    icon: Facebook,
    platform: 'Facebook',
    handle: 'BUChemicalScienceSociety',
    url: 'https://www.facebook.com/BUChemicalScienceSociety',
    // TODO: replace with a short description of what is posted on this page
    description: 'Short description of what followers can find on this page.'
  },
  {
    icon: Instagram,
    platform: 'Instagram',
    handle: '@bu.chess',
    url: 'https://www.instagram.com/bu.chess',
    // TODO: replace with a short description of what is posted on this page
    description: 'Short description of what followers can find on this page.'
  },
  {
    icon: TikTokIcon,
    platform: 'TikTok',
    handle: '@bu.chess',
    url: 'https://www.tiktok.com/@bu.chess',
    // TODO: replace with a short description of what is posted on this page
    description: 'Short description of what followers can find on this page.'
  },
  {
    icon: Linkedin,
    platform: 'LinkedIn',
    handle: 'bu-chemical-science-society',
    url: 'https://www.linkedin.com/company/bu-chemical-science-society/',
    // TODO: replace with a short description of what is posted on this page
    description: 'Short description of what followers can find on this page.'
  }
]

// ───────────────────────────────────────────────────────────────────────────────

export default function Pages() {
  return (
    <PageMotion>
      <section className={pageShell}>
        <PageHeader
          eyebrow="Follow us"
          title="Pages"
          description="Stay updated with the Bicol University Chemical Science Society on our official social media pages."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {socialPages.map((page) => (
            <PageItem key={page.platform} className="h-full">
              <SocialCard page={page} />
            </PageItem>
          ))}
        </div>
      </section>
    </PageMotion>
  )
}

function SocialCard({ page }: { page: SocialPage }) {
  const { icon: Icon, platform, handle, url, description } = page

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${platform}: ${handle} (opens in a new tab)`}
      className={`${glassCard} group flex h-full flex-col p-7 transition hover:border-[#c68de5]/50 hover:bg-[#8f7ca0]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dba4eb] sm:p-8`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            aria-hidden
            className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#ad63cf]/25 transition group-hover:bg-[#ad63cf]/40"
          >
            <Icon className="h-7 w-7 text-[#dba4eb]" />
          </span>
          <div className="min-w-0">
            <h2 className="text-2xl font-bold text-[#ead9ec]">{platform}</h2>
            <p className="truncate font-monda text-sm text-[#c68de5]">{handle}</p>
          </div>
        </div>
        <ArrowUpRight
          className="h-6 w-6 shrink-0 text-[#efe3f0]/50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#dba4eb]"
          aria-hidden
        />
      </div>

      <p className="mt-5 flex-1 leading-relaxed text-[#efe3f0]/80">{description}</p>

      <span className="mt-6 inline-flex items-center gap-1.5 font-monda text-sm text-[#dba4eb] transition group-hover:text-white">
        Visit page
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </span>
    </a>
  )
}

/** TikTok logo drawn in the same outline style as the lucide icons (lucide has no TikTok icon). */
function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
    </svg>
  )
}
