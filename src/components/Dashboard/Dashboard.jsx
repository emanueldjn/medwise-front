import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js'
import { Link } from 'react-router-dom'

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend)

const Dashboard = () => {
    // Tenta recuperar o nome do usuário do localStorage (ajuste conforme o backend)
    let nomeUsuario = '';
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        nomeUsuario = user?.nome_completo || user?.nome || '';
    } catch {
        // Se não houver usuário no localStorage, nomeUsuario permanece vazio
    }

    return (
        <div className="flex">
            <aside className="w-64 bg-blue-700 text-white flex flex-col py-8 px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">Menu</h2>
                <nav className="flex flex-col gap-4">
                    <Link to="/dashboard" className="hover:bg-blue-800 rounded px-3 py-2">Dashboard</Link>
                    <Link to="/meus-estudos" className="hover:bg-blue-800 rounded px-3 py-2">Meus Estudos</Link>
                    <Link to="/configuracoes" className="hover:bg-blue-800 rounded px-3 py-2">Configurações</Link>
                    <Link to="/login" className="hover:bg-blue-800 rounded px-3 py-2">Sair</Link>
                </nav>
            </aside>
            <main className="flex-1 p-10">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="mb-6 text-xl font-semibold">Bem-vindo{nomeUsuario ? `, ${nomeUsuario}` : ''}!</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">Gráfico de Barras</h2>
                        <Bar data={{
                            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
                            datasets: [
                                {
                                    label: 'Vendas',
                                    data: [30, 20, 50, 40],
                                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    borderWidth: 1,
                                },
                            ],
                        }} options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Gráfico de Vendas por Mês',
                                },
                            },
                        }} />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">Gráfico de Pizza</h2>
                        <Pie data={{
                            labels: ['Produto A', 'Produto B', 'Produto C'],
                            datasets: [
                                {
                                    label: 'Vendas',
                                    data: [300, 150, 100],
                                    backgroundColor: [
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                    ],
                                    borderColor: [
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(255, 206, 86, 1)',
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }} options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Gráfico de Vendas por Produto',
                                },
                            },
                        }} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard