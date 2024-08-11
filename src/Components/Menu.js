import React, { useEffect } from 'react'
import image from '../img/image'
import './Menu.css'
import { FaDelicious, FaShoppingCart, FaWallet, FaChartLine, FaRegClock, FaCog, FaSignOutAlt } from "react-icons/fa";

const Menu = () => {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainmenu")
      .querySelectorAll("li");


    function changeActive() {
      mainMenuLi.forEach(n => n.classList.remove("active"));
      this.classList.add("active")
    }

    mainMenuLi.forEach(n => n.addEventListener('click', changeActive))
  }, []);



  return (
    <menu>
      <img src={image.logo} alt='' />

      <ul id='mainmenu'>
        <Icon icon={<FaDelicious />} />
        <Icon icon={<FaShoppingCart />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>

      <ul className='lastmenu'>
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  )
}


const Icon = ({ icon }) => (
  <li>
    <a href='#'>{icon}</a>
  </li>
)

export default Menu