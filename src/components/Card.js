import React from "react";

function Card(props) {
  return (
    <div className="card">
     {props.openSpots === 0 && <div className="sold-out">
        SOLD OUT
      </div>}
      {props.openSpots === 1 && <div className="sold-out">
        LAST ONE
      </div>}
   
      <img
        className="card--image"
        src={`./assets/card-images/${props.img}`}
        alt="test"
      />
      <div className="card--stats">
        <img className="card--star" src={props.star} alt="test" />
        <span>{props.rating}&nbsp;</span>
        <span>({props.reviewCount}) -&nbsp;</span>
        <span>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From £{props.price}</span> per person
      </p>
    </div>
  );
}

export default Card;
