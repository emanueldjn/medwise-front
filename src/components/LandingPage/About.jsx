import { Target, Brain, TrendingUp, Shield } from "lucide-react"

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Foco na Aprovação",
      description: "Questões elaboradas por especialistas com base nos principais concursos e residências médicas.",
    },
    {
      icon: Brain,
      title: "Aprendizado Inteligente",
      description: "Sistema adaptativo que identifica suas dificuldades e personaliza seu plano de estudos.",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento Detalhado",
      description: "Relatórios completos de desempenho com análise de evolução e áreas de melhoria.",
    },
    {
      icon: Shield,
      title: "Conteúdo Confiável",
      description: "Material atualizado constantemente por uma equipe de médicos especialistas.",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que escolher a MedWise?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Desenvolvida por médicos para médicos, nossa plataforma oferece a melhor experiência de estudo com
            tecnologia de ponta e conteúdo de qualidade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Us */}
        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Sobre Nós</h3>
              <p className="text-gray-700 mb-6 text-pretty">
                A MedWise nasceu da necessidade de democratizar o acesso a um ensino médico de qualidade. Nossa equipe é
                formada por médicos especialistas, professores e desenvolvedores apaixonados por educação.
              </p>
              <p className="text-gray-700 mb-6 text-pretty">
                Desde 2020, já ajudamos mais de 5.000 estudantes a alcançarem seus objetivos na medicina, seja na
                graduação, residência ou concursos públicos.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">2020</div>
                  <div className="text-sm text-gray-600">Fundação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">50+</div>
                  <div className="text-sm text-gray-600">Especialistas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">24/7</div>
                  <div className="text-sm text-gray-600">Suporte</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/medical-team-of-doctors-and-professors.png"
                alt="Equipe médica"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
