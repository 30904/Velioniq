import { Link } from 'react-router-dom'
import {
  FileText,
  ShieldCheck,
  SearchCheck,
  LayoutTemplate,
  MailCheck,
  ClipboardList,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const iconMap = {
  Flowgenix: FileText,
  AutoRecon: SearchCheck,
  PriceGuard: ShieldCheck,
  SmartSpec: LayoutTemplate,
  InboxIntelli: MailCheck,
  ClaimWise: ClipboardList,
}

const gradientMap = {
  Flowgenix: 'from-blue-500 to-cyan-500',
  AutoRecon: 'from-emerald-500 to-teal-500',
  PriceGuard: 'from-amber-500 to-orange-500',
  SmartSpec: 'from-purple-500 to-pink-500',
  InboxIntelli: 'from-indigo-500 to-blue-500',
  ClaimWise: 'from-rose-500 to-red-500',
}

export default function ProductTile({ title, subtitle, link }) {
  const Icon = iconMap[title.replace(/\s+/g, '')] || FileText
  const gradient = gradientMap[title.replace(/\s+/g, '')] || 'from-primary-500 to-primary-600'

  return (
    <Link
      to={link}
      className="group block card card-hover p-8 relative overflow-hidden animate-slide-up"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating Icon Background */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Sparkles className="w-8 h-8 text-primary-400" />
      </div>

      <div className="relative">
        {/* Icon Container */}
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} shadow-elegant mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-display font-bold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300 mb-2">
              {title}
            </h3>
            <p className="text-secondary-600 leading-relaxed text-lg">
              {subtitle}
            </p>
          </div>

          {/* Action Arrow */}
          <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300">
            <span className="text-sm">Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-500 ease-out"></div>
    </Link>
  )
}
