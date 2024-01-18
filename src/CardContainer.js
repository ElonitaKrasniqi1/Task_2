import React from "react";
import Card from "./Card";
import "./App.css"; // Importoni dosjen stili për CardContainer

export default function CardContainer() {
  const cardsData = [
    {
      title: ".NET",
      price: "$5.99/yr",
      buttonText: "Buy Now",
      description: "Your card description here 1",
    },
    {
      title: "React",
      price: "$6.99/yr",
      buttonText: "Buy Now",
      description: "Your card description here 2",
    },
    {
      title: ".NET",
      price: "$5.99/yr",
      buttonText: "Buy Now",
      description: "Your card description here 1",
    },
    {
      title: "React",
      price: "$6.99/yr",
      buttonText: "Buy Now",
      description: "Your card description here 2",
    },
  ];

  const cardsData1 = [
    {
      title: ".NET",
      price: "$5.99/yr",
      buttonText: "Buy Now",
      description: "Your card description here 1",
    },
    {
      title: "React",
      price: "$6.99/yr",
      buttonText: "Buy Now",
      description: "Your card description here 2",
    },
    {
      title: ".NET",
      price: "$5.99/yr",
      buttonText: "Buy Now",
      description: "Your card description here 1",
    },
    {
      title: "React",
      price: "$6.99/yr",
      buttonText: "Buy Now",
      description: "Your card description here 2",
    },
  ];

  return (
    <><div className="card-container">
          {cardsData.map((card, index) => (
              <Card key={index} {...card} />
          ))}
      </div><div className="cardcontainer1">
              {cardsData1.map((card, index) => (
                  <Card key={index} {...card} />
              ))}
          </div></>
  );
}
