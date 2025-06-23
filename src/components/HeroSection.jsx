import { useEffect } from 'react'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#ffffff15,transparent)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-400/10 rounded-full animate-bounce-gentle"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300/10 rounded-full animate-pulse-soft"></div>

      <div className="relative section-padding flex items-center min-h-screen">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div 
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-slide-down"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Sparkles className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium text-primary-100">
                Enterprise AI Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight animate-slide-up"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="block bg-gradient-to-r from-white via-primary-100 to-accent-200 bg-clip-text text-transparent">
                AI-Powered Tool Suite
              </span>
              <span className="block text-primary-100 mt-4">
                Built for Enterprise Excellence
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl text-primary-200 max-w-4xl mx-auto leading-relaxed mb-12 animate-slide-up"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Revolutionize your business with intelligent automation, document intelligence, 
              and operational AI built to accelerate enterprise decision-making.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <a
                href="#contact"
                className="group bg-white text-primary-900 hover:bg-primary-50 font-bold px-8 py-4 rounded-2xl shadow-elegant hover:shadow-dreamy transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
              >
                <span>Get a Demo</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a
                href="#products"
                className="group border-2 border-white/30 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm font-bold px-8 py-4 rounded-2xl transition-all duration-300 flex items-center space-x-3"
              >
                <Play className="w-5 h-5" />
                <span>Explore Suite</span>
              </a>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-primary-300 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-primary-300 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">6</div>
                <div className="text-primary-300 text-sm">AI Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-primary-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
