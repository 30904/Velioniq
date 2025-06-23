import React from 'react';
import { ClipboardCheck, Shield, AlertCircle, CheckCircle, BarChart3, Users, Calendar } from 'lucide-react';
import ComingSoonModal from '../components/ComingSoonModal';

export default function ClaimWise() {
  const features = [
    {
      icon: ClipboardCheck,
      title: 'Automated Claim Validation',
      description: 'Intelligent validation of warranty claims against purchase history and product specifications'
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Advanced AI algorithms detect suspicious patterns and potential fraudulent claims'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into claim patterns, costs, and validation performance'
    },
    {
      icon: CheckCircle,
      title: 'Automated Processing',
      description: 'Streamlined claim approval workflows with intelligent routing and notifications'
    }
  ];

  const benefits = [
    { metric: '95%', label: 'Claim Accuracy' },
    { metric: '70%', label: 'Processing Speed' },
    { metric: '40%', label: 'Cost Reduction' },
    { metric: '99%', label: 'Fraud Detection' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-red-500 rounded-3xl mb-8 shadow-elegant">
              <ClipboardCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              ClaimWise
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Intelligent Warranty Claim Validation System
            </p>
            <p className="text-lg text-secondary-500 max-w-4xl mx-auto leading-relaxed mb-12">
              ClaimWise automates warranty claim processing with AI-powered validation, fraud detection, and intelligent routing to ensure accurate and efficient claim management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ComingSoonModal buttonLabel="🚀 Try ClaimWise" />
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
              Intelligent Claim Processing
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Revolutionize your warranty claim management with AI-powered automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 card-hover animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-500 rounded-xl flex items-center justify-center">
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Transform your warranty claim process with measurable improvements
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
      <section className="section-padding bg-gradient-to-r from-rose-600 to-red-600 text-white">
        <div className="container-custom">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Revolutionize Claim Processing?
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
              Join the waitlist to be among the first to experience ClaimWise's intelligent warranty management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ComingSoonModal 
                buttonLabel="Join Early Access" 
                className="bg-white text-rose-600 hover:bg-rose-50 font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-dreamy transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              />
              <button className="border-2 border-white text-white hover:bg-white hover:text-rose-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
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
