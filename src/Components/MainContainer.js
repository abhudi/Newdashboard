import React from 'react'
import './MainContainer.css'
import image from '../img/image'
import CardMain from './CardMain'
import MainRightBottom from './MainRightBottom'
import MainRightTop from './MainRightTop'
function MainContainer() {
  return (
    <div className='mainContainer'>
      <div className="left">
        <div className="banner" style={{
          background: `url(${image.banner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Abhishek Deshmukh</p>
            <div className="bid">
              <a href="#" className='button1'>
                Bid Now
              </a>
              <p>Ending In <span>2d:15h:20m</span></p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className='button2'> Popular</a>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button1">All</a>
              <a href="#" className="button2">Illustration</a>
              <a href="#" className="button2">Art </a>
              <a href="#" className="button2">Games</a>
            </div>
          </div>

          <main>
            <CardMain imgSrc={image.card1} title={"Cubic Thunder"} hearts={"65"} />
            <CardMain imgSrc={image.card2} title={"Pokemon Ball"} hearts={"45"} />
            <CardMain imgSrc={image.card3} title={"Pyramid God"} hearts={"55"} />
            <CardMain imgSrc={image.card4} title={"Stunning Cube"} hearts={"23"} />
            <CardMain imgSrc={image.card5} title={"Star Crystal"} hearts={"67"} />
            <CardMain imgSrc={image.card6} title={"Crytal Bird"} hearts={"86"} />
          </main>
        </div>


      </div>
      <div className="right">
        <MainRightTop />
        <MainRightBottom />
      </div>
    </div>
  )
}

export default MainContainer
