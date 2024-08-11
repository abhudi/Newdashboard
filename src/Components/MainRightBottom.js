import React from 'react'
import TopSeller from "./TopSeller";
function MainRightBottom() {
  return (
    <div className="bottomRightcard">
      <div className="bottomName">
        <h2>Top Seller</h2>
        <a href="#">View More</a>
      </div>

      {TopSeller &&
        TopSeller.map((seller) => (
          <div className="topSeller" key={seller.id}>
            <div className="topSellerImg">
              <img src={seller?.imgSrc} alt="" />
            </div>
            <div className="topSellerName">
              <p>
                {seller?.seller_name} <span>{seller?.username}</span>
              </p>
            </div>
            <a href="#" className="button1 btn">
              Follow
            </a>
          </div>
        ))}
    </div>
  )
}

export default MainRightBottom
