"use client"

import { ArrowRight, BookOpen, Users, Award } from "lucide-react"

const Hero = ({ onLoginClick }) => {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Revolucione seus
              <span className="text-blue-500"> estudos médicos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              A MedWise é a plataforma completa para estudantes e profissionais da medicina. Questões atualizadas,
              simulados personalizados e acompanhamento de desempenho.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={onLoginClick}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-lg font-semibold"
              >
                Começar Agora
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold">
                Saiba Mais
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="text-blue-500" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Questões</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-blue-500" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">5k+</div>
                <div className="text-sm text-gray-600">Estudantes</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-blue-500" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Aprovação</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-blue-100 rounded-2xl p-8 lg:p-12">
              <img
                src="/medical-student-studying-with-laptop-and-books.png"
                alt="Estudante de medicina estudando"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg hidden lg:block">
              <div className="text-sm font-semibold text-gray-900">Progresso</div>
              <div className="text-2xl font-bold text-blue-500">87%</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg hidden lg:block">
              <div className="text-sm font-semibold text-gray-900">Questões</div>
              <div className="text-2xl font-bold text-green-500">245</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
