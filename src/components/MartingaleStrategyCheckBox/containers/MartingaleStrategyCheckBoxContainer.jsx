import React, { Component } from 'react';

import CheckBoxControl from '../../CheckBoxControl';
import { MartingaleStrategyCheckBoxContainerPropType } from '../propTypes';


class MartingaleStrategyCheckBoxContainer extends Component {
  handleChange = ({ currentTarget: { checked } }) => {
    this.props.setMartingaleStrategy(checked);
  }

  render() {
    let disabled = false;
    if (!this.props.autoBet){
      disabled = true;
    }
    if (this.props.customStrategy.enabled){
      disabled = true;
    }
    return (
      <CheckBoxControl
        label="Martingale Strategy"
        onChange={this.handleChange}
        disabled={disabled}
      />
    );
  }
}

MartingaleStrategyCheckBoxContainer.propTypes = MartingaleStrategyCheckBoxContainerPropType;

export default MartingaleStrategyCheckBoxContainer;
