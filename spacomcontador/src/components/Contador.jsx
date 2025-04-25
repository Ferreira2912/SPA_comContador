import { useState } from 'react'
import '../styles/Contador.css'

const Contador = () => {
  const [contador, setContador] = useState(0)

  const incrementar = () => {
    setContador(contador + 1)
  }

  const zerar = () => {
    setContador(0)
  }

  return (
    <div className="contador">
      <h2 className="contador-title">Contador</h2>
      
      <p className="contador-value">
        Você clicou <span>{contador}</span> vezes
      </p>
      
      {contador >= 10 && (
        <div className="contador-message">
          Parabéns! Você atingiu 10 cliques!
        </div>
      )}
      
      <div className="contador-buttons">
        <button 
          onClick={incrementar}
          className="btn btn-primary"
        >
          Adicionar
        </button>
        
        <button 
          onClick={zerar}
          className="btn btn-secondary"
        >
          Zerar
        </button>
      </div>
    </div>
  )
}

export default Contador