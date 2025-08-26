"use client"
import { Bar, Pie } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js"

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend)

const Dashboard = ({ onNavigate }) => {
  let nomeUsuario = ""
  let emailUsuario = ""
  try {
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    nomeUsuario = user?.nome_completo || user?.nome || ""
    emailUsuario = user?.email || ""
  } catch {
    // Se não houver usuário no localStorage, nomeUsuario permanece vazio
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Modern Sidebar with glassmorphism */}
      <aside className="w-80 backdrop-blur-xl bg-white/5 border-r border-white/10 flex flex-col shadow-2xl relative z-10">
        {/* Enhanced header with modern gradient */}
        <div className="bg-gradient-to-br from-purple-600/80 via-cyan-600/80 to-pink-600/80 backdrop-blur-sm px-6 py-8 border-b border-white/10">
          <div className="flex flex-col items-center text-center">
            {/* Ultra-modern avatar */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white shadow-2xl ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300">
                {nomeUsuario ? nomeUsuario[0].toUpperCase() : <span className="opacity-70">?</span>}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl border-2 border-white/30 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{nomeUsuario || "Usuário"}</h3>
            <p className="text-white/70 text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">{emailUsuario}</p>
          </div>
        </div>

        {/* Ultra-modern navigation */}
        <nav className="flex-1 px-6 py-8">
          <div className="space-y-3">
            <button
              onClick={() => onNavigate("dashboard")}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm border border-white/5 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                <svg
                  className="w-6 h-6 text-purple-400 group-hover:text-purple-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <div className="flex-1 relative z-10 text-left">
                <span className="font-semibold text-lg">Dashboard</span>
                <p className="text-sm text-white/60 group-hover:text-white/80">Visão geral completa</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            </button>

            <button
              onClick={() => onNavigate("meus-estudos")}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm border border-white/5 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                <svg
                  className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex-1 relative z-10 text-left">
                <span className="font-semibold text-lg">Meus Estudos</span>
                <p className="text-sm text-white/60 group-hover:text-white/80">Progresso acadêmico</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            </button>

            <button
              onClick={() => onNavigate("configuracoes")}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm border border-white/5 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 group-hover:from-orange-500/30 group-hover:to-pink-500/30 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                <svg
                  className="w-6 h-6 text-orange-400 group-hover:text-orange-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 relative z-10 text-left">
                <span className="font-semibold text-lg">Configurações</span>
                <p className="text-sm text-white/60 group-hover:text-white/80">Preferências do sistema</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            </button>
          </div>

          {/* Ultra-modern stats section */}
          <div className="mt-10 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
              Estatísticas
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                <span className="text-white/80 font-medium">Estudos Concluídos</span>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  12
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                <span className="text-white/80 font-medium">Horas de Estudo</span>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  48h
                </span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-white/70 mb-2">
                  <span>Progresso Geral</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 backdrop-blur-sm">
                  <div
                    className="bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 h-3 rounded-full shadow-lg animate-pulse"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Ultra-modern logout button */}
        <div className="p-6 border-t border-white/10">
          <button
            onClick={() => {
              localStorage.removeItem("user")
              window.location.reload()
            }}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 hover:from-red-500/30 hover:to-pink-500/30 hover:text-red-200 transition-all duration-300 group border border-red-500/20 hover:border-red-400/40 backdrop-blur-sm"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="font-semibold">Sair da Conta</span>
          </button>
        </div>
      </aside>

      {/* Ultra-modern main content */}
      <main className="flex-1 p-8 md:p-12 relative z-10">
        {/* Modern welcome section */}
        <div className="mb-10">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4">
                  Bem-vindo{nomeUsuario ? `, ${nomeUsuario}` : ""}!
                </h1>
                <p className="text-white/70 text-xl leading-relaxed">
                  Aqui está o seu painel de estudos e estatísticas em tempo real.
                </p>
              </div>
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 backdrop-blur-sm flex items-center justify-center text-3xl font-bold text-white shadow-2xl ring-2 ring-white/20">
                  {nomeUsuario ? nomeUsuario[0] : <span className="opacity-50">?</span>}
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl opacity-20 blur animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra-modern charts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-white">Progresso Mensal</h2>
            </div>
            <Bar
              data={{
                labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
                datasets: [
                  {
                    label: "Horas de Estudo",
                    data: [30, 20, 50, 40],
                    backgroundColor: [
                      "rgba(147, 51, 234, 0.8)",
                      "rgba(59, 130, 246, 0.8)",
                      "rgba(6, 182, 212, 0.8)",
                      "rgba(16, 185, 129, 0.8)",
                    ],
                    borderRadius: 12,
                    borderWidth: 0,
                    hoverBackgroundColor: [
                      "rgba(147, 51, 234, 1)",
                      "rgba(59, 130, 246, 1)",
                      "rgba(6, 182, 212, 1)",
                      "rgba(16, 185, 129, 1)",
                    ],
                  },
                ],
              }}
              options={{
                responsive: true,
                animation: {
                  duration: 1500,
                  easing: "easeInOutQuart",
                },
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      color: "#e2e8f0",
                      font: { size: 14, weight: "600" },
                      padding: 20,
                    },
                  },
                },
                scales: {
                  x: {
                    ticks: { color: "#cbd5e1" },
                    grid: { color: "rgba(255, 255, 255, 0.1)" },
                  },
                  y: {
                    ticks: { color: "#cbd5e1" },
                    grid: { color: "rgba(255, 255, 255, 0.1)" },
                  },
                },
              }}
            />
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-white">Distribuição de Matérias</h2>
            </div>
            <Pie
              data={{
                labels: ["Matemática", "Física", "Química"],
                datasets: [
                  {
                    label: "Horas",
                    data: [300, 150, 100],
                    backgroundColor: ["rgba(147, 51, 234, 0.8)", "rgba(6, 182, 212, 0.8)", "rgba(16, 185, 129, 0.8)"],
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    borderWidth: 2,
                    hoverOffset: 15,
                    hoverBorderColor: "rgba(255, 255, 255, 0.4)",
                  },
                ],
              }}
              options={{
                responsive: true,
                animation: {
                  animateScale: true,
                  duration: 1500,
                  easing: "easeInOutQuart",
                },
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      color: "#e2e8f0",
                      font: { size: 14, weight: "600" },
                      padding: 20,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
