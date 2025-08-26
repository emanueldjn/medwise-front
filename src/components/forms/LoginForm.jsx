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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">MedWise</h1>
          <p className="text-muted-foreground">Acesse sua conta para continuar</p>
        </div>

        {/* Login Form */}
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8 animate-slide-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-card-foreground">Entrar</h2>
            </div>

            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-card-foreground mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                  Entrando...
                </div>
              ) : (
                "Entrar"
              )}
            </button>

            <div className="text-center pt-4 border-t border-border">
              <p className="text-muted-foreground text-sm">
                Ainda não tem conta?{" "}
                <Link to="/register" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Criar conta
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
