import React, { Component } from 'react';

import { BalanceView } from '../views';
import { BalanceContainerPropType } from '../propTypes';


class BalanceContainer extends Component {
  handleButtonClick = () => {
    this.props.getFreeCredits();
  };

  render() {
    return (
      <BalanceView value={this.props.value} onButtonClick={this.handleButtonClick} />
    );
  }
}

BalanceContainer.propTypes = BalanceContainerPropType;

export default BalanceContainer;
