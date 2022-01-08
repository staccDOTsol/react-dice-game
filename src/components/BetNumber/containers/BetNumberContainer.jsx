import React, { Component } from 'react';

import InputControl from '../../InputControl';
import { BetNumberContainerPropType } from '../propTypes';


class BetNumberContainer extends Component {
  handleChange = ({ currentTarget: { value } }) => {
    this.props.setBetNumber(parseInt(value, 10));
  }

  render() {
    return (
      <InputControl
        label="Lucky Number"
        onChange={this.handleChange}
      />
    );
  }
}

BetNumberContainer.propTypes = BetNumberContainerPropType;

export default BetNumberContainer;
