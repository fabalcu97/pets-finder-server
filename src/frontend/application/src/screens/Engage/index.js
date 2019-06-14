import React from "react";
import { CardWrapper } from 'react-swipeable-cards';

import { EngageCard } from "../../components";
import "./styles.scss";

class FinalCard extends React.Component {
  render() {
    return (
      <div>You Finished Swiping!</div>
    );
  }
}

class EngageScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: [{
        image: '',
        name: 'Firulais',
        age: 12,
        sex: 'm',
      }],
    };
  }
  render() {
    return (
      <div>
        <CardWrapper addEndCard={() => (<FinalCard />)}>
          {this.state.pets.map((v, idx) => <EngageCard key={idx} pet={v}/>)}
        </CardWrapper>
      </div>
    );
  }
}

export default EngageScreen;
