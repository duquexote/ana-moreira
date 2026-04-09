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
            Baseada em São Paulo, realizo atendimentos 100% online para todo o Brasil. Acredito que, muitas vezes, a gente aprende a lidar com a vida se cobrando demais, se comparando, tentando dar conta de tudo, e sem perceber, acabamos nos afastando de nós mesmos.
          </p>
          <p className="text-base text-[#4A4A4A] leading-relaxed mb-5">
            Trabalho com a Terapia Cognitivo-Comportamental (TCC), te ajudando a compreender seus pensamentos, emoções e padrões,não de forma rígida, mas com mais consciência, leveza e possibilidade de mudança.
          </p>
          <p className="text-base text-[#4A4A4A] leading-relaxed">
            Atualmente, curso pós-graduação em Neuropsicologia pelo Hospital Israelita Albert Einstein, aprofundando meu olhar clínico para oferecer um cuidado cada vez mais sensível, ético e alinhado com o que você precisa.
          </p>
        </div>
      </div>
    </section>
  )
}
