import React from 'react';
import { FormGroup } from 'reactstrap';
import md5 from 'md5';

import { ProbablyFairHashViewPropType } from '../propTypes';


function ProbablyFairHashView({ nexBetNumber }) {
  return (
    <FormGroup>
      Provably Fair Hash: <b>{md5(nexBetNumber)}</b>
    </FormGroup>
  );
}

ProbablyFairHashView.propTypes = ProbablyFairHashViewPropType;

export default ProbablyFairHashView;
