import React from 'react'
import { Link } from 'react-router-dom'
import './MenuInfo.css'

const MenuInfo = () => {
  return (
    <section>
      <div className='menu-info-container'>
        <div className="Menu-info-titulo">
           <h2>Revisa nuestro menu</h2>
        </div>
        <div className="Menu-info-botones">
            <Link className='boton-menu' to={'platillos'}>Platillos</Link>
            <Link className='boton-menu' to={'bebidas'}>Bebidas</Link>
        </div>
      </div>
    </section>
  )
}

export default MenuInfo