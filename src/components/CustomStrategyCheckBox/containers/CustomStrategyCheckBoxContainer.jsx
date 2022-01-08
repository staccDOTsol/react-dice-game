import React, { Component } from 'react';

import CheckBoxControl from '../../CheckBoxControl';
import { CustomStrategyCheckBoxContainerPropType } from '../propTypes';
import { FormGroup,
  Col, } from 'reactstrap';
  import InputControl from '../../InputControl';
class CustomStrategyCheckBoxContainer extends Component {
  
  handleChange = ({ currentTarget: { checked, id, value } }) => {
   
    this.props.setCustomStrategyBool(checked);
  }
  
  render() {
    
    let disabled = false;
    if (!this.props.autoBet){
      disabled = true;
    }
    if (this.props.martingaleStrategy){
      disabled = true;
    }
    return (
      <CheckBoxControl
        id="enabled"
        label="Custom Strategy"
        onChange={this.handleChange}
        disabled={disabled}
      />
     
    );
  }
}

CustomStrategyCheckBoxContainer.propTypes = CustomStrategyCheckBoxContainerPropType;

export default CustomStrategyCheckBoxContainer;
