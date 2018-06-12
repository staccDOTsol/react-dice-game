import React from 'react';
import { FormGroup } from 'reactstrap';

import BetButtonControl from '../../BetButtonControl';
import AutoBetCheckBox from '../../AutoBetCheckBox';


function ButtonsPanelView() {
  return (
    <div>
      <FormGroup row>
        <BetButtonControl betType="high" />
        <BetButtonControl betType="low" />
      </FormGroup>
      <FormGroup>
        <AutoBetCheckBox />
      </FormGroup>
    </div>
  );
}

export default ButtonsPanelView;
