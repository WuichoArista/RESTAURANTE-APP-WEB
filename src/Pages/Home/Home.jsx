import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Historia from '../../Components/Historia/Historia'
import LogoInicio from '../../assets/img/banner.jpeg'

const Home = () => {
  return (
    <main>
       <Banner logo={LogoInicio} pagina={'home'} mensaje={'Bienvenido'}/>
       <Historia />
    </main>
  )
}

export default Home