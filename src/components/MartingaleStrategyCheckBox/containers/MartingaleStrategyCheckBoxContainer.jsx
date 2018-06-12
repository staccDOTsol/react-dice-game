import React, { Component } from 'react';

import CheckBoxControl from '../../CheckBoxControl';
import { MartingaleStrategyCheckBoxContainerPropType } from '../propTypes';


class MartingaleStrategyCheckBoxContainer extends Component {
  handleChange = ({ currentTarget: { checked } }) => {
    this.props.setMartingaleStrategy(checked);
  }

  render() {
    return (
      <CheckBoxControl
        label="Martingale Strategy"
        onChange={this.handleChange}
        disabled={!this.props.autoBet}
      />
    );
  }
}

MartingaleStrategyCheckBoxContainer.propTypes = MartingaleStrategyCheckBoxContainerPropType;

export default MartingaleStrategyCheckBoxContainer;
