import { Link } from 'react-router-dom'
import {
  FileText,
  ShieldCheck,
  SearchCheck,
  LayoutTemplate,
  MailCheck,
  ClipboardList,
} from 'lucide-react'

const iconMap = {
  Flowgenix: FileText,
  AutoRecon: SearchCheck,
  PriceGuard: ShieldCheck,
  SmartSpec: LayoutTemplate,
  InboxIntelli: MailCheck,
  ClaimWise: ClipboardList,
}

export default function ProductTile({ title, subtitle, link }) {
  const Icon = iconMap[title.replace(/\s+/g, '')] || FileText

  return (
    <Link
      to={link}
      className="group block bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:border-primary transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-primary w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-700">{subtitle}</p>
    </Link>
  )
}
