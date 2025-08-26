import React, { useState } from "react";

const Configuracoes = () => {
  const [nome, setNome] = useState("João Silva");
  const [email, setEmail] = useState("joao.silva@email.com");
  const [tema, setTema] = useState("dark");
  const [idioma, setIdioma] = useState("pt");
  const [notificacoes, setNotificacoes] = useState({
    aulas: true,
    lembretes: true,
    certificados: false,
  });
  const handleSave = (e) => {
    e.preventDefault();
    alert("Alterações salvas!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => window.location.href = "/dashboard"}
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
            Configurações
          </h1>
          <p className="text-slate-300">Personalize sua experiência de aprendizado</p>
        </div>

  <form onSubmit={handleSave}>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Settings */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="material-icons mr-2">person</span>
                Perfil do Usuário
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{nome.split(' ')[0][0]}{nome.split(' ')[1] ? nome.split(' ')[1][0] : ""}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{nome}</p>
                    <p className="text-slate-400 text-sm">{email}</p>
                  </div>
                  <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Alterar Foto</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Nome Completo</label>
                    <input
                      type="text"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="material-icons mr-2">notifications</span>
                Notificações
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Novas aulas disponíveis</p>
                    <p className="text-slate-400 text-sm">Receba notificações sobre novos conteúdos</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={notificacoes.aulas} onChange={e => setNotificacoes(n => ({...n, aulas: e.target.checked}))} />
                    <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Lembretes de estudo</p>
                    <p className="text-slate-400 text-sm">Receba lembretes para manter a consistência</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={notificacoes.lembretes} onChange={e => setNotificacoes(n => ({...n, lembretes: e.target.checked}))} />
                    <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">Certificados obtidos</p>
                    <p className="text-slate-400 text-sm">Notificações sobre conquistas e certificados</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={notificacoes.certificados} onChange={e => setNotificacoes(n => ({...n, certificados: e.target.checked}))} />
                    <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="material-icons mr-2">security</span>
                Segurança
              </h3>

              <div className="space-y-4">
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">Alterar Senha</button>
                <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg">Ativar Autenticação em Duas Etapas</button>
                <button type="button" className="w-full bg-slate-600 hover:bg-slate-700 text-white p-3 rounded-lg">Gerenciar Sessões Ativas</button>
              </div>
            </div>
          </div>

          {/* Sidebar Settings */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="material-icons mr-2">palette</span>
                Aparência
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 text-sm mb-2">Tema</label>
                  <select value={tema} onChange={e => setTema(e.target.value)} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="dark">Escuro</option>
                    <option value="light">Claro</option>
                    <option value="auto">Automático</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm mb-2">Idioma</label>
                  <select value={idioma} onChange={e => setIdioma(e.target.value)} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="pt">Português</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="material-icons mr-2">storage</span>
                Dados
              </h3>

              <div className="space-y-3">
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm p-2 rounded-lg">Exportar Dados</button>
                <button type="button" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm p-2 rounded-lg">Limpar Cache</button>
                <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white text-sm p-2 rounded-lg">Excluir Conta</button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="material-icons mr-2">help</span>
                Suporte
              </h3>

              <div className="space-y-3">
                <button type="button" className="w-full bg-slate-600 hover:bg-slate-700 text-white text-sm p-2 rounded-lg">Central de Ajuda</button>
                <button type="button" className="w-full bg-slate-600 hover:bg-slate-700 text-white text-sm p-2 rounded-lg">Contatar Suporte</button>
                <button type="button" className="w-full bg-slate-600 hover:bg-slate-700 text-white text-sm p-2 rounded-lg">Reportar Bug</button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl">
            Salvar Alterações
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Configuracoes
