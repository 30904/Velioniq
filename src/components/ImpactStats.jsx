import CountUp from 'react-countup'

export default function ImpactStats() {
  const stats = [
    { label: 'Docs Automated', end: 120000 },
    { label: 'Avg Processing Time (sec)', end: 8 },
    { label: 'Accuracy Achieved', end: 98, suffix: '%' },
    { label: 'Client Satisfaction', end: 95, suffix: '%' },
  ]

  return (
    <section className="bg-background py-20 text-center text-primary px-6">
      <h2 className="text-2xl font-bold mb-10">Our Impact in Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded shadow p-6">
            <div className="text-4xl font-bold text-primary mb-2">
              <CountUp end={s.end} duration={3} suffix={s.suffix || ''} separator="," />
            </div>
            <p className="text-gray-700 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
