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
    </main>
  )
}
