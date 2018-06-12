import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Balance from '../../Balance';
import BetAmount from '../../BetAmount';
import BetNumber from '../../BetNumber';
import ButtonsPanel from '../../ButtonsPanel';
import ProbablyFairHash from '../../ProbablyFairHash';
import ResultArea from '../../ResultArea';
import NumberOfBets from '../../NumberOfBets';
import Table from '../../Table';

function AppView() {
  return (
    <Container>
      <Balance />
      <BetAmount />
      <BetNumber />
      <NumberOfBets />
      <ButtonsPanel />
      <ProbablyFairHash />
      <ResultArea />
      <Table />
    </Container>
  );
}

export default AppView;
