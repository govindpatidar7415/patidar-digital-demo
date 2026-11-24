import { ArrowUpRight } from 'lucide-react'
import { company } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand footer-brand" href="#home"><span className="brand-mark">P.</span><span>{company.name}</span></a>
        <p>{company.tagline}</p>
      </div>
      <div className="footer-right">
        <a href="#home">Back to top <ArrowUpRight size={15} /></a>
        <span>© {new Date().getFullYear()} {company.name}. Demo project.</span>
      </div>
    </footer>
  )
}
