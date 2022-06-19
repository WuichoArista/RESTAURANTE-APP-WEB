import React from 'react'
import { Link } from 'react-router-dom'
import './MenuInfo.css'

const MenuInfo = () => {
  return (
    <div className='menu-info-container'>
        <div className="Menu-info-titulo">
           <h2>Revisa nuestro menu</h2>
        </div>
        <div className="Menu-info-botones">
            <Link className='boton-menu' to={'Platillos'}>Platillos</Link>
            <Link className='boton-menu' to={'Bebidas'}>Bebidas</Link>
        </div>
    </div>
  )
}

export default MenuInfo