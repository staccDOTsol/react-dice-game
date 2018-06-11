import React from 'react';
import { Alert } from 'reactstrap';

import { ResultAreaViewPropType } from '../propTypes';


function ResultAreaView({ win, resultNumber }) {
  if (!resultNumber) {
    return null;
  }

  return (
    <Alert color={win ? 'success' : 'danger'}>
      {resultNumber} {win ? 'WIN' : 'LOSE'}
    </Alert>
  );
}

ResultAreaView.propTypes = ResultAreaViewPropType;

export default ResultAreaView;
