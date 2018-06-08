import React from 'react';
import { Col, Button } from 'reactstrap';

import BetInfo from '../../BetInfo';
import { BetButtonControlViewPropType } from '../propTypes';


function BetButtonControlView({ number, isBetLow }) {
  const buttonValue = isBetLow ? 'Bet Lo' : 'Bet Hi';

  return (
    <Col>
      <Button color="primary" block>{buttonValue}</Button>
      <BetInfo number={number} isBetLow={isBetLow} />
    </Col>
  );
}

BetButtonControlView.propTypes = BetButtonControlViewPropType;

export default BetButtonControlView;
