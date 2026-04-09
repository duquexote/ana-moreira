import { Brain, Compass } from 'lucide-react'
import { WHATSAPP_URL } from '../config'

const methods = [
  {
    Icon: Brain,
    title: 'Terapia Cognitivo-Comportamental (TCC)',
    description:
      'A TCC trabalha a conexão entre o que você pensa, o que você sente e como você age. Juntas, identificamos os padrões que geram sofrimento e desenvolvemos novas formas de responder à vida.',
  },
  {
    Icon: Compass,
    title: 'Como a TCC funciona na prática',
    description:
      'A partir de técnicas estruturadas, trabalhamos juntas para identificar pensamentos automáticos negativos, questionar crenças limitantes e desenvolver respostas mais saudáveis às situações do dia a dia.',
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
            Técnicas que funcionam. Aplicadas com cuidado. Personalizadas para você.
          </h2>
          <p className="text-base text-[#4A4A4A] max-w-xl mx-auto">
            Trabalho com a TCC, abordagem reconhecida pela ciência. Cada processo é pensado e adaptado de acordo com o que você precisa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {methods.map(({ Icon, title, description }) => (
            <div key={title} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-6 w-14 h-14 bg-[#F5EFE6] rounded-xl flex items-center justify-center">
                <Icon size={28} strokeWidth={1.5} color="#4A2410" />
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
