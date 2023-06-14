import React from "react";

function Card(props) {

  let badgeText = ""
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if (props.openSpots === 1) {
     badgeText = "ONE SPACE LEFT"
  }else if (props.openSpots <= 3 ) {
  badgeText = "LAST FEW SPACES"
}

let badgeElement = ""
if (badgeText) {
  badgeElement = <div className="sold-out">{badgeText}</div>;
}
  return (
    <div className="card">
      {badgeElement}
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
