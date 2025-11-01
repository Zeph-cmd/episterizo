import TopicCard from '../components/TopicCard'
import chapters from '../data/chapters.json'

export default function Home() {
  return (
    <main className="site-container">
      <h1 className="text-4xl font-bold mb-4">Episterizo — Christian Q&A</h1>
      <p className="text-lg text-gray-700 mb-8">A modern, responsive site listing chapters as categories with questions and summarized answers.</p>

      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {chapters.map((c) => (
          <TopicCard key={c.id} title={c.title} summary={c.summary} href={`/chapters/${c.id}`} />
        ))}
      </section>
    </main>
  )
}
