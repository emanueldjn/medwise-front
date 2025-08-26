"use client"

import { useState } from "react"
import { X, Eye, EyeOff } from "lucide-react"
import axios from "axios"
import { toast } from "react-toastify"

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  if (!isOpen) return null

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)
  const validateSenha = (senha) => senha.length >= 6

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Preencha todos os campos.")
      return
    }
    if (!validateEmail(email)) {
      setError("Email inválido.")
      return
    }
    if (!validateSenha(password)) {
      setError("A senha deve ter pelo menos 6 caracteres.")
      return
    }

    setLoading(true)
    try {
      const response = await axios.post("https://medwise-back.onrender.com/api/login", { email, password })
      if (response.data?.token) {
        const userObj = {
          id: response.data.id,
          nome_completo: response.data.nome_completo,
          email: response.data.email,
          ndni: response.data.ndni,
          data_nascimento: response.data.data_nascimento,
          sexo: response.data.sexo,
          aceita_termos: response.data.aceita_termos,
          token: response.data.token,
        }
        localStorage.setItem("user", JSON.stringify(userObj))
        toast.success("Login realizado com sucesso!")
        onClose()
        // Redirect to dashboard
        window.location.href = "/dashboard"
      } else {
        console.error("Resposta do servidor:", response.data)
        const msg = response.data?.error || "Resposta inválida do servidor."
        setError(msg)
        toast.error(msg)
      }
    } catch (err) {
      console.error("Erro no login:", err)
      const msg = err.response?.data?.error || err.message || "Erro ao conectar ao servidor. Tente novamente."
      setError(msg)
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[500px]">
          {/* Login Form */}
          <div className="p-8 lg:p-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Entrar</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-12"
                    placeholder="Sua senha"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Lembrar de mim</span>
                </label>
                <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
                  Esqueceu a senha?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Entrando...
                  </div>
                ) : (
                  "Entrar"
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Não tem uma conta?{" "}
                <button onClick={onSwitchToRegister} className="text-blue-500 hover:text-blue-600 font-semibold">
                  Cadastre-se
                </button>
              </p>
            </div>
          </div>

          {/* Info Panel */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 lg:p-12 text-white flex flex-col justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-sm">M</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Bem-vindo de volta!</h3>
              <p className="text-blue-100 mb-8 text-pretty">
                Continue sua jornada de estudos médicos com a melhor plataforma do mercado.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">Acesso a milhares de questões</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">Simulados personalizados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">Relatórios detalhados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
