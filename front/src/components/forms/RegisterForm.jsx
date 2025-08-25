import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const RegisterForm = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [nDni, setNDni] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)
    const validateSenha = (senha) => senha.length >= 6

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (!nome || !email || !nDni || !senha) {
            setError('Preencha todos os campos.')
            return
        }
        if (!validateEmail(email)) {
            setError('Email inválido.')
            return
        }
        if (!validateSenha(senha)) {
            setError('A senha deve ter pelo menos 6 caracteres.')
            return
        }
        setLoading(true)
        try {
            await axios.post(
                'https://medwise-wu7i.vercel.app/api/users/register',
                { nome, email, nDni, senha }
            )
            navigate('/login')
        } catch (err) {
            setError(
                err.response?.data?.error ||
                'Erro ao registrar usuário!'
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="max-w-sm w-full p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Registrar Usuário</h2>
                {error && (
                    <div className="mb-4 text-red-600 text-center">{error}</div>
                )}
                <div className="mb-4">
                    <label htmlFor="nome" className="block text-gray-700 mb-2">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="nDni" className="block text-gray-700 mb-2">Número de DNI</label>
                    <input
                        type="text"
                        id="nDni"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite seu DNI"
                        value={nDni}
                        onChange={e => setNDni(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="senha" className="block text-gray-700 mb-2">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                    disabled={loading}
                >
                    {loading ? 'Registrando...' : 'Registrar'}
                </button>
                <div className="mt-4 text-center">
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Voltar para Login
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
