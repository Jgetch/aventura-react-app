import React from "react";
import Card from "./Card";
import mockData from "../mockData";

function CardRail() {
  const cards = mockData.map((mockDataItem) => {
    return (
      <Card
        key={mockDataItem.id}
        img={mockDataItem.coverImg}
        star="./assets/Star.png"
        rating={mockDataItem.stats.rating}
        reviewCount={mockDataItem.stats.reviewCount}
        location={mockDataItem.location}
        title={mockDataItem.title}
        price={mockDataItem.price}
      />
    );
  });

  return <section className="card--list">{cards}</section>;
}

export default CardRail;
