import React from "react";

const MeusEstudos = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => onNavigate("dashboard")}
          className="mb-6 flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar ao Dashboard
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meus Estudos
          </h1>
          <p className="text-slate-300">Acompanhe seu progresso e continue aprendendo</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Cursos Concluídos</p>
                <p className="text-3xl font-bold text-white">12</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="material-icons text-green-400">school</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Horas Estudadas</p>
                <p className="text-3xl font-bold text-white">248</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="material-icons text-blue-400">schedule</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Certificados</p>
                <p className="text-3xl font-bold text-white">8</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <span className="material-icons text-yellow-400">emoji_events</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Cursos em Andamento</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-blue-400 text-sm">code</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">React Avançado</p>
                    <p className="text-slate-400 text-sm">75% concluído</p>
                  </div>
                </div>
                <div className="w-16 h-2 bg-slate-700 rounded-full">
                  <div className="w-3/4 h-full bg-blue-400 rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-green-400 text-sm">storage</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Node.js & MongoDB</p>
                    <p className="text-slate-400 text-sm">45% concluído</p>
                  </div>
                </div>
                <div className="w-16 h-2 bg-slate-700 rounded-full">
                  <div className="w-2/5 h-full bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Próximas Aulas</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="material-icons text-purple-400 text-sm">play_circle</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Hooks Customizados</p>
                  <p className="text-slate-400 text-sm">React Avançado • 45 min</p>
                </div>
                <span className="text-slate-400 text-sm">Hoje</span>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="material-icons text-orange-400 text-sm">quiz</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">API REST com Express</p>
                  <p className="text-slate-400 text-sm">Node.js & MongoDB • 60 min</p>
                </div>
                <span className="text-slate-400 text-sm">Amanhã</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
  <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-white mb-4">Atividade Recente</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="material-icons text-green-400 text-xs">check</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">Completou a aula "Context API"</p>
                <p className="text-slate-400 text-xs">2 horas atrás</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="material-icons text-blue-400 text-xs">star</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">Obteve certificado em "JavaScript ES6+"</p>
                <p className="text-slate-400 text-xs">1 dia atrás</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="material-icons text-purple-400 text-xs">bookmark</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm">Salvou a aula "Redux Toolkit"</p>
                <p className="text-slate-400 text-xs">3 dias atrás</p>
              </div>
            </div>
          </div>
  </div>
      </div>
    </div>
  );
}

export default MeusEstudos
