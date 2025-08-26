"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const Questoes = () => {
  const [questaoAtual, setQuestaoAtual] = useState(0)
  const [respostaSelecionada, setRespostaSelecionada] = useState(null)
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [pontuacao, setPontuacao] = useState(0)
  const [simuladoIniciado, setSimuladoIniciado] = useState(false)

  // Questões simuladas para demonstração
  const questoes = [
    {
      id: 1,
      pergunta: "Qual é a função principal do coração no sistema circulatório?",
      alternativas: [
        "Filtrar o sangue",
        "Bombear sangue para todo o corpo",
        "Produzir glóbulos vermelhos",
        "Regular a temperatura corporal",
      ],
      respostaCorreta: 1,
      explicacao:
        "O coração é o órgão muscular responsável por bombear sangue oxigenado para todos os tecidos do corpo através do sistema circulatório.",
    },
    {
      id: 2,
      pergunta: "Quantos pares de costelas possui o ser humano normalmente?",
      alternativas: ["10 pares", "11 pares", "12 pares", "13 pares"],
      respostaCorreta: 2,
      explicacao:
        "O ser humano possui normalmente 12 pares de costelas (24 costelas no total), sendo 7 pares verdadeiras, 3 pares falsas e 2 pares flutuantes.",
    },
    {
      id: 3,
      pergunta: "Qual hormônio é produzido pelo pâncreas para regular o açúcar no sangue?",
      alternativas: ["Cortisol", "Insulina", "Adrenalina", "Tiroxina"],
      respostaCorreta: 1,
      explicacao:
        "A insulina é o hormônio produzido pelas células beta das ilhotas de Langerhans no pâncreas, responsável por regular os níveis de glicose no sangue.",
    },
  ]

  const iniciarSimulado = () => {
    setSimuladoIniciado(true)
    setQuestaoAtual(0)
    setRespostaSelecionada(null)
    setMostrarResultado(false)
    setPontuacao(0)
  }

  const selecionarResposta = (indice) => {
    setRespostaSelecionada(indice)
  }

  const confirmarResposta = () => {
    if (respostaSelecionada === questoes[questaoAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1)
    }
    setMostrarResultado(true)
  }

  const proximaQuestao = () => {
    if (questaoAtual < questoes.length - 1) {
      setQuestaoAtual(questaoAtual + 1)
      setRespostaSelecionada(null)
      setMostrarResultado(false)
    } else {
      // Fim do simulado
      setSimuladoIniciado(false)
    }
  }

  const reiniciarSimulado = () => {
    setSimuladoIniciado(false)
    setQuestaoAtual(0)
    setRespostaSelecionada(null)
    setMostrarResultado(false)
    setPontuacao(0)
  }

  if (!simuladoIniciado) {
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
              <h1 className="text-4xl font-bold">Questões e Simulados</h1>
            </div>
            <p className="text-white/90 text-lg">Teste seus conhecimentos médicos com questões simuladas</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-8">
          {/* Resultado Final */}
          {questaoAtual >= questoes.length && pontuacao > 0 && (
            <div className="bg-card rounded-2xl border border-border shadow-xl p-8 mb-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Simulado Concluído!</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Você acertou <span className="font-bold text-primary">{pontuacao}</span> de{" "}
                <span className="font-bold">{questoes.length}</span> questões
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reiniciarSimulado}
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
                >
                  Fazer Novamente
                </button>
                <Link
                  to="/dashboard"
                  className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium rounded-lg transition-colors text-center"
                >
                  Voltar ao Dashboard
                </Link>
              </div>
            </div>
          )}

          {/* Simulado Info */}
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-card-foreground mb-4">Simulado de Medicina</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Teste seus conhecimentos com questões de anatomia, fisiologia e medicina geral
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-muted/30 rounded-xl p-6">
                  <div className="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-chart-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">Duração</h3>
                  <p className="text-muted-foreground">~10 minutos</p>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-chart-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">Questões</h3>
                  <p className="text-muted-foreground">{questoes.length} perguntas</p>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-chart-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">Dificuldade</h3>
                  <p className="text-muted-foreground">Intermediário</p>
                </div>
              </div>

              <button
                onClick={iniciarSimulado}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Iniciar Simulado
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={reiniciarSimulado} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-2xl md:text-3xl font-bold">Simulado em Andamento</h1>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-sm">Questão</p>
              <p className="text-xl font-bold">
                {questaoAtual + 1}/{questoes.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 md:p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">Progresso</span>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(((questaoAtual + 1) / questoes.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-3">
            <div
              className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500"
              style={{ width: `${((questaoAtual + 1) / questoes.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Questão */}
        <div className="bg-card rounded-2xl border border-border shadow-xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-card-foreground mb-8 leading-relaxed">
            {questoes[questaoAtual].pergunta}
          </h2>

          <div className="space-y-4 mb-8">
            {questoes[questaoAtual].alternativas.map((alternativa, indice) => (
              <button
                key={indice}
                onClick={() => selecionarResposta(indice)}
                disabled={mostrarResultado}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  mostrarResultado
                    ? indice === questoes[questaoAtual].respostaCorreta
                      ? "border-green-500 bg-green-50 text-green-800"
                      : indice === respostaSelecionada && indice !== questoes[questaoAtual].respostaCorreta
                        ? "border-red-500 bg-red-50 text-red-800"
                        : "border-border bg-muted/30 text-muted-foreground"
                    : respostaSelecionada === indice
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                      mostrarResultado
                        ? indice === questoes[questaoAtual].respostaCorreta
                          ? "border-green-500 bg-green-500 text-white"
                          : indice === respostaSelecionada && indice !== questoes[questaoAtual].respostaCorreta
                            ? "border-red-500 bg-red-500 text-white"
                            : "border-muted-foreground text-muted-foreground"
                        : respostaSelecionada === indice
                          ? "border-primary bg-primary text-white"
                          : "border-muted-foreground text-muted-foreground"
                    }`}
                  >
                    {String.fromCharCode(65 + indice)}
                  </div>
                  <span className="flex-1">{alternativa}</span>
                  {mostrarResultado && indice === questoes[questaoAtual].respostaCorreta && (
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {mostrarResultado &&
                    indice === respostaSelecionada &&
                    indice !== questoes[questaoAtual].respostaCorreta && (
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                </div>
              </button>
            ))}
          </div>

          {/* Explicação */}
          {mostrarResultado && (
            <div className="bg-muted/30 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Explicação
              </h3>
              <p className="text-muted-foreground leading-relaxed">{questoes[questaoAtual].explicacao}</p>
            </div>
          )}

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
              </svg>
              Pontuação atual: {pontuacao}/{questaoAtual + (mostrarResultado ? 1 : 0)}
            </div>

            <div className="flex gap-3">
              {!mostrarResultado ? (
                <button
                  onClick={confirmarResposta}
                  disabled={respostaSelecionada === null}
                  className="px-6 py-3 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground font-medium rounded-lg transition-colors"
                >
                  Confirmar Resposta
                </button>
              ) : (
                <button
                  onClick={proximaQuestao}
                  className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium rounded-lg transition-colors"
                >
                  {questaoAtual < questoes.length - 1 ? "Próxima Questão" : "Finalizar Simulado"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questoes
