import React from 'react';
import { FormGroup } from 'reactstrap';

import BetButtonControl from '../../BetButtonControl';
import AutoBetCheckBox from '../../AutoBetCheckBox';
import MartingaleStrategyCheckBox from '../../MartingaleStrategyCheckBox';


function ButtonsPanelView() {
  return (
    <div>
      <FormGroup row>
        <BetButtonControl betType="high" />
        <BetButtonControl betType="low" />
      </FormGroup>
      <FormGroup>
        <AutoBetCheckBox />
        <MartingaleStrategyCheckBox />
      </FormGroup>
    </div>
  );
}

export default ButtonsPanelView;
