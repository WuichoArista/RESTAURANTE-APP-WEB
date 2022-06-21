import React from 'react'
import Banner from '../../Components/Banner/Banner'
import LogoMenu from '../../assets/img/bannerMenu.jpeg'
import MenuInfo from '../../Components/MenuInfo/MenuInfo'
import { Outlet } from 'react-router-dom'

const Menu = () => {
  return (
    <main>
      <Banner logo={LogoMenu} mensaje={'Menu'} />
      <MenuInfo />
      <Outlet />
    </main>
  )
}

export default Menu