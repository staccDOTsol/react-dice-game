import React from 'react';
import { FormGroup } from 'reactstrap';

import BetButtonControl from '../../BetButtonControl';


function ButtonsPanelView() {
  return (
    <FormGroup row>
      <BetButtonControl betType="high" />
      <BetButtonControl betType="low" />
    </FormGroup>
  );
}

export default ButtonsPanelView;
