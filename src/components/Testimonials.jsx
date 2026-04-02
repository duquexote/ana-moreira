const testimonials = [
  {
    quote:
      'Eu vivia travada pela ansiedade e achava que era assim mesmo. Com a Ana, aprendi a entender o que estava por trás disso. Hoje consigo tomar decisões sem aquele peso constante.',
    name: 'Camila',
    detail: '29 anos',
    city: 'São Paulo, SP',
  },
  {
    quote:
      'Nunca achei que conseguiria falar sobre certas coisas. A Ana criou um espaço onde me senti segura desde o primeiro dia. Minha relação comigo mesma mudou completamente.',
    name: 'Mariana',
    detail: '34 anos',
    city: 'Rio de Janeiro, RJ',
  },
  {
    quote:
      'Cheguei no limite do burnout e sem saber como sair. A terapia com a Ana me ajudou a reorganizar minha vida e entender o que realmente importa para mim.',
    name: 'Rafael',
    detail: '38 anos',
    city: 'Belo Horizonte, MG',
  },
]

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-[#B87333]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[#F5EFE6] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#B87333] italic mb-3">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-3">
            O que dizem quem já passou por aqui
          </h2>
          <p className="text-sm text-[#6B3B1F] font-medium">
            Avaliações verificadas de pacientes reais.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 flex flex-col shadow-sm"
            >
              <Stars />
              <p className="text-[#4A4A4A] text-sm leading-relaxed italic flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="border-t border-[#F0E8DF] pt-4">
                <p className="font-semibold text-[#1a1a1a] text-sm">
                  — {t.name}, {t.detail}
                </p>
                <p className="text-xs text-[#6B3B1F] mt-0.5">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
