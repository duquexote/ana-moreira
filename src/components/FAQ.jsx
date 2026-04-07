import { useState } from 'react'

const faqs = [
  {
    q: 'Como funcionam as sessões online?',
    a: 'As sessões acontecem por videochamada (Google Meet ou Zoom), com duração de 50 minutos. Você só precisa de um lugar tranquilo e conexão com internet de qualquer cidade do Brasil.',
  },
  {
    q: 'Com qual frequência nos encontramos?',
    a: 'O formato mais indicado é semanal o que garante consistência e avanço real no processo terapêutico.',
  },
  {
    q: 'Você atende pessoas de fora de São Paulo?',
    a: 'Sim! Atendo online pacientes de todo o Brasil. As sessões acontecem por videochamada, então a localização geográfica não é uma barreira.',
  },
  {
    q: 'A terapia online é tão eficaz quanto a presencial?',
    a: 'Sim. Estudos mostram que a psicoterapia online tem eficácia equivalente à presencial para a maioria dos casos e ainda oferece mais flexibilidade para encaixar na sua rotina.',
  },
  {
    q: 'Como sei se a terapia é pra mim?',
    a: 'Se você sente que algo não está bem mesmo que não saiba exatamente o quê isso já é motivo suficiente para começar. A terapia não é só para crises.',
  },
  {
    q: 'Você atende crianças ou casais?',
    a: 'Meu foco é atendimento individual para adultos e adolescentes. Para crianças ou casais, posso indicar profissionais de confiança.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="bg-[#F5EFE6] py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-7xl md:text-8xl font-bold text-[#1a1a1a] leading-none mb-4">
            FAQ
          </h2>
          <p className="text-sm text-[#4A4A4A]">
            Respostas para as perguntas mais frequentes
          </p>
        </div>

        {/* Accordion cards */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-[#EDE5DC] rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-start justify-between p-5 text-left gap-4"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-[#1a1a1a] text-sm leading-snug">
                  {item.q}
                </span>
                {/* X when open, + when closed */}
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[#4A4A4A] mt-0.5">
                  {open === i ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1L13 13M13 1L1 13" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1V13M1 7H13" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-64' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-[#4A4A4A] text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
