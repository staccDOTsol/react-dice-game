import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  Input,
} from 'reactstrap';

import { InputControlViewPropType } from '../propTypes';


function handleKeyPress(event) {
  
   if (!/^\d+$/.test(event.key)) {
    event.preventDefault();
  }
}

function InputControlView({ label, onChange, id, defaultValue }) {
  let jjj = defaultValue;
  if (!jjj){
  if (label.indexOf("Amount") != -1){
    jjj = 0.01;
  }
  else if (label.indexOf("of Bets") != -1){
    jjj = 138;
  }
  else if (label.indexOf("Number") != -1){
    jjj = 50;
  }
}
  return (
    <FormGroup row>
      <Label sm="3" md="2">{label}</Label>
      <Col>
        <Input
          id={id}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          defaultValue={jjj}
        />
      </Col>
    </FormGroup>
  );
}

InputControlView.propTypes = InputControlViewPropType;

InputControlView.defaultProps = {
  onChange: () => {},
};

export default InputControlView;
