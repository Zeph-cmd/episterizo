export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 pt-8 pb-10 text-center">
      <h2 className="text-2xl font-semibold text-amber-700 mb-3">
        📘 Download the Book
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Deepen your understanding of the believer’s life with the full *Episterizo* book by Pastor Dr. Obed Obeng-Addae.  
        The book offers complete, scriptural insight into every question explored on this site.
      </p>
      <a
        href="/Episterizo.pdf"
        download
        className="inline-block bg-amber-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-amber-700 transition"
      >
        Download Episterizo (PDF)
      </a>
      <p className="text-sm text-gray-500 mt-6">
        All rights reserved © Pastor Dr. Obed Obeng-Addae
      </p>
    </footer>
  )
}
