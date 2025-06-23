import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, 
  Video, 
  BookOpen, 
  Download, 
  Calendar, 
  Clock, 
  ExternalLink,
  PlayCircle,
  FileBarChart,
  Users,
  ArrowRight
} from 'lucide-react'

export default function Resources() {
  const resources = [
    {
      type: 'whitepaper',
      icon: FileText,
      title: 'AI in Document Processing',
      description: 'Explore how enterprises are leveraging OCR and LLMs to automate document-based workflows across industries.',
      link: '#',
      duration: '15 min read',
      category: 'Research',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      type: 'case-study',
      icon: FileBarChart,
      title: 'Manufacturing Automation with Flowgenix',
      description: 'Learn how a mid-sized manufacturing firm reduced manual invoice processing time by 80%.',
      link: '/resources/case-study',
      duration: '12 min read',
      category: 'Case Study',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      type: 'video',
      icon: PlayCircle,
      title: 'Inside VelionIQ\'s Product Suite',
      description: 'Watch a walkthrough of all six products and their use cases in a 5-minute demo video.',
      link: '#',
      duration: '5 min watch',
      category: 'Video Demo',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      type: 'guide',
      icon: BookOpen,
      title: 'Implementation Best Practices',
      description: 'Complete guide to implementing AI-powered automation in enterprise environments.',
      link: '#',
      duration: '20 min read',
      category: 'Implementation Guide',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      type: 'report',
      icon: FileBarChart,
      title: 'Industry Automation Trends 2025',
      description: 'Annual report on emerging trends in enterprise automation and AI adoption rates.',
      link: '#',
      duration: '25 min read',
      category: 'Industry Report',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      type: 'webinar',
      icon: Users,
      title: 'Live Q&A: AI Implementation Strategies',
      description: 'Join our experts for a live discussion on successful AI implementation strategies.',
      link: '#',
      duration: '45 min session',
      category: 'Webinar',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ]

  const categories = [
    { name: 'All Resources', count: resources.length, active: true },
    { name: 'Whitepapers', count: 2, active: false },
    { name: 'Case Studies', count: 1, active: false },
    { name: 'Videos', count: 1, active: false },
    { name: 'Guides', count: 2, active: false }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-6xl font-display font-bold gradient-text mb-6">
              Resources
            </h1>
            <p className="text-2xl text-secondary-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore case studies, whitepapers, and demos from the VelionIQ suite
            </p>
            <p className="text-lg text-secondary-500 max-w-5xl mx-auto leading-relaxed">
              Access our comprehensive library of resources to accelerate your AI transformation journey and learn from real-world implementations.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-primary-600 text-white shadow-elegant'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="group card p-8 card-hover animate-slide-up block"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={(e) => {
                  if (resource.link === '#') {
                    e.preventDefault()
                    alert('Coming soon!')
                  }
                }}
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {resource.category}
                      </span>
                      <ExternalLink className="w-4 h-4 text-secondary-400 group-hover:text-primary-600 transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {resource.title}
                </h3>
                
                <p className="text-secondary-600 leading-relaxed mb-6">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-secondary-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{resource.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-600 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sm font-medium">Access Resource</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl font-display font-bold mb-6">
              Stay Updated with Latest Resources
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get notified when we publish new case studies, whitepapers, and insights from the AI automation industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-secondary-900 placeholder-secondary-500 focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-dreamy transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="section-padding bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
              Quick Access
            </h2>
            <p className="text-xl text-secondary-600">
              Jump straight to what you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center card-hover animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                Download Center
              </h3>
              <p className="text-secondary-600 mb-6">
                Access all downloadable resources in one place
              </p>
              <button className="btn-secondary">
                Browse Downloads
              </button>
            </div>

            <div className="card p-8 text-center card-hover animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                Upcoming Events
              </h3>
              <p className="text-secondary-600 mb-6">
                Register for webinars and virtual events
              </p>
              <button className="btn-secondary">
                View Events
              </button>
            </div>

            <div className="card p-8 text-center card-hover animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                Community Forum
              </h3>
              <p className="text-secondary-600 mb-6">
                Connect with other VelionIQ users and experts
              </p>
              <button className="btn-secondary">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
