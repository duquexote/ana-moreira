import { WHATSAPP_URL } from '../config'

const steps = [
  {
    number: '1',
    title: 'Entre em contato',
    description:
      'Me envie uma mensagem pelo WhatsApp ou preencha o formulário. Sem compromisso — só uma conversa inicial para entender o que você está passando.',
  },
  {
    number: '2',
    title: 'Primeira sessão de acolhimento',
    description:
      'Nessa sessão, você pode falar livremente. Não há certo ou errado. É o momento de nos conhecer, tirar dúvidas e sentir se faz sentido continuarmos juntas.',
  },
  {
    number: '3',
    title: 'Construção do processo terapêutico',
    description:
      'A partir do segundo encontro, trabalhamos de forma estruturada — objetivos claros, técnicas adaptadas a você e sessões semanais por videochamada, de onde você estiver no Brasil.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image — shown after text on mobile, left on desktop */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="w-full max-w-[360px] aspect-[3/4] bg-[#E0D4C8] rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/how-it-works.jpg"
              alt="Consultório Ana Moreira"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold text-[#B87333] italic mb-3">
            Como funciona
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-10">
            Começar é mais simples do que parece.
          </h2>

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4A2410] text-white text-sm font-bold flex items-center justify-center shadow-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#1a1a1a] text-lg mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
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
      </div>
    </section>
  )
}
