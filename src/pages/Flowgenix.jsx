import React from 'react'

export default function Flowgenix() {
  return (
    <main className="min-h-screen bg-background text-gray-900 px-6 py-16">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-primary">Flowgenix</h1>
        <p className="text-lg text-gray-700">Smart Document Automation Platform for Enterprise Workflows</p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Overview</h2>
        <p className="text-gray-800 leading-relaxed">
          Flowgenix is an intelligent document automation engine that streamlines enterprise document workflows using OCR, AI, and GenAI capabilities. It supports multi-format document extraction, smart summaries, real-time validations, and ERP-ready data exports.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>OCR-powered data extraction (PDF, scanned, image-based)</li>
          <li>Multilingual support (English, French, Spanish, etc.)</li>
          <li>AI-generated summaries & business insights</li>
          <li>Dynamic Word/PDF template generation</li>
          <li>Role-based access, audit logs, and user activity tracking</li>
          <li>ERP-integrated output formats (JSON, XML, Excel)</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Ideal Use Cases</h2>
        <p className="text-gray-800 leading-relaxed">
          Flowgenix is ideal for automating invoice processing, purchase orders, delivery challans, contract extraction, and compliance report generation in manufacturing, logistics, retail, and service-based industries.
        </p>
      </section>

      <div className="text-center mt-10">
  <a
    href="https://flowgenix.velioniq.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-primary text-white px-6 py-3 rounded shadow hover:bg-opacity-90 transition"
  >
    🚀 Try Flowgenix Now
  </a>
</div>


      <footer className="text-center text-sm text-gray-500">
        © 2025 VelionIQ. All rights reserved.
      </footer>
    </main>
  )
}
