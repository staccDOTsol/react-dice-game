import { connect } from 'react-redux';

import { BetButtonControlContainer } from '../containers';
import { makeBets } from '../../../actions/diceGame';


const mapStateToProps = ({
  balance,
  betAmount,
  betNumber,
  autoBet,
  numberOfBets,
  duringBettingProcess,
}) => ({
  balance,
  betAmount,
  betNumber,
  autoBet,
  numberOfBets,
  duringBettingProcess,
});

const mapDispatchToProps = {
  makeBets,
};

export default connect(mapStateToProps, mapDispatchToProps)(BetButtonControlContainer);
