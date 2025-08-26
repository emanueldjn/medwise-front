import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)
    const validateSenha = (senha) => senha.length >= 6

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (!email || !password) {
            setError('Preencha todos os campos.')
            return
        }
        if (!validateEmail(email)) {
            setError('Email inválido.')
            return
        }
        if (!validateSenha(password)) {
            setError('A senha deve ter pelo menos 6 caracteres.')
            return
        }
        setLoading(true)
        try {
            const response = await axios.post(
                'https://medwise-back.onrender.com/api/login',
                { email, password }
            )
            if (response.data && response.data.token) {
                localStorage.setItem('user', JSON.stringify({
                    nome_completo: response.data.nome_completo,
                    token: response.data.token,
                    email: email
                }))
                toast.success('Login realizado com sucesso!')
                navigate('/dashboard')
            } else {
                console.error('Resposta do servidor:', response.data)
                const msg = response.data?.error || 'Resposta inválida do servidor.'
                setError(msg)
                toast.error(msg)
            }
        } catch (err) {
            console.error('Erro no login:', err);
            // Se o backend retornar erro HTTP, mostrar a mensagem do backend
            const msg = err.response?.data?.error || err.message || 'Erro ao conectar ao servidor. Tente novamente.'
            setError(msg)
            toast.error(msg)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="max-w-sm w-full p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && (
                    <div className="mb-4 text-red-600 text-center">{error}</div>
                )}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Senha</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    disabled={loading}
                >
                    {loading ? 'Entrando...' : 'Entrar'}
                </button>
                <div className="mt-2 text-center">
                    Ainda não tem conta?
                    <span className="ml-1">
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Registrar-se
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default LoginForm