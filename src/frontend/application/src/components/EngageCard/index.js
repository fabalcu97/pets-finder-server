import React from "react";
import { Card } from 'react-swipeable-cards';

import "./styles.scss";

class EngageCard extends React.Component {

  render() {
    const { pet } = this.props;
    return (
      <Card
        superOnSwipe={() => console.log("Swipped")}
      >
        <div className="card-container">
          <img className="pet-image" src={pet.image} alt={pet.name}></img>
          <h3>{pet.name}</h3>
          <span>{pet.age}</span>
          <br></br>
          <span>{pet.sex === 'm' ? "Male" : "Female"}</span>
        </div>
      </Card>
    );
  }
}

export default EngageCard;
