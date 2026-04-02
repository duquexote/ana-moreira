export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-[360px] aspect-[3/4] bg-[#E0D4C8] rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/about.jpg"
              alt="Ana Moreira"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-sm font-semibold text-[#B87333] italic mb-3 tracking-wide">
            Sobre mim
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-6">
            Olá, sou Ana,<br />psicóloga clínica
          </h2>
          <p className="text-base text-[#4A4A4A] leading-relaxed mb-5">
            Baseada em São Paulo, com atendimento 100% online para pessoas em
            todo o Brasil. Acredito que cada pessoa carrega uma história única —
            e que o papel da terapia é criar um espaço de acolhimento genuíno
            para que você possa se entender melhor e construir a vida que quer
            viver.
          </p>
          <p className="text-base text-[#4A4A4A] leading-relaxed">
            Sou especialista em Terapia Cognitivo-Comportamental (TCC) e Terapia
            de Aceitação e Compromisso (ACT) — duas das abordagens com maior
            comprovação científica na psicologia atual. Atualmente curso
            pós-graduação em Neuropsicologia pelo Hospital Israelita Albert
            Einstein, aprofundando ainda mais minha prática clínica.
          </p>
        </div>
      </div>
    </section>
  )
}
