import episterizoData from '../../data/episterizo'
import Accordion from '../../components/Accordion'

export default function ChapterPage({ chapter }) {
  if (!chapter) {
    return (
      <main className="site-container">
        <h1 className="text-2xl font-bold">Chapter not found</h1>
      </main>
    )
  }

  return (
    <main className="site-container">
      <h1 className="text-3xl font-bold mb-2">{chapter.chapter}</h1>
      <p className="text-sm text-gray-600 mb-6">{chapter.tagline}</p>

      <section className="space-y-2">
        {chapter.questions.map((qq, i) => (
          <Accordion key={i} id={`q-${i}`} title={qq.q}>
            <div className="space-y-2">
              <p>{qq.a}</p>
              {qq.link && (
                <p className="text-xs text-gray-500">{qq.link}</p>
              )}
            </div>
          </Accordion>
        ))}
      </section>
    </main>
  )
}

export async function getStaticPaths() {
  const paths = episterizoData.map((c) => ({ params: { slug: c.slug } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const chapter = episterizoData.find((c) => c.slug === params.slug) || null

  if (!chapter) {
    return { notFound: true }
  }

  return {
    props: { chapter },
  }
}
