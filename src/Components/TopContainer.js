import React, { useEffect } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import image from '../img/image'


function TopContainer() {

  useEffect(() => {
    const menuTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");

    menuTarget.addEventListener('mouseenter', () => {
      menuTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)"
    })
    menuContainer.addEventListener('mouseleave', () => {
      menuTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)"
    })
  })
  return (
    <div className='topcontainer'>
      <div className='inputBox'>
        <input type='text' placeholder='Search Item, Collections' />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <div className='profileContainer'>
        <i className="profileIcon">
          <FaBell />
        </i>

        <div className="profileImage">
          <img src={image.pimg} alt='' />
        </div>
        <p className='profileName'>Abhishek Deshmukh</p>
        <i className='menuChevron' id='menuChevron'>
          <FaChevronDown />
        </i>
        <div className="menuContainer" id='menuContainer'>
          <ul>
            <li>Software Develope</li>
            <li>Ecoomerce Website</li>
            <li>Agency Dashboard</li>
            <li>ERP Dashboard</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default TopContainer
