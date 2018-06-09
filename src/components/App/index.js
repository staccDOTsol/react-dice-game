import React from 'react';
import { Container, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Balance from '../Balance';
import BetAmount from '../BetAmount';
import BetNumber from '../BetNumber';
import ButtonsPanel from '../ButtonsPanel';
import ProbablyFairHash from '../ProbablyFairHash';

function App() {
  return (
    <Container>
      <Balance />
      <BetAmount />
      <BetNumber />
      <ButtonsPanel number={40} />
      <ProbablyFairHash hash="probably fair hash" />
      <Alert color="success">64 WIN</Alert>
    </Container>
  );
}

export default App;
