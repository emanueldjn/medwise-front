import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="max-w-sm w-full p-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Registrar Usuário</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite seu nome"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite seu email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Senha</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Digite sua senha"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                    Registrar
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
