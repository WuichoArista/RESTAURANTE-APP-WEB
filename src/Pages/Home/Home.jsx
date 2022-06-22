import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Historia from '../../Components/Historia/Historia'
import LogoInicio from '../../assets/img/banner.jpeg'
import Horarios from '../../Components/Horarios/Horarios'
import Ubicacion from '../../Components/Ubicacion/Ubicacion'

const Home = () => {
  return (
    <main>
       <Banner logo={LogoInicio} pagina={'home'} mensaje={'Bienvenido'}/>
       <Historia />
       <Ubicacion />
       <Horarios />
    </main>
  )
}

export default Home