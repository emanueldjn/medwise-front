"use client"

import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

const Configuracoes = () => {
  const [notificacoes, setNotificacoes] = useState(true);
  const [tema, setTema] = useState("claro");
  const [idioma, setIdioma] = useState("pt-BR");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [biografia, setBiografia] = useState("");
  const [ndni, setNDni] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  // ...removido upload de foto...

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setNomeCompleto(user.nome_completo || "");
      setEmail(user.email || "");
      setNDni(user.ndni || "");
      setDataNascimento(user.data_nascimento || "");
      setSexo(user.sexo || "");
    }
  }, []);




  const handleSalvar = async (e) => {
    e.preventDefault();

    // Recupera o id do usuário do localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user?.id;

    if (!userId) {
      toast.error('ID do usuário não encontrado. Faça login novamente.');
      return;
    }

    const perfil = {
      nome_completo: nomeCompleto,
      email,
      biografia,
      ndni,
      data_nascimento: dataNascimento,
      sexo,
    };

    try {
      await axios.put(`https://medwise-back.onrender.com/api/user/${userId}`, perfil);
      toast.success('Dados salvos com sucesso!');
    } catch {
      toast.error('Erro ao salvar dados.');
    }
  };
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
            <h1 className="text-4xl font-bold">Configurações</h1>
          </div>
          <p className="text-white/90 text-lg">Personalize sua experiência no sistema</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                Perfil do Usuário
              </h2>
              <p className="text-muted-foreground mt-1">Gerencie suas informações pessoais</p>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Nome Completo</label>
                  <input
                    type="text"
                    value={nomeCompleto}
                    onChange={e => setNomeCompleto(e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">DNI</label>
                  <input
                    type="text"
                    value={ndni}
                    onChange={e => setNDni(e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                    placeholder="Seu DNI"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Data de Nascimento</label>
                  <input
                    type="date"
                    value={dataNascimento}
                    onChange={e => setDataNascimento(e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-card-foreground mb-2">Sexo</label>
                <select
                  value={sexo}
                  onChange={e => setSexo(e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                >
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              {/* upload de foto removido */}

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Biografia</label>
                <textarea
                  rows={4}
                  value={biografia}
                  onChange={e => setBiografia(e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors resize-none"
                  placeholder="Conte um pouco sobre você..."
                ></textarea>
              </div>

              <button onClick={handleSalvar} className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Salvar Alterações
              </button>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Preferências
              </h2>
              <p className="text-muted-foreground mt-1">Configure como você deseja usar o sistema</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Notifications Toggle */}
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-chart-3/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-chart-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-5 5v-5zM4.868 19.718A10.001 10.001 0 0112 2a10.001 10.001 0 017.132 17.718"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Notificações</h3>
                    <p className="text-sm text-muted-foreground">Receber alertas e lembretes</p>
                  </div>
                </div>
                <button
                  onClick={() => setNotificacoes(!notificacoes)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notificacoes ? "bg-primary" : "bg-border"
                    }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notificacoes ? "translate-x-6" : "translate-x-1"
                      }`}
                  />
                </button>
              </div>

              {/* Theme Selection */}
              <div className="p-4 bg-muted/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-chart-4/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-chart-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Tema</h3>
                    <p className="text-sm text-muted-foreground">Escolha a aparência do sistema</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTema("claro")}
                    className={`p-3 rounded-lg border-2 transition-colors ${tema === "claro" ? "border-primary bg-primary/10" : "border-border bg-background"
                      }`}
                  >
                    <div className="text-sm font-medium">Claro</div>
                  </button>
                  <button
                    onClick={() => setTema("escuro")}
                    className={`p-3 rounded-lg border-2 transition-colors ${tema === "escuro" ? "border-primary bg-primary/10" : "border-border bg-background"
                      }`}
                  >
                    <div className="text-sm font-medium">Escuro</div>
                  </button>
                </div>
              </div>

              {/* Language Selection */}
              <div className="p-4 bg-muted/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-chart-5/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-chart-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Idioma</h3>
                    <p className="text-sm text-muted-foreground">Selecione seu idioma preferido</p>
                  </div>
                </div>
                <select
                  value={idioma}
                  onChange={(e) => setIdioma(e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                >
                  <option value="pt-BR">Português (Brasil)</option>
                  <option value="en-US">English (US)</option>
                  <option value="es-ES">Español</option>
                </select>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-card-foreground flex items-center gap-3">
                <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                Segurança
              </h2>
              <p className="text-muted-foreground mt-1">Gerencie a segurança da sua conta</p>
            </div>

            <div className="p-6 space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                  <span className="font-medium text-card-foreground">Alterar Senha</span>
                </div>
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="font-medium text-card-foreground">Autenticação em Duas Etapas</span>
                </div>
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configuracoes
