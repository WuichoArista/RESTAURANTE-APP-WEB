import React , { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/img/logoAgave.png'

const Navbar = () => {

  const [ flag , setFlag ] = useState( false )

  const menuResponsive = () => {
     if( flag === false ) {
      setFlag( true )
     }else{
      setFlag( false )
     }
  }

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
            <NavLink className={ ({isActive}) => isActive ? 'activo' : 'inactivo' } to={'/Gerencia'}>Gerencia</NavLink>
          </div>
          <div className="menu_boton">
            <button onClick={ () => menuResponsive() } className='menu_boton_boton'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </div>
        </div>
        {
          flag === false ? '' : 
          <div className="menu_responsive ">
            <div className="menu_responsive_option">
              <NavLink onClick={ () => menuResponsive() } className={ ({isActive}) => isActive ? 'activo_responsive' : 'inactivo_responsive' } to={'/'}>Inicio</NavLink>
              <NavLink onClick={ () => menuResponsive() } className={ ({isActive}) => isActive ? 'activo_responsive' : 'inactivo_responsive' } to={'/Menu'}>Menu</NavLink>
              <NavLink onClick={ () => menuResponsive() } className={ ({isActive}) => isActive ? 'activo_responsive' : 'inactivo_responsive' } to={'/Reservaciones'}>Reservación</NavLink>
              <NavLink onClick={ () => menuResponsive() } className={ ({isActive}) => isActive ? 'activo_responsive' : 'inactivo_responsive' } to={'/Eventos'}>Eventos</NavLink>
              <NavLink onClick={ () => menuResponsive() } className={ ({isActive}) => isActive ? 'activo_responsive' : 'inactivo_responsive' } to={'/Gerencia'}>Gerencia</NavLink>
            </div>
         </div>
        }
      </nav>
    </header>
  )
}

export default Navbar