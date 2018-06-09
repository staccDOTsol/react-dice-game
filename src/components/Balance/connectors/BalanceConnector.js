import { connect } from 'react-redux';

import { getFreeCredits } from '../../../actions/balance';
import { BalanceContainer } from '../containers';


const mapStateToProps = ({ balance: { value } }) => ({
  value,
});

const mapDispatchToProps = {
  getFreeCredits,
};

export default connect(mapStateToProps, mapDispatchToProps)(BalanceContainer);
