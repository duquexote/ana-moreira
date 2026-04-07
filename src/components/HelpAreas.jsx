import { Wind, CloudRain, Sparkles, Users, Flame, Clock } from 'lucide-react'
import { WHATSAPP_URL } from '../config'

const topicsLeft = [
  {
    Icon: Wind,
    title: 'Ansiedade',
    description:
      'Quando a preocupação não para e seu corpo vive em alerta mesmo sem um motivo aparente. Atendo online para São Paulo e todo o Brasil.',
  },
  {
    Icon: CloudRain,
    title: 'Depressão',
    description:
      'Aquela sensação de peso, vazio ou de que nada vai mudar. Não é fraqueza, é algo que tem tratamento com apoio especializado.',
  },
  {
    Icon: Sparkles,
    title: 'Autoconhecimento',
    description:
      'Para quem quer entender melhor a si mesmo, seus padrões e o que realmente importa na sua vida.',
  },
]

const topicsRight = [
  {
    Icon: Users,
    title: 'Relacionamentos',
    description:
      'Dificuldades com vínculos, comunicação, limites ou a sensação de se perder nas relações.',
  },
  {
    Icon: Flame,
    title: 'Burnout e Trabalho',
    description:
      'Esgotamento, falta de motivação ou sensação de que o trabalho tomou conta de tudo. Sessões online que se encaixam na sua rotina.',
  },
  {
    Icon: Clock,
    title: 'Procrastinação',
    description:
      'Quando você sabe o que precisa fazer, mas algo por dentro te impede de começar.',
  },
]

const TopicCard = ({ title, description, Icon }) => (
  <div className="bg-[#EDE5DC] rounded-xl p-5 flex gap-4 items-start">
    <div className="flex-shrink-0 w-10 h-10 bg-white/60 rounded-lg flex items-center justify-center mt-0.5">
      <Icon size={20} strokeWidth={1.6} color="#4A2410" />
    </div>
    <div>
      <h3 className="font-serif font-bold text-[#1a1a1a] mb-1.5 text-base">{title}</h3>
      <p className="text-sm text-[#4A4A4A] leading-relaxed">{description}</p>
    </div>
  </div>
)

export default function HelpAreas() {
  return (
    <section className="bg-[#F5EFE6] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#B87333] italic mb-3">
            Posso te ajudar com
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight max-w-2xl mx-auto">
            Você não precisa estar em crise para começar. Só precisa querer algo diferente.
          </h2>
        </div>

        {/* Desktop: cards | imagem | cards */}
        <div className="hidden md:grid grid-cols-[1fr_220px_1fr] gap-5 items-stretch mb-12">
          {/* Left */}
          <div className="flex flex-col gap-4">
            {topicsLeft.map((t) => (
              <TopicCard key={t.title} {...t} />
            ))}
          </div>

          {/* Center image — estica para a altura total dos cards ao lado */}
          <div className="bg-[#D4C4B8] rounded-2xl overflow-hidden shadow-sm h-full">
            <img
              src="/images/helpareas.jpg"
              alt="Ana Moreira"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {topicsRight.map((t) => (
              <TopicCard key={t.title} {...t} />
            ))}
          </div>
        </div>

        {/* Mobile: coluna única */}
        <div className="md:hidden grid grid-cols-1 gap-4 mb-12">
          {[...topicsLeft, ...topicsRight].map((t) => (
            <TopicCard key={t.title} {...t} />
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
