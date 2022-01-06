import React from 'react';
import { FormGroup } from 'reactstrap';
import md5 from 'blueimp-md5';

import { ProbablyFairHashViewPropType } from '../propTypes';


function ProbablyFairHashView({ resultNumber }) {
  return (
    <FormGroup>
    
    </FormGroup>
  );
}
//  Provably Fair Hash: <b>{md5(resultNumber)}</b>
ProbablyFairHashView.propTypes = ProbablyFairHashViewPropType;

export default ProbablyFairHashView;
