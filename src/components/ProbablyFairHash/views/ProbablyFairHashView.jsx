import React from 'react';
import { FormGroup } from 'reactstrap';

import { ProbablyFairHashViewPropType } from '../propTypes';


function ProbablyFairHashView({ hash }) {
  return (
    <FormGroup>
      Provably Fair Hash: <b>{hash}</b>
    </FormGroup>
  );
}

ProbablyFairHashView.propTypes = ProbablyFairHashViewPropType;

export default ProbablyFairHashView;
