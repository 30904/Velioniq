import React from 'react'
import ComingSoonModal from '../components/ComingSoonModal'

export default function AutoRecon() {
  return (
    <main className="min-h-screen bg-background text-gray-900 px-6 py-16">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">AutoRecon</h1>
        <p className="text-lg text-gray-700">AI-Powered Product Matching and Reconciliation Engine</p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Overview</h2>
        <p className="text-gray-800 leading-relaxed">
          AutoRecon automates the matching of product data between multiple documents such as Purchase Orders, Invoices, GRNs, and Inventory Logs. It helps detect mismatches, duplicates, and anomalies using AI/ML algorithms.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>AI-powered multi-document matching (PO vs Invoice vs GRN)</li>
          <li>Real-time reconciliation engine</li>
          <li>Detects mismatches, missing lines, overbilling</li>
          <li>Support for custom matching rules and thresholds</li>
          <li>Exception reporting with visual indicators</li>
          <li>Export matched/unmatched results to Excel/JSON</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Ideal Use Cases</h2>
        <p className="text-gray-800 leading-relaxed">
          Ideal for procurement, finance, and compliance teams managing high-volume transactions across procurement and payment cycles in manufacturing, retail, and distribution sectors.
        </p>
      </section>
      <div className="text-center mt-10">
        <ComingSoonModal buttonLabel="🚀 Try AutoRecon" />
      </div>
      {/* <div className="text-center mt-10">
  <span className="inline-block bg-gray-300 text-gray-600 px-6 py-3 rounded shadow cursor-not-allowed">
    🚧 Coming Soon
  </span>
</div> */}




      <footer className="text-center text-sm text-gray-500">
        © 2025 VelionIQ. All rights reserved.
      </footer>
    </main>
  )
}
