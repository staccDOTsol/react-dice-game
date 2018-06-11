import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Balance from '../Balance';
import BetAmount from '../BetAmount';
import BetNumber from '../BetNumber';
import ButtonsPanel from '../ButtonsPanel';
import ProbablyFairHash from '../ProbablyFairHash';
import ResultArea from '../ResultArea';

function App() {
  return (
    <Container>
      <Balance />
      <BetAmount />
      <BetNumber />
      <ButtonsPanel />
      <ProbablyFairHash />
      <ResultArea />
    </Container>
  );
}

export default App;
