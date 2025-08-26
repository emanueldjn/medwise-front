import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const RegisterForm = () => {
    const [nome_completo, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [ndni, setNdni] = useState('')
    const [password, setPassword] = useState('')
    const [data_nascimento, setDataNascimento] = useState('')
    const [sexo, setSexo] = useState('')
    const [aceita_termos, setAceitaTermos] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)
    const validateSenha = (senha) => senha.length >= 6

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (!nome_completo || !email || !ndni || !password || !data_nascimento || !sexo || !aceita_termos) {
            setError('Preencha todos os campos e aceite os termos.')
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
            await axios.post(
                'https://medwise-back.onrender.com/api/register',
                { nome_completo, email, password, ndni, data_nascimento, sexo, aceita_termos }
            )
            toast.success('Registro realizado com sucesso!')
            navigate('/login')
        } catch (err) {
            const msg = err.response?.data?.error || 'Erro ao registrar usuário!'
            setError(msg)
            toast.error(msg)
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
                    <label htmlFor="nome_completo" className="block text-gray-700 mb-2">Nome Completo</label>
                    <input
                        type="text"
                        id="nome_completo"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite seu nome completo"
                        value={nome_completo}
                        onChange={e => setNomeCompleto(e.target.value)}
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
                <div className="mb-4">
                    <label htmlFor="ndni" className="block text-gray-700 mb-2">Número de DNI</label>
                    <input
                        type="text"
                        id="ndni"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite seu DNI"
                        value={ndni}
                        onChange={e => setNdni(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="data_nascimento" className="block text-gray-700 mb-2">Data de Nascimento</label>
                    <input
                        type="date"
                        id="data_nascimento"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        value={data_nascimento}
                        onChange={e => setDataNascimento(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sexo" className="block text-gray-700 mb-2">Sexo</label>
                    <select
                        id="sexo"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        value={sexo}
                        onChange={e => setSexo(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={aceita_termos}
                            onChange={e => setAceitaTermos(e.target.checked)}
                            className="mr-2"
                        />
                        <span className="text-gray-700">Aceito os termos de uso</span>
                    </label>
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
