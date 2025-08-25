import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (!email || !password) {
            setError('Preencha todos os campos.')
            return
        }
        setLoading(true)
        try {
            const response = await axios.post(
                'https://medwise-wu7i.vercel.app/api/users/login',
                { email, password }
            )
            if (response.data && response.data.user) {
                localStorage.setItem('user', JSON.stringify(response.data.user))
                navigate('/dashboard')
            } else {
                setError('Resposta inválida do servidor.')
            }
        } catch (err) {
            setError(
                err.response?.data?.error ||
                'Erro ao conectar ao servidor. Tente novamente.'
            )
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