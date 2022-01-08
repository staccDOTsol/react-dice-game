import { connect } from 'react-redux';

import { setCustomStrategy } from '../../../actions/diceGame';
import { CustomStrategyDetailContainer } from '../containers';


const mapStateToProps = ({ autoBet, martingaleStrategy, customStrategyBool, customStrategy  }) => ({
  autoBet,
  martingaleStrategy, customStrategyBool, customStrategy
});

const mapDispatchToProps = {
  setCustomStrategy,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomStrategyDetailContainer);
