import { WHATSAPP_URL, CRP, CITY } from '../config'

const navLinks = [
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer className="bg-[#F5EFE6] text-[#1a1a1a] py-14 px-6 border-t border-[#E0D4C8]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-serif text-xl font-semibold mb-1">Ana Moreira</p>
          <p className="text-[#6B3B1F] text-sm mb-5">Psicóloga Clínica Online</p>
          <p className="text-[#4A4A4A] text-xs leading-relaxed">
            Atendimento online para todo o Brasil.
            <br />
            {CITY}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-semibold text-xs mb-4 text-[#4A4A4A] uppercase tracking-wider">
            Navegação
          </p>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#4A4A4A] text-sm hover:text-[#4A2410] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold text-xs mb-4 text-[#4A4A4A] uppercase tracking-wider">
            Contato
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4A2410] hover:bg-[#3D1A08] text-white text-sm px-5 py-3 rounded-full transition-colors mb-5"
          >
            {/* WhatsApp icon */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar pelo WhatsApp
          </a>
          <p className="text-[#4A4A4A]/60 text-xs">{CRP}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto border-t border-[#E0D4C8] mt-10 pt-6">
        <p className="text-[#4A4A4A]/50 text-xs text-center">
          © {new Date().getFullYear()} Ana Moreira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
