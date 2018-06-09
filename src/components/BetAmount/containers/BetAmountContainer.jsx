import React, { Component } from 'react';

import InputControl from '../../InputControl';
import { BetAmountContainerPropType } from '../propTypes';


class BetAmountContainer extends Component {
  handleChange = ({ currentTarget: { value } }) => {
    this.props.setBetAmount(parseInt(value, 10));
  }

  render() {
    return (
      <InputControl
        label="Bet Amount"
        onChange={this.handleChange}
      />
    );
  }
}

BetAmountContainer.propTypes = BetAmountContainerPropType;

export default BetAmountContainer;
