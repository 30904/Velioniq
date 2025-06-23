import React from 'react';
import { Factory, ShoppingCart, Car, Truck, Building2, Briefcase, CheckCircle, TrendingUp } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Automate procurement, quality control, and warranty claim validations with AI-driven tools.',
      features: ['Quality Control Automation', 'Procurement Optimization', 'Warranty Management', 'Compliance Tracking'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & Distribution',
      description: 'Streamline vendor communication and automate invoice reconciliation at scale.',
      features: ['Invoice Reconciliation', 'Vendor Management', 'Inventory Tracking', 'Order Processing'],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Manage component traceability, jobwork tracking, and product spec management with ease.',
      features: ['Component Traceability', 'Jobwork Tracking', 'Spec Management', 'Quality Assurance'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Digitize delivery challans, proof of delivery, and automate claim processing using AI.',
      features: ['Delivery Tracking', 'Document Digitization', 'Claim Processing', 'Route Optimization'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Building2,
      title: 'Healthcare',
      description: 'Manage medical device specifications, compliance documentation, and warranty claims.',
      features: ['Medical Device Management', 'Compliance Documentation', 'Warranty Processing', 'Audit Trails'],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Streamline contract management, document processing, and client communication workflows.',
      features: ['Contract Management', 'Document Processing', 'Client Communication', 'Project Tracking'],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const benefits = [
    { metric: '90%', label: 'Process Efficiency Increase' },
    { metric: '75%', label: 'Cost Reduction' },
    { metric: '99%', label: 'Accuracy Rate' },
    { metric: '24/7', label: 'Operational Availability' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              Industries We Serve
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforming operations across diverse industries with AI-powered automation solutions
            </p>
            <p className="text-lg text-secondary-500 max-w-5xl mx-auto leading-relaxed">
              From manufacturing giants to agile startups, our suite of AI tools adapts to your industry's unique challenges and accelerates your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="card p-8 card-hover animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                      {industry.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <div className="space-y-3">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-secondary-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Cross-Industry Impact
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Delivering measurable results across all industries we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="card p-8">
                  <div className="flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-4xl font-display font-bold gradient-text mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-secondary-600 font-medium">
                    {benefit.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already revolutionizing their operations with VelionIQ's AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-dreamy transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Industry-Specific Demo</span>
              </a>
              <a
                href="#products"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
