import { Link, NavLink } from "react-router-dom"
import "./NavbarAcessed.css";

import Logo from "../img/LOGO-2.png";

const NavbarAcessed = () => {
  return (
    <nav className="navbar-acessed">
      <img src={Logo} alt="Logo Sistematica" />
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/who-is-us`}>Quem Somos</Link>
        </li>
        <li>
          <Link to={`/our-teams`}>Nossas equipes</Link>
        </li>
        <li>
          <Link to={`/products`}>Produtos</Link>
        </li>
        <li>
          <Link to={`/contact`}>Fale com a gente</Link>
        </li>
        <li>
          <Link className="default-btn" to={`/login`}>Minha conta</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarAcessed