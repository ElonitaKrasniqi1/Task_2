import React from "react";

export default function Card({ title, price, buttonText, description }) {
  return (
    <div className="card">
      <div className="card-title">
        <h2>{title}</h2>
      </div>
      <div className="card-header">
        <span>{price}</span>
      </div>
      <div className="card-body">
        <p className="text-c">{description}</p>
        <button className="buy-now-button">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
