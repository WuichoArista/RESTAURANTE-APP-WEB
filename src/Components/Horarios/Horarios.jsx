import React from 'react'
import './Horarios.css'
import horariosImg from '../../assets/img/Horarios.png'
import { Link } from 'react-router-dom'

const Horarios = () => {
  return (
    <section>
      <div className="horarios_container">
        <div className="horarios_info">
            <div className="horarios_titulo">
              <h2>Nuestros horarios</h2>
            </div>
            <div className="horarios_horarios">
               <p>Viernes a Domingos de 08:00 A.M. a 06:00 P.M.</p>
            </div>
            <div className="horarios_boton">
              <Link to={'/Reservaciones'}>
                  <button>Reservar</button>
              </Link>
            </div>
        </div>
        <div className="horarios_imagen">
          <img src={horariosImg} alt="imagen agave" />
        </div>
      </div>
    </section>
  )
}

export default Horarios