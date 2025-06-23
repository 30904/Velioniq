import React from 'react'
import ComingSoonModal from '../components/ComingSoonModal'

export default function ClaimWise() {
  return (
    <main className="min-h-screen bg-background text-gray-900 px-6 py-16">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">ClaimWise</h1>
        <p className="text-lg text-gray-700">Automated Warranty Claim Validation and Resolution Assistant</p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Overview</h2>
        <p className="text-gray-800 leading-relaxed">
          ClaimWise uses AI to validate and process warranty claims by comparing claim documents, product history, service logs, and policy coverage. It reduces turnaround time and improves accuracy in warranty decision-making.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Claim parsing from email/portal uploads</li>
          <li>AI-based eligibility check (policy, invoice, repair history)</li>
          <li>Automated decision suggestions (approve/reject)</li>
          <li>Claim dashboard with SLA tracking</li>
          <li>Integration with CRM or Warranty systems</li>
          <li>Reports for status, exceptions, and TAT analysis</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Ideal Use Cases</h2>
        <p className="text-gray-800 leading-relaxed">
          Ideal for customer support and service teams in appliance, automotive, and industrial equipment sectors, where timely and accurate warranty processing directly affects customer satisfaction.
        </p>
      </section>

      <div className="text-center mt-10">
              <ComingSoonModal buttonLabel="🚀 Try Claimwise" />
            </div>

      <footer className="text-center text-sm text-gray-500">
        © 2025 VelionIQ. All rights reserved.
      </footer>
    </main>
  )
}
