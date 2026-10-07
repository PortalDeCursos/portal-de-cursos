import { Link, NavLink } from 'react-router'
import logo from '../../assets/logo.png'
import DesignIcon from '../ui/DesignIcon'
import PrototypeAction from '../ui/PrototypeAction'
export default function Header() {
  return <header className="site-header"><div className="container header-inner"><Link to="/" className="portal-brand"><img src={logo} className="portal-logo" alt="" /><span>Portal de <span className="brand-highlight">Cursos</span></span></Link><nav aria-label="Navegação principal"><NavLink to="/" end>Início</NavLink><NavLink to="/cursos">Cursos</NavLink><NavLink to="/projetos">Projetos</NavLink></nav><div className="header-actions"><PrototypeAction className="submission-link">Submeter projeto</PrototypeAction><PrototypeAction title="Área restrita" className="restricted-link">Área restrita</PrototypeAction><PrototypeAction title="Área restrita" className="user-button"><span className="sr-only">Abrir área restrita</span><DesignIcon name="imgContainer8" /></PrototypeAction></div></div></header>
}
