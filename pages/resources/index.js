export default function Resources() {
  const resources = [
    { id: 1, title: 'Episterizo (book)', link: '#' },
    { id: 2, title: 'Further Reading', link: '#' }
  ]

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <ul className="space-y-3">
        {resources.map((r) => (
          <li key={r.id} className="p-3 border rounded">
            <a href={r.link} className="font-medium text-blue-600">{r.title}</a>
          </li>
        ))}
      </ul>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Get the Book & Learn More</h2>
        <p className="text-gray-700 mb-6">
          Strengthen your foundation in Christ with <strong>Episterizo</strong> by Pastor Dr. Obed Obeng-Addae — 
          a powerful exposition of the believer’s faith and walk in the Word.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <a
            href="https://christcosmopolitan.org/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors"
          >
            Get Episterizo from the Official Store
          </a>

          <a
            href="https://www.youtube.com/@ChristCosmopolitanInc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
          >
            Visit Pastor Obed’s YouTube Channel
          </a>
        </div>
      </section>
    </main>
  )
}
