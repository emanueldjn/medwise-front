import { Link } from "react-router-dom"

const MeusEstudos = () => {
  const estudos = [
    { id: 1, titulo: "Anatomia Humana", progresso: 85, horas: 24, status: "Em andamento" },
    { id: 2, titulo: "Fisiologia", progresso: 60, horas: 18, status: "Em andamento" },
    { id: 3, titulo: "Patologia Geral", progresso: 100, horas: 32, status: "Concluído" },
    { id: 4, titulo: "Farmacologia", progresso: 30, horas: 8, status: "Iniciado" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/dashboard" className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-4xl font-bold">Meus Estudos</h1>
          </div>
          <p className="text-white/90 text-lg">Acompanhe seu progresso acadêmico e organize seus estudos</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">4</p>
                <p className="text-sm text-muted-foreground">Matérias</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">82h</p>
                <p className="text-sm text-muted-foreground">Total de Horas</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-3/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-chart-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">1</p>
                <p className="text-sm text-muted-foreground">Concluídas</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-4/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-chart-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-card-foreground">69%</p>
                <p className="text-sm text-muted-foreground">Progresso Médio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Studies List */}
        <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold text-card-foreground">Suas Matérias</h2>
            <p className="text-muted-foreground mt-1">Gerencie e acompanhe o progresso de cada matéria</p>
          </div>

          <div className="divide-y divide-border">
            {estudos.map((estudo) => (
              <div key={estudo.id} className="p-6 hover:bg-muted/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        estudo.status === "Concluído"
                          ? "bg-secondary/10"
                          : estudo.status === "Em andamento"
                            ? "bg-primary/10"
                            : "bg-chart-4/10"
                      }`}
                    >
                      {estudo.status === "Concluído" ? (
                        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground">{estudo.titulo}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            estudo.status === "Concluído"
                              ? "bg-secondary/10 text-secondary"
                              : estudo.status === "Em andamento"
                                ? "bg-primary/10 text-primary"
                                : "bg-chart-4/10 text-chart-4"
                          }`}
                        >
                          {estudo.status}
                        </span>
                        <span className="text-sm text-muted-foreground">{estudo.horas}h estudadas</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-card-foreground">{estudo.progresso}%</div>
                    <div className="text-sm text-muted-foreground">Concluído</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                      estudo.status === "Concluído"
                        ? "bg-gradient-to-r from-secondary to-secondary/80"
                        : "bg-gradient-to-r from-primary to-primary/80"
                    }`}
                    style={{ width: `${estudo.progresso}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeusEstudos
