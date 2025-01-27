import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

// Importar os componentes
import Navbar from './components/Navbar'
import NavbarAccessed from './components/NavbarAccessed'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
