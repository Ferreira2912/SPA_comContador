import '../styles/Sobre.css'

const Sobre = () => {
  return (
    <div>
      <h1 className="sobre-title">Sobre o Curso Técnico</h1>
      
      <div className="sobre-content">
        <p>
          O curso técnico em informática tem como objetivo formar profissionais capacitados para atuar na área de tecnologia da informação, 
          desenvolvendo competências necessárias para o mercado de trabalho atual.
        </p>
        
        <p>
          Durante o curso, os alunos aprendem diversas tecnologias e conceitos fundamentais para o desenvolvimento de software, 
          incluindo programação web, banco de dados, redes de computadores e desenvolvimento de aplicações.
        </p>
        
        <h2 className="sobre-subtitulo">Competências desenvolvidas:</h2>
        <ul className="sobre-lista">
          <li>Desenvolvimento de aplicações web com HTML, CSS e JavaScript</li>
          <li>Frameworks modernos como React e Vue.js</li>
          <li>Banco de dados relacionais e não-relacionais</li>
          <li>Lógica de programação e algoritmos</li>
          <li>Desenvolvimento back-end com Node.js</li>
        </ul>
        
        <p className="sobre-destaque">
          O curso tem duração de 2 anos e oferece certificação técnica reconhecida pelo MEC.
        </p>
      </div>
    </div>
  )
}

export default Sobre