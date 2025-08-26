"use client"

import { Bar, Pie } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js"
import { Link } from "react-router-dom"
import { useState } from "react"

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend)

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  let nomeUsuario = ""
  let emailUsuario = ""
  try {
    const user = JSON.parse(localStorage.getItem("user"))
    nomeUsuario = user?.nome_completo || user?.nome || ""
    emailUsuario = user?.email || ""
  } catch {
    // Se não houver usuário no localStorage, nomeUsuario permanece vazio
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
  }

  return (
    <div className="min-h-screen flex bg-background">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside
        className={`fixed md:relative w-80 bg-sidebar border-r border-sidebar-border flex flex-col shadow-2xl z-50 transition-transform duration-300 ${
          sidebarOpen ? "mobile-sidebar-visible" : "mobile-sidebar-hidden md:translate-x-0"
        }`}
      >
        {/* Header with modern gradient */}
        <div className="bg-gradient-to-br from-primary via-primary to-secondary p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden absolute top-4 right-4 p-2 text-white/80 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Enhanced avatar */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white shadow-2xl ring-4 ring-white/30">
                  {nomeUsuario ? (
                    nomeUsuario[0].toUpperCase()
                  ) : (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-3 border-white shadow-lg"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{nomeUsuario || "Usuário"}</h3>
              <p className="text-white/80 text-sm">{emailUsuario}</p>
              <div className="mt-4 px-3 py-1 bg-white/20 rounded-full text-xs text-white/90 font-medium">Online</div>
            </div>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="flex-1 p-6">
          <div className="space-y-2">
            <Link
              to="/dashboard"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 px-4 py-4 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-300 relative z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0a2 2 0 01-2 2H10a2 2 0 01-2-2v0z"
                  />
                </svg>
              </div>
              <div className="flex-1 relative z-10">
                <span className="font-semibold text-base">Dashboard</span>
                <p className="text-xs text-muted-foreground group-hover:text-sidebar-accent-foreground/80">
                  Visão geral dos dados
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"></div>
            </Link>

            <Link
              to="/meus-estudos"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 px-4 py-4 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 group-hover:bg-secondary group-hover:text-white flex items-center justify-center transition-all duration-300 relative z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex-1 relative z-10">
                <span className="font-semibold text-base">Meus Estudos</span>
                <p className="text-xs text-muted-foreground group-hover:text-sidebar-accent-foreground/80">
                  Progresso acadêmico
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"></div>
            </Link>

            <Link
              to="/questoes"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 px-4 py-4 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-chart-3/5 to-chart-4/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-12 h-12 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:text-white flex items-center justify-center transition-all duration-300 relative z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 relative z-10">
                <span className="font-semibold text-base">Questões</span>
                <p className="text-xs text-muted-foreground group-hover:text-sidebar-accent-foreground/80">
                  Simulados e exercícios
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-chart-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"></div>
            </Link>

            <Link
              to="/configuracoes"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 px-4 py-4 rounded-xl text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-chart-5/5 to-chart-4/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-12 h-12 rounded-xl bg-chart-5/10 group-hover:bg-chart-5 group-hover:text-white flex items-center justify-center transition-all duration-300 relative z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="flex-1 relative z-10">
                <span className="font-semibold text-base">Configurações</span>
                <p className="text-xs text-muted-foreground group-hover:text-sidebar-accent-foreground/80">
                  Preferências do sistema
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-chart-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"></div>
            </Link>
          </div>

          {/* Quick stats section */}
          <div className="mt-8 p-6 bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl border border-border">
            <h4 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Estatísticas Rápidas
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Estudos Concluídos</span>
                <span className="text-lg font-bold text-secondary">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Horas de Estudo</span>
                <span className="text-lg font-bold text-primary">48h</span>
              </div>
              <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground text-center">75% do objetivo mensal</p>
            </div>
          </div>
        </nav>

        {/* Enhanced logout button */}
        <div className="p-6 border-t border-sidebar-border">
          <Link
            to="/login"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all duration-300 group border border-destructive/20 hover:border-destructive"
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
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-8 overflow-auto">
        <div className="md:hidden mb-6">
          <button onClick={() => setSidebarOpen(true)} className="p-2 bg-primary text-white rounded-lg shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Welcome Header */}
        <div className="mb-8 animate-fade-in">
          <div className="bg-gradient-to-r from-card via-card to-card/80 rounded-2xl shadow-xl border border-border p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Bem-vindo{nomeUsuario ? `, ${nomeUsuario.split(" ")[0]}` : ""}! 👋
                </h1>
                <p className="text-muted-foreground text-base md:text-lg">
                  Aqui está o seu painel de estudos e estatísticas médicas.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-primary">Sistema Online</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Última atualização: {new Date().toLocaleDateString("pt-BR")}
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-2xl">
                  {nomeUsuario ? (
                    nomeUsuario[0].toUpperCase()
                  ) : (
                    <svg className="w-8 md:w-10 h-8 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 animate-slide-in">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-chart-1/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-chart-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-card-foreground">Progresso Mensal</h2>
            </div>
            <Bar
              data={{
                labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
                datasets: [
                  {
                    label: "Horas de Estudo",
                    data: [30, 45, 35, 50],
                    backgroundColor: "rgba(59, 130, 246, 0.8)",
                    borderColor: "rgba(59, 130, 246, 1)",
                    borderRadius: 8,
                    borderWidth: 2,
                    hoverBackgroundColor: "rgba(96, 165, 250, 0.9)",
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
                      color: "rgb(71, 85, 105)",
                      font: { size: 14, weight: "600" },
                      padding: 20,
                    },
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: "rgba(226, 232, 240, 0.5)",
                    },
                    ticks: {
                      color: "rgb(100, 116, 139)",
                    },
                  },
                  x: {
                    grid: {
                      display: false,
                    },
                    ticks: {
                      color: "rgb(100, 116, 139)",
                    },
                  },
                },
              }}
            />
          </div>

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-chart-2/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-card-foreground">Distribuição de Matérias</h2>
            </div>
            <Pie
              data={{
                labels: ["Anatomia", "Fisiologia", "Patologia"],
                datasets: [
                  {
                    label: "Horas",
                    data: [40, 30, 30],
                    backgroundColor: ["rgba(59, 130, 246, 0.8)", "rgba(96, 165, 250, 0.8)", "rgba(6, 182, 212, 0.8)"],
                    borderColor: ["rgba(59, 130, 246, 1)", "rgba(96, 165, 250, 1)", "rgba(6, 182, 212, 1)"],
                    borderWidth: 3,
                    hoverOffset: 15,
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
                      color: "rgb(71, 85, 105)",
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
