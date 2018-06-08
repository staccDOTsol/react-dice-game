import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  Input,
} from 'reactstrap';

import { InputControlViewPropType } from '../propTypes';


function InputControlView({
  label, value, min, max,
}) {
  return (
    <FormGroup row>
      <Label sm="3" md="2">{label}</Label>
      <Col>
        <Input type="number" min={min} max={max} value={value} />
      </Col>
    </FormGroup>
  );
}

InputControlView.propTypes = InputControlViewPropType;

export default InputControlView;
