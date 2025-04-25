import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import NavMenu from './components/NavMenu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import ContadorPage from './pages/ContadorPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <NavMenu />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/contador" element={<ContadorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App