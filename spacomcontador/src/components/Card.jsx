import '../styles/Card.css'

const Card = ({ titulo, descricao, imagem, children }) => {
  return (
    <div className="card">
      {imagem && (
        <div className="card-image">
          <img src={imagem} alt={titulo} />
        </div>
      )}
      <h2 className="card-title">{titulo}</h2>
      {descricao && <p className="card-description">{descricao}</p>}
      {children}
    </div>
  )
}

export default Card