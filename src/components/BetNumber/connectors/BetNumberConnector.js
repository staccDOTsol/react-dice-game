import { connect } from 'react-redux';

import { setBetNumber } from '../../../actions/diceGame';
import { BetNumberContainer } from '../containers';


const mapDispatchToProps = {
  setBetNumber,
};

export default connect(null, mapDispatchToProps)(BetNumberContainer);
