import PageMotion from '../components/PageMotion'

export default function About() {
  return (
    <PageMotion>
      <section className="relative z-10 min-h-screen px-6 pb-16 pt-36 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold text-[#ead9ec]">About Us</h1>
          <p className="text-[#efe3f0]/80">
            We are a community of students and professionals in chemical sciences focused on research, outreach, and partnerships.
          </p>
        </div>
      </section>
    </PageMotion>
  )
}