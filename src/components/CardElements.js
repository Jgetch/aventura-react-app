import React from "react";
import Card from "./Card";
import mockData from "../mockData";

function CardElements() {
  const cards = mockData.map((item) => {
    return (
      <Card
        img={item.coverImg}
        star="./assets/Star.png"
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return <>{cards}</>;
}

export default CardElements;
