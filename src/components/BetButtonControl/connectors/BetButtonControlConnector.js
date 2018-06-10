import { connect } from 'react-redux';

import { BetButtonControlContainer } from '../containers';
import { makeBet } from '../../../actions/diceGame';


const mapStateToProps = ({
  balance: { value },
  diceGame: { betAmount, betNumber },
}) => ({
  balance: value,
  betAmount,
  betNumber,
});

const mapDispatchToProps = {
  makeBet,
};

export default connect(mapStateToProps, mapDispatchToProps)(BetButtonControlContainer);
