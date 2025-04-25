import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>Feito no curso técnico em informática</p>
        <p className="mt-2">© {new Date().getFullYear()} - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer