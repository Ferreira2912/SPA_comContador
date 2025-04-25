import { useState } from 'react'
import '../styles/Contato.css'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Mensagem enviada!\nNome: ${formData.nome}\nEmail: ${formData.email}`)
    // Em uma aplicação real, aqui enviaria os dados para um servidor
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      mensagem: ''
    })
  }

  return (
    <div>
      <h1 className="contato-title">Entre em Contato</h1>
      
      <div className="contato-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="nome">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="assunto">
              Assunto
            </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              className="form-control"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="form-submit"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contato