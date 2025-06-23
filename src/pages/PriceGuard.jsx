import React from 'react'
import ComingSoonModal from '../components/ComingSoonModal'

export default function PriceGuard() {
  return (
    <main className="min-h-screen bg-background text-gray-900 px-6 py-16">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">PriceGuard AI</h1>
        <p className="text-lg text-gray-700">
          Automated Rate Compliance Monitoring for Purchase Orders
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Overview</h2>
        <p className="text-gray-800 leading-relaxed">
          PriceGuard AI continuously validates purchase order rates against master contracts, price lists, and prior orders to ensure compliance and cost control. It flags inconsistencies and provides rate deviation analytics.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Real-time rate comparison with contract data</li>
          <li>AI models to detect abnormal price hikes</li>
          <li>Deviation thresholds and exception alerts</li>
          <li>Trend analysis and rate prediction modules</li>
          <li>Integration with ERP/Purchase modules</li>
          <li>Downloadable audit reports</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Ideal Use Cases</h2>
        <p className="text-gray-800 leading-relaxed">
          PriceGuard AI is best suited for procurement teams and auditors in manufacturing and enterprise procurement environments to eliminate overpayments and enforce contract integrity.
        </p>
      </section>

      <div className="text-center mt-10">
              <ComingSoonModal buttonLabel="🚀 Try Price Guard" />
            </div>


      <footer className="text-center text-sm text-gray-500">
        © 2025 VelionIQ. All rights reserved.
      </footer>
    </main>
  )
}
