import { NavLink } from 'react-router-dom'
import '../styles/NavMenu.css'

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" className={({ isActive }) => isActive ? "active" : ""}>
              Contato
            </NavLink>
          </li>
          <li>
            <NavLink to="/contador" className={({ isActive }) => isActive ? "active" : ""}>
              Contador
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavMenu