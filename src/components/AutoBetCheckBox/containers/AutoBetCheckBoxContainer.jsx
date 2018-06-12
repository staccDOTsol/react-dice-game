import React, { Component } from 'react';

import CheckBoxControl from '../../CheckBoxControl';
import { AutoBetCheckBoxContainerPropType } from '../propTypes';


class AutoBetCheckBoxContainer extends Component {
  handleChange = ({ currentTarget: { checked } }) => {
    this.props.setAutoBet(checked);
  }

  render() {
    return (
      <CheckBoxControl
        label="Auto Bet"
        onChange={this.handleChange}
        disabled={!this.props.numberOfBets}
      />
    );
  }
}

AutoBetCheckBoxContainer.propTypes = AutoBetCheckBoxContainerPropType;

export default AutoBetCheckBoxContainer;
