"use client"

import { Check, Star } from "lucide-react"

const Plans = ({ onLoginClick }) => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 29",
      period: "/mês",
      description: "Ideal para começar seus estudos",
      features: ["1.000 questões", "5 simulados por mês", "Relatórios básicos", "Suporte por email"],
      popular: false,
    },
    {
      name: "Premium",
      price: "R$ 59",
      period: "/mês",
      description: "Mais completo para estudos intensivos",
      features: [
        "5.000 questões",
        "Simulados ilimitados",
        "Relatórios detalhados",
        "Plano de estudos personalizado",
        "Suporte prioritário",
        "Videoaulas exclusivas",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "R$ 99",
      period: "/mês",
      description: "Para quem busca a excelência",
      features: [
        "10.000+ questões",
        "Simulados ilimitados",
        "Relatórios avançados",
        "Mentoria individual",
        "Suporte 24/7",
        "Videoaulas + Lives",
        "Acesso antecipado",
      ],
      popular: false,
    },
  ]

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Escolha seu plano</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Temos o plano ideal para cada momento da sua jornada médica. Comece hoje mesmo e transforme seus estudos.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={16} fill="currentColor" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onLoginClick}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Começar Agora
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            <span className="font-semibold">Garantia de 7 dias</span> - Não ficou satisfeito? Devolvemos seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Plans
