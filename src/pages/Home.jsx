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
      <section id="products" className="section-padding bg-gradient-to-br from-background to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-display font-bold gradient-text mb-6">
              Meet the VelionIQ Product Suite
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of AI-powered solutions designed to transform 
              your business operations and drive unprecedented efficiency.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {products.map((p, idx) => (
              <ProductTile 
                key={idx} 
                title={p.title} 
                subtitle={p.subtitle} 
                link={p.link} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-gradient-to-br from-primary-950 to-primary-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff20,transparent)]"></div>
        </div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-display font-bold mb-6">
              Why Choose VelionIQ?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Experience the difference of working with industry-leading AI solutions 
              that are built for scale and designed for success.
            </p>
          </div>
          <FeatureBadgeGroup features={benefits} />
        </div>
      </section>

      {/* Metrics */}
      <ImpactStats />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact */}
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}
