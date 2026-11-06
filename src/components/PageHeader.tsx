import { PageItem } from './PageMotion'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

/** Standard page title block: small label, large heading, optional intro line. */
export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <PageItem>
        <p className="font-monda text-sm uppercase tracking-[0.2em] text-[#c68de5] sm:text-base">
          {eyebrow}
        </p>
      </PageItem>

      <PageItem>
        <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#ead9ec] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </PageItem>

      {description && (
        <PageItem>
          <p className="mt-5 text-lg leading-relaxed text-[#efe3f0]/80 sm:text-xl">{description}</p>
        </PageItem>
      )}
    </header>
  )
}
