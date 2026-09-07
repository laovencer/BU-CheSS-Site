import PageMotion from '../components/PageMotion'

export default function Contact() {
  return (
    <PageMotion>
      <section className="relative z-10 min-h-screen px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 text-2xl font-semibold text-[#ead9ec]">Contact</h1>
          <p className="text-[#efe3f0]/80">
            For partnership inquiries and events, email:{" "}
            <a className="text-[#c68de5] hover:text-[#d9a6ec]" href="mailto:info@buchess.org">
              info@buchess.org
            </a>
          </p>
        </div>
      </section>
    </PageMotion>
  )
}
