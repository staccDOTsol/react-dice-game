import React from 'react';
import roundTo from 'round-to';

import { BetInfoViewPropType } from '../propTypes';


const MAX_BET = 100;

function BetInfoView({ number, isBetLow }) {
  const sign = isBetLow ? '<=' : '>=';
  const chance = isBetLow ? number : MAX_BET - number;
  const payout = roundTo(MAX_BET / chance, 2);

  return (
    <div>
      <div>number {sign} <b>{number}</b></div>
      <div>chance: <b>{chance}%</b></div>
      <div>payout: <b>{payout}x</b></div>
    </div>
  );
}

BetInfoView.propTypes = BetInfoViewPropType;

export default BetInfoView;
