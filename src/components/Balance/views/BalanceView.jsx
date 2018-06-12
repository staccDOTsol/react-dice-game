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


function BalanceView({ balance, onButtonClick }) {
  return (
    <FormGroup row>
      <Label sm="3" md="2">Balance</Label>
      <Col>
        <InputGroup>
          <Input disabled value={balance} />
          <InputGroupAddon addonType="append">
            <Button
              onClick={onButtonClick}
              disabled={balance > 0}
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
