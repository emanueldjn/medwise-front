"use client"

import { useState } from "react"
import Header from "./Header"
import Hero from "./Hero"
import About from "./About"
import Plans from "./Plans"
import Footer from "./Footer"
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"

const LandingPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  const handleLoginClick = () => {
    setIsLoginModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(false)
  }

  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(true)
  }

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false)
    setIsLoginModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Header onLoginClick={handleLoginClick} />
      <Hero onLoginClick={handleLoginClick} />
      <About />
      <Plans onLoginClick={handleLoginClick} />
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} onSwitchToRegister={handleSwitchToRegister} />
      <RegisterModal isOpen={isRegisterModalOpen} onClose={handleCloseModal} onSwitchToLogin={handleSwitchToLogin} />
    </div>
  )
}

export default LandingPage
