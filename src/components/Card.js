import React from "react";

function Card(props) {

  let badgeText = ""
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if (props.item.openSpots === 1) {
     badgeText = "ONE SPACE LEFT"
  }else if (props.item.openSpots <= 3 ) {
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
        src={`./assets/card-images/${props.item.coverImg}`}
        alt="test"
      />
      <div className="card--stats">
        <img className="card--star" src="./assets/Star.png" alt="test" />
        <span>{props.item.stats.rating}&nbsp;</span>
        <span>({props.item.stats.reviewCount}) -&nbsp;</span>
        <span>{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From £{props.item.price}</span> per person
      </p>
    </div>
  );
}

export default Card;
