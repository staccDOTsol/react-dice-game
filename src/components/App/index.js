import React from 'react';
import { Container, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Balance from '../Balance';
import InputControl from '../InputControl';
import ButtonsPanel from '../ButtonsPanel';
import ProbablyFairHash from '../ProbablyFairHash';

function App() {
  return (
    <Container>
      <Balance />
      <InputControl label="Bet Amount" />
      <InputControl label="Number" min={1} max={100} />
      <ButtonsPanel number={40} />
      <ProbablyFairHash hash="probably fair hash" />
      <Alert color="success">64 WIN</Alert>
    </Container>
  );
}

export default App;
