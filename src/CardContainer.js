import React from "react";
import Card from "./Card";
import "./App.css";

export default function CardContainer({ domainSet }) {
  const cardsData = [
    {
      title: ".COM",
      price: "$5.99/yr",
      buttonText: "Buy Now",
      description: "Instead of $10.99/yr",
    },
    {
      title: ".AI",
      price: "$55.99/yr",
      buttonText: "Buy Now",
      description: "Instead of $10.99/yr",
    },
    {
        title: ".CO.UK",
        price: "$3.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $10.99/yr",
      },
      {
        title: ".ORG",
        price: "$15.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $10.99/yr",
      },
      {
          title: ".NET",
          price: "$7.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $10.99/yr",
        },
        {
          title: ".HEALTH",
          price: "$7.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $10.99/yr",
        },
        {
            title: ".NET",
            price: "$7.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $10.99/yr",
          },
          {
            title: ".HEALTH",
            price: "$7.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $10.99/yr",
          },
  ];

  const cardsData1 = [

  ];

  const cardsData2 = [

  ];


  let selectedCardsData;
  if (domainSet === 1) {
    selectedCardsData = cardsData;
  } else if (domainSet === 2) {
    selectedCardsData = cardsData1;
  } else if (domainSet === 3) {
    selectedCardsData = cardsData2;
  }

  return (
    <div className="card-container">
      {selectedCardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
