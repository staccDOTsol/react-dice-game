import React, { Component } from 'react';

import InputControl from '../../InputControl';
import { BetAmountContainerPropType } from '../propTypes';


class BetAmountContainer extends Component {
  handleChange = ({ currentTarget: { value } }) => {
    try{
    this.props.setBetAmount(parseFloat(value));
    }
    catch(err){
      console.log(err);
    }
  }

  render() {
    return (
      <InputControl
        label="Bet Amount *max 0.05*"
        onChange={this.handleChange}
      />
    );
  }
}

BetAmountContainer.propTypes = BetAmountContainerPropType;

export default BetAmountContainer;
