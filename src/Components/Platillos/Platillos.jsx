import React from 'react'
import './Platillos.css'

const Platillos = () => {
  return (
    <section className='seccion-platillos'>
        <div className="platillos-titulo">
            <h3>Nuestros platillos</h3>
        </div>
        <div className="platillos-menu">
            <div className="platillos-menu-titulo">
                 <h3>Barbacoa</h3>
                 <hr />
            </div>
            <div className="platillos-platillo">
                <h4>*Barbacoa 1Kg</h4>
                <p>$510.00 MX</p>
            </div>
            <div className="platillos-platillo">
                <h4>*Consomé de Barbacoa plato</h4>
                <p>$39.00 MX</p>
            </div>
            <div className="platillos-platillo">
                <h4>*Consomé de Barbacoa 1L</h4>
                <p>$80.00 MX</p>
            </div>
            <div className="platillos-platillo">
                <h4>*Taco de Barbacoa</h4>
                <p>$39.00 MX</p>
            </div>
            <div className="platillos-platillo">
                <h4>*Taco de pancita de Barbacoa</h4>
                <p>$39.00 MX</p>
            </div>
            <div className="platillos-platillo">
                <h4>*Taco dorado de Barbacoa (3piezas)</h4>
                <p>$85.00 MX</p>
            </div>
            <div className="platillos-menu-titulo">
                 <h3>Carnitas</h3>
                 <hr />
            </div>
            <div className="platillos-platillo">
                <h4>*1 kilo de carnitas</h4>
                <p>$300.00 MX</p>
            </div>
            <div className="platillos-platillo">
                <h4>*Taco de carnitas</h4>
                <p>$25.00 MX</p>
            </div>
            <div className="platillos-platillo">
                <h4>*Quesadilla dorada de carnitas</h4>
                <p>$28.00 MX</p>
            </div>
            <div className="platillos-platillo">
                <h4>*Gorditas de carnitas</h4>
                <p>$300.00 MX</p>
            </div>
        </div>
    </section>
  )
}

export default Platillos