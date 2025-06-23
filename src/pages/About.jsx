export default function About() {
  return (
    <main className="bg-background py-16 px-6 text-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">About VelionIQ</h1>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
        <p>
          VelionIQ is committed to revolutionizing enterprise workflows through a suite of AI-powered tools
          designed to automate, validate, and optimize key business processes. Our vision is to empower
          businesses with smarter, faster, and more accurate decision-making using cutting-edge technologies
          like OCR, NLP, and GenAI.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
        <p>
          VelionIQ is an innovation driven by a team of seasoned industry veterans with deep expertise in
          ERP, AI automation, and enterprise-grade technology. Backed by over two decades of hands-on
          experience, our leadership has consistently delivered intelligent software solutions to solve
          real-world manufacturing and operational challenges.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
        <ul className="list-disc pl-6">
          <li>A suite of 6 focused AI products tailored for operations, procurement, QA, and documentation teams.</li>
          <li>Deployment flexibility – SaaS, on-prem, or hybrid.</li>
          <li>Customer-centric implementation approach with rapid onboarding.</li>
        </ul>
      </section>
    </main>
  )
}
