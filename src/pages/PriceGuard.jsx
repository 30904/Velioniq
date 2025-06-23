import React from 'react';
import { Shield, AlertTriangle, TrendingUp, Eye, CheckCircle, BarChart3, Users, Calendar, ArrowRight } from 'lucide-react';
import ComingSoonModal from '../components/ComingSoonModal';

export default function PriceGuard() {
  const features = [
    {
      icon: Shield,
      title: 'Real-Time Rate Validation',
      description: 'Continuously compare purchase order rates against master contracts and price lists with instant alerts'
    },
    {
      icon: AlertTriangle,
      title: 'Anomaly Detection',
      description: 'Advanced AI models identify abnormal price hikes and suspicious rate patterns automatically'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Comprehensive rate prediction modules and market trend analysis for strategic procurement'
    },
    {
      icon: BarChart3,
      title: 'Audit Reports',
      description: 'Generate detailed compliance reports and deviation analytics for stakeholder review'
    }
  ];

  const useCases = [
    {
      title: 'Contract Compliance',
      description: 'Ensure all purchases comply with negotiated contract rates',
      icon: '📋'
    },
    {
      title: 'Cost Control',
      description: 'Prevent overpayments and optimize procurement spend',
      icon: '💰'
    },
    {
      title: 'Audit Trail',
      description: 'Maintain comprehensive records for compliance audits',
      icon: '🔍'
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate procurement risks proactively',
      icon: '⚠️'
    }
  ];

  const benefits = [
    { metric: '95%', label: 'Rate Accuracy' },
    { metric: '30%', label: 'Cost Savings' },
    { metric: '24/7', label: 'Monitoring' },
    { metric: '100%', label: 'Compliance Rate' }
  ];

  const alertTypes = [
    { name: 'Price Deviation', severity: 'high', color: 'from-red-500 to-red-600' },
    { name: 'Contract Mismatch', severity: 'medium', color: 'from-amber-500 to-orange-500' },
    { name: 'Market Anomaly', severity: 'high', color: 'from-red-500 to-red-600' },
    { name: 'Volume Variance', severity: 'low', color: 'from-blue-500 to-blue-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl mb-8 shadow-elegant">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              PriceGuard AI
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automated Rate Compliance Monitoring for Purchase Orders
            </p>
            <p className="text-lg text-secondary-500 max-w-4xl mx-auto leading-relaxed mb-12">
              PriceGuard AI continuously validates purchase order rates against master contracts, price lists, and prior orders to ensure compliance and cost control. It flags inconsistencies and provides rate deviation analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ComingSoonModal buttonLabel="🚀 Try PriceGuard AI" />
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
              Intelligent Rate Protection
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Advanced AI-powered monitoring system that protects your procurement investments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 card-hover animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
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

          {/* Additional Features List */}
          <div className="card p-8 animate-slide-up">
            <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-6 text-center">
              Complete Compliance Suite
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Deviation thresholds and exception alerts',
                'Integration with ERP/Purchase modules',
                'Automated vendor performance tracking',
                'Market rate benchmarking',
                'Historical price trend analysis',
                'Custom approval workflows'
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

      {/* Alert Types Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Smart Alert System
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Get notified instantly when price anomalies or compliance issues are detected
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {alertTypes.map((alert, index) => (
              <div key={index} className="card p-6 text-center card-hover animate-slide-up">
                <div className={`w-12 h-12 bg-gradient-to-br ${alert.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-secondary-900 mb-2">
                  {alert.name}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                  alert.severity === 'medium' ? 'bg-amber-100 text-amber-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {alert.severity.toUpperCase()} PRIORITY
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Perfect for Procurement Teams
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Ideal for manufacturing and enterprise procurement environments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="card p-6 text-center card-hover animate-slide-up">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-display font-semibold text-secondary-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits/Stats Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Proven Protection
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Eliminate overpayments and enforce contract integrity with measurable results
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

      {/* Coming Soon CTA Section */}
      <section className="section-padding bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container-custom">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Protect Your Procurement?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Join the waitlist to be among the first to experience PriceGuard AI's powerful rate monitoring capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ComingSoonModal 
                buttonLabel="Join Early Access" 
                className="bg-white text-amber-600 hover:bg-amber-50 font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-dreamy transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              />
              <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book Preview</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
