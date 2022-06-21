import React from 'react'
import Banner from '../../Components/Banner/Banner'
import LogoReserva from '../../assets/img/bannerReservaciones.jpeg'
import ReservacionInfo from '../../Components/ReservacionInfo/ReservacionInfo'
import FormReservacion from '../../Components/FormReservacion/FormReservacion'

const Reservaciones = () => {
  return (
    <main>
      <Banner logo={LogoReserva} pagina={'reservaciones'} mensaje={'Reservacion'}/>
      <ReservacionInfo />
      <FormReservacion />
    </main>
  )
}

export default Reservaciones