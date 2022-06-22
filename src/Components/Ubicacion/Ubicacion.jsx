import React from 'react'
import './Ubicacion.css'
import ubicacionImg from '../../assets/img/Ubicacion.png'


const Ubicacion = () => {
  return (
    <section>
        <div className="ubicacion_container">
            <div className="ubicacion_imagen">
                <img src={ubicacionImg} alt="imagen ubicacion" />
            </div>
            <div className="ubicacion_info">
                <div className="ubicacion_titulo">
                    <h2>Ubicacion</h2>
                </div>
                <div className="ubicacion_ubicacion">
                    <p>Carretera San Vicente - Coatepec Parada Poste Azul C.P.56370 Chicoloapan, Estado de México, México</p>
                    <p>Telefono: 55 7846 6001</p>
                </div>
                <div className="ubicacion_botones">
                    <a target={'_blank'} href="https://api.whatsapp.com/send?phone=5215578466001&text=Buenas%20d%C3%ADa%20Agave%20Tobal%C3%A1.">Whatsapp</a>
                    <a target={'_blank'} href="https://www.google.com/maps/place/Agave+Tobala/@19.4003295,-98.8833074,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1e1d756f9f707:0x720dee481021afeb!8m2!3d19.4004529!4d-98.8813274">ir a Agave</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ubicacion