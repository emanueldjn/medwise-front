"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MedWise</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </button>
            <button
              onClick={onLoginClick}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("planos")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contato
              </button>
              <button
                onClick={onLoginClick}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors text-center"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
