import { WHATSAPP_URL } from '../config'

export default function CTABanner() {
  return (
    <section className="bg-[#F5EFE6] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#5C2D0E] rounded-3xl p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Você não precisa resolver tudo antes de pedir ajuda.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Muitas pessoas esperam chegar ao limite para buscar apoio. Mas a
              psicoterapia funciona melhor quando você começa antes disso —
              quando ainda há energia, clareza e abertura para trabalhar.
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              Se você chegou até aqui, provavelmente já sabe que algo precisa
              mudar. Dê o primeiro passo — de onde você estiver.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-medium px-7 py-3.5 rounded-full hover:bg-white hover:text-[#5C2D0E] transition-colors text-sm"
            >
              Agendar minha primeira sessão
            </a>
          </div>

          {/* Image — hidden on mobile */}
          <div className="hidden md:block w-56 aspect-[3/4] bg-[#7A3F20] rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
            <img
              src="/images/cta.png"
              alt="Ana Moreira"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
