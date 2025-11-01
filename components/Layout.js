import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-600">
          © Episterizo — scaffold
        </div>
      </footer>
    </div>
  )
}
