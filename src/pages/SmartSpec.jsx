import React from 'react';
import { LayoutTemplate, GitBranch, Eye, CheckCircle, FileText, Users, Calendar, Clock } from 'lucide-react';
import ComingSoonModal from '../components/ComingSoonModal';

export default function SmartSpec() {
  const features = [
    {
      icon: LayoutTemplate,
      title: 'Centralized Specification Management',
      description: 'Manage BOMs, technical drawings, tolerances, and revision history in one unified platform'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Advanced versioning system with change request tracking and approval workflows'
    },
    {
      icon: Eye,
      title: 'Side-by-Side Comparison',
      description: 'Compare different versions of specifications with detailed change highlighting'
    },
    {
      icon: CheckCircle,
      title: 'Smart Validation',
      description: 'Intelligent alerts for outdated specifications in purchase orders or production jobs'
    }
  ];

  const benefits = [
    { metric: '100%', label: 'Specification Accuracy' },
    { metric: '80%', label: 'Time Savings' },
    { metric: '0', label: 'Version Conflicts' },
    { metric: '24/7', label: 'Access Control' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-8 shadow-elegant">
              <LayoutTemplate className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              SmartSpec
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Centralized Product Specification and BOM Intelligence Tracker
            </p>
            <p className="text-lg text-secondary-500 max-w-4xl mx-auto leading-relaxed mb-12">
              SmartSpec is a smart product specification tracker that centralizes BOM, technical drawings, tolerances, and revision history in one place. It ensures everyone in the organization is aligned on the latest specs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ComingSoonModal buttonLabel="🚀 Try SmartSpec" />
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
              Intelligent Specification Management
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Keep your entire organization aligned with the latest product specifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 card-hover animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
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
              Complete Specification Suite
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Role-based edit/view access controls',
                'Export to Excel/PDF with document attachments',
                'Automated change notifications',
                'Integration with ERP and PLM systems',
                'Mobile access for field teams',
                'Audit trail for compliance tracking'
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
              Proven Excellence
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Perfect for Engineering, Design, and QA departments in manufacturing environments
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
      <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container-custom">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Centralize Your Specifications?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join the waitlist to be among the first to experience SmartSpec's powerful specification management capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ComingSoonModal 
                buttonLabel="Join Early Access" 
                className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-dreamy transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              />
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
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
