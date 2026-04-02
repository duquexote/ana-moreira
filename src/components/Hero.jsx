import { WHATSAPP_URL } from '../config'

export default function Hero() {
  return (
    <section className="bg-[#F5EFE6] pt-32 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-sm text-[#6B3B1F] font-medium mb-5 tracking-wide">
            Ana Moreira • Psicóloga Clínica Online em São Paulo
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1a1a1a] leading-tight mb-6">
            Um espaço seguro para entender o que você sente — e transformar a
            forma como você vive.
          </h1>
          <p className="text-base text-[#4A4A4A] leading-relaxed mb-8 max-w-md">
            Psicoterapia online individual com atendimento para São Paulo e todo
            o Brasil. Trabalho com TCC e ACT — abordagens baseadas em evidências
            — para que você avance de verdade, sem julgamentos.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4A2410] text-white font-medium px-7 py-4 rounded-full hover:bg-[#3D1A08] transition-colors text-sm"
          >
            Agendar minha primeira sessão
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[360px] aspect-[3/4] bg-[#E0D4C8] rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/hero.jpg"
              alt="Ana Moreira, psicóloga clínica"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
