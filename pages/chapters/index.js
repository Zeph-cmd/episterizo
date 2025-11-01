import TopicCard from '../../components/TopicCard'
import episterizoData from '../../data/episterizo'

export default function Chapters() {
  return (
    <main className="site-container">
      <h1 className="text-3xl font-bold mb-6">Chapters</h1>

      <section className="grid gap-4 sm:grid-cols-2">
        {episterizoData.map((c) => (
          <TopicCard key={c.slug} title={c.chapter} summary={c.tagline} href={`/chapters/${c.slug}`} />
        ))}
      </section>
    </main>
  )
}
