import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this epic Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall inside deep the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel Throgh the Island of Fun"
              label="Island"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-5.jpg"
              text="Explore the hidden waterfall inside deep the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Travel Throgh the Island of Fun"
              label="Island"
              path="/services"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Deep see make you Happy !"
              label="Deep Sea"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Explore the hidden waterfall inside deep the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
