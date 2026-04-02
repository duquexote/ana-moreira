import { WHATSAPP_URL } from '../config'

const IconTCC = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="22" r="13" stroke="#4A2410" strokeWidth="2" fill="none" />
    <circle cx="20" cy="18" r="3" stroke="#4A2410" strokeWidth="1.5" fill="none" />
    <circle cx="32" cy="18" r="3" stroke="#4A2410" strokeWidth="1.5" fill="none" />
    <path d="M21 26 Q26 30 31 26" stroke="#4A2410" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M26 9 L26 5" stroke="#4A2410" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 11 L15 8" stroke="#4A2410" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M34 11 L37 8" stroke="#4A2410" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 35 Q13 40 26 42 Q39 40 39 35" stroke="#4A2410" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
)

const IconACT = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26 8 C17 8 11 15 11 24 C11 30 15 35 20 37 L20 44 L32 44 L32 37 C37 35 41 30 41 24 C41 15 35 8 26 8 Z"
      stroke="#4A2410"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M19 22 Q22 18 26 22 Q30 26 33 22"
      stroke="#4A2410"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="20" y1="44" x2="32" y2="44" stroke="#4A2410" strokeWidth="2" strokeLinecap="round" />
    <line x1="23" y1="44" x2="23" y2="40" stroke="#4A2410" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="29" y1="44" x2="29" y2="40" stroke="#4A2410" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const methods = [
  {
    Icon: IconTCC,
    title: 'Terapia Cognitivo-Comportamental (TCC)',
    description:
      'A TCC trabalha a conexão entre o que você pensa, o que você sente e como você age. Juntas, identificamos os padrões que geram sofrimento e desenvolvemos novas formas de responder à vida.',
  },
  {
    Icon: IconACT,
    title: 'Terapia de Aceitação e Compromisso (ACT)',
    description:
      'A ACT te ensina a se relacionar de outra forma com pensamentos e emoções difíceis — sem lutar contra eles, mas agindo de acordo com o que realmente importa pra você.',
  },
]

export default function Methods() {
  return (
    <section id="abordagem" className="bg-[#F5EFE6] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#B87333] italic mb-3">
            Abordagem e método
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-4 max-w-2xl mx-auto">
            Técnicas que funcionam. Aplicadas com cuidado. Personalizadas para
            você.
          </h2>
          <p className="text-base text-[#4A4A4A] max-w-xl mx-auto">
            Trabalho com duas abordagens reconhecidas pela ciência. Cada uma é
            escolhida e adaptada de acordo com o que você precisa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {methods.map(({ Icon, title, description }) => (
            <div key={title} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-5">
                <Icon />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-3">
                {title}
              </h3>
              <p className="text-base text-[#4A4A4A] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4A2410] text-white font-medium px-7 py-4 rounded-full hover:bg-[#3D1A08] transition-colors text-sm"
          >
            Agendar minha primeira sessão
          </a>
        </div>
      </div>
    </section>
  )
}
