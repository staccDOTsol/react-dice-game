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

const INITIAL_BALANCE = 100;

function BalanceView() {
  return (
    <FormGroup row>
      <Label sm="3" md="2">Balance</Label>
      <Col>
        <InputGroup>
          <Input disabled value={INITIAL_BALANCE} />
          <InputGroupAddon addonType="append">
            <Button disabled>Free Credits</Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </FormGroup>
  );
}

export default BalanceView;
