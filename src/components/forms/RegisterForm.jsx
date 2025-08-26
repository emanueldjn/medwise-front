"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nome_completo: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)
  const validatePassword = (password) => password.length >= 6

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!formData.nome_completo || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Preencha todos os campos.")
      return
    }

    if (!validateEmail(formData.email)) {
      setError("Email inválido.")
      return
    }

    if (!validatePassword(formData.password)) {
      setError("A senha deve ter pelo menos 6 caracteres.")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.")
      return
    }

    setLoading(true)
    try {
      const response = await axios.post("https://medwise-back.onrender.com/api/register", {
        nome_completo: formData.nome_completo,
        email: formData.email,
        password: formData.password,
      })

      if (response.data && response.data.token) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            nome_completo: response.data.nome_completo,
            token: response.data.token,
            email: formData.email,
          }),
        )
        toast.success("Conta criada com sucesso!")
        navigate("/dashboard")
      } else {
        const msg = response.data?.error || "Erro ao criar conta."
        setError(msg)
        toast.error(msg)
      }
    } catch (err) {
      console.error("Erro no registro:", err)
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
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Criar Conta</h2>
            <p className="text-white/70">Junte-se à nossa plataforma</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-red-200 text-sm text-center backdrop-blur-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="nome_completo" className="block text-white/90 text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome_completo"
                  name="nome_completo"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  placeholder="Seu nome completo"
                  value={formData.nome_completo}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-white/90 text-sm font-medium mb-2">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Criando conta...
                </div>
              ) : (
                "Criar Conta"
              )}
            </button>

            <div className="text-center">
              <p className="text-white/70">
                Já tem uma conta?{" "}
                <Link
                  to="/login"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
                >
                  Fazer login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
