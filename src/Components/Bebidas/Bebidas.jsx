import React from 'react'
import './Bebidas.css'

const Bebidas = () => {
  return (
    <section className='seccion-bebidas'>
        <div className="bebidas-titulo">
            <h3>Nuestras bebidas</h3>
        </div>
        <div className="bebidas-menu">
            <div className="bebidas-menu-titulo">
                 <h3>Aguas y Refrescos</h3>
                 <hr />
            </div>
            <div className="bebidas-bebida">
                <h4>*Jarra de 1 Litro de Agua de Jamaica u Horchata</h4>
                <p>$55.00 MX</p>
            </div>
            <div className="bebidas-bebida">
                <h4>*Vaso de Agua de Jamaica u Horchat</h4>
                <p>$15.00 MX</p>
            </div>
            <div className="bebidas-bebida">
                <h4>*Boing De Lata ( Mango o Guayaba ) </h4>
                <p>$20.00 MX</p>
            </div>
            <div className="bebidas-bebida">
                <h4>*Mundet</h4>
                <p>$22.00 MX</p>
            </div>
            <div className="bebidas-bebida">
                <h4>*Fresca</h4>
                <p>$22.00 MX</p>
            </div>
            <div className="bebidas-bebida">
                <h4>*Coca Cola ( Regular o sin azúcar)</h4>
                <p>$22.00 MX</p>
            </div>
            <div className="bebidas-menu-titulo">
                 <h3>Cervezas</h3>
                 <hr />
            </div>
            <div className="bebidas-bebida">
                <h4>*Conora </h4>
                <p>$30.00 MX</p>
            </div>
            <div className="bebidas-bebida">
                <h4>*Victoria </h4>
                <p>$30.00 MX</p>
            </div>
            <div className="bebidas-bebida">
                <h4>*Indio </h4>
                <p>$30.00 MX</p>
            </div>
            <div className="bebidas-bebida">
                <h4>*Heineken </h4>
                <p>$35.00 MX</p>
            </div>
        </div>
    </section>
  )
}

export default Bebidas