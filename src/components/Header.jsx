import { useState, useEffect } from 'react'
import { WHATSAPP_URL } from '../config'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F5EFE6]/95 backdrop-blur-sm shadow-sm' : 'bg-[#F5EFE6]'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span className="font-serif text-xl font-semibold text-[#1a1a1a] leading-tight">
            Ana Luisa Moreira
          </span>
          <span className="text-xs text-[#6B3B1F] font-medium tracking-wide">
            Psicóloga Clínica
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#1a1a1a] hover:text-[#4A2410] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4A2410] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#3D1A08] transition-colors"
          >
            Agendar sessão
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'
          }`}
      >
        <div className="bg-[#F5EFE6] border-t border-[#E8DDD3] px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1a1a1a] hover:text-[#4A2410] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4A2410] text-white text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-[#3D1A08] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Agendar sessão
          </a>
        </div>
      </div>
    </header>
  )
}
