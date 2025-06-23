import React from 'react'
import ComingSoonModal from '../components/ComingSoonModal'

export default function SmartSpec() {
  return (
    <main className="min-h-screen bg-background text-gray-900 px-6 py-16">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">SmartSpec</h1>
        <p className="text-lg text-gray-700">Centralized Product Specification and BOM Intelligence Tracker</p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Overview</h2>
        <p className="text-gray-800 leading-relaxed">
          SmartSpec is a smart product specification tracker that centralizes BOM, technical drawings, tolerances, and revision history in one place. It ensures everyone in the organization is aligned on the latest specs.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Manage specs, drawings, BOMs, and revision control</li>
          <li>Versioning and change request tracking</li>
          <li>Role-based edit/view access</li>
          <li>Side-by-side comparison of versions</li>
          <li>Smart alerts for outdated specs in POs or Jobs</li>
          <li>Export to Excel/PDF, attach documents</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Ideal Use Cases</h2>
        <p className="text-gray-800 leading-relaxed">
          Used by Engineering, Design, and QA departments for centralized and controlled management of product specifications across lifecycle stages in manufacturing and industrial settings.
        </p>
      </section>

      <div className="text-center mt-10">
              <ComingSoonModal buttonLabel="🚀 Try SmartSpec" />
            </div>


      <footer className="text-center text-sm text-gray-500">
        © 2025 VelionIQ. All rights reserved.
      </footer>
    </main>
  )
}
