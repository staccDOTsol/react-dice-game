import React from 'react';

import { BetInfoViewPropType } from '../propTypes';


function BetInfoView({
  betNumber, sign, chance, payout,
}) {
  return (
    <div>
      <div>number {sign} <b>{betNumber}</b></div>
      <div>chance: <b>{chance}%</b></div>
      <div>payout: <b>{payout}x</b></div>
    </div>
  );
}

BetInfoView.propTypes = BetInfoViewPropType;

export default BetInfoView;
