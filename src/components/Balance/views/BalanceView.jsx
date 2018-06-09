import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from 'reactstrap';

import { BalanceViewPropType } from '../propTypes';


function BalanceView({ value, onButtonClick }) {
  return (
    <FormGroup row>
      <Label sm="3" md="2">Balance</Label>
      <Col>
        <InputGroup>
          <Input disabled value={value} />
          <InputGroupAddon addonType="append">
            <Button
              onClick={onButtonClick}
              disabled={value > 0}
            >
              Free Credits
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </FormGroup>
  );
}

BalanceView.propTypes = BalanceViewPropType;

export default BalanceView;
