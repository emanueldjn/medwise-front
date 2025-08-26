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
    ndni: "",
    data_nascimento: "",
    sexo: "",
    aceita_termos: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)
  const validateSenha = (senha) => senha.length >= 6

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!formData.nome_completo || !formData.email || !formData.password || !formData.confirmPassword || !formData.ndni || !formData.data_nascimento || !formData.sexo) {
      setError("Preencha todos os campos.")
      return
    }
    if (!formData.aceita_termos) {
      setError("Você precisa aceitar os termos de uso.")
      return
    }

    if (!validateEmail(formData.email)) {
      setError("Email inválido.")
      return
    }

    if (!validateSenha(formData.password)) {
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
        ndni: formData.ndni,
        data_nascimento: formData.data_nascimento,
        sexo: formData.sexo,
        aceita_termos: formData.aceita_termos,
      })

      if (response.data?.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success("Conta criada com sucesso!");
        navigate("/configuracoes");
      } else if (response.data?.message) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (err) {
      console.error("Erro no registro:", err)
      const msg = err.response?.data?.error || err.message || "Erro ao criar conta. Tente novamente."
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
          <p className="text-muted-foreground">Crie sua conta para começar</p>
        </div>

        {/* Register Form */}
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8 animate-slide-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-card-foreground">Criar Conta</h2>
            </div>

            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="nome_completo" className="block text-sm font-medium text-card-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome_completo"
                  name="nome_completo"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  placeholder="Seu nome completo"
                  value={formData.nome_completo}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="ndni" className="block text-sm font-medium text-card-foreground mb-2">
                  DNI
                </label>
                <input
                  type="text"
                  id="ndni"
                  name="ndni"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  placeholder="Seu DNI"
                  value={formData.ndni}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="data_nascimento" className="block text-sm font-medium text-card-foreground mb-2">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  id="data_nascimento"
                  name="data_nascimento"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  value={formData.data_nascimento}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="sexo" className="block text-sm font-medium text-card-foreground mb-2">
                  Sexo
                </label>
                <select
                  id="sexo"
                  name="sexo"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  value={formData.sexo}
                  onChange={handleChange}
                >
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-card-foreground mb-2">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="aceita_termos"
                name="aceita_termos"
                checked={formData.aceita_termos}
                onChange={e => setFormData({ ...formData, aceita_termos: e.target.checked })}
                className="mr-2"
              />
              <label htmlFor="aceita_termos" className="text-sm text-card-foreground">
                Eu aceito os <a href="#" className="text-primary underline">termos de uso</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                  Criando conta...
                </div>
              ) : (
                "Criar Conta"
              )}
            </button>

            <div className="text-center pt-4 border-t border-border">
              <p className="text-muted-foreground text-sm">
                Já tem uma conta?{" "}
                <Link to="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
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
