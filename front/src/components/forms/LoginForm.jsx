import React from 'react'
import { Link } from 'react-router-dom'


const LoginForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="max-w-sm w-full p-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Entrar
                </button>
                <div className="mt-4 text-center">
                    <Link to="/dashboard" className="text-green-600 hover:underline mr-2">
                        Ir para Dashboard
                    </Link>
                </div>
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