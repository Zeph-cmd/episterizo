export default function GeneralQuestions() {
  const sample = [
    { id: 1, q: 'What is salvation?', a: 'Salvation is...' },
    { id: 2, q: 'How to pray?', a: 'Prayer is...' }
  ]

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">General Questions</h1>
      <ul className="space-y-4">
        {sample.map((s) => (
          <li key={s.id} className="p-4 border rounded">
            <h2 className="font-semibold">{s.q}</h2>
            <p className="text-sm text-gray-700 mt-1">{s.a}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
