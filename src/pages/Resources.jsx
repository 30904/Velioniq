import React from 'react'
import { Link } from 'react-router-dom'

export default function Resources() {
  const resources = [
    {
      title: 'Whitepaper: AI in Document Processing',
      desc: 'Explore how enterprises are leveraging OCR and LLMs to automate document-based workflows across industries.',
      link: '#',
    },
    {
      title: 'Case Study: Manufacturing Automation with Flowgenix',
      desc: 'Learn how a mid-sized manufacturing firm reduced manual invoice processing time by 80%.',
      link: '/resources/case-study',
    },
    {
      title: 'Video: Inside VelionIQ’s Product Suite',
      desc: 'Watch a walkthrough of all six products and their use cases in a 5-minute demo video.',
      link: '#',
    },
  ]

  return (
    <main className="min-h-screen bg-background text-gray-900 px-6 py-16">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Resources</h1>
        <p className="text-lg text-gray-700">Explore case studies, whitepapers, and demos from the VelionIQ suite.</p>
      </section>

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {resources.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition border border-gray-100"
            onClick={(e) => {
              if (item.link === '#') {
                e.preventDefault()
                alert('Coming soon!')
              }
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </Link>
        ))}
      </div>

      <footer className="text-center text-sm text-gray-500 mt-16">
        © 2025 VelionIQ. All rights reserved.
      </footer>
    </main>
  )
}
