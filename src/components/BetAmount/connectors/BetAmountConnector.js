import { connect } from 'react-redux';

import { setBetAmount } from '../../../actions/diceGame';
import { BetAmountContainer } from '../containers';


const mapDispatchToProps = {
  setBetAmount,
};

export default connect(null, mapDispatchToProps)(BetAmountContainer);
