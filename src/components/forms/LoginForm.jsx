"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

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
      if (response.data && response.data.token) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            nome_completo: response.data.nome_completo,
            token: response.data.token,
            email: email,
          }),
        )
        toast.success("Login realizado com sucesso!")
        navigate("/dashboard")
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Glassmorphism card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Bem-vindo</h2>
            <p className="text-white/70">Entre na sua conta para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-red-200 text-sm text-center backdrop-blur-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-white/90 text-sm font-medium mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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

            <div className="text-center">
              <p className="text-white/70">
                Ainda não tem conta?{" "}
                <Link
                  to="/register"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                >
                  Registrar-se
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
