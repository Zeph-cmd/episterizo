import { useState, useRef, useEffect } from 'react'

export default function Accordion({ title, children, id }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const [height, setHeight] = useState('0px')

  useEffect(() => {
    if (ref.current) {
      setHeight(open ? `${ref.current.scrollHeight}px` : '0px')
    }
  }, [open])

  return (
    <div className="w-full">
      <button
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between card mb-3"
      >
        <span className="text-left">
          <div className="text-md font-semibold text-gray-900">{title}</div>
        </span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        ref={ref}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-200 ease-in-out bg-white rounded-b-lg px-6"
        id={id}
      >
        <div className="py-4 text-sm text-gray-700">{children}</div>
      </div>
    </div>
  )
}
