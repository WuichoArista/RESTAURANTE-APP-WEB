import React from 'react'
import logo from '../../assets/img/logoAgave.png'
import './Error404.css'

const Error404 = () => {
  return (
    <section>
      <div className="eror404_container">
        <h1 className='titulo_error404' >Error 404</h1>
        <img className='logo_error404' src={logo} alt="" />
      </div>
    </section>
  )
}

export default Error404