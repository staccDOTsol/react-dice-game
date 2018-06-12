import { connect } from 'react-redux';

import { BetButtonControlContainer } from '../containers';
import { makeBets } from '../../../actions/diceGame';


const mapStateToProps = ({
  balance,
  betAmount,
  betNumber,
  duringBettingProcess,
}) => ({
  balance,
  betAmount,
  betNumber,
  duringBettingProcess,
});

const mapDispatchToProps = {
  makeBets,
};

export default connect(mapStateToProps, mapDispatchToProps)(BetButtonControlContainer);
