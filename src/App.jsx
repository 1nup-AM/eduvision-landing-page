import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Courses from './components/Courses'
import Stories from './components/Stories'
import Footer from './components/Footer'
import DemoForm from './components/DemoForm'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 font-sans'>
      <Navbar />
      <HeroSection />
      <Skills />
      <Courses />
      <Stories />
      <DemoForm />
      <Footer />
    </div>
  )
}

export default App
