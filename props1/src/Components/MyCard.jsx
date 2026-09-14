import React from 'react'
import './CSS/MyCard.css'

const MyCard = ({data}) => {
    console.log(data[0].image);
  return (
    <>
      <div className="cardOuter">
        <div className="card-image">
          <img src={data[0].image} alt="" />
        </div>
        <div className="card-price">
          price:{data[0].price}
        </div>
      </div>
    </>
  )
}

export default MyCard