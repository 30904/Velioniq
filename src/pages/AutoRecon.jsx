import React from 'react';
import { SearchCheck, Target, Zap, BarChart3, CheckCircle, Users, Calendar, ExternalLink } from 'lucide-react';

export default function AutoRecon() {
  const features = [
    {
      icon: SearchCheck,
      title: 'Intelligent Product Matching',
      description: 'Advanced AI algorithms match products across different vendor catalogs with high accuracy'
    },
    {
      icon: Target,
      title: 'Smart Reconciliation',
      description: 'Automated reconciliation of purchase orders, invoices, and delivery receipts'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into matching patterns, discrepancies, and process efficiency'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Instant product matching and reconciliation with automated alerts and notifications'
    }
  ];

  const benefits = [
    { metric: '98%', label: 'Matching Accuracy' },
    { metric: '85%', label: 'Time Savings' },
    { metric: '90%', label: 'Error Reduction' },
    { metric: '24/7', label: 'Automated Processing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl mb-8 shadow-elegant">
              <SearchCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              AutoRecon
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-Powered Product Matching & Reconciliation Engine
            </p>
            <p className="text-lg text-secondary-500 max-w-4xl mx-auto leading-relaxed mb-12">
              AutoRecon leverages advanced AI to automatically match products across different vendor catalogs and reconcile purchase orders, invoices, and delivery receipts with unmatched accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="btn-primary flex items-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Launch AutoRecon</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button className="btn-secondary flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Schedule Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Intelligent Reconciliation
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Transform your procurement reconciliation process with AI-powered automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 card-hover animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-secondary-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="card p-8 animate-slide-up">
            <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-6 text-center">
              Complete Reconciliation Suite
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Multi-vendor catalog integration',
                'Automated discrepancy detection',
                'Smart exception handling',
                'ERP system synchronization',
                'Customizable matching rules',
                'Comprehensive audit trails'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Proven Performance
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Experience measurable improvements in procurement accuracy and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="card p-8">
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
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container-custom">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Automate Your Reconciliation?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Transform your procurement reconciliation process with AutoRecon's intelligent matching capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-dreamy transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
