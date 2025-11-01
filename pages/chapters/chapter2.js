import { episterizoData } from '../../data/episterizo'
import Accordion from '../../components/Accordion'
import Footer from '../../components/Footer'

export default function Chapter2() {
  const chapter = episterizoData[1]

  return (
    <main className="max-w-3xl mx-auto p-6 site-container">
      <h1 className="text-3xl font-bold text-amber-700 mb-2">{chapter.chapter}</h1>
      <p className="text-gray-600 mb-6">{chapter.tagline}</p>

      <section className="space-y-3">
        {chapter.questions.map((item, index) => (
          <Accordion key={index} id={`q2-${index}`} title={item.q}>
            <div className="space-y-2">
              <p className="text-gray-700">{item.a}</p>
              {item.link && <p className="text-xs text-gray-500">{item.link}</p>}
            </div>
          </Accordion>
        ))}
      </section>

        <Footer />
    </main>
  )
}
