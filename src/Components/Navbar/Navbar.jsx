import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/img/logoAgave.png'

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="navbar-container">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="menu">
            <NavLink className={ ({isActive}) => isActive ? 'activo' : 'inactivo' } to={'/'}>Inicio</NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'activo' : 'inactivo' } to={'/Menu'}>Menu</NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'activo' : 'inactivo' } to={'/Reservaciones'}>Reservación</NavLink>
            <NavLink className={ ({isActive}) => isActive ? 'activo' : 'inactivo' } to={'/Eventos'}>Eventos</NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar