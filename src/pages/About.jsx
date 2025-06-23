import React from 'react';
import { 
  Target, 
  Users, 
  CheckCircle, 
  Award, 
  Globe, 
  Zap, 
  Shield, 
  ArrowRight, 
  Heart,
  Lightbulb,
  TrendingUp,
  Star
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We continuously push the boundaries of AI technology to deliver cutting-edge solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and reliability form the foundation of every solution.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'Your success is our mission. We partner with you to achieve transformational results.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Impact',
      description: 'Every solution delivers quantifiable ROI and operational improvements.',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '2M+', label: 'Documents Processed', icon: CheckCircle },
    { number: '98%', label: 'Customer Satisfaction', icon: Star },
    { number: '15+', label: 'Countries Served', icon: Globe }
  ];

  const team = [
    {
      name: 'Leadership Team',
      description: '20+ years of combined experience in enterprise software and AI',
      expertise: ['ERP Systems', 'AI/ML', 'Enterprise Architecture', 'Business Strategy']
    },
    {
      name: 'Engineering Team',
      description: 'World-class engineers building the future of AI automation',
      expertise: ['Computer Vision', 'NLP', 'Cloud Architecture', 'DevOps']
    },
    {
      name: 'Customer Success',
      description: 'Dedicated to ensuring your implementation success',
      expertise: ['Implementation', 'Training', 'Support', 'Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20 animate-slide-up">
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              About VelionIQ
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing enterprise workflows through intelligent AI automation
            </p>
            <p className="text-lg text-secondary-500 max-w-5xl mx-auto leading-relaxed">
              We're on a mission to empower businesses with smarter, faster, and more accurate decision-making using cutting-edge technologies like OCR, NLP, and GenAI.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="card p-8">
                  <div className="flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-4xl font-display font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-display font-bold text-secondary-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-xl text-secondary-600 leading-relaxed mb-6">
                VelionIQ is committed to revolutionizing enterprise workflows through a suite of AI-powered tools designed to automate, validate, and optimize key business processes.
              </p>
              <p className="text-lg text-secondary-500 leading-relaxed">
                Our vision is to empower businesses with smarter, faster, and more accurate decision-making using cutting-edge technologies like OCR, NLP, and GenAI. We envision a future where manual, repetitive tasks are eliminated, allowing human talent to focus on strategic, high-value activities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-12 animate-slide-up">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary-700">Automate 90% of document processing workflows</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary-700">Eliminate manual validation processes</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary-700">Enable real-time business intelligence</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary-700">Accelerate digital transformation at scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-3xl p-12 shadow-elegant animate-slide-up">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-secondary-900">Industry Veterans</h3>
                    <p className="text-secondary-600">20+ years combined experience</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-secondary-900">AI Innovation</h3>
                    <p className="text-secondary-600">Cutting-edge technology expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-secondary-900">Global Scale</h3>
                    <p className="text-secondary-600">Enterprise-grade solutions worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-display font-bold text-secondary-900">
                  Who We Are
                </h2>
              </div>
              <p className="text-xl text-secondary-600 leading-relaxed mb-6">
                VelionIQ is driven by a team of seasoned industry veterans with deep expertise in ERP, AI automation, and enterprise-grade technology.
              </p>
              <p className="text-lg text-secondary-500 leading-relaxed">
                Backed by over two decades of hands-on experience, our leadership has consistently delivered intelligent software solutions to solve real-world manufacturing and operational challenges. We understand the complexities of enterprise environments and build solutions that integrate seamlessly with existing workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center card-hover animate-slide-up">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored for enterprise success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card p-8 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                6 Focused AI Products
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                A suite of specialized AI products tailored for operations, procurement, QA, and documentation teams.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">Document Intelligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">Process Automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">Quality Assurance</span>
                </div>
              </div>
            </div>

            <div className="card p-8 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                Flexible Deployment
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Choose the deployment model that best fits your security and infrastructure requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">SaaS Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">On-Premise Installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">Hybrid Architecture</span>
                </div>
              </div>
            </div>

            <div className="card p-8 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                Customer-Centric Approach
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Dedicated implementation support with rapid onboarding and continuous optimization.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">Rapid Implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-secondary-700">Ongoing Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already experiencing the power of AI-driven automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-dreamy transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#products"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Our Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
