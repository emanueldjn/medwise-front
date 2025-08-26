import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage/LadingPage"
import LoginForm from "./components/forms/LoginForm"
import RegisterForm from "./components/forms/RegisterForm"
import Dashboard from "./components/Dashboard/Dashboard"
import MeusEstudos from "./pages/MeusEstudos"
import Configuracoes from "./pages/Configuracoes"
import Questoes from "./pages/Questoes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meus-estudos" element={<MeusEstudos />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/questoes" element={<Questoes />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="rounded-lg shadow-xl"
      />
    </BrowserRouter>
  )
}

export default App
