import HeroSection from '../components/HeroSection'
import ProductTile from '../components/ProductTile'
import ContactForm from '../components/ContactForm'
import FeatureBadgeGroup from '../components/FeatureBadge'
import ImpactStats from '../components/ImpactStats'
import TestimonialsSection from '../components/TestimonialsSection'

export default function Home() {
  const products = [
    { title: 'Flowgenix', subtitle: 'Document Automation', link: '/flowgenix' },
    { title: 'AutoRecon', subtitle: 'Product Matching & Reconciliation', link: '/autorecon' },
    { title: 'PriceGuard', subtitle: 'Rate Anomaly Detection', link: '/priceguard' },
    { title: 'SmartSpec', subtitle: 'Product Specification Tracker', link: '/smartspec' },
    { title: 'InboxIntelli', subtitle: 'AI Email-to-ERP Bridge', link: '/inboxintelli' },
    { title: 'ClaimWise', subtitle: 'Warranty Claim Validation', link: '/claimwise' },
  ];

  const benefits = [
    'Reduce manual efforts',
    'Increase accuracy with AI',
    'ERP-ready integration',
    'Real-time insights and alerts',
  ];

  return (
    <>
      <HeroSection />

      {/* Product Suite */}
      <section id="products" className="container mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-bold mb-10">Meet the VelionIQ Product Suite</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {products.map((p, idx) => (
            <ProductTile key={idx} title={p.title} subtitle={p.subtitle} link={p.link} />
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-primary text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Why Choose VelionIQ?</h2>
        <FeatureBadgeGroup features={benefits} />
      </section>

      {/* Metrics */}
      <ImpactStats />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact */}
      <section id="contact" className="py-16">
        <ContactForm />
      </section>
    </>
  );
}
