import React from 'react';
import { FormGroup } from 'reactstrap';

import BetButtonControl from '../../BetButtonControl';
import ButtonsPanelViewPropType from '../propTypes';


function ButtonsPanelView({ number }) {
  return (
    <FormGroup row>
      <BetButtonControl number={number} />
      <BetButtonControl number={number} isBetLow />
    </FormGroup>
  );
}

ButtonsPanelView.propTypes = ButtonsPanelViewPropType;

export default ButtonsPanelView;
