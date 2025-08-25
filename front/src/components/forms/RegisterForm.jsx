import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const RegisterForm = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [nDni, setNDni] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aqui você pode adicionar lógica de registro (API, validação, etc)
        navigate('/login')
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="max-w-sm w-full p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Registrar Usuário</h2>
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
                    <label htmlFor="ndni" className="block text-gray-700 mb-2">Número de DNI</label>
                    <input
                        type="text"
                        id="ndni"
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
                >
                    Registrar
                </button>
                {/* <div className="mt-4 text-center">
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Voltar para Login
                    </Link>
                </div> */}
            </form>
        </div>
    )
}

export default RegisterForm
