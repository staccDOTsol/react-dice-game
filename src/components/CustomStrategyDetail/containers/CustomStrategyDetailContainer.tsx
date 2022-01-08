import React, { Component } from 'react';

import CheckBoxControl from '../../CheckBoxControl';
import { CustomStrategyDetailContainerPropType } from '../propTypes';
import { FormGroup,
  Col, } from 'reactstrap';
  import InputControl from '../../InputControl';
  let customStrategy;
class CustomStrategyDetailContainer extends Component {
  
  handleChange = ({ currentTarget: { checked, id, value } }) => {
    // @ts-ignore
  
   customStrategy = this.props.customStrategy;
   if (id.indexOf('enabled') != -1 ){
      
    customStrategy.enabled = checked;
  }
  if (id.indexOf('reset') != -1 ){
      
    customStrategy.win.reset = checked;
  }
  if (id.indexOf('rese2') != -1 ){
      
    customStrategy.lose.reset = checked;
  }
  if (id[0] == 'w'){
      let chars = id.substring(1)
    customStrategy.win[chars] = value;
  }
  if (id[0] == 'l'){
      let chars = id.substring(1)
    customStrategy.lose[chars] = value;
  }
  // @ts-ignore
    this.props.setCustomStrategy(customStrategy);
    // @ts-ignore
    console.log(customStrategy);
  }
  
  render() {
    // @ts-ignore
    customStrategy = this.props.customStrategy;
    let disabled = false;
    // @ts-ignore
    if (!this.props.autoBet){
      disabled = true;
    }
    // @ts-ignore
    if (this.props.martingaleStrategy){
      disabled = true;
    }
    // @ts-ignore
    let hidden = !this.props.customStrategyBool
    console.log(customStrategy.win.reset)
    return (
     
      <div>
      <Col label="After Winning" hidden={hidden}>
        
 <h3>     After Winning </h3>
      <CheckBoxControl
        id="reset"
        label="Reset Bet? Ignores all below 'won' settings"
        onChange={this.handleChange}

      />
        <InputControl
        id="wincn"
        hidden={customStrategy.win.reset}
          label="Increase Bet By #"
          onChange={this.handleChange}
          defaultValue={customStrategy.win.incn}
        />
        <InputControl
        id="wincp"
        hidden={customStrategy.win.reset}
          label="Increase Bet by % (0-100)"
          onChange={this.handleChange}
          defaultValue={customStrategy.win.incp}
        />
        <InputControl
        id="wdecn"
        hidden={customStrategy.win.reset}
          label="Decrease Bet By #"
          onChange={this.handleChange}
          defaultValue={customStrategy.win.decn}
        />
        <InputControl
        hidden={customStrategy.win.reset}
        id="wdecp"
          label="Decrease Bet by % (0-100)"
          onChange={this.handleChange}
          defaultValue={customStrategy.win.decp}
        />
        </Col>
      <Col label="After a Loss"  hidden={hidden}>
        
<h3>      After a Loss </h3>
<CheckBoxControl
        id="rese2"
        label="Reset Bet? Ignores all below 'lost' settings"
        onChange={this.handleChange}

      />
      <InputControl
        hidden={customStrategy.lose.reset}
        id="dincn"
        label="Increase Bet By #"
        onChange={this.handleChange}
        defaultValue={customStrategy.lose.incn}
      />
      <InputControl
        hidden={customStrategy.lose.reset}
        id="dincp"
        label="Increase Bet by % (0-100)"
        onChange={this.handleChange}
        defaultValue={customStrategy.lose.incp}
      />
      <InputControl
        hidden={customStrategy.lose.reset}
        id="ddecn"
        label="Decrease Bet By #"
        onChange={this.handleChange}
        defaultValue={customStrategy.lose.decn}
      />
      <InputControl
        hidden={customStrategy.lose.reset}
      
        id="ddecp"
        label="Decrease Bet by % (0-100)"
        onChange={this.handleChange}
        defaultValue={customStrategy.lose.decp}
      />
      </Col></div>
    );
  }
}
// @ts-ignore
CustomStrategyDetailContainer.propTypes = CustomStrategyDetailContainerPropType;

export default CustomStrategyDetailContainer;
