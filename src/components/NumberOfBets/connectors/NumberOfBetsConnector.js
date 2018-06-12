import { connect } from 'react-redux';

import { setNumberOfBets } from '../../../actions/diceGame';
import { NumberOfBetsContainer } from '../containers';


const mapDispatchToProps = {
  setNumberOfBets,
};

export default connect(null, mapDispatchToProps)(NumberOfBetsContainer);
