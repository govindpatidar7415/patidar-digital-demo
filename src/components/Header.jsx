import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { company } from '../data/siteData'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Work', '#work'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${company.name} home`}>
        <span className="brand-mark">P.</span>
        <span>{company.name}</span>
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={16} /></a>
      </nav>
    </header>
  )
}
