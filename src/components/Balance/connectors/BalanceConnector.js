import { connect } from 'react-redux';

import { getFreeCredits } from '../../../actions/diceGame';
import { BalanceContainer } from '../containers';


const mapStateToProps = ({ balance }) => ({
  balance,
});

const mapDispatchToProps = {
  getFreeCredits,
};

export default connect(mapStateToProps, mapDispatchToProps)(BalanceContainer);
