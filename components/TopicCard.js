import Link from 'next/link'

export default function TopicCard({ title, summary, href = '#' }) {
  return (
    <Link
      href={href}
      className="card block transform hover:-translate-y-1 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="card-title">{title}</h3>
          <p className="card-desc">{summary}</p>
        </div>
        <div className="ml-4 flex-shrink-0">
          <span className="inline-block bg-gold-50 text-gold-700 px-3 py-1 rounded-full text-xs font-medium">Topic</span>
        </div>
      </div>
    </Link>
  )
}
