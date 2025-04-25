import Contador from '../components/Contador'
import '../styles/ContadorPage.css'

const ContadorPage = () => {
  return (
    <div>
      <h1 className="contador-page-title">Página do Contador</h1>
      
      <p className="contador-page-description">
        Esta página demonstra o uso do hook useState para gerenciar o estado do componente.
      </p>
      
      <div className="contador-container">
        <Contador />
      </div>
      
      <div className="contador-info">
        <h2 className="contador-info-title">Como funciona:</h2>
        <p className="contador-info-text">
          Este componente utiliza o hook <code>useState</code> do React para:
        </p>
        <ul className="contador-info-list">
          <li>Manter o controle do número de cliques</li>
          <li>Incrementar o contador quando o botão "Adicionar" é clicado</li>
          <li>Reiniciar o contador quando o botão "Zerar" é clicado</li>
          <li>Exibir uma mensagem especial quando o contador atinge 10 cliques</li>
        </ul>
      </div>
    </div>
  )
}

export default ContadorPage