import React, { Component } from 'react';

import InputControl from '../../InputControl';
import { NumberOfBetsContainerPropType } from '../propTypes';


class NumberOfBetsContainer extends Component {
  handleChange = ({ currentTarget: { value } }) => {
    this.props.setNumberOfBets(parseInt(value, 10));
  }

  render() {
    return (
      <InputControl
        label="Number of Bets"
        onChange={this.handleChange}
      />
    );
  }
}

NumberOfBetsContainer.propTypes = NumberOfBetsContainerPropType;

export default NumberOfBetsContainer;
