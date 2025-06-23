import React from 'react'

export default function InboxIntelli() {
  return (
    <main className="min-h-screen bg-background text-gray-900 px-6 py-16">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">InboxIntelli</h1>
        <p className="text-lg text-gray-700">
          AI-Powered Email Parsing & ERP Bridge for Transactional Automation
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Overview</h2>
        <p className="text-gray-800 leading-relaxed">
          InboxIntelli automates the interpretation of email communications and attachments to extract actionable data, transform it into structured formats, and directly feed it into ERP systems like Tally, SAP, and IDMS.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Email-to-data parsing using NLP & LLMs</li>
          <li>Attachment handling: invoices, orders, COAs, reports</li>
          <li>Role-based inbox connection & mapping</li>
          <li>Prebuilt and custom prompt templates</li>
          <li>Real-time ERP push & alerting</li>
          <li>Email log, status tracker, and audit trail</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Ideal Use Cases</h2>
        <p className="text-gray-800 leading-relaxed">
          InboxIntelli is suited for finance, sales, and admin teams who deal with vendor/customer emails for document-based workflows, reducing manual copy-paste effort and enhancing transaction speed.
        </p>
      </section>

      <div className="text-center mt-10">
  <a
    href="https://intellibox.idms-qa.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-primary text-white px-6 py-3 rounded shadow hover:bg-opacity-90 transition"
  >
    🚀 Launch InboxIntelli
  </a>
</div>


      <footer className="text-center text-sm text-gray-500">
        © 2025 VelionIQ. All rights reserved.
      </footer>
    </main>
  )
}
