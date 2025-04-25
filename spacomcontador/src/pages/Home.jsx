import Card from '../components/Card'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <h1 className="home-title">Bem-vindo ao Curso Técnico em Informática</h1>
      
      <p className="home-description">
        Aqui você encontrará informações sobre nosso curso e projetos desenvolvidos pelos alunos.
      </p>
      
      <div className="cards-grid">
        <Card 
          titulo="React" 
          descricao="Biblioteca JavaScript para criar interfaces de usuário interativas e reativas."
        >
          <button className="btn btn-primary" style={{width: '100%'}}>Saiba mais</button>
        </Card>
        
        <Card 
          titulo="JavaScript" 
          descricao="Linguagem de programação fundamental para desenvolvimento web moderno."
        >
          <button className="btn btn-primary" style={{width: '100%'}}>Saiba mais</button>
        </Card>
        
        <Card 
          titulo="HTML & CSS" 
          descricao="Fundamentos para criação e estilização de páginas web."
        >
          <button className="btn btn-primary" style={{width: '100%'}}>Saiba mais</button>
        </Card>
      </div>
    </div>
  )
}

export default Home