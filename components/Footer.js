export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 pt-8 pb-10 text-center">
      <h2 className="text-2xl font-semibold text-amber-700 mb-3">Get the Book & Learn More</h2>

      <p className="text-gray-700 max-w-xl mx-auto mb-6">
        Strengthen your foundation in Christ with <strong>Episterizo</strong> by Pastor Dr. Obed Obeng-Addae — a powerful exposition of the believer’s faith and walk in the Word.
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

      <p className="text-sm text-gray-500 mt-6">All rights reserved © Pastor Dr. Obed Obeng-Addae</p>
    </footer>
  )
}
