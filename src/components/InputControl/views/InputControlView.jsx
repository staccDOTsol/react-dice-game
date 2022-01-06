import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  Input,
} from 'reactstrap';

import { InputControlViewPropType } from '../propTypes';


function handleKeyPress(event) {
  if (event.key.toString().indexOf(".") != -1){

  }
  else if (!/^\d+$/.test(event.key)) {
    event.preventDefault();
  }
}

function InputControlView({ label, onChange }) {
  return (
    <FormGroup row>
      <Label sm="3" md="2">{label}</Label>
      <Col>
        <Input
          onChange={onChange}
          onKeyPress={handleKeyPress}
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
