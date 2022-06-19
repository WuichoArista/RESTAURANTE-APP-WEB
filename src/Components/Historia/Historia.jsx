import React from 'react'
import './Historia.css'
import agave from '../../assets/img/agave.jpeg'

const Historia = () => {
  return (
    <section className='historia'>
        <div className="historia-container">
            <div className="historia-info">
                <h2>Historia</h2>
                <p>
                    Agave Tobalá nace en 2020 con la conviccion de crear y ofrecer la mejor barbacoa y comida mexicana para todos nuestros comenzales, creando un espacio agradable para toda la familia y haciendo de este un lugar tranquilo y placentero para todos nuestros clientes, brindando la mejor calidad y servicio.
                </p>
            </div>
            <div className="historia-imagen">
                <img src={agave} alt="imagen de agave" />
             </div>
        </div>
    </section>
  )
}

export default Historia